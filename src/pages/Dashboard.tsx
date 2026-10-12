import { ClipboardList, DollarSign, Ticket, Users } from "lucide-react";
import { useDashboardData } from "@/hooks/useDashboard";
import { HeroBanner } from "@/components/dashboard/HeroBanner";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { LastEventSummary } from "@/components/dashboard/LastEventSummary";
import { OccupancyCard } from "@/components/dashboard/OccupancyCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

const kpiIcons = {
  ticket: Ticket,
  money: DollarSign,
  orders: ClipboardList,
  users: Users,
};

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-40 animate-pulse rounded-2xl bg-slate-200" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="h-80 animate-pulse rounded-2xl bg-slate-200 xl:col-span-2" />
        <div className="h-80 animate-pulse rounded-2xl bg-slate-200" />
      </div>
    </div>
  );
}

export function Dashboard() {
  const { data, isLoading } = useDashboardData();

  if (isLoading || !data) return <DashboardSkeleton />;

  return (
    <div className="space-y-6">
      <HeroBanner />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.kpis.map((kpi, i) => {
          const Icon = kpiIcons[kpi.icon];
          return <KpiCard key={kpi.id} kpi={kpi} index={i} icon={<Icon className="h-6 w-6" />} />;
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <SalesChart />
        </div>
        <UpcomingEvents />
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <LastEventSummary />
        </div>
        <div className="xl:col-span-3">
          <OccupancyCard />
        </div>
        <div className="xl:col-span-4">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
