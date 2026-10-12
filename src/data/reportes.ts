export type ReportIconKey =
  | "calendar"
  | "dollar"
  | "users"
  | "boxes"
  | "user"
  | "ticket"
  | "percent"
  | "settings";

export type ReportAccent = "blue" | "green" | "violet" | "amber" | "rose" | "slate";

export type ReportIllustrationKind = "chart" | "stadium" | "customers" | "orders" | "checks";

export type ReportTypeCard = {
  id: string;
  title: string;
  description: string;
  icon: ReportIconKey;
  accent: ReportAccent;
  illustration: ReportIllustrationKind;
  checklist: string[];
};

export type RecentReportType = "ventas" | "asistencia" | "recaudo" | "localidades" | "promociones";
export type ReportFormat = "pdf" | "excel";

export type RecentReport = {
  id: string;
  name: string;
  type: RecentReportType;
  period: string;
  author: string;
  date: string;
  format: ReportFormat;
};

export type ReportesData = {
  reportTypes: ReportTypeCard[];
  recentReports: RecentReport[];
};

export const reportTypes: ReportTypeCard[] = [
  {
    id: "eventos",
    title: "Eventos",
    description: "Resumen y rendimiento de tus eventos con comparación de resultados.",
    icon: "calendar",
    accent: "blue",
    illustration: "chart",
    checklist: ["Entradas vendidas", "Ingresos por evento", "Asistencia", "Comparativo histórico"],
  },
  {
    id: "ventas",
    title: "Ventas y recaudo",
    description: "Análisis de ventas, ingresos, métodos de pago y comisiones.",
    icon: "dollar",
    accent: "green",
    illustration: "chart",
    checklist: ["Recaudo total", "Ventas por día", "Métodos de pago", "Comisiones"],
  },
  {
    id: "asistencia",
    title: "Asistencia",
    description: "Controla la asistencia y validación de entradas por evento.",
    icon: "users",
    accent: "violet",
    illustration: "chart",
    checklist: ["Asistencia por evento", "Ocupación por localidad", "Tipos de entrada", "Comparativo de asistencia"],
  },
  {
    id: "localidades",
    title: "Localidades",
    description: "Distribución y ocupación de las localidades del estadio.",
    icon: "boxes",
    accent: "amber",
    illustration: "stadium",
    checklist: ["Ocupación por localidad", "Entradas vendidas", "Ingresos por localidad", "Mapa de calor de ocupación"],
  },
  {
    id: "clientes",
    title: "Clientes",
    description: "Conoce a tus clientes y su comportamiento de compra.",
    icon: "user",
    accent: "rose",
    illustration: "customers",
    checklist: ["Top compradores", "Nuevos clientes", "Compras por cliente", "Segmentación de clientes"],
  },
  {
    id: "pedidos",
    title: "Pedidos",
    description: "Seguimiento de pedidos, pagos y reembolsos.",
    icon: "ticket",
    accent: "violet",
    illustration: "orders",
    checklist: ["Listado de pedidos", "Estados de pago", "Métodos de pago", "Reembolsos y anulaciones"],
  },
  {
    id: "promociones",
    title: "Promociones",
    description: "Rendimiento de promociones y códigos de descuento.",
    icon: "percent",
    accent: "rose",
    illustration: "chart",
    checklist: ["Uso de promociones", "Ventas por promoción", "Descuento aplicado", "Conversión de campañas"],
  },
  {
    id: "operacion",
    title: "Operación",
    description: "Métricas operativas de acceso y validación en puerta.",
    icon: "settings",
    accent: "slate",
    illustration: "checks",
    checklist: ["Accesos por puerta", "Validaciones por hora", "Incidencias", "Entradas inválidas"],
  },
];

const PERIOD = "1 oct 2026 - 31 oct 2026";
const AUTHOR = "Porfirio Castillo";

export const recentReports: RecentReport[] = [
  { id: "rr1", name: "Ventas por evento", type: "ventas", period: PERIOD, author: AUTHOR, date: "18 oct 2026", format: "pdf" },
  { id: "rr2", name: "Asistencia por localidad", type: "asistencia", period: PERIOD, author: AUTHOR, date: "17 oct 2026", format: "excel" },
  { id: "rr3", name: "Recaudo por método de pago", type: "recaudo", period: PERIOD, author: AUTHOR, date: "16 oct 2026", format: "pdf" },
  { id: "rr4", name: "Ocupación por localidad", type: "localidades", period: PERIOD, author: AUTHOR, date: "15 oct 2026", format: "excel" },
  { id: "rr5", name: "Rendimiento de promociones", type: "promociones", period: PERIOD, author: AUTHOR, date: "14 oct 2026", format: "pdf" },
];

export async function getReportesData(): Promise<ReportesData> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { reportTypes, recentReports };
}
