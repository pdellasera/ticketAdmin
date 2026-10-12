import { Check } from "lucide-react";
import type { ReportIllustrationKind } from "@/data/reportes";
import { ReportMiniChart } from "./ReportMiniChart";
import { StadiumZonesMini } from "./StadiumZonesMini";

function CustomersMini() {
  const avatars = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"];
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {avatars.map((c, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-6 w-6 shrink-0 rounded-full" style={{ backgroundColor: c }} />
          <span className="h-2.5 rounded-full bg-slate-200" style={{ width: `${68 - i * 12}%` }} />
        </div>
      ))}
    </div>
  );
}

function OrdersMini() {
  const dots = ["#22c55e", "#22c55e", "#22c55e", "#ef4444"];
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {dots.map((c, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-2.5 rounded-full bg-slate-200" style={{ width: `${74 - i * 10}%` }} />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: c }} />
        </div>
      ))}
    </div>
  );
}

function ChecksMini() {
  const dots = ["#22c55e", "#22c55e", "#ef4444"];
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {dots.map((c, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
            <Check className="h-3 w-3" />
          </span>
          <span className="h-2.5 rounded-full bg-slate-200" style={{ width: `${64 - i * 12}%` }} />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: c }} />
        </div>
      ))}
    </div>
  );
}

export function ReportIllustration({
  kind,
  strong,
  soft,
}: {
  kind: ReportIllustrationKind;
  strong: string;
  soft: string;
}) {
  switch (kind) {
    case "chart":
      return <ReportMiniChart strong={strong} soft={soft} />;
    case "stadium":
      return <StadiumZonesMini />;
    case "customers":
      return <CustomersMini />;
    case "orders":
      return <OrdersMini />;
    case "checks":
      return <ChecksMini />;
  }
}
