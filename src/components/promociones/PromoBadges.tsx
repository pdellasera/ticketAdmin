import { Badge } from "@/components/ui/Badge";
import type { PromoStatus, PromoType } from "@/data/promociones";

export const promoTypeMeta: Record<PromoType, { label: string; variant: "blue" | "violet" | "amber" | "green" | "rose" }> = {
  "por-tiempo": { label: "Por tiempo", variant: "blue" },
  paquete: { label: "Paquete", variant: "violet" },
  segmento: { label: "Segmento", variant: "amber" },
  cantidad: { label: "Cantidad", variant: "green" },
  aliado: { label: "Aliado", variant: "rose" },
};

export const promoStatusMeta: Record<PromoStatus, { label: string; variant: "green" | "blue" | "amber" | "slate"; dot: string }> = {
  activa: { label: "Activa", variant: "green", dot: "bg-emerald-500" },
  programada: { label: "Programada", variant: "blue", dot: "bg-blue-500" },
  pausada: { label: "Pausada", variant: "amber", dot: "bg-amber-500" },
  finalizada: { label: "Finalizada", variant: "slate", dot: "bg-slate-400" },
};

export function PromoTypeBadge({ type }: { type: PromoType }) {
  const meta = promoTypeMeta[type];
  return <Badge variant={meta.variant}>{meta.label}</Badge>;
}

export function PromoStatusBadge({ status, withDot = false }: { status: PromoStatus; withDot?: boolean }) {
  const meta = promoStatusMeta[status];
  return (
    <Badge variant={meta.variant}>
      {withDot && <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />}
      {meta.label}
    </Badge>
  );
}
