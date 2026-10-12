import { Clock, Ellipsis, MapPin } from "lucide-react";
import { TeamCrest } from "@/components/dashboard/TeamCrest";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatCount } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { EventListItem as EventItem } from "@/data/mock";

const statusConfig: Record<EventItem["status"], { label: string; variant: "blue" | "green" | "violet" | "red" }> = {
  proximo: { label: "Próximo", variant: "blue" },
  encurso: { label: "En curso", variant: "violet" },
  finalizado: { label: "Finalizado", variant: "green" },
  cancelado: { label: "Cancelado", variant: "red" },
};

export function EventListItem({
  event,
  active,
  onSelect,
}: {
  event: EventItem;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  const cfg = statusConfig[event.status];
  const pct = Math.round((event.sold / event.capacity) * 100);

  return (
    <button
      onClick={() => onSelect(event.id)}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors",
        active ? "border-blue-300 bg-blue-50/60 ring-1 ring-blue-200" : "border-slate-100 hover:bg-slate-50",
      )}
    >
      <div className="flex w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-blue-50 py-2 text-blue-600">
        <span className="text-lg font-bold leading-none">{event.day}</span>
        <span className="mt-0.5 text-[10px] font-bold tracking-wide">{event.month}</span>
        <span className="text-[10px] font-semibold text-blue-400">{event.weekday}</span>
      </div>

      <div className="flex shrink-0 -space-x-1.5">
        <TeamCrest name={event.home.name} crest={event.home.crest} color={event.home.color} size={26} />
        <TeamCrest name={event.away.name} crest={event.away.crest} color={event.away.color} size={26} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-bold text-slate-900">
          {event.home.name} vs {event.away.name}
        </p>
        <p className="truncate text-[12px] text-slate-500">{event.competition}</p>
        <p className="mt-0.5 flex items-center gap-1 truncate text-[12px] text-slate-500">
          <MapPin className="h-3 w-3 shrink-0" /> {event.venue}
        </p>
        <p className="flex items-center gap-1 text-[12px] text-slate-500">
          <Clock className="h-3 w-3 shrink-0" /> {event.time}
        </p>
      </div>

      <div className="flex w-28 shrink-0 flex-col items-end gap-2">
        <div className="flex items-center gap-1">
          <Badge variant={cfg.variant}>{cfg.label}</Badge>
          <span className="text-slate-400">
            <Ellipsis className="h-4 w-4" />
          </span>
        </div>
        <div className="w-full">
          <p className="text-right text-[11px] font-semibold text-slate-600">
            {formatCount(event.sold)} / {formatCount(event.capacity)}
          </p>
          <div className="mt-1 flex items-center gap-1.5">
            <ProgressBar value={pct} color="bg-blue-600" className="h-1.5 flex-1" />
            <span className="text-[11px] font-semibold text-slate-700">{pct}%</span>
          </div>
        </div>
      </div>
    </button>
  );
}
