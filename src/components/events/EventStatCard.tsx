import { motion } from "framer-motion";
import { ArrowUp, CalendarDays, DollarSign, Ticket, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EventKpi } from "@/data/mock";

const iconMap = {
  calendar: CalendarDays,
  ticket: Ticket,
  money: DollarSign,
  users: Users,
} as const;

const iconStyles: Record<EventKpi["color"], string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-emerald-100 text-emerald-600",
  violet: "bg-violet-100 text-violet-600",
  orange: "bg-orange-100 text-orange-600",
};

const sparkColors: Record<EventKpi["color"], string> = {
  blue: "#93c5fd",
  green: "#6ee7b7",
  violet: "#c4b5fd",
  orange: "#fdba74",
};

export function EventStatCard({ kpi, index }: { kpi: EventKpi; index: number }) {
  const Icon = iconMap[kpi.icon];
  const max = Math.max(...kpi.sparkline);

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
        <div className="flex h-10 shrink-0 items-end gap-[3px]">
          {kpi.sparkline.map((v, i) => (
            <div
              key={i}
              className="w-[4px] rounded-full"
              style={{ height: `${Math.max(6, (v / max) * 100)}%`, backgroundColor: sparkColors[kpi.color] }}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        {kpi.delta != null ? (
          <>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-xs font-semibold text-emerald-600">
              <ArrowUp className="h-3 w-3" />
              {kpi.delta}%
            </span>
            <span className="ml-2 text-xs text-slate-400">vs. período anterior</span>
          </>
        ) : (
          <span className="text-xs text-slate-500">{kpi.footerText}</span>
        )}
      </div>
    </motion.div>
  );
}
