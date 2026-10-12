import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCount, formatMoneyCO, formatNumber } from "@/lib/format";
import type { DailyRecaudoPoint } from "@/data/recaudo";

const xTicks = ["1 oct", "4 oct", "7 oct", "10 oct", "13 oct", "16 oct", "19 oct", "22 oct", "25 oct", "28 oct", "31 oct"];

function formatMillions(value: number): string {
  return `$ ${value / 1000000}M`;
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: DailyRecaudoPoint }> }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <div className="relative rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs shadow-lg">
      <p className="font-semibold text-slate-800">{point.fullLabel}</p>
      <div className="mt-1.5 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-sm bg-blue-500" />
        <span className="font-semibold text-slate-700">
          {formatMoneyCO(point.recaudo)} <span className="font-normal text-slate-500">recaudado</span>
        </span>
      </div>
      <div className="mt-1 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-sky-400" />
        <span className="font-semibold text-slate-700">
          {formatNumber(point.entradas)} <span className="font-normal text-slate-500">entradas</span>
        </span>
      </div>
      <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-slate-200 bg-white" />
    </div>
  );
}

export function DailyRecaudoChart({ data }: { data: DailyRecaudoPoint[] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[16px] font-bold text-slate-900">Recaudo por partido</h3>
        <div className="flex items-center gap-5 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-blue-500" /> Recaudo
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> Entradas vendidas
          </span>
        </div>
      </div>
      <div className="mt-4 h-72 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid stroke="#eef2f6" vertical={false} />
            <XAxis
              dataKey="label"
              ticks={xTicks}
              interval={0}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />
            <YAxis
              yAxisId="left"
              domain={[0, 60000000]}
              ticks={[0, 15000000, 30000000, 45000000, 60000000]}
              tickFormatter={(v) => formatMillions(Number(v))}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              width={54}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 4000]}
              ticks={[0, 1000, 2000, 3000, 4000]}
              tickFormatter={(v) => formatCount(Number(v))}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              width={44}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(37,99,235,0.06)" }} />
            <Bar yAxisId="left" dataKey="recaudo" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={18} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="entradas"
              stroke="#60a5fa"
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: "#60a5fa", stroke: "#ffffff", strokeWidth: 1.5 }}
              activeDot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
