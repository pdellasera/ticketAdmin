import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePromociones } from "@/hooks/usePromociones";
import { PromoStatCard } from "@/components/promociones/PromoStatCard";
import { PromosList } from "@/components/promociones/PromosList";
import { PromoDetail } from "@/components/promociones/PromoDetail";

function PromocionesSkeleton() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="h-[560px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-7" />
        <div className="h-[560px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-5" />
      </div>
    </div>
  );
}

export function Promociones() {
  const { data, isLoading } = usePromociones();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (isLoading || !data) return <PromocionesSkeleton />;

  const selected = data.promos.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.kpis.map((kpi, i) => (
          <PromoStatCard key={kpi.id} kpi={kpi} index={i} />
        ))}
      </div>

      <div className="flex gap-4">
        <div
          className="shrink-0"
          style={{
            width: selected ? "58.3333%" : "100%",
            transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <PromosList promos={data.promos} selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              key="promo-detail"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="min-w-0 flex-1"
            >
              <PromoDetail promo={selected} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
