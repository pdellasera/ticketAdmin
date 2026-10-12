import { formatCount } from "@/lib/format";
import type { Stadium, ZoneSale } from "@/data/mock";
import { StadiumMapCard } from "./StadiumMapCard";
import { ZoneSalesCard } from "./ZoneSalesCard";

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <p className="text-[12px] font-medium text-slate-400">{label}</p>
      <p className="mt-1 truncate text-[15px] font-bold text-slate-900">{value}</p>
    </div>
  );
}

export function StadiumLocalities({ stadium, zoneSales }: { stadium: Stadium; zoneSales: ZoneSale[] }) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
        <p className="text-[12px] font-medium text-slate-400">Estadio</p>
        <p className="text-[15px] font-bold text-slate-900">{stadium.name}</p>
        <p className="text-[12px] text-slate-500">{stadium.city}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <InfoItem label="Capacidad total" value={formatCount(stadium.capacity)} />
        <InfoItem label="Localidades" value={String(stadium.zones.length)} />
        <InfoItem label="Inauguración" value={String(stadium.opened)} />
        <InfoItem label="Superficie" value={stadium.surface} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <StadiumMapCard stadium={stadium} />
        <ZoneSalesCard zoneSales={zoneSales} />
      </div>
    </div>
  );
}