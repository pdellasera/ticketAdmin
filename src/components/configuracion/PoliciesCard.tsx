import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import type { PolicyItem } from "@/data/configuracion";
import { accentMeta, policyIconMap } from "./configMeta";

export function PoliciesCard({ policies }: { policies: PolicyItem[] }) {
  const { info } = useToast();

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div>
        <h3 className="text-[16px] font-bold text-slate-900">Políticas y términos</h3>
        <p className="mt-0.5 text-[13px] text-slate-500">Gestiona los documentos legales de tu plataforma.</p>
      </div>

      <div className="mt-4">
        {policies.map((policy, i) => {
          const Icon = policyIconMap[policy.icon];
          return (
            <div
              key={policy.id}
              className={cn("flex items-center justify-between gap-4 py-3", i !== 0 && "border-t border-slate-100")}
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", accentMeta[policy.accent])}>
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">{policy.title}</p>
                  <p className="truncate text-xs text-slate-500">{policy.description}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="h-9 shrink-0 border-blue-200 bg-white px-3 text-blue-600 hover:bg-blue-50"
                onClick={() => info("Editar", policy.title)}
              >
                <Pencil className="h-4 w-4" /> Editar
              </Button>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
