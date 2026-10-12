import { motion } from "framer-motion";
import { Ticket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import type { Branding } from "@/data/configuracion";
import estadio3d from "@/assets/estadio-3d.webp";

const colorFields: { key: keyof Branding; label: string }[] = [
  { key: "primary", label: "Color primario" },
  { key: "secondary", label: "Color secundario" },
  { key: "accent", label: "Color de acento" },
];

export function BrandingCard({ branding }: { branding: Branding }) {
  const { info } = useToast();

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div>
        <h3 className="text-[16px] font-bold text-slate-900">Logo y apariencia</h3>
        <p className="mt-0.5 text-[13px] text-slate-500">Personaliza la identidad visual de tu plataforma.</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="grid grid-cols-3 gap-4">
          {colorFields.map((field) => (
            <div key={field.key}>
              <p className="text-[13px] font-medium text-slate-700">{field.label}</p>
              <div
                className="mt-2 h-10 w-10 rounded-lg border border-slate-200"
                style={{ backgroundColor: branding[field.key] }}
              />
              <p className="mt-2 text-xs font-semibold uppercase text-slate-500">{branding[field.key]}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900">
            <Ticket className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-[13px] font-medium text-slate-700">Favicon</p>
            <Button
              variant="outline"
              className="mt-1.5 h-9 border-blue-200 bg-white px-3 text-blue-600 hover:bg-blue-50"
              onClick={() => info("Cambiar favicon", "Módulo en construcción")}
            >
              Cambiar favicon
            </Button>
            <p className="mt-1.5 text-xs text-slate-400">ICO o PNG (máx. 1MB)</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[13px] font-medium text-slate-700">Imagen de fondo (opcional)</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="h-28 flex-1 overflow-hidden rounded-xl border border-slate-200">
            <img src={estadio3d} alt="Imagen de fondo" className="h-full w-full object-cover" />
          </div>
          <div className="shrink-0">
            <Button
              variant="outline"
              className="h-9 border-blue-200 bg-white px-3 text-blue-600 hover:bg-blue-50"
              onClick={() => info("Cambiar imagen", "Módulo en construcción")}
            >
              Cambiar imagen
            </Button>
            <p className="mt-1.5 text-xs text-slate-400">PNG o JPG (máx. 3MB)</p>
            <p className="text-xs text-slate-400">Recomendado: 1920 x 600 px</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
