import { BarChart3, ShieldCheck, Ticket, Users, type LucideIcon } from "lucide-react";

export type LoginFeature = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type LoginLanguage = {
  value: string;
  label: string;
};

export type SocialProvider = {
  id: "google" | "microsoft";
  label: string;
};

export const loginFeatures: LoginFeature[] = [
  { id: "tickets", label: "Venta de entradas", icon: Ticket },
  { id: "access", label: "Control de accesos", icon: Users },
  { id: "reports", label: "Reportes en tiempo real", icon: BarChart3 },
  { id: "secure", label: "Seguro y confiable", icon: ShieldCheck },
];

export const languageOptions: LoginLanguage[] = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
];

export const socialProviders: SocialProvider[] = [
  { id: "google", label: "Google" },
  { id: "microsoft", label: "Microsoft" },
];
