import { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/Switch";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import type { SystemPreference } from "@/data/configuracion";
import { accentMeta, preferenceIconMap } from "./configMeta";

export function SystemPreferencesCard({ preferences }: { preferences: SystemPreference[] }) {
  const { info } = useToast();
  const [state, setState] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(preferences.map((p) => [p.id, p.enabled])),
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div>
        <h3 className="text-[16px] font-bold text-slate-900">Preferencias del sistema</h3>
        <p className="mt-0.5 text-[13px] text-slate-500">Activa o desactiva funciones de la plataforma.</p>
      </div>

      <div className="mt-4">
        {preferences.map((pref, i) => {
          const Icon = preferenceIconMap[pref.icon];
          const enabled = state[pref.id] ?? pref.enabled;
          return (
            <div
              key={pref.id}
              className={cn(
                "flex items-center justify-between gap-4 py-3.5",
                i !== 0 && "border-t border-slate-100",
              )}
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", accentMeta[pref.accent])}>
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">{pref.title}</p>
                  <p className="truncate text-xs text-slate-500">{pref.description}</p>
                </div>
              </div>
              <Switch
                checked={enabled}
                onChange={(checked) => {
                  setState((prev) => ({ ...prev, [pref.id]: checked }));
                  info(pref.title, checked ? "Activada" : "Desactivada");
                }}
                aria-label={pref.title}
              />
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
