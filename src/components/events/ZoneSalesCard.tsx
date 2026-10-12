import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatCount } from "@/lib/format";
import type { ZoneSale } from "@/data/mock";

const barClass: Record<string, string> = {
  "#3b82f6": "bg-blue-500",
  "#22c55e": "bg-green-500",
  "#f97316": "bg-orange-500",
  "#ef4444": "bg-red-500",
  "#8b5cf6": "bg-violet-500",
};

export function ZoneSalesCard({ zoneSales }: { zoneSales: ZoneSale[] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-[16px] font-bold text-slate-900">Ventas por localidad</h3>
      <div className="mt-4 flex-1 space-y-4">
        {zoneSales.map((z) => {
          const pct = Math.round((z.sold / z.capacity) * 100);
          return (
            <div key={z.name}>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: z.color }} />
                  {z.name}
                </span>
                <span className="text-[12px] text-slate-500">
                  {formatCount(z.sold)} / {formatCount(z.capacity)}
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <ProgressBar value={pct} color={barClass[z.color] ?? "bg-blue-600"} className="h-1.5 flex-1" />
                <span className="w-8 text-right text-[12px] font-semibold text-slate-700">{pct}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
