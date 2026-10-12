import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Promo } from "@/data/promociones";
import { PromoToolbar } from "./PromoToolbar";
import { PromoRow } from "./PromoRow";

export type PromoTab = "todas" | "activa" | "programada" | "finalizada" | "pausada";

export function PromosList({
  promos,
  selectedId,
  onSelect,
}: {
  promos: Promo[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const [tab, setTab] = useState<PromoTab>("todas");
  const [search, setSearch] = useState("");
  const [event, setEvent] = useState("all");
  const [type, setType] = useState("all");
  const [stadium, setStadium] = useState("all");
  const [date, setDate] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [tab, search, event, type, stadium, date]);

  const filtered = promos.filter((p) => {
    if (tab !== "todas" && p.status !== tab) return false;
    if (event !== "all" && p.eventKey !== event) return false;
    if (type !== "all" && p.type !== type) return false;
    if (stadium !== "all" && p.stadiumKey !== stadium) return false;
    if (search) {
      const q = `${p.name} ${p.code} ${p.event} ${p.type}`.toLowerCase();
      if (!q.includes(search.toLowerCase())) return false;
    }
    return true;
  });

  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);
  const from = filtered.length === 0 ? 0 : start + 1;
  const to = Math.min(start + pageSize, filtered.length);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <PromoToolbar
        tab={tab}
        onTab={setTab}
        search={search}
        onSearch={setSearch}
        event={event}
        onEvent={setEvent}
        type={type}
        onType={setType}
        stadium={stadium}
        onStadium={setStadium}
        date={date}
        onDate={setDate}
      />

      <div className="mt-4 flex-1 overflow-x-auto">
        {pageItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <SearchX className="h-8 w-8 text-slate-300" />
            <p className="mt-2 text-sm font-medium text-slate-500">No se encontraron promociones</p>
            <p className="text-xs text-slate-400">Prueba con otros filtros o búsqueda.</p>
          </div>
        ) : (
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                <th className="w-10 py-2 pl-4">
                  <input type="checkbox" readOnly className="h-4 w-4 rounded border-slate-300 accent-blue-600" />
                </th>
                <th className="w-8 px-2 py-2">#</th>
                <th className="px-3 py-2">Promoción</th>
                <th className="px-3 py-2">Tipo</th>
                <th className="px-3 py-2">Evento</th>
                <th className="px-3 py-2">Período</th>
                <th className="px-3 py-2">Descuento</th>
                <th className="px-3 py-2">Estado</th>
                <th className="px-3 py-2">Ventas</th>
                <th className="w-10 py-2 pr-4" />
              </tr>
            </thead>
            <tbody>
              {pageItems.map((p, i) => (
                <PromoRow
                  key={p.id}
                  promo={p}
                  active={p.id === selectedId}
                  index={start + i}
                  onSelect={(id) => onSelect(id === selectedId ? null : id)}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <p className="text-[12px] text-slate-500">
          Mostrando {from} a {to} de {filtered.length} promociones
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
