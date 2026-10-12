import { Ellipsis, Pencil } from "lucide-react";
import heroImg from "@/assets/background_navbar.png";
import { useToast } from "@/components/ui/Toast";
import type { Promo } from "@/data/promociones";
import { promoStatusMeta } from "./PromoBadges";

export function PromoBanner({ promo }: { promo: Promo }) {
  const { info } = useToast();
  const status = promoStatusMeta[promo.status];

  return (
    <div className="relative overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a5c]/95 via-[#1d6fe8]/85 to-[#7c3aed]/70" />

      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
        <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
        {status.label}
      </div>

      <div className="absolute right-3 top-3 flex gap-2">
        <button
          onClick={() => info("Editar promoción", "Módulo en construcción")}
          className="flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 text-xs font-semibold text-blue-600 shadow-sm transition-colors hover:bg-white"
        >
          <Pencil className="h-3.5 w-3.5" /> Editar
        </button>
        <button
          onClick={() => info("Más opciones", "Módulo en construcción")}
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/95 text-slate-600 shadow-sm transition-colors hover:bg-white"
          aria-label="Más opciones"
        >
          <Ellipsis className="h-4 w-4" />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-start gap-2.5 px-5 py-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-100/90">{promo.banner.subtitle}</span>
        <h2 className="text-[26px] font-extrabold leading-none text-white">{promo.banner.title}</h2>
        <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-extrabold text-blue-700 shadow-sm">{promo.discount}% DE DESCUENTO</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">CÓDIGO: {promo.code}</span>
      </div>
    </div>
  );
}
