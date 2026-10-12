import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ConfigSection } from "@/data/configuracion";
import { sectionIconMap } from "./configMeta";

export function SettingsNav({
  sections,
  activeId,
  onSelect,
}: {
  sections: ConfigSection[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"
    >
      {sections.map((section) => {
        const Icon = sectionIconMap[section.icon];
        const active = section.id === activeId;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSelect(section.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
              active ? "bg-blue-50/80" : "hover:bg-slate-50",
            )}
          >
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                active ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500",
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="min-w-0 flex-1">
              <span className={cn("block truncate text-sm font-semibold", active ? "text-blue-700" : "text-slate-700")}>
                {section.title}
              </span>
              <span className="block truncate text-xs text-slate-400">{section.description}</span>
            </span>
            <ChevronRight className={cn("h-4 w-4 shrink-0", active ? "text-blue-500" : "text-slate-300")} />
          </button>
        );
      })}
    </motion.nav>
  );
}
