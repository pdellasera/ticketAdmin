import { Building2, CalendarDays, Search, Tag } from "lucide-react";
import { Select } from "@/components/ui/Select";
import { eventDateOptions, eventTypeOptions, stadiumOptions } from "@/data/mock";
import { cn } from "@/lib/utils";
import type { EventTab } from "./EventsList";

const tabs: { key: EventTab; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "proximos", label: "Próximos" },
  { key: "encurso", label: "En curso" },
  { key: "finalizados", label: "Finalizados" },
  { key: "cancelados", label: "Cancelados" },
];

export function EventsToolbar({
  tab,
  onTab,
  search,
  onSearch,
  stadium,
  onStadium,
  type,
  onType,
  date,
  onDate,
}: {
  tab: EventTab;
  onTab: (t: EventTab) => void;
  search: string;
  onSearch: (s: string) => void;
  stadium: string;
  onStadium: (s: string) => void;
  type: string;
  onType: (s: string) => void;
  date: string;
  onDate: (s: string) => void;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-1.5">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => onTab(t.key)}
            className={cn(
              "rounded-lg px-3.5 py-1.5 text-[13px] font-semibold transition-colors",
              tab === t.key ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative mt-3">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Buscar evento, equipo o estadio..."
          className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Select value={stadium} onChange={onStadium} options={stadiumOptions} icon={<Building2 className="h-4 w-4 text-slate-500" />} />
        <Select value={type} onChange={onType} options={eventTypeOptions} icon={<Tag className="h-4 w-4 text-slate-500" />} />
        <Select value={date} onChange={onDate} options={eventDateOptions} icon={<CalendarDays className="h-4 w-4 text-slate-500" />} />
      </div>
    </div>
  );
}
