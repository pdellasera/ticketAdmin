import { Bar, CartesianGrid, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatCount } from "@/lib/format";
import type { DailySale } from "@/data/mock";

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: DailySale }> }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <div className="relative rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold text-slate-800">{point.label}</p>
      <div className="mt-1 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-sm bg-blue-500" />
        <span className="font-semibold text-slate-700">
          {formatCount(point.value)} <span className="font-normal text-slate-500">entradas</span>
        </span>
      </div>
      <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-slate-200 bg-white" />
    </div>
  );
}

export function DailySalesChart({ data }: { data: DailySale[] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-[16px] font-bold text-slate-900">Ventas por día</h3>
      <div className="mt-3 h-56 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid stroke="#eef2f6" vertical={false} />
            <XAxis
              dataKey="label"
              interval="preserveStartEnd"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />
            <YAxis
              domain={[0, 6000]}
              ticks={[0, 2000, 4000, 6000]}
              tickFormatter={(v) => formatCount(Number(v))}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              width={44}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(37,99,235,0.06)" }} />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
