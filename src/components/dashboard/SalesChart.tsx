import { useState } from "react";
import { BarChart3 } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { salesSeries, type SalesPoint } from "@/data/mock";
import { formatCount, formatMoneyCO, formatNumber } from "@/lib/format";

type RangeKey = "diario" | "semanal" | "mensual";

const ranges: { key: RangeKey; label: string }[] = [
  { key: "diario", label: "Diario" },
  { key: "semanal", label: "Semanal" },
  { key: "mensual", label: "Mensual" },
];

const xTicks = ["1 oct", "5 oct", "10 oct", "15 oct", "20 oct", "25 oct", "31 oct"];

const axisLabelStyle = { fontSize: 11, fill: "#94a3b8" } as const;

function formatMillions(value: number): string {
  return `${Math.round(value / 1000000)}M`;
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: SalesPoint }> }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <div className="relative rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs shadow-lg">
      <p className="font-semibold text-slate-800">{point.fullLabel}</p>
      <div className="mt-1.5 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-sm bg-blue-500" />
        <span className="font-semibold text-slate-700">
          {formatNumber(point.entradas)} <span className="font-normal text-slate-500">entradas</span>
        </span>
      </div>
      <div className="mt-1 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="font-semibold text-slate-700">
          {formatMoneyCO(point.ingresos)} <span className="font-normal text-slate-500">COP</span>
        </span>
      </div>
      <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-slate-200 bg-white" />
    </div>
  );
}

export function SalesChart() {
  const [range, setRange] = useState<RangeKey>("diario");
  const data = salesSeries[range];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <BarChart3 className="h-5 w-5" />
          </div>
          <h3 className="text-[17px] font-bold text-slate-900">Ventas del período</h3>
        </div>
        <div className="flex rounded-lg bg-slate-100 p-1">
          {ranges.map((r) => (
            <button
              key={r.key}
              onClick={() => setRange(r.key)}
              className={cn(
                "rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition-colors",
                range === r.key ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-700",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-end gap-5 text-xs text-slate-600">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-blue-500" /> Entradas vendidas
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Ingresos (COP)
        </span>
      </div>
      <div className="mt-3 h-72 flex-1">
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
              domain={[0, 2000]}
              ticks={[0, 500, 1000, 1500, 2000]}
              tickFormatter={(v) => formatCount(Number(v))}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              width={44}
              label={{ value: "Entradas", angle: -90, position: "insideLeft", offset: 12, style: axisLabelStyle }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 80000000]}
              ticks={[0, 20000000, 40000000, 60000000, 80000000]}
              tickFormatter={(v) => formatMillions(Number(v))}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              width={44}
              label={{ value: "Ingresos (COP)", angle: 90, position: "insideRight", offset: 12, style: axisLabelStyle }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(37,99,235,0.06)" }} />
            <Bar yAxisId="left" dataKey="entradas" fill="#3b82f6" radius={[3, 3, 0, 0]} barSize={14} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="ingresos"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: "#10b981", stroke: "#ffffff", strokeWidth: 1.5 }}
              activeDot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
