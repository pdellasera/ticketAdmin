import { CalendarDays, MapPin, ReceiptText, RotateCcw } from "lucide-react";
import { recentActivity } from "@/data/mock";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

const iconMap = {
  receipt: ReceiptText,
  check: MapPin,
  refresh: RotateCcw,
  calendar: CalendarDays,
};

const variantStyles = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  red: "bg-red-50 text-red-600",
  violet: "bg-violet-50 text-violet-600",
};

export function RecentActivity() {
  const { info } = useToast();
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[17px] font-bold text-slate-900">Actividad reciente</h3>
        <button
          onClick={() => info("Actividad", "Módulo en construcción")}
          className="text-[13px] font-semibold text-blue-600 hover:text-blue-700"
        >
          Ver todas
        </button>
      </div>
      <div className="mt-3 flex-1 space-y-2">
        {recentActivity.map((a) => {
          const Icon = iconMap[a.icon];
          return (
            <div
              key={a.id}
              className="flex items-start gap-3 rounded-xl border border-slate-100 px-3 py-2.5 transition-colors hover:bg-slate-50"
            >
              <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", variantStyles[a.variant])}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-slate-800">{a.title}</p>
                <p className="truncate text-[12px] text-slate-500">{a.description}</p>
              </div>
              <span className="shrink-0 text-[12px] text-slate-400">{a.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
