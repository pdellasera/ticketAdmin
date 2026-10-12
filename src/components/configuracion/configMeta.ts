import {
  Activity,
  Archive,
  ArrowLeftRight,
  Bell,
  CalendarDays,
  Clock,
  CreditCard,
  FileText,
  IdCard,
  Plug,
  RefreshCw,
  Scale,
  Settings2,
  ShieldCheck,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ConfigAccent, ConfigIconKey, PolicyIconKey, PrefIconKey } from "@/data/configuracion";

export const sectionIconMap: Record<ConfigIconKey, LucideIcon> = {
  general: Settings2,
  calendar: CalendarDays,
  bell: Bell,
  card: CreditCard,
  users: Users,
  plug: Plug,
  shield: ShieldCheck,
  archive: Archive,
};

export const preferenceIconMap: Record<PrefIconKey, LucideIcon> = {
  settings: Settings2,
  userPlus: UserPlus,
  activity: Activity,
  transfer: ArrowLeftRight,
  clock: Clock,
  idCard: IdCard,
};

export const policyIconMap: Record<PolicyIconKey, LucideIcon> = {
  fileText: FileText,
  shield: ShieldCheck,
  refresh: RefreshCw,
  scale: Scale,
};

export const accentMeta: Record<ConfigAccent, string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  violet: "bg-violet-50 text-violet-600",
  amber: "bg-amber-50 text-amber-600",
  rose: "bg-rose-50 text-rose-600",
  slate: "bg-slate-100 text-slate-500",
};
