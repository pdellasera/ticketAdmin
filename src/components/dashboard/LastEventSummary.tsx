import { BadgeCheck } from "lucide-react";
import { TeamCrest } from "./TeamCrest";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { lastEvent } from "@/data/mock";
import { formatCount, formatMoneyCO } from "@/lib/format";
import { useToast } from "@/components/ui/Toast";
import stadiumThumb from "@/assets/background_navbar.png";

export function LastEventSummary() {
  const { info } = useToast();
  const soldPct = Math.round((lastEvent.ticketsSold / lastEvent.capacity) * 100);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[17px] font-bold text-slate-900">Último evento finalizado</h3>
        <button
          onClick={() => info("Reporte completo", "Módulo en construcción")}
          className="text-[13px] font-semibold text-blue-600 hover:text-blue-700"
        >
          Ver reporte completo →
        </button>
      </div>
      <div className="mt-4 flex flex-1 gap-5">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <span className="text-xl font-bold leading-none">{lastEvent.day}</span>
              <span className="mt-1 text-[10px] font-semibold tracking-wide">{lastEvent.month}</span>
            </div>
            <div className="flex shrink-0 gap-1">
              <TeamCrest name={lastEvent.home.name} crest={lastEvent.home.crest} color={lastEvent.home.color} size={28} />
              <TeamCrest name={lastEvent.away.name} crest={lastEvent.away.crest} color={lastEvent.away.color} size={28} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-bold leading-snug text-slate-900">
                {lastEvent.home.name} vs {lastEvent.away.name}
              </p>
              <p className="truncate text-[12px] text-slate-500">{lastEvent.venue}</p>
            </div>
          </div>

          <div className="mt-4 space-y-3.5">
            <div>
              <p className="text-[12px] text-slate-500">Entradas vendidas</p>
              <div className="mt-1 flex items-end justify-between">
                <p className="text-[15px] font-bold text-slate-900">
                  {formatCount(lastEvent.ticketsSold)} / {formatCount(lastEvent.capacity)}
                </p>
                <p className="text-[12px] font-medium text-slate-400">{soldPct}%</p>
              </div>
              <ProgressBar value={soldPct} color="bg-blue-600" className="mt-1.5 h-2" />
            </div>
            <div>
              <p className="text-[12px] text-slate-500">Ingresos</p>
              <p className="mt-1 text-[15px] font-bold text-slate-900">
                {formatMoneyCO(lastEvent.revenue)} <span className="text-[12px] font-normal text-slate-400">COP</span>
              </p>
            </div>
            <div>
              <p className="text-[12px] text-slate-500">Asistentes validados</p>
              <div className="mt-1 flex items-end justify-between">
                <p className="text-[15px] font-bold text-slate-900">{formatCount(lastEvent.attendees)}</p>
                <p className="text-[12px] font-medium text-slate-400">{lastEvent.attendancePct}%</p>
              </div>
              <ProgressBar value={lastEvent.attendancePct} color="bg-emerald-500" className="mt-1.5 h-2" />
            </div>
          </div>
        </div>
        <div className="flex w-40 shrink-0 flex-col">
          <span className="inline-flex items-center gap-1 self-end rounded-full bg-emerald-50 px-2.5 py-1 text-[12px] font-semibold text-emerald-600">
            <BadgeCheck className="h-3.5 w-3.5" /> {lastEvent.status}
          </span>
          <div className="relative mt-3 flex-1 overflow-hidden rounded-xl">
            <img src={stadiumThumb} alt="Estadio" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
