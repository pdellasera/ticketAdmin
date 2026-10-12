import {
  BarChart3,
  CalendarDays,
  Home,
  Settings,
  Tag,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  badge?: number;
};

export const navItems: NavItem[] = [
  { label: "Inicio", to: "/inicio", icon: Home },
  { label: "Eventos", to: "/eventos", icon: CalendarDays },
  { label: "Recaudo", to: "/recaudo", icon: Wallet },
  { label: "Reportes", to: "/reportes", icon: BarChart3 },
  { label: "Promociones", to: "/promociones", icon: Tag },
  { label: "Configuración", to: "/configuracion", icon: Settings },
];
