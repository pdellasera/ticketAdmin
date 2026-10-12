import { useMemo, useState } from "react";
import { CalendarDays, MoreHorizontal, Search, Tag } from "lucide-react";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import { formatCount, formatMoneyCO } from "@/lib/format";
import { cn } from "@/lib/utils";
import { recaudoDayOptions, recaudoEventOptions, recaudoMethodOptions } from "@/data/recaudo";
import type { RecaudoTransaction } from "@/data/recaudo";
import { paymentMethodMeta } from "./paymentMethodMeta";

export function TransactionsSection({ transactions }: { transactions: RecaudoTransaction[] }) {
  const { info, success } = useToast();
  const [query, setQuery] = useState("");
  const [event, setEvent] = useState("all");
  const [method, setMethod] = useState("all");
  const [day, setDay] = useState("hoy");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return transactions.filter((t) => {
      const matchesQuery =
        !q ||
        t.orderId.toLowerCase().includes(q) ||
        t.customer.toLowerCase().includes(q) ||
        t.event.toLowerCase().includes(q) ||
        t.reference.toLowerCase().includes(q);
      const eventOpt = recaudoEventOptions.find((o) => o.value === event);
      const matchesEvent = event === "all" || !eventOpt || t.event === eventOpt.label;
      const matchesMethod = method === "all" || t.method === method;
      return matchesQuery && matchesEvent && matchesMethod;
    });
  }, [transactions, query, event, method]);

  const allSelected = filtered.length > 0 && filtered.every((t) => selected.has(t.id));

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allSelected) filtered.forEach((t) => next.delete(t.id));
      else filtered.forEach((t) => next.add(t.id));
      return next;
    });
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <h3 className="text-[16px] font-bold text-slate-900">Transacciones de recaudo</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Select value={event} onChange={setEvent} options={recaudoEventOptions} icon={<CalendarDays className="h-4 w-4 text-slate-500" />} />
          <Select value={method} onChange={setMethod} options={recaudoMethodOptions} icon={<Tag className="h-4 w-4 text-slate-500" />} />
          <Select
            value={day}
            onChange={(v) => {
              setDay(v);
              const opt = recaudoDayOptions.find((o) => o.value === v);
              if (opt && v !== "hoy") success("Filtro aplicado", opt.label);
            }}
            options={recaudoDayOptions}
            icon={<CalendarDays className="h-4 w-4 text-slate-500" />}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5">
        <Search className="h-4 w-4 shrink-0 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por ID, pedido, cliente o referencia…"
          className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
              <th className="w-10 pb-3 pr-2">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                />
              </th>
              <th className="w-8 pb-3 pr-2 font-semibold">#</th>
              <th className="pb-3 pr-3 font-semibold">Fecha y hora</th>
              <th className="pb-3 pr-3 font-semibold">ID Pedido</th>
              <th className="pb-3 pr-3 font-semibold">Cliente</th>
              <th className="pb-3 pr-3 font-semibold">Evento</th>
              <th className="pb-3 pr-3 font-semibold">Localidad</th>
              <th className="pb-3 pr-3 text-center font-semibold">Cantidad</th>
              <th className="pb-3 pr-3 font-semibold">Método de pago</th>
              <th className="pb-3 pr-3 text-right font-semibold">Monto</th>
              <th className="pb-3 pr-3 font-semibold">Estado</th>
              <th className="pb-3 pr-3 font-semibold">Referencia</th>
              <th className="w-8 pb-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((t, i) => {
              const meta = paymentMethodMeta[t.method];
              const MethodIcon = meta.icon;
              return (
                <tr key={t.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60">
                  <td className="py-3 pr-2">
                    <input
                      type="checkbox"
                      checked={selected.has(t.id)}
                      onChange={() => toggle(t.id)}
                      className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                    />
                  </td>
                  <td className="py-3 pr-2 text-slate-400">{i + 1}</td>
                  <td className="whitespace-nowrap py-3 pr-3 text-slate-600">{t.dateTime}</td>
                  <td className="whitespace-nowrap py-3 pr-3 font-semibold text-blue-600">{t.orderId}</td>
                  <td className="whitespace-nowrap py-3 pr-3 text-slate-700">{t.customer}</td>
                  <td className="whitespace-nowrap py-3 pr-3 text-slate-600">{t.event}</td>
                  <td className="whitespace-nowrap py-3 pr-3 text-slate-600">{t.locality}</td>
                  <td className="py-3 pr-3 text-center font-semibold text-slate-800">{formatCount(t.quantity)}</td>
                  <td className="whitespace-nowrap py-3 pr-3">
                    <span className="inline-flex items-center gap-1.5 text-slate-700">
                      <MethodIcon className={cn("h-4 w-4", meta.iconClass)} />
                      {meta.label}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-3 pr-3 text-right font-semibold text-slate-800">
                    {formatMoneyCO(t.amount)}
                  </td>
                  <td className="py-3 pr-3">
                    <Badge variant="green">Pagado</Badge>
                  </td>
                  <td className="whitespace-nowrap py-3 pr-3 text-slate-500">{t.reference}</td>
                  <td className="py-3">
                    <button
                      onClick={() => info("Detalle de pedido", t.orderId)}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                      aria-label="Más opciones"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={13} className="py-10 text-center text-sm text-slate-400">
                  No se encontraron transacciones
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
