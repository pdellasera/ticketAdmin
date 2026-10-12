import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Bell, Download, Hexagon, MapPin, Plus, Search } from "lucide-react";
import { navItems } from "@/data/nav";
import { stadiumOptions, stateOptions } from "@/data/mock";
import { DateRangeInput } from "@/components/ui/DateRangeInput";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import type { DateRange } from "@/components/ui/Calendar";

export function Topbar() {
  const location = useLocation();
  const { info, success } = useToast();
  const [state, setState] = useState("all");
  const [stadium, setStadium] = useState("all");
  const [range, setRange] = useState<DateRange>({
    start: new Date(2026, 9, 1),
    end: new Date(2026, 9, 31),
  });
  const [search, setSearch] = useState("");

  const isConfig = location.pathname === "/configuracion";
  const isEvents = location.pathname === "/eventos";
  const isPromos = location.pathname === "/promociones";
  const isRecaudo = location.pathname === "/recaudo";
  const isReportes = location.pathname === "/reportes";
  const current = navItems.find((n) => n.to === location.pathname);
  const title = location.pathname === "/inicio" ? "Dashboard" : (current?.label ?? "Dashboard");
  const subtitle = location.pathname === "/inicio"
    ? "Resumen de la operación de tu ticketera"
    : isEvents
      ? "Gestiona los partidos de la Liga Panameña de Fútbol"
      : isPromos
        ? "Crea y gestiona promociones para aumentar tus ventas"
        : isRecaudo
          ? "Controla y consulta todo el recaudo de tus eventos"
          : isReportes
            ? "Genera y consulta reportes de tus eventos"
            : isConfig
              ? "Personaliza la plataforma según las necesidades de tu organización"
              : "Módulo en construcción";

  return (
    <header className="flex items-center justify-between gap-4 bg-white px-6 py-4">
      <div className="min-w-0">
        <h1 className="truncate text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-0.5 truncate text-[15px] text-slate-500">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        {isConfig ? (
          <div className="flex h-11 w-[420px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-100/70 px-4">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar configuración..."
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        ) : (
          <>
            <DateRangeInput value={range} onChange={setRange} />
            {isEvents || isPromos || isRecaudo || isReportes ? (
              <>
                <Select
                  value={stadium}
                  onChange={(v) => {
                    setStadium(v);
                    const opt = stadiumOptions.find((o) => o.value === v);
                    if (opt && v !== "all") success("Estadio seleccionado", opt.label);
                  }}
                  options={stadiumOptions}
                  icon={isReportes ? <Hexagon className="h-4 w-4 text-slate-500" /> : <MapPin className="h-4 w-4 text-slate-500" />}
                />
                {isRecaudo ? (
                  <Button
                    variant="outline"
                    className="h-11 px-5"
                    onClick={() => info("Exportar recaudo", "Módulo en construcción")}
                  >
                    <Download className="h-4 w-4" /> Exportar
                  </Button>
                ) : (
                  <Button
                    className="h-11 px-5"
                    onClick={() =>
                      info(
                        isPromos ? "Crear promoción" : isReportes ? "Generar reporte" : "Crear evento",
                        "Módulo en construcción",
                      )
                    }
                  >
                    <Plus className="h-4 w-4" />{" "}
                    {isPromos ? "Crear promoción" : isReportes ? "Generar reporte" : "Crear evento"}
                  </Button>
                )}
              </>
            ) : (
              <>
                <Select
                  value={state}
                  onChange={(v) => {
                    setState(v);
                    const opt = stateOptions.find((o) => o.value === v);
                    if (opt) success("Estado actualizado", opt.label);
                  }}
                  options={stateOptions}
                  icon={<MapPin className="h-4 w-4 text-slate-500" />}
                />
                <button
                  onClick={() => info("Notificaciones", "No tienes notificaciones nuevas")}
                  className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50"
                  aria-label="Notificaciones"
                >
                  <Bell className="h-[18px] w-[18px]" />
                  <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>
              </>
            )}
          </>
        )}
      </div>
    </header>
  );
}
