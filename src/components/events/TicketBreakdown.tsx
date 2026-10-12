import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatCount, formatCurrency } from "@/lib/format";
import type { TicketType } from "@/data/mock";

export function TicketBreakdown({ ticketTypes }: { ticketTypes: TicketType[] }) {
  const courtesy = ticketTypes.find((t) => t.isCourtesy);
  const totalCapacity = ticketTypes.reduce((a, t) => a + t.capacity, 0);
  const totalSold = ticketTypes.reduce((a, t) => a + t.sold, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-blue-50 px-4 py-3">
          <p className="text-[11px] font-medium text-blue-500">Entradas vendidas</p>
          <p className="mt-0.5 text-[16px] font-bold text-blue-700">{formatCount(totalSold)}</p>
        </div>
        <div className="rounded-xl bg-violet-50 px-4 py-3">
          <p className="text-[11px] font-medium text-violet-500">Cortesías</p>
          <p className="mt-0.5 text-[16px] font-bold text-violet-700">{formatCount(courtesy?.sold ?? 0)}</p>
        </div>
        <div className="rounded-xl bg-emerald-50 px-4 py-3">
          <p className="text-[11px] font-medium text-emerald-500">Capacidad total</p>
          <p className="mt-0.5 text-[16px] font-bold text-emerald-700">{formatCount(totalCapacity)}</p>
        </div>
      </div>

      <div className="space-y-3">
        {ticketTypes.map((t) => {
          const pct = t.capacity > 0 ? Math.round((t.sold / t.capacity) * 100) : 0;
          const available = Math.max(0, t.capacity - t.sold);
          return (
            <div key={t.id} className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-semibold text-slate-900">{t.name}</p>
                    {t.isCourtesy && <Badge variant="red">Cortesía</Badge>}
                  </div>
                  <p className="mt-0.5 text-[12px] text-slate-500">
                    {t.isCourtesy ? "Sin costo" : formatCurrency(t.price)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-bold text-slate-900">
                    {formatCount(t.sold)}{" "}
                    <span className="font-normal text-slate-400">/ {formatCount(t.capacity)}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">{pct}%</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <ProgressBar
                  value={pct}
                  color={t.isCourtesy ? "bg-violet-500" : "bg-blue-600"}
                  className="h-1.5 flex-1"
                />
                <span className="w-8 text-right text-[12px] font-semibold text-slate-700">{pct}%</span>
              </div>

              <p className="mt-2 text-[12px] text-slate-500">
                {t.isCourtesy ? `Entregadas: ${formatCount(t.sold)}` : `Disponibles: ${formatCount(available)}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}