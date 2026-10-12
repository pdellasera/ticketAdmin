import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Info } from "lucide-react";
import { Select } from "@/components/ui/Select";
import { Field, Input } from "@/components/ui/Input";
import { mapProviderOptions, type MapIntegration } from "@/data/configuracion";

export function MapIntegrationCard({ integration }: { integration: MapIntegration }) {
  const [provider, setProvider] = useState(integration.provider);
  const [apiKey, setApiKey] = useState(integration.apiKey);
  const [show, setShow] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div>
        <h3 className="text-[16px] font-bold text-slate-900">Integración de mapas</h3>
        <p className="mt-0.5 text-[13px] text-slate-500">Configura el mapa interactivo del estadio.</p>
      </div>

      <div className="mt-5 space-y-4">
        <Field label="Proveedor de mapas">
          <Select fullWidth value={provider} onChange={setProvider} options={mapProviderOptions} />
        </Field>
        <Field label="Clave de API">
          <div className="relative">
            <Input
              type={show ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="pr-11"
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition-colors hover:text-slate-600"
              aria-label={show ? "Ocultar clave" : "Mostrar clave"}
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </Field>
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-blue-50 p-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
        <p className="text-[13px] leading-snug text-blue-700">
          Esta clave se usa para mostrar el mapa interactivo del estadio. No compartas esta información con terceros.
        </p>
      </div>
    </motion.section>
  );
}
