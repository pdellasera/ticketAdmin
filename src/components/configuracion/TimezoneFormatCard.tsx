import { useState } from "react";
import { motion } from "framer-motion";
import { Select } from "@/components/ui/Select";
import { Field } from "@/components/ui/Input";
import {
  currencyOptions,
  dateFormatOptions,
  decimalSeparatorOptions,
  thousandSeparatorOptions,
  timeFormatOptions,
  timezoneOptions,
  type LocaleSettings,
} from "@/data/configuracion";

export function TimezoneFormatCard({ settings }: { settings: LocaleSettings }) {
  const [form, setForm] = useState<LocaleSettings>(settings);

  const set = (key: keyof LocaleSettings, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div>
        <h3 className="text-[16px] font-bold text-slate-900">Zona horaria y formato</h3>
        <p className="mt-0.5 text-[13px] text-slate-500">Define la zona horaria y los formatos de tu plataforma.</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
        <Field label="Zona horaria">
          <Select fullWidth value={form.timezone} onChange={(v) => set("timezone", v)} options={timezoneOptions} />
        </Field>
        <Field label="Formato de fecha">
          <Select fullWidth value={form.dateFormat} onChange={(v) => set("dateFormat", v)} options={dateFormatOptions} />
        </Field>
        <Field label="Formato de hora">
          <Select fullWidth value={form.timeFormat} onChange={(v) => set("timeFormat", v)} options={timeFormatOptions} />
        </Field>
        <Field label="Moneda">
          <Select fullWidth value={form.currency} onChange={(v) => set("currency", v)} options={currencyOptions} />
        </Field>
        <Field label="Separador de miles">
          <Select
            fullWidth
            value={form.thousandSeparator}
            onChange={(v) => set("thousandSeparator", v)}
            options={thousandSeparatorOptions}
          />
        </Field>
        <Field label="Separador decimal">
          <Select
            fullWidth
            value={form.decimalSeparator}
            onChange={(v) => set("decimalSeparator", v)}
            options={decimalSeparatorOptions}
          />
        </Field>
      </div>

      <div className="mt-4 min-h-[88px] rounded-xl border border-slate-200" />
    </motion.section>
  );
}
