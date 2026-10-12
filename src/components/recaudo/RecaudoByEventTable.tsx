import { ChevronRight } from "lucide-react";
import { TeamCrest } from "@/components/dashboard/TeamCrest";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useToast } from "@/components/ui/Toast";
import { formatCount, formatMoneyCO } from "@/lib/format";
import type { EventRecaudoRow } from "@/data/recaudo";

export function RecaudoByEventTable({ rows }: { rows: EventRecaudoRow[] }) {
  const { info } = useToast();
  const max = Math.max(...rows.map((r) => r.revenue));

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-slate-900">Recaudo por evento</h3>
        <button
          onClick={() => info("Ver todos", "Módulo en construcción")}
          className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Ver todos <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 flex-1 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
              <th className="w-8 pb-3 pr-2 font-semibold">#</th>
              <th className="pb-3 pr-3 font-semibold">Evento</th>
              <th className="pb-3 pr-3 font-semibold">Fecha</th>
              <th className="pb-3 pr-3 text-right font-semibold">Entradas pagadas</th>
              <th className="pb-3 font-semibold">Recaudo total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id} className="border-b border-slate-50 last:border-0">
                <td className="py-3 pr-2 text-slate-400">{i + 1}</td>
                <td className="py-3 pr-3">
                  <div className="flex items-center gap-2">
                    <TeamCrest name={r.home.name} crest={r.home.crest} color={r.home.color} size={22} />
                    <TeamCrest name={r.away.name} crest={r.away.crest} color={r.away.color} size={22} />
                    <span className="whitespace-nowrap font-medium text-slate-800">
                      {r.home.name} vs {r.away.name}
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap py-3 pr-3 text-slate-500">{r.date}</td>
                <td className="whitespace-nowrap py-3 pr-3 text-right font-semibold text-slate-800">
                  {formatCount(r.tickets)}
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <span className="whitespace-nowrap font-semibold text-slate-800">{formatMoneyCO(r.revenue)}</span>
                    <ProgressBar value={(r.revenue / max) * 100} className="max-w-[120px]" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
