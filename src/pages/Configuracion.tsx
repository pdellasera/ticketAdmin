import { useState } from "react";
import { useConfiguracion } from "@/hooks/useConfiguracion";
import { SettingsNav } from "@/components/configuracion/SettingsNav";
import { GeneralInfoCard } from "@/components/configuracion/GeneralInfoCard";
import { TimezoneFormatCard } from "@/components/configuracion/TimezoneFormatCard";
import { BrandingCard } from "@/components/configuracion/BrandingCard";
import { SystemPreferencesCard } from "@/components/configuracion/SystemPreferencesCard";
import { PoliciesCard } from "@/components/configuracion/PoliciesCard";
import { MapIntegrationCard } from "@/components/configuracion/MapIntegrationCard";

function ConfiguracionSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <div className="h-[560px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-3" />
      <div className="space-y-6 xl:col-span-5">
        <div className="h-[380px] animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-[300px] animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-[320px] animate-pulse rounded-2xl bg-slate-200" />
      </div>
      <div className="space-y-6 xl:col-span-4">
        <div className="h-[400px] animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-[300px] animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-[240px] animate-pulse rounded-2xl bg-slate-200" />
      </div>
    </div>
  );
}

export function Configuracion() {
  const { data, isLoading } = useConfiguracion();
  const [activeId, setActiveId] = useState("general");

  if (isLoading || !data) return <ConfiguracionSkeleton />;

  const activeSection = data.sections.find((s) => s.id === activeId);

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <div className="xl:col-span-3">
        <SettingsNav sections={data.sections} activeId={activeId} onSelect={setActiveId} />
      </div>

      {activeId === "general" ? (
        <>
          <div className="space-y-6 xl:col-span-5">
            <GeneralInfoCard info={data.generalInfo} />
            <TimezoneFormatCard settings={data.localeSettings} />
            <BrandingCard branding={data.branding} />
          </div>
          <div className="space-y-6 xl:col-span-4">
            <SystemPreferencesCard preferences={data.systemPreferences} />
            <PoliciesCard policies={data.policies} />
            <MapIntegrationCard integration={data.mapIntegration} />
          </div>
        </>
      ) : (
        <div className="xl:col-span-9">
          <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white text-center">
            <div>
              <p className="text-sm font-semibold text-slate-700">{activeSection?.title}</p>
              <p className="mt-1 text-sm text-slate-400">Esta sección está en construcción</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
