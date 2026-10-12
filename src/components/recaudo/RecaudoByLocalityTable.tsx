import { ChevronRight } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { formatCount, formatMoneyCO } from "@/lib/format";
import type { LocalityRecaudoRow } from "@/data/recaudo";

export function RecaudoByLocalityTable({ rows }: { rows: LocalityRecaudoRow[] }) {
  const { info } = useToast();

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-bold text-slate-900">Recaudo por localidad</h3>
        <button
          onClick={() => info("Ver detalle", "Módulo en construcción")}
          className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Ver detalle <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 flex-1 overflow-x-auto">
        <table className="w-full min-w-[360px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
              <th className="pb-3 pr-3 font-semibold">Localidad</th>
              <th className="pb-3 pr-3 text-right font-semibold">Entradas pagadas</th>
              <th className="pb-3 pr-3 text-right font-semibold">Recaudo</th>
              <th className="pb-3 text-right font-semibold">% del total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-slate-50 last:border-0">
                <td className="py-3 pr-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: r.color }} />
                    <span className="whitespace-nowrap font-medium text-slate-800">{r.name}</span>
                  </span>
                </td>
                <td className="whitespace-nowrap py-3 pr-3 text-right font-semibold text-slate-800">
                  {formatCount(r.tickets)}
                </td>
                <td className="whitespace-nowrap py-3 pr-3 text-right text-slate-600">{formatMoneyCO(r.revenue)}</td>
                <td className="whitespace-nowrap py-3 text-right font-semibold text-slate-800">{r.pct}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
