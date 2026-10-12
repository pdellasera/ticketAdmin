import { CalendarDays, Clock, MapPin, X } from "lucide-react";
import heroImg from "@/assets/background_navbar.png";
import { TeamCrest } from "@/components/dashboard/TeamCrest";
import type { EventDetail } from "@/data/mock";

export function EventHero({ event, onClose }: { event: EventDetail; onClose?: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a5c]/95 via-[#15408f]/90 to-[#0b2a5c]/70" />
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 text-white ring-1 ring-white/30 transition-colors hover:bg-black/45"
          aria-label="Cerrar detalle"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      <div className="relative z-10 flex flex-col items-center gap-3.5 px-6 py-7 text-center">
        <span className="rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wide text-blue-100 ring-1 ring-white/20">
          {event.competition}
        </span>
        <div className="flex items-center gap-5">
          <TeamCrest name={event.home.name} crest={event.home.crest} color={event.home.color} size={58} />
          <h2 className="max-w-[340px] text-[22px] font-bold leading-tight text-white">
            {event.home.name} vs {event.away.name}
          </h2>
          <TeamCrest name={event.away.name} crest={event.away.crest} color={event.away.color} size={58} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[13px] text-blue-100/90">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" /> {event.dateLong}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {event.venue} · {event.city}
          </span>
        </div>
      </div>
    </div>
  );
}
