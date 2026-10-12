import { Building2, CalendarDays, Hash, Info, Pause, Percent, Tag, Trash2, User, Users, type LucideIcon } from "lucide-react";
import { formatCount, formatMoneyCO } from "@/lib/format";
import { useToast } from "@/components/ui/Toast";
import type { Promo, PromoDetailStat, PromoType } from "@/data/promociones";
import { PromoBanner } from "./PromoBanner";
import { PromoDetailStats } from "./PromoDetailStats";
import { PromoTypeBadge } from "./PromoBadges";

type InfoRow = { label: string; icon: LucideIcon; value?: string; badge?: PromoType };

export function PromoDetail({ promo }: { promo: Promo }) {
  const { info } = useToast();

  const detailStats: PromoDetailStat[] = [
    {
      id: "s1",
      label: "Entradas vendidas",
      value: formatCount(promo.stats.sold),
      sub: `de ${formatCount(promo.stats.capacity)}`,
      pct: promo.stats.capacity ? Math.round((promo.stats.sold / promo.stats.capacity) * 100) : 0,
      icon: "tag",
      color: "blue",
    },
    { id: "s2", label: "Ingresos generados", value: formatMoneyCO(promo.stats.revenue), icon: "money", color: "green" },
    { id: "s3", label: "Usuarios únicos", value: formatCount(promo.stats.uniqueUsers), icon: "users", color: "violet" },
    { id: "s4", label: "Tasa de conversión", value: `${promo.stats.conversion}%`, icon: "percent", color: "orange" },
  ];

  const infoRows: InfoRow[] = [
    { label: "Tipo", icon: Tag, badge: promo.type },
    { label: "Código", icon: Hash, value: promo.code },
    { label: "Evento", icon: CalendarDays, value: promo.event },
    { label: "Estadio", icon: Building2, value: promo.stadium },
    { label: "Período", icon: CalendarDays, value: promo.periodFull },
    { label: "Descuento", icon: Percent, value: `${promo.discount}%` },
    { label: "Límite de uso", icon: Users, value: promo.limit },
    { label: "Uso por cliente", icon: User, value: promo.perUserLimit },
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <PromoBanner promo={promo} />

      <div className="p-5">
        <h2 className="text-[18px] font-bold text-slate-900">{promo.name}</h2>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{promo.description}</p>

        <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="divide-y divide-slate-100">
              {infoRows.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.label} className="flex items-center gap-3 py-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="w-32 shrink-0 text-[13px] font-medium text-slate-400">{r.label}</span>
                    <span className="min-w-0 flex-1 text-right text-[13px] font-semibold text-slate-800">
                      {r.badge ? <PromoTypeBadge type={r.badge} /> : r.value}
                    </span>
                  </div>
                );
              })}
              <div className="flex items-start gap-3 py-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                  <Info className="h-4 w-4" />
                </span>
                <span className="w-32 shrink-0 text-[13px] font-medium text-slate-400">Condiciones</span>
                <span className="min-w-0 flex-1 text-right text-[12px] font-medium leading-relaxed text-slate-500">
                  {promo.conditions.join(" · ")}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <PromoDetailStats stats={detailStats} />
          </div>
        </div>
      </div>

      <div className="mt-auto flex gap-3 border-t border-slate-100 p-5">
        <button
          onClick={() => info("Pausar promoción", "Módulo en construcción")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50/50 px-4 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
        >
          <Pause className="h-4 w-4" /> Pausar promoción
        </button>
        <button
          onClick={() => info("Finalizar promoción", "Módulo en construcción")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50/50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" /> Finalizar promoción
        </button>
      </div>
    </div>
  );
}
