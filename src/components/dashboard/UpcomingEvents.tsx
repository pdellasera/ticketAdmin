import { ChevronRight, Ellipsis, MapPin } from "lucide-react";
import { TeamCrest } from "./TeamCrest";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { upcomingEvents } from "@/data/mock";
import { useToast } from "@/components/ui/Toast";

export function UpcomingEvents() {
  const { info } = useToast();
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[17px] font-bold text-slate-900">Próximos eventos</h3>
        <button
          onClick={() => info("Próximos eventos", "Módulo en construcción")}
          className="text-[13px] font-semibold text-blue-600 hover:text-blue-700"
        >
          Ver todos →
        </button>
      </div>
      <div className="mt-3 flex-1 space-y-2.5">
        {upcomingEvents.map((e) => (
          <div
            key={e.id}
            className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition-colors hover:bg-slate-50"
          >
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <span className="text-xl font-bold leading-none">{e.day}</span>
              <span className="mt-1 text-[10px] font-semibold tracking-wide">{e.month}</span>
            </div>
            <div className="flex shrink-0 gap-1">
              <TeamCrest name={e.home.name} crest={e.home.crest} color={e.home.color} size={26} />
              <TeamCrest name={e.away.name} crest={e.away.crest} color={e.away.color} size={26} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-slate-900">{e.home.name}</p>
              <p className="truncate text-[13px] font-semibold text-slate-600">vs {e.away.name}</p>
              <p className="mt-1 flex items-center gap-1 truncate text-[12px] text-slate-500">
                <MapPin className="h-3 w-3 shrink-0" /> {e.venue}
              </p>
              <p className="text-[12px] text-slate-500">{e.time}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end justify-between self-stretch">
              <button className="text-slate-400 transition-colors hover:text-slate-600" aria-label="Opciones">
                <Ellipsis className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                <ProgressBar value={e.soldPct} color="bg-blue-600" className="h-1.5 w-16" />
                <span className="text-[12px] font-semibold text-slate-700">{e.soldPct}%</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
