import { useReportes } from "@/hooks/useReportes";
import { ReportTypeCard } from "@/components/reportes/ReportTypeCard";
import { RecentReportsTable } from "@/components/reportes/RecentReportsTable";

function ReportesSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="h-6 w-48 animate-pulse rounded-lg bg-slate-200" />
        <div className="h-4 w-72 animate-pulse rounded-lg bg-slate-200" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-[180px] animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
      <div className="h-[360px] animate-pulse rounded-2xl bg-slate-200" />
    </div>
  );
}

export function Reportes() {
  const { data, isLoading } = useReportes();

  if (isLoading || !data) return <ReportesSkeleton />;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900">Tipos de reportes</h2>
        <p className="mt-0.5 text-[15px] text-slate-500">Selecciona el tipo de reporte que deseas generar</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.reportTypes.map((report, i) => (
          <ReportTypeCard key={report.id} report={report} index={i} />
        ))}
      </div>

      <RecentReportsTable reports={data.recentReports} />
    </div>
  );
}
