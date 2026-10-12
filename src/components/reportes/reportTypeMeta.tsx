import {
  Boxes,
  CalendarDays,
  DollarSign,
  Percent,
  Settings,
  Ticket,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReportAccent, ReportFormat, ReportIconKey, RecentReportType } from "@/data/reportes";

export const reportIconMap: Record<ReportIconKey, LucideIcon> = {
  calendar: CalendarDays,
  dollar: DollarSign,
  users: Users,
  boxes: Boxes,
  user: User,
  ticket: Ticket,
  percent: Percent,
  settings: Settings,
};

type AccentMeta = {
  iconBox: string;
  button: string;
  chartStrong: string;
  chartSoft: string;
};

export const reportAccentMeta: Record<ReportAccent, AccentMeta> = {
  blue: {
    iconBox: "bg-blue-50 text-blue-600",
    button: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    chartStrong: "#3b82f6",
    chartSoft: "#93c5fd",
  },
  green: {
    iconBox: "bg-emerald-500 text-white",
    button: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100",
    chartStrong: "#10b981",
    chartSoft: "#6ee7b7",
  },
  violet: {
    iconBox: "bg-violet-50 text-violet-600",
    button: "bg-violet-50 text-violet-600 hover:bg-violet-100",
    chartStrong: "#8b5cf6",
    chartSoft: "#c4b5fd",
  },
  amber: {
    iconBox: "bg-amber-50 text-amber-500",
    button: "bg-amber-50 text-amber-600 hover:bg-amber-100",
    chartStrong: "#f59e0b",
    chartSoft: "#fcd34d",
  },
  rose: {
    iconBox: "bg-rose-50 text-rose-500",
    button: "bg-rose-50 text-rose-600 hover:bg-rose-100",
    chartStrong: "#f43f5e",
    chartSoft: "#fda4af",
  },
  slate: {
    iconBox: "bg-slate-100 text-slate-500",
    button: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    chartStrong: "#64748b",
    chartSoft: "#cbd5e1",
  },
};

export const recentReportTypeMeta: Record<
  RecentReportType,
  { label: string; badge: "green" | "violet" | "blue" | "amber" | "rose"; icon: LucideIcon; iconClass: string }
> = {
  ventas: { label: "Ventas", badge: "green", icon: CalendarDays, iconClass: "text-blue-600" },
  asistencia: { label: "Asistencia", badge: "violet", icon: Users, iconClass: "text-violet-600" },
  recaudo: { label: "Recaudo", badge: "blue", icon: DollarSign, iconClass: "text-emerald-600" },
  localidades: { label: "Localidades", badge: "amber", icon: Boxes, iconClass: "text-amber-500" },
  promociones: { label: "Promociones", badge: "rose", icon: Percent, iconClass: "text-rose-500" },
};

export const reportFormatMeta: Record<ReportFormat, { label: string; badge: "red" | "green" }> = {
  pdf: { label: "PDF", badge: "red" },
  excel: { label: "Excel", badge: "green" },
};
