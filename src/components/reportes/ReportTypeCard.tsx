import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";
import type { ReportTypeCard as ReportTypeCardData } from "@/data/reportes";
import { reportAccentMeta, reportIconMap } from "./reportTypeMeta";
import { ReportIllustration } from "./ReportIllustration";

export function ReportTypeCard({ report, index }: { report: ReportTypeCardData; index: number }) {
  const { info } = useToast();
  const Icon = reportIconMap[report.icon];
  const meta = reportAccentMeta[report.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", meta.iconBox)}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-slate-900">{report.title}</h3>
          <p className="mt-0.5 text-[13px] leading-snug text-slate-500">{report.description}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-1 items-end gap-4">
        <div className="h-[92px] w-[42%] shrink-0">
          <ReportIllustration kind={report.illustration} strong={meta.chartStrong} soft={meta.chartSoft} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <ul className="space-y-1.5">
            {report.checklist.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-[13px] text-slate-600">
                <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-end">
            <button
              onClick={() => info("Generar reporte", report.title)}
              className={cn(
                "inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-[13px] font-semibold transition-colors",
                meta.button,
              )}
            >
              Generar
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
