import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EventListItem as EventItem } from "@/data/mock";
import { EventsToolbar } from "./EventsToolbar";
import { EventListItem } from "./EventListItem";

export type EventTab = "todos" | "proximos" | "encurso" | "finalizados" | "cancelados";

export function EventsList({
  events,
  selectedId,
  onSelect,
}: {
  events: EventItem[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const [tab, setTab] = useState<EventTab>("todos");
  const [search, setSearch] = useState("");
  const [stadium, setStadium] = useState("all");
  const [type, setType] = useState("all");
  const [date, setDate] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [tab, search, stadium, type, date]);

  const filtered = events.filter((e) => {
    if (tab === "proximos" && e.status !== "proximo") return false;
    if (tab === "encurso" && e.status !== "encurso") return false;
    if (tab === "finalizados" && e.status !== "finalizado") return false;
    if (tab === "cancelados" && e.status !== "cancelado") return false;
    if (stadium !== "all" && e.stadiumKey !== stadium) return false;
    if (type !== "all" && type !== "liga") return false;
    if (search) {
      const q = `${e.home.name} ${e.away.name} ${e.venue} ${e.competition}`.toLowerCase();
      if (!q.includes(search.toLowerCase())) return false;
    }
    return true;
  });

  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);
  const from = filtered.length === 0 ? 0 : start + 1;
  const to = Math.min(start + pageSize, filtered.length);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <EventsToolbar
        tab={tab}
        onTab={setTab}
        search={search}
        onSearch={setSearch}
        stadium={stadium}
        onStadium={setStadium}
        type={type}
        onType={setType}
        date={date}
        onDate={setDate}
      />

      <div className="mt-4 flex-1 space-y-2.5">
        {pageItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <SearchX className="h-8 w-8 text-slate-300" />
            <p className="mt-2 text-sm font-medium text-slate-500">No se encontraron eventos</p>
            <p className="text-xs text-slate-400">Prueba con otros filtros o búsqueda.</p>
          </div>
        ) : (
          pageItems.map((e) => (
            <EventListItem
              key={e.id}
              event={e}
              active={e.id === selectedId}
              onSelect={(id) => onSelect(id === selectedId ? null : id)}
            />
          ))
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <p className="text-[12px] text-slate-500">
          Mostrando {from} a {to} de {filtered.length} eventos
        </p>
        <div className="flex items-center gap-1">
          <button
            disabled={safePage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 disabled:opacity-40"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={cn(
                "h-8 w-8 rounded-lg text-[13px] font-semibold transition-colors",
                safePage === i + 1 ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100",
              )}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={safePage === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 disabled:opacity-40"
            aria-label="Página siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
