import { Maximize2 } from "lucide-react";
import estadio3d from "@/assets/estadio-3d.webp";
import { formatCount } from "@/lib/format";
import type { Stadium } from "@/data/mock";

export function StadiumMapCard({ stadium }: { stadium: Stadium }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-slate-900">Distribución del estadio</h3>
        <button className="text-slate-400 transition-colors hover:text-slate-600" aria-label="Ampliar">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 flex flex-1 items-center gap-4">
        <div className="flex flex-1 items-center justify-center rounded-xl bg-slate-50 p-2">
          <img src={estadio3d} alt="Mapa del estadio" draggable={false} className="w-full max-w-[240px]" />
        </div>
        <div className="w-32 shrink-0 space-y-2.5">
          {stadium.zones.map((z) => (
            <div key={z.name} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: z.color }} />
              <span className="flex-1 text-[12px] text-slate-600">{z.name}</span>
              <span className="text-[12px] font-bold text-slate-900">{formatCount(z.capacity)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
