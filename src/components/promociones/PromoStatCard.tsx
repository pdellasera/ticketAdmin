import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, DollarSign, Percent, Tag, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PromoKpi } from "@/data/promociones";

const iconMap = {
  tag: Tag,
  percent: Percent,
  money: DollarSign,
  users: Users,
} as const;

const iconStyles: Record<PromoKpi["color"], string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-emerald-100 text-emerald-600",
  violet: "bg-violet-100 text-violet-600",
  orange: "bg-orange-100 text-orange-600",
};

const sparkColors: Record<PromoKpi["color"], string> = {
  blue: "#93c5fd",
  green: "#6ee7b7",
  violet: "#c4b5fd",
  orange: "#fdba74",
};

function LineSpark({ data, color }: { data: number[]; color: string }) {
  const w = 60;
  const h = 40;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - 4 - ((v - min) / (max - min || 1)) * (h - 8);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return (
    <svg width={w} height={h} className="shrink-0" aria-hidden="true">
      <path d={pts.join(" ")} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PromoStatCard({ kpi, index }: { kpi: PromoKpi; index: number }) {
  const Icon = iconMap[kpi.icon];
  const max = Math.max(...kpi.sparkline);
  const down = kpi.deltaDir === "down";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl", iconStyles[kpi.color])}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium text-slate-500">{kpi.title}</p>
          <p className="mt-1 truncate text-[24px] font-bold leading-none text-slate-900">{kpi.value}</p>
        </div>
        {kpi.spark === "line" ? (
          <LineSpark data={kpi.sparkline} color={sparkColors[kpi.color]} />
        ) : (
          <div className="flex h-10 shrink-0 items-end gap-[3px]">
            {kpi.sparkline.map((v, i) => (
              <div
                key={i}
                className="w-[4px] rounded-full"
                style={{ height: `${Math.max(6, (v / max) * 100)}%`, backgroundColor: sparkColors[kpi.color] }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-4">
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-semibold",
            down ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600",
          )}
        >
          {down ? <ArrowDown className="h-3 w-3" /> : <ArrowUp className="h-3 w-3" />}
          {kpi.delta}%
        </span>
        <span className="ml-2 text-xs text-slate-400">vs. período anterior</span>
      </div>
    </motion.div>
  );
}
