import { useRecaudo } from "@/hooks/useRecaudo";
import { RecaudoStatCard } from "@/components/recaudo/RecaudoStatCard";
import { DailyRecaudoChart } from "@/components/recaudo/DailyRecaudoChart";
import { PaymentMethodDonut } from "@/components/recaudo/PaymentMethodDonut";
import { RecaudoByEventTable } from "@/components/recaudo/RecaudoByEventTable";
import { RecaudoByLocalityTable } from "@/components/recaudo/RecaudoByLocalityTable";
import { TransactionsSection } from "@/components/recaudo/TransactionsSection";

function RecaudoSkeleton() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="h-[380px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-8" />
        <div className="h-[380px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-4" />
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="h-[340px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-8" />
        <div className="h-[340px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-4" />
      </div>
      <div className="h-[380px] animate-pulse rounded-2xl bg-slate-200" />
    </div>
  );
}

export function Recaudo() {
  const { data, isLoading } = useRecaudo();

  if (isLoading || !data) return <RecaudoSkeleton />;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.kpis.map((kpi, i) => (
          <RecaudoStatCard key={kpi.id} kpi={kpi} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <DailyRecaudoChart data={data.dailyRecaudo} />
        </div>
        <div className="xl:col-span-4">
          <PaymentMethodDonut data={data.paymentMethods} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <RecaudoByEventTable rows={data.recaudoByEvent} />
        </div>
        <div className="xl:col-span-4">
          <RecaudoByLocalityTable rows={data.recaudoByLocality} />
        </div>
      </div>

      <TransactionsSection transactions={data.transactions} />
    </div>
  );
}
