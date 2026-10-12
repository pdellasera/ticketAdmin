export type ConfigAccent = "blue" | "green" | "violet" | "amber" | "rose" | "slate";

export type ConfigIconKey =
  | "general"
  | "calendar"
  | "bell"
  | "card"
  | "users"
  | "plug"
  | "shield"
  | "archive";

export type PrefIconKey =
  | "settings"
  | "userPlus"
  | "activity"
  | "transfer"
  | "clock"
  | "idCard";

export type PolicyIconKey = "fileText" | "shield" | "refresh" | "scale";

export type ConfigSection = {
  id: string;
  title: string;
  description: string;
  icon: ConfigIconKey;
};

export type GeneralInfo = {
  platformName: string;
  organizationName: string;
  email: string;
  phone: string;
  website: string;
  country: string;
  address: string;
};

export type LocaleSettings = {
  timezone: string;
  dateFormat: string;
  timeFormat: string;
  currency: string;
  thousandSeparator: string;
  decimalSeparator: string;
};

export type Branding = {
  primary: string;
  secondary: string;
  accent: string;
};

export type SystemPreference = {
  id: string;
  title: string;
  description: string;
  icon: PrefIconKey;
  accent: ConfigAccent;
  enabled: boolean;
};

export type PolicyItem = {
  id: string;
  title: string;
  description: string;
  icon: PolicyIconKey;
  accent: ConfigAccent;
};

export type MapIntegration = {
  provider: string;
  apiKey: string;
};

export type ConfigData = {
  sections: ConfigSection[];
  generalInfo: GeneralInfo;
  localeSettings: LocaleSettings;
  branding: Branding;
  systemPreferences: SystemPreference[];
  policies: PolicyItem[];
  mapIntegration: MapIntegration;
};

const opt = (value: string, label: string = value) => ({ value, label });

export const sections: ConfigSection[] = [
  { id: "general", title: "General", description: "Información básica y apariencia de la plataforma", icon: "general" },
  { id: "eventos", title: "Eventos", description: "Configuración de eventos y calendario", icon: "calendar" },
  { id: "notificaciones", title: "Notificaciones", description: "Alertas por correo y mensajes", icon: "bell" },
  { id: "pagos", title: "Pagos", description: "Pasarelas de pago y divisas", icon: "card" },
  { id: "roles", title: "Roles y permisos", description: "Control de accesos por usuario", icon: "users" },
  { id: "integraciones", title: "Integraciones", description: "Conecta servicios externos", icon: "plug" },
  { id: "seguridad", title: "Seguridad", description: "Autenticación y privacidad", icon: "shield" },
  { id: "respaldos", title: "Respaldos", description: "Copias de seguridad de datos", icon: "archive" },
];

export const generalInfo: GeneralInfo = {
  platformName: "TicketGest",
  organizationName: "Liga Panameña de Fútbol",
  email: "contacto@ticketgest.pa",
  phone: "+507 6123-4567",
  website: "www.ticketgest.pa",
  country: "Panamá",
  address: "Estadio Rommel Fernández Gutiérrez, Ciudad de Panamá, Panamá",
};

export const localeSettings: LocaleSettings = {
  timezone: "(GMT-05:00) Ciudad de Panamá",
  dateFormat: "DD/MM/YYYY",
  timeFormat: "24 horas (14:00)",
  currency: "Dólar estadounidense (USD)",
  thousandSeparator: "Coma (1.000)",
  decimalSeparator: "Punto (1.000.50)",
};

export const branding: Branding = {
  primary: "#3B82F6",
  secondary: "#1E293B",
  accent: "#10B981",
};

export const systemPreferences: SystemPreference[] = [
  {
    id: "mantenimiento",
    title: "Modo mantenimiento",
    description: "Deshabilita temporalmente la venta de entradas",
    icon: "settings",
    accent: "slate",
    enabled: false,
  },
  {
    id: "registro",
    title: "Permitir registro de usuarios",
    description: "Los aficionados pueden crear cuentas nuevas",
    icon: "userPlus",
    accent: "blue",
    enabled: true,
  },
  {
    id: "disponibilidad",
    title: "Mostrar disponibilidad en tiempo real",
    description: "Actualiza localidades disponibles al instante",
    icon: "activity",
    accent: "green",
    enabled: true,
  },
  {
    id: "transferencias",
    title: "Permitir transferencias de entradas",
    description: "Los usuarios pueden ceder entradas a otros",
    icon: "transfer",
    accent: "amber",
    enabled: true,
  },
  {
    id: "listaEspera",
    title: "Habilitar lista de espera",
    description: "Ofrece lista de espera en eventos agotados",
    icon: "clock",
    accent: "rose",
    enabled: false,
  },
  {
    id: "identidad",
    title: "Activar validación de identidad",
    description: "Requiere verificar identidad en el acceso",
    icon: "idCard",
    accent: "slate",
    enabled: false,
  },
];

export const policies: PolicyItem[] = [
  { id: "terminos", title: "Términos y condiciones", description: "Reglas de uso de la plataforma", icon: "fileText", accent: "blue" },
  { id: "privacidad", title: "Política de privacidad", description: "Manejo de datos personales", icon: "shield", accent: "green" },
  { id: "reembolsos", title: "Política de reembolsos", description: "Condiciones de devolución de dinero", icon: "refresh", accent: "amber" },
  { id: "legal", title: "Aviso legal", description: "Información legal de la organización", icon: "scale", accent: "violet" },
];

export const mapIntegration: MapIntegration = {
  provider: "Google Maps",
  apiKey: "AIzaSyCwqExampleKey9x7yZ",
};

export const timezoneOptions = [
  opt("(GMT-05:00) Ciudad de Panamá"),
  opt("(GMT-06:00) Ciudad de México"),
  opt("(GMT-04:00) Caracas"),
  opt("(GMT+00:00) Londres"),
];

export const dateFormatOptions = [opt("DD/MM/YYYY"), opt("MM/DD/YYYY"), opt("YYYY-MM-DD")];

export const timeFormatOptions = [opt("24 horas (14:00)"), opt("12 horas (2:00 PM)")];

export const currencyOptions = [
  opt("Dólar estadounidense (USD)"),
  opt("Euro (EUR)"),
  opt("Peso colombiano (COP)"),
];

export const thousandSeparatorOptions = [
  opt("Coma (1.000)"),
  opt("Punto (1.000)"),
  opt("Espacio (1 000)"),
];

export const decimalSeparatorOptions = [opt("Punto (1.000.50)"), opt("Coma (1.000,50)")];

export const countryOptions = [
  opt("Panamá"),
  opt("Colombia"),
  opt("Costa Rica"),
  opt("México"),
  opt("Argentina"),
];

export const mapProviderOptions = [
  opt("Google Maps"),
  opt("Mapbox"),
  opt("OpenStreetMap"),
  opt("Leaflet"),
];

export async function getConfigData(): Promise<ConfigData> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { sections, generalInfo, localeSettings, branding, systemPreferences, policies, mapIntegration };
}
