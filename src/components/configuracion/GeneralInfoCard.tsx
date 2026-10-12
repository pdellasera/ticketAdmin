import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Ticket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { Field, Input, Textarea } from "@/components/ui/Input";
import { useToast } from "@/components/ui/Toast";
import { countryOptions, type GeneralInfo } from "@/data/configuracion";

export function GeneralInfoCard({ info }: { info: GeneralInfo }) {
  const { success } = useToast();
  const [form, setForm] = useState<GeneralInfo>(info);

  const set = (key: keyof GeneralInfo, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[16px] font-bold text-slate-900">Información general</h3>
          <p className="mt-0.5 text-[13px] text-slate-500">Datos básicos de la plataforma y de tu organización.</p>
        </div>
        <Button
          className="h-10 shrink-0 px-4"
          onClick={() => success("Cambios guardados", "La información general se actualizó correctamente")}
        >
          <Save className="h-4 w-4" /> Guardar
        </Button>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600">
          <Ticket className="h-8 w-8 text-white" />
        </div>
        <div>
          <Button
            variant="outline"
            className="h-10 border-blue-200 bg-white px-4 text-blue-600 hover:bg-blue-50"
            onClick={() => success("Cambiar logo", "Módulo en construcción")}
          >
            Cambiar logo
          </Button>
          <p className="mt-2 text-xs text-slate-400">PNG o JPG (máx. 2MB)</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
        <Field label="Nombre de la plataforma">
          <Input value={form.platformName} onChange={(e) => set("platformName", e.target.value)} />
        </Field>
        <Field label="Nombre de la organización">
          <Input value={form.organizationName} onChange={(e) => set("organizationName", e.target.value)} />
        </Field>
        <Field label="Email de contacto">
          <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
        </Field>
        <Field label="Teléfono de contacto">
          <Input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        </Field>
        <Field label="Sitio web">
          <Input type="url" value={form.website} onChange={(e) => set("website", e.target.value)} />
        </Field>
        <Field label="País">
          <Select
            fullWidth
            value={form.country}
            onChange={(v) => set("country", v)}
            options={countryOptions}
          />
        </Field>
        <Field label="Dirección" className="sm:col-span-2">
          <Textarea value={form.address} onChange={(e) => set("address", e.target.value)} />
        </Field>
      </div>
    </motion.section>
  );
}
