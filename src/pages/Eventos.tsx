import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEventsData } from "@/hooks/useEvents";
import { buildEventDetail, stadiums } from "@/data/mock";
import { EventStatCard } from "@/components/events/EventStatCard";
import { EventsList } from "@/components/events/EventsList";
import { EventHero } from "@/components/events/EventHero";
import { EventDetailTabs, type EventDetailTab } from "@/components/events/EventDetailTabs";
import { EventSummaryStats } from "@/components/events/EventSummaryStats";
import { StadiumLocalities } from "@/components/events/StadiumLocalities";
import { TicketBreakdown } from "@/components/events/TicketBreakdown";
import { SpecialAttendees } from "@/components/events/SpecialAttendees";
import { DailySalesChart } from "@/components/events/DailySalesChart";
import { QuickActions } from "@/components/events/QuickActions";

function EventosSkeleton() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-2xl bg-slate-200" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="h-[560px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-5" />
        <div className="h-[560px] animate-pulse rounded-2xl bg-slate-200 xl:col-span-7" />
      </div>
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-12 text-center">
      <p className="text-sm font-semibold text-slate-600">Módulo en construcción</p>
      <p className="mt-1 text-xs text-slate-400">Esta sección estará disponible próximamente.</p>
    </div>
  );
}

export function Eventos() {
  const { data, isLoading } = useEventsData();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<EventDetailTab>("Resumen");

  if (isLoading || !data) return <EventosSkeleton />;

  const selectedEvent = data.events.find((e) => e.id === selectedId) ?? null;
  const detail = selectedEvent ? buildEventDetail(selectedEvent) : null;
  const stadium = selectedEvent ? stadiums[selectedEvent.stadiumKey] : null;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.kpis.map((kpi, i) => (
          <EventStatCard key={kpi.id} kpi={kpi} index={i} />
        ))}
      </div>

      <div className="flex gap-4">
        <div
          className="shrink-0"
          style={{
            width: detail ? "41.6667%" : "100%",
            transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <EventsList events={data.events} selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <AnimatePresence>
          {detail && (
            <motion.div
              key="event-detail"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="min-w-0 flex-1"
            >
              <div className="flex h-full flex-col space-y-4">
                <EventHero event={detail} onClose={() => setSelectedId(null)} />

                <div className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <EventDetailTabs active={activeTab} onChange={setActiveTab} />

                  <div className="mt-4">
                    {activeTab === "Resumen" && (
                      <div className="space-y-4">
                        <EventSummaryStats stats={detail.stats} />

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                          <div className="lg:col-span-2">
                            <DailySalesChart data={detail.dailySales} />
                          </div>
                          <QuickActions />
                        </div>
                      </div>
                    )}

                    {activeTab === "Localidades" && stadium && (
                      <StadiumLocalities stadium={stadium} zoneSales={detail.zoneSales} />
                    )}

                    {activeTab === "Entradas" && <TicketBreakdown ticketTypes={detail.ticketTypes} />}

                    {activeTab === "Asistentes" && <SpecialAttendees attendees={detail.attendees} />}

                    {!["Resumen", "Localidades", "Entradas", "Asistentes"].includes(activeTab) && <ComingSoon />}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
