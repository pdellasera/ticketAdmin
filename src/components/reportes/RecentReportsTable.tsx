import { ChevronRight, Download, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import type { RecentReport } from "@/data/reportes";
import { recentReportTypeMeta, reportFormatMeta } from "./reportTypeMeta";

export function RecentReportsTable({ reports }: { reports: RecentReport[] }) {
  const { info } = useToast();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-[16px] font-bold text-slate-900">Reportes recientes</h3>
          <p className="mt-0.5 text-[13px] text-slate-500">
            Aquí puedes consultar y descargar los últimos reportes generados.
          </p>
        </div>
        <button
          onClick={() => info("Ver todos", "Módulo en construcción")}
          className="inline-flex items-center gap-1 self-start text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 sm:self-auto"
        >
          Ver todos
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
              <th className="pb-3 pr-3">Nombre del reporte</th>
              <th className="pb-3 pr-3">Tipo</th>
              <th className="pb-3 pr-3">Periodo</th>
              <th className="pb-3 pr-3">Generado por</th>
              <th className="pb-3 pr-3">Fecha de generación</th>
              <th className="pb-3 pr-3">Formato</th>
              <th className="w-20 pb-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => {
              const type = recentReportTypeMeta[r.type];
              const format = reportFormatMeta[r.format];
              const TypeIcon = type.icon;
              return (
                <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                        <TypeIcon className={cn("h-4 w-4", type.iconClass)} />
                      </span>
                      <span className="font-semibold text-slate-800">{r.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-3">
                    <Badge variant={type.badge}>{type.label}</Badge>
                  </td>
                  <td className="whitespace-nowrap py-3 pr-3 text-slate-600">{r.period}</td>
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-2">
                      <Avatar name={r.author} className="h-7 w-7 text-[10px]" />
                      <span className="whitespace-nowrap text-slate-700">{r.author}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pr-3 text-slate-600">{r.date}</td>
                  <td className="py-3 pr-3">
                    <Badge variant={format.badge}>{format.label}</Badge>
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        onClick={() => info("Descargar reporte", r.name)}
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                        aria-label="Descargar"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => info("Opciones", r.name)}
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                        aria-label="Más opciones"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
