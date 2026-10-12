import { useState } from "react";
import { cn } from "@/lib/utils";
import { occupancyZones } from "@/data/mock";
import { StadiumBowl } from "./StadiumBowl";

export function OccupancyCard() {
  const [mode, setMode] = useState<"zonas" | "precios">("zonas");

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[16px] font-bold text-slate-900">Ocupación del último evento</h3>
        <div className="flex rounded-lg bg-slate-100 p-1">
          <button
            onClick={() => setMode("zonas")}
            className={cn(
              "rounded-md px-3 py-1 text-xs font-semibold transition-colors",
              mode === "zonas" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500",
            )}
          >
            Por zonas
          </button>
          <button
            onClick={() => setMode("precios")}
            className={cn(
              "rounded-md px-3 py-1 text-xs font-semibold transition-colors",
              mode === "precios" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500",
            )}
          >
            Por precios
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-1 items-center justify-center rounded-xl bg-slate-50 p-2">
        <StadiumBowl />
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {occupancyZones.map((z) => (
          <div key={z.name} className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: z.color }} />
              <span className="truncate text-[10px] font-medium text-slate-500">{z.name}</span>
            </div>
            <span className="text-[15px] font-bold leading-none text-slate-900">{z.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
