import { cn } from "@/lib/utils";

export type EventDetailTab = "Resumen" | "Localidades" | "Entradas" | "Asistentes" | "Configuración";

const tabs: EventDetailTab[] = ["Resumen", "Localidades", "Entradas", "Asistentes", "Configuración"];

export function EventDetailTabs({
  active,
  onChange,
}: {
  active: EventDetailTab;
  onChange: (tab: EventDetailTab) => void;
}) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 border-b border-slate-200">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={cn(
            "relative -mb-px border-b-2 pb-2.5 text-[13px] font-semibold transition-colors",
            active === t ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700",
          )}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
