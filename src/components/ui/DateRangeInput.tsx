import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Check, ChevronDown } from "lucide-react";
import { Calendar, type DateRange } from "@/components/ui/Calendar";
import { cn } from "@/lib/utils";
import { formatShortDate } from "@/lib/date";
import { useToast } from "@/components/ui/Toast";

type DateRangeInputProps = {
  value: DateRange;
  onChange: (range: DateRange) => void;
  className?: string;
};

export function DateRangeInput({ value, onChange, className }: DateRangeInputProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<DateRange>(value);
  const ref = useRef<HTMLDivElement>(null);
  const { success } = useToast();

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open) setDraft(value);
  }, [open, value]);

  const label =
    value.start && value.end
      ? `${formatShortDate(value.start)} - ${formatShortDate(value.end)}`
      : value.start
        ? formatShortDate(value.start)
        : "Seleccionar fechas";

  const apply = () => {
    if (draft.start && draft.end) {
      onChange(draft);
      success("Período actualizado", `${formatShortDate(draft.start)} - ${formatShortDate(draft.end)}`);
      setOpen(false);
    }
  };

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
      >
        <CalendarDays className="h-4 w-4 text-slate-500" />
        <span className="whitespace-nowrap">{label}</span>
        <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 rounded-xl bg-white p-3 shadow-lg ring-1 ring-slate-200"
          >
            <Calendar value={draft} onChange={setDraft} className="shadow-none ring-0" />
            <div className="mt-2 flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
              >
                Cancelar
              </button>
              <button
                onClick={apply}
                disabled={!draft.start || !draft.end}
                className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
              >
                <Check className="h-4 w-4" /> Aplicar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
