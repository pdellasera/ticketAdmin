import { ClipboardList, DollarSign, Ticket, Users } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";
import type { EventDetailStat } from "@/data/mock";

const iconMap = {
  ticket: Ticket,
  money: DollarSign,
  orders: ClipboardList,
  users: Users,
} as const;

const iconStyles: Record<EventDetailStat["color"], string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  violet: "bg-violet-50 text-violet-600",
  orange: "bg-orange-50 text-orange-600",
};

const barColors: Record<EventDetailStat["color"], string> = {
  blue: "bg-blue-600",
  green: "bg-emerald-500",
  violet: "bg-violet-500",
  orange: "bg-orange-500",
};

export function EventSummaryStats({ stats }: { stats: EventDetailStat[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => {
        const Icon = iconMap[s.icon];
        return (
          <div key={s.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg", iconStyles[s.color])}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-[13px] font-medium text-slate-500">{s.label}</p>
            </div>
            <p className="mt-3 truncate text-[20px] font-bold leading-none text-slate-900">{s.value}</p>
            {s.pct != null && (
              <div className="mt-3 flex items-center gap-2">
                <ProgressBar value={s.pct} color={barColors[s.color]} className="h-1.5 flex-1" />
                <span className="text-[12px] font-semibold text-slate-600">{s.pct}%</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
