import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { PaymentMethodSlice } from "@/data/recaudo";

function formatM(amount: number): string {
  return `$ ${(amount / 1000000).toFixed(2)}M`;
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: PaymentMethodSlice }> }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold text-slate-800">{d.label}</p>
      <p className="mt-0.5 font-semibold text-slate-600">
        {formatM(d.amount)} · {d.pct}%
      </p>
    </div>
  );
}

export function PaymentMethodDonut({ data }: { data: PaymentMethodSlice[] }) {
  const total = data.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-[16px] font-bold text-slate-900">Recaudo por método de pago</h3>
      <div className="mt-4 flex flex-1 items-center gap-4">
        <div className="relative h-44 w-44 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius={62}
                outerRadius={84}
                paddingAngle={2}
                stroke="none"
              >
                {data.map((d) => (
                  <Cell key={d.id} fill={d.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold leading-none text-slate-900">{formatM(total)}</span>
            <span className="mt-1 text-xs text-slate-400">total</span>
          </div>
        </div>
        <div className="min-w-0 flex-1 space-y-2.5">
          {data.map((d) => (
            <div key={d.id} className="flex items-center gap-2 text-[13px]">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="min-w-0 flex-1 leading-tight text-slate-600">{d.label}</span>
              <span className="w-8 shrink-0 text-right font-semibold text-slate-800">{d.pct}%</span>
              <span className="w-[68px] shrink-0 text-right font-medium text-slate-500">{formatM(d.amount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
