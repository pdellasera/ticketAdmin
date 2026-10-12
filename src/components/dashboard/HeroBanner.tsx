import { CalendarX2 } from "lucide-react";
import heroImg from "@/assets/background_navbar.png";

export function HeroBanner() {
  return (
    <div className="relative h-[150px] overflow-hidden rounded-2xl">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a5c] via-[#15408f]/85 to-transparent" />
      <div className="relative z-10 flex h-full items-center gap-5 px-7">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
          <CalendarX2 className="h-7 w-7 text-white" />
        </div>
        <div>
          <h2 className="text-[22px] font-bold leading-tight text-white">No hay eventos en curso</h2>
          <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-blue-100/90">
            Actualmente no hay eventos activos en ningún estadio. Aquí tienes un resumen de la operación del período
            seleccionado.
          </p>
        </div>
      </div>
    </div>
  );
}
