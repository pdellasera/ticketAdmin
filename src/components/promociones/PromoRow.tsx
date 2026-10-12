import { Ellipsis, Tag } from "lucide-react";
import { TeamCrest } from "@/components/dashboard/TeamCrest";
import { formatCount } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Promo } from "@/data/promociones";
import { PromoStatusBadge, PromoTypeBadge } from "./PromoBadges";

export function PromoRow({
  promo,
  active,
  index,
  onSelect,
}: {
  promo: Promo;
  active: boolean;
  index: number;
  onSelect: (id: string) => void;
}) {
  return (
    <tr
      onClick={() => onSelect(promo.id)}
      className={cn(
        "cursor-pointer border-b border-slate-100 text-left text-sm transition-colors",
        active ? "bg-blue-50/60" : "hover:bg-slate-50",
      )}
    >
      <td className="py-3 pl-4">
        <input type="checkbox" checked={active} readOnly className="h-4 w-4 rounded border-slate-300 accent-blue-600" />
      </td>
      <td className="px-2 py-3 text-[13px] font-medium text-slate-400">{index}</td>
      <td className="py-3 pr-3">
        <div className="flex items-center gap-3">
          {promo.thumb ? (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
              <TeamCrest name={promo.thumb.name} crest={promo.thumb.crest} color={promo.thumb.color} size={28} />
            </div>
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-white">
              <Tag className="h-5 w-5" />
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">{promo.name}</p>
            <p className="truncate text-[12px] text-slate-400">Código: {promo.code}</p>
          </div>
        </div>
      </td>
      <td className="px-3 py-3">
        <PromoTypeBadge type={promo.type} />
      </td>
      <td className="px-3 py-3 text-[13px] text-slate-600">{promo.event}</td>
      <td className="px-3 py-3 text-[13px] text-slate-600">{promo.periodLabel}</td>
      <td className="px-3 py-3 text-[13px] font-bold text-slate-900">{promo.discount}%</td>
      <td className="px-3 py-3">
        <PromoStatusBadge status={promo.status} />
      </td>
      <td className="px-3 py-3 text-[13px] font-semibold text-slate-700">{formatCount(promo.sales)}</td>
      <td className="py-3 pr-4 text-slate-400">
        <Ellipsis className="h-4 w-4" />
      </td>
    </tr>
  );
}
