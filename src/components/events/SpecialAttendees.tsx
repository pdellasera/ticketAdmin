import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { SpecialAttendee } from "@/data/mock";

const typeConfig: Record<
  SpecialAttendee["type"],
  { label: string; variant: "blue" | "violet" | "amber" | "green"; avatar: string }
> = {
  delegado: { label: "Delegado", variant: "blue", avatar: "bg-blue-100 text-blue-700" },
  vip: { label: "VIP", variant: "violet", avatar: "bg-violet-100 text-violet-700" },
  autoridad: { label: "Autoridad", variant: "amber", avatar: "bg-amber-100 text-amber-700" },
  directivo: { label: "Directivo", variant: "green", avatar: "bg-emerald-100 text-emerald-700" },
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function SpecialAttendees({ attendees }: { attendees: SpecialAttendee[] }) {
  const vip = attendees.filter((a) => a.type === "vip").length;
  const delegados = attendees.filter((a) => a.type === "delegado").length;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-100 px-4 py-3">
          <p className="text-[11px] font-medium text-slate-500">Asistentes especiales</p>
          <p className="mt-0.5 text-[16px] font-bold text-slate-900">{attendees.length}</p>
        </div>
        <div className="rounded-xl bg-blue-50 px-4 py-3">
          <p className="text-[11px] font-medium text-blue-500">Delegados</p>
          <p className="mt-0.5 text-[16px] font-bold text-blue-700">{delegados}</p>
        </div>
        <div className="rounded-xl bg-violet-50 px-4 py-3">
          <p className="text-[11px] font-medium text-violet-500">VIP</p>
          <p className="mt-0.5 text-[16px] font-bold text-violet-700">{vip}</p>
        </div>
      </div>

      <div className="space-y-2">
        {attendees.map((a) => {
          const cfg = typeConfig[a.type];
          return (
            <div key={a.id} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold",
                  cfg.avatar,
                )}
              >
                {initials(a.name)}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold text-slate-900">{a.name}</p>
                <p className="truncate text-[12px] text-slate-500">{a.role}</p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Badge variant={cfg.variant}>{cfg.label}</Badge>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  {a.zone}
                </span>
                {a.guests > 0 && <span className="text-[12px] font-medium text-slate-500">+{a.guests}</span>}
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold",
                    a.status === "confirmado" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600",
                  )}
                >
                  {a.status === "confirmado" ? "Confirmado" : "Pendiente"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}