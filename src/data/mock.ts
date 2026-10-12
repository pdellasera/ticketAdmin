import { crests } from "./crests";
import { formatCount, formatMoneyCO } from "../lib/format";

export type Kpi = {
  id: string;
  title: string;
  value: string;
  delta: number;
  icon: "ticket" | "money" | "orders" | "users";
  color: "blue" | "green" | "violet" | "orange";
  sparkline: number[];
};

export type SalesPoint = {
  label: string;
  fullLabel: string;
  entradas: number;
  ingresos: number;
};

export type Team = { name: string; short: string; color: string; crest: string };

export type UpcomingEvent = {
  id: string;
  day: string;
  month: string;
  home: Team;
  away: Team;
  venue: string;
  time: string;
  soldPct: number;
};

export type LastEvent = {
  day: string;
  month: string;
  home: Team;
  away: Team;
  venue: string;
  status: string;
  ticketsSold: number;
  capacity: number;
  revenue: number;
  attendees: number;
  attendancePct: number;
};

export type OccupancyZone = { name: string; pct: number; color: string };

export type Activity = {
  id: string;
  title: string;
  description: string;
  time: string;
  variant: "blue" | "green" | "red" | "violet";
  icon: "receipt" | "check" | "refresh" | "calendar";
};

export const kpis: Kpi[] = [
  {
    id: "tickets",
    title: "Entradas vendidas",
    value: "32,450",
    delta: 18,
    icon: "ticket",
    color: "blue",
    sparkline: [12, 18, 14, 22, 20, 26, 30, 28, 34, 38],
  },
  {
    id: "revenue",
    title: "Ingresos totales",
    value: "$ 342.500.000",
    delta: 22,
    icon: "money",
    color: "green",
    sparkline: [10, 14, 12, 20, 24, 22, 30, 34, 32, 40],
  },
  {
    id: "orders",
    title: "Pedidos",
    value: "3,421",
    delta: 12,
    icon: "orders",
    color: "violet",
    sparkline: [8, 12, 10, 16, 14, 18, 22, 20, 24, 26],
  },
  {
    id: "attendees",
    title: "Asistentes validados",
    value: "28,912",
    delta: 16,
    icon: "users",
    color: "orange",
    sparkline: [14, 18, 16, 20, 24, 28, 26, 30, 32, 36],
  },
];

export const salesSeries: Record<"diario" | "semanal" | "mensual", SalesPoint[]> = {
  diario: [
    { label: "1 oct", fullLabel: "1 oct 2026", entradas: 340, ingresos: 8200000 },
    { label: "3 oct", fullLabel: "3 oct 2026", entradas: 520, ingresos: 11800000 },
    { label: "5 oct", fullLabel: "5 oct 2026", entradas: 780, ingresos: 16400000 },
    { label: "8 oct", fullLabel: "8 oct 2026", entradas: 620, ingresos: 13600000 },
    { label: "10 oct", fullLabel: "10 oct 2026", entradas: 940, ingresos: 21000000 },
    { label: "13 oct", fullLabel: "13 oct 2026", entradas: 1240, ingresos: 28600000 },
    { label: "15 oct", fullLabel: "15 oct 2026", entradas: 1080, ingresos: 24200000 },
    { label: "18 oct", fullLabel: "18 oct 2026", entradas: 1452, ingresos: 34250000 },
    { label: "20 oct", fullLabel: "20 oct 2026", entradas: 1260, ingresos: 29800000 },
    { label: "23 oct", fullLabel: "23 oct 2026", entradas: 1180, ingresos: 27000000 },
    { label: "25 oct", fullLabel: "25 oct 2026", entradas: 890, ingresos: 20400000 },
    { label: "28 oct", fullLabel: "28 oct 2026", entradas: 960, ingresos: 21900000 },
    { label: "31 oct", fullLabel: "31 oct 2026", entradas: 640, ingresos: 14800000 },
  ],
  semanal: [
    { label: "Sem 1", fullLabel: "Semana 1", entradas: 2100, ingresos: 48000000 },
    { label: "Sem 2", fullLabel: "Semana 2", entradas: 3600, ingresos: 81000000 },
    { label: "Sem 3", fullLabel: "Semana 3", entradas: 4400, ingresos: 99000000 },
    { label: "Sem 4", fullLabel: "Semana 4", entradas: 3900, ingresos: 88000000 },
    { label: "Sem 5", fullLabel: "Semana 5", entradas: 2600, ingresos: 59000000 },
  ],
  mensual: [
    { label: "Jun", fullLabel: "Junio 2026", entradas: 14200, ingresos: 320000000 },
    { label: "Jul", fullLabel: "Julio 2026", entradas: 18600, ingresos: 410000000 },
    { label: "Ago", fullLabel: "Agosto 2026", entradas: 22100, ingresos: 465000000 },
    { label: "Sep", fullLabel: "Septiembre 2026", entradas: 20500, ingresos: 442000000 },
    { label: "Oct", fullLabel: "Octubre 2026", entradas: 32450, ingresos: 342500000 },
  ],
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "e1",
    day: "18",
    month: "OCT",
    home: { name: "Árabe Unido", short: "DAU", color: "#1d4ed8", crest: crests.arabeUnido },
    away: { name: "Tauro FC", short: "TFC", color: "#0f172a", crest: crests.tauro },
    venue: "Estadio Rommel Fernández Gutiérrez",
    time: "7:30 PM",
    soldPct: 72,
  },
  {
    id: "e2",
    day: "25",
    month: "OCT",
    home: { name: "San Francisco FC", short: "SFFC", color: "#dc2626", crest: crests.sanFrancisco },
    away: { name: "Herrera FC", short: "HFC", color: "#eab308", crest: crests.herrera },
    venue: "Estadio Agustín \"Muquita\" Sánchez",
    time: "6:00 PM",
    soldPct: 54,
  },
  {
    id: "e3",
    day: "31",
    month: "OCT",
    home: { name: "Sporting San Miguelito", short: "SSM", color: "#111827", crest: crests.sporting },
    away: { name: "CD Universitario", short: "CDU", color: "#2563eb", crest: crests.cdu },
    venue: "Estadio Los Andes",
    time: "8:00 PM",
    soldPct: 38,
  },
];

export const lastEvent: LastEvent = {
  day: "28",
  month: "SEP",
  home: { name: "Veraguas United FC", short: "VU", color: "#1e40af", crest: crests.veraguas },
  away: { name: "Tauro FC", short: "TFC", color: "#0f172a", crest: crests.tauro },
  venue: "Estadio Rommel Fernández Gutiérrez",
  status: "Finalizado",
  ticketsSold: 28600,
  capacity: 40000,
  revenue: 298450000,
  attendees: 26342,
  attendancePct: 92,
};

export const occupancyZones: OccupancyZone[] = [
  { name: "Norte", pct: 78, color: "#3b82f6" },
  { name: "Sur", pct: 65, color: "#22c55e" },
  { name: "Oriental", pct: 52, color: "#f97316" },
  { name: "Occidental", pct: 28, color: "#ef4444" },
  { name: "VIP", pct: 90, color: "#8b5cf6" },
];

export const recentActivity: Activity[] = [
  {
    id: "a1",
    title: "Nuevo pedido #58421",
    description: "2 entradas - Árabe Unido vs Tauro FC",
    time: "Hace 5 min",
    variant: "blue",
    icon: "receipt",
  },
  {
    id: "a2",
    title: "Entrada validada",
    description: "Zona Norte - Puerta 1",
    time: "Hace 12 min",
    variant: "green",
    icon: "check",
  },
  {
    id: "a3",
    title: "Nuevo pedido #58420",
    description: "4 entradas - San Francisco FC vs Herrera FC",
    time: "Hace 28 min",
    variant: "blue",
    icon: "receipt",
  },
  {
    id: "a4",
    title: "Reembolso procesado",
    description: "Pedido #58410",
    time: "Hace 1 hora",
    variant: "red",
    icon: "refresh",
  },
  {
    id: "a5",
    title: "Evento creado",
    description: "Sporting San Miguelito vs CD Universitario",
    time: "Hace 2 horas",
    variant: "violet",
    icon: "calendar",
  },
];

export const stateOptions = [
  { value: "all", label: "Todos los estados" },
  { value: "active", label: "Activo" },
  { value: "soldout", label: "Agotado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "finished", label: "Finalizado" },
];

export type DashboardData = {
  kpis: Kpi[];
  salesSeries: typeof salesSeries;
  upcomingEvents: UpcomingEvent[];
  lastEvent: LastEvent;
  occupancyZones: OccupancyZone[];
  recentActivity: Activity[];
};

export async function getDashboardData(): Promise<DashboardData> {
  await new Promise((resolve) => setTimeout(resolve, 450));
  return {
    kpis,
    salesSeries,
    upcomingEvents,
    lastEvent,
    occupancyZones,
    recentActivity,
  };
}

export type EventStatus = "proximo" | "encurso" | "finalizado" | "cancelado";

export type EventListItem = {
  id: string;
  day: string;
  month: string;
  weekday: string;
  home: Team;
  away: Team;
  competition: string;
  venue: string;
  stadiumKey: "rommel" | "muquita" | "andes";
  time: string;
  sold: number;
  capacity: number;
  status: EventStatus;
};

export type EventKpi = {
  id: string;
  title: string;
  value: string;
  icon: "calendar" | "ticket" | "money" | "users";
  color: "blue" | "green" | "violet" | "orange";
  sparkline: number[];
  delta?: number;
  footerText?: string;
};

export type EventDetailStat = {
  id: string;
  label: string;
  value: string;
  pct: number | null;
  icon: "ticket" | "money" | "orders" | "users";
  color: "blue" | "green" | "violet" | "orange";
};

export type ZoneSale = { name: string; color: string; sold: number; capacity: number };
export type DailySale = { label: string; value: number };

export type TicketType = {
  id: string;
  name: string;
  price: number;
  sold: number;
  capacity: number;
  isCourtesy?: boolean;
};

export type AttendeeType = "delegado" | "vip" | "autoridad" | "directivo";

export type SpecialAttendee = {
  id: string;
  name: string;
  role: string;
  type: AttendeeType;
  zone: string;
  guests: number;
  status: "confirmado" | "pendiente";
};

export type EventDetail = {
  competition: string;
  dateLong: string;
  home: Team;
  away: Team;
  venue: string;
  city: string;
  time: string;
  stats: EventDetailStat[];
  zoneSales: ZoneSale[];
  dailySales: DailySale[];
  ticketTypes: TicketType[];
  attendees: SpecialAttendee[];
};

export type StadiumZone = {
  name: string;
  color: string;
  capacity: number;
};

export type Stadium = {
  key: EventListItem["stadiumKey"];
  name: string;
  city: string;
  capacity: number;
  opened: number;
  surface: string;
  zones: StadiumZone[];
};

export const stadiums: Record<EventListItem["stadiumKey"], Stadium> = {
  rommel: {
    key: "rommel",
    name: "Estadio Rommel Fernández Gutiérrez",
    city: "Ciudad de Panamá, Panamá",
    capacity: 40000,
    opened: 1970,
    surface: "Césped natural",
    zones: [
      { name: "Norte", color: "#3b82f6", capacity: 12000 },
      { name: "Sur", color: "#22c55e", capacity: 9000 },
      { name: "Oriental", color: "#f97316", capacity: 8000 },
      { name: "Occidental", color: "#ef4444", capacity: 8000 },
      { name: "VIP", color: "#8b5cf6", capacity: 3000 },
    ],
  },
  muquita: {
    key: "muquita",
    name: "Estadio Agustín \"Muquita\" Sánchez",
    city: "La Chorrera, Panamá Oeste",
    capacity: 30000,
    opened: 2010,
    surface: "Césped natural",
    zones: [
      { name: "Norte", color: "#3b82f6", capacity: 9000 },
      { name: "Sur", color: "#22c55e", capacity: 7000 },
      { name: "Oriental", color: "#f97316", capacity: 6000 },
      { name: "Occidental", color: "#ef4444", capacity: 5000 },
      { name: "VIP", color: "#8b5cf6", capacity: 3000 },
    ],
  },
  andes: {
    key: "andes",
    name: "Estadio Los Andes",
    city: "San Miguelito, Panamá",
    capacity: 35000,
    opened: 1988,
    surface: "Césped sintético",
    zones: [
      { name: "Norte", color: "#3b82f6", capacity: 10500 },
      { name: "Sur", color: "#22c55e", capacity: 8000 },
      { name: "Oriental", color: "#f97316", capacity: 7000 },
      { name: "Occidental", color: "#ef4444", capacity: 6500 },
      { name: "VIP", color: "#8b5cf6", capacity: 3000 },
    ],
  },
};

const T = {
  arabe: { name: "Árabe Unido", short: "DAU", color: "#1d4ed8", crest: crests.arabeUnido },
  tauro: { name: "Tauro FC", short: "TFC", color: "#0f172a", crest: crests.tauro },
  sf: { name: "San Francisco FC", short: "SFFC", color: "#dc2626", crest: crests.sanFrancisco },
  herrera: { name: "Herrera FC", short: "HFC", color: "#eab308", crest: crests.herrera },
  sporting: { name: "Sporting San Miguelito", short: "SSM", color: "#111827", crest: crests.sporting },
  cdu: { name: "CD Universitario", short: "CDU", color: "#2563eb", crest: crests.cdu },
  veraguas: { name: "Veraguas United FC", short: "VU", color: "#1e40af", crest: crests.veraguas },
} satisfies Record<string, Team>;

export const eventsKpis: EventKpi[] = [
  { id: "ev", title: "Total eventos", value: "18", icon: "calendar", color: "blue", sparkline: [14, 18, 16, 20, 22, 18, 24, 22, 26, 28], footerText: "4 próximos · 12 finalizados" },
  { id: "ent", title: "Entradas vendidas", value: "286,450", icon: "ticket", color: "blue", sparkline: [12, 18, 14, 22, 20, 26, 30, 28, 34, 38], delta: 18 },
  { id: "ing", title: "Ingresos totales", value: "$ 2.850.450.000", icon: "money", color: "green", sparkline: [10, 14, 12, 20, 24, 22, 30, 34, 32, 40], delta: 22 },
  { id: "asi", title: "Asistencia total", value: "256,342", icon: "users", color: "violet", sparkline: [14, 18, 16, 20, 24, 28, 26, 30, 32, 36], delta: 16 },
];

export const stadiumOptions = [
  { value: "all", label: "Todos los estadios" },
  { value: "rommel", label: "Estadio Rommel Fernández Gutiérrez" },
  { value: "muquita", label: "Estadio Agustín \"Muquita\" Sánchez" },
  { value: "andes", label: "Estadio Los Andes" },
];

export const eventTypeOptions = [
  { value: "all", label: "Todos los tipos" },
  { value: "liga", label: "Liga Panameña de Fútbol" },
  { value: "copa", label: "Copa Panamá" },
  { value: "concierto", label: "Concierto" },
];

export const eventDateOptions = [
  { value: "all", label: "Todas las fechas" },
  { value: "hoy", label: "Hoy" },
  { value: "semana", label: "Esta semana" },
  { value: "mes", label: "Este mes" },
];

const ROM = "Estadio Rommel Fernández Gutiérrez";
const MUQ = "Estadio Agustín \"Muquita\" Sánchez";
const AND = "Estadio Los Andes";

const venueKey = (v: string): EventListItem["stadiumKey"] => (v === ROM ? "rommel" : v === MUQ ? "muquita" : "andes");

const ev = (
  id: string,
  day: string,
  month: string,
  weekday: string,
  home: Team,
  away: Team,
  fecha: number,
  venue: string,
  time: string,
  sold: number,
  capacity: number,
  status: EventStatus,
): EventListItem => ({
  id,
  day,
  month,
  weekday,
  home,
  away,
  competition: `Liga Panameña de Fútbol - Fecha ${fecha}`,
  venue,
  stadiumKey: venueKey(venue),
  time,
  sold,
  capacity,
  status,
});

export const eventsList: EventListItem[] = [
  ev("e1", "18", "OCT", "SAB", T.arabe, T.tauro, 15, ROM, "7:30 PM", 28600, 40000, "proximo"),
  ev("e2", "25", "OCT", "SAB", T.sf, T.herrera, 16, MUQ, "6:00 PM", 21450, 40000, "proximo"),
  ev("e3", "31", "OCT", "VIE", T.sporting, T.cdu, 17, AND, "8:00 PM", 15200, 40000, "proximo"),
  ev("e4", "05", "SEP", "VIE", T.veraguas, T.tauro, 14, ROM, "8:00 PM", 38450, 40000, "finalizado"),
  ev("e5", "28", "AGO", "LUN", T.arabe, T.sf, 13, ROM, "6:30 PM", 32120, 40000, "finalizado"),
  ev("e6", "20", "AGO", "MAR", T.cdu, T.herrera, 12, AND, "3:00 PM", 28900, 35000, "finalizado"),
  ev("e7", "12", "AGO", "JUE", T.tauro, T.sporting, 11, ROM, "4:00 PM", 26800, 35000, "finalizado"),
  ev("e8", "05", "AGO", "MIE", T.sf, T.cdu, 10, MUQ, "7:00 PM", 19500, 30000, "finalizado"),
  ev("e9", "28", "JUL", "DOM", T.herrera, T.veraguas, 9, AND, "3:30 PM", 14200, 25000, "finalizado"),
  ev("e10", "07", "NOV", "SAB", T.tauro, T.sf, 18, ROM, "6:00 PM", 8400, 40000, "proximo"),
  ev("e11", "20", "JUL", "LUN", T.cdu, T.arabe, 8, AND, "5:00 PM", 22100, 35000, "finalizado"),
  ev("e12", "12", "JUL", "SAB", T.sporting, T.herrera, 7, AND, "8:00 PM", 0, 30000, "cancelado"),
  ev("e13", "05", "JUL", "DOM", T.veraguas, T.cdu, 6, AND, "7:30 PM", 9800, 25000, "finalizado"),
  ev("e14", "28", "JUN", "SAB", T.arabe, T.herrera, 5, ROM, "5:30 PM", 25100, 40000, "finalizado"),
  ev("e15", "20", "JUN", "JUE", T.tauro, T.veraguas, 4, ROM, "4:30 PM", 30200, 40000, "finalizado"),
  ev("e16", "12", "JUN", "MIE", T.sf, T.sporting, 3, MUQ, "6:00 PM", 17800, 30000, "finalizado"),
  ev("e17", "05", "JUN", "DOM", T.herrera, T.tauro, 2, AND, "7:00 PM", 0, 35000, "cancelado"),
  ev("e18", "28", "MAY", "MAR", T.cdu, T.sf, 1, AND, "3:00 PM", 15600, 30000, "finalizado"),
];

const specialAttendeesTemplate: SpecialAttendee[] = [
  { id: "sa1", name: "Ricardo Chérigo", role: "Delegado de la LPF", type: "delegado", zone: "Palco", guests: 1, status: "confirmado" },
  { id: "sa2", name: "Manuel Arias", role: "Presidente de FEPAFUT", type: "autoridad", zone: "VIP", guests: 2, status: "confirmado" },
  { id: "sa3", name: "Julissa Alvarado", role: "Delegada de seguridad", type: "delegado", zone: "Palco", guests: 0, status: "confirmado" },
  { id: "sa4", name: "Aurelio González", role: "Comisionado de árbitros", type: "delegado", zone: "Palco", guests: 1, status: "confirmado" },
  { id: "sa5", name: "Estrella Archibold", role: "Patrocinadora oficial", type: "vip", zone: "VIP", guests: 2, status: "confirmado" },
  { id: "sa6", name: "Luis Pimentel", role: "Presidente del club local", type: "directivo", zone: "VIP", guests: 3, status: "confirmado" },
  { id: "sa7", name: "María Isabel Villarreal", role: "Invitada VIP", type: "vip", zone: "VIP", guests: 1, status: "pendiente" },
  { id: "sa8", name: "Ernesto Córdoba", role: "Alcalde", type: "autoridad", zone: "Palco", guests: 2, status: "confirmado" },
  { id: "sa9", name: "Gian Castillero", role: "Director de la LPF", type: "directivo", zone: "Palco", guests: 1, status: "pendiente" },
  { id: "sa10", name: "Paola Ríos", role: "Invitada VIP", type: "vip", zone: "VIP", guests: 0, status: "confirmado" },
];

export const eventDetail: EventDetail = {
  competition: "Liga Panameña de Fútbol - Fecha 15",
  dateLong: "Sábado, 18 de octubre de 2026",
  home: T.arabe,
  away: T.tauro,
  venue: ROM,
  city: "Ciudad de Panamá, Panamá",
  time: "7:30 PM",
  stats: [
    { id: "s1", label: "Entradas vendidas", value: "28,600 / 40,000", pct: 72, icon: "ticket", color: "blue" },
    { id: "s2", label: "Ingresos", value: "$ 298.450.000", pct: 72, icon: "money", color: "green" },
    { id: "s3", label: "Pedidos", value: "4,215", pct: null, icon: "orders", color: "violet" },
    { id: "s4", label: "Asistencia estimada", value: "31,200", pct: 79, icon: "users", color: "orange" },
  ],
  zoneSales: [
    { name: "Norte", color: "#3b82f6", sold: 12450, capacity: 16000 },
    { name: "Sur", color: "#22c55e", sold: 7800, capacity: 12000 },
    { name: "Oriental", color: "#f97316", sold: 6240, capacity: 12000 },
    { name: "Occidental", color: "#ef4444", sold: 3360, capacity: 12000 },
    { name: "VIP", color: "#8b5cf6", sold: 2250, capacity: 2500 },
  ],
  dailySales: [
    { label: "1 oct", value: 1800 },
    { label: "3 oct", value: 2600 },
    { label: "5 oct", value: 3200 },
    { label: "8 oct", value: 2400 },
    { label: "10 oct", value: 4100 },
    { label: "13 oct", value: 5200 },
    { label: "15 oct", value: 4600 },
    { label: "18 oct", value: 5800 },
    { label: "20 oct", value: 4300 },
    { label: "23 oct", value: 3600 },
    { label: "25 oct", value: 2900 },
    { label: "28 oct", value: 3300 },
    { label: "31 oct", value: 2100 },
  ],
  ticketTypes: [
    { id: "tt1", name: "General", price: 10, sold: 12870, capacity: 18000 },
    { id: "tt2", name: "Preferencial", price: 25, sold: 5720, capacity: 8000 },
    { id: "tt3", name: "Palco", price: 80, sold: 2288, capacity: 3200 },
    { id: "tt4", name: "VIP", price: 50, sold: 2002, capacity: 2800 },
    { id: "tt5", name: "Cortesía", price: 0, sold: 5720, capacity: 8000, isCourtesy: true },
  ],
  attendees: specialAttendeesTemplate,
};

const MONTH_ES: Record<string, string> = {
  ENE: "enero",
  FEB: "febrero",
  MAR: "marzo",
  ABR: "abril",
  MAY: "mayo",
  JUN: "junio",
  JUL: "julio",
  AGO: "agosto",
  SEP: "septiembre",
  OCT: "octubre",
  NOV: "noviembre",
  DIC: "diciembre",
};

const WEEKDAY_ES: Record<string, string> = {
  LUN: "Lunes",
  MAR: "Martes",
  MIE: "Miércoles",
  JUE: "Jueves",
  VIE: "Viernes",
  SAB: "Sábado",
  DOM: "Domingo",
};

const AVG_PRICE = 10435;

export function buildEventDetail(item: EventListItem): EventDetail {
  const pct = Math.round((item.sold / item.capacity) * 100);
  const ingresos = item.sold * AVG_PRICE;
  const pedidos = Math.round(item.sold / 6.8);
  const asistencia = Math.min(item.capacity, Math.round(item.sold * 1.09));

  const stadium = stadiums[item.stadiumKey];

  const zoneSales: ZoneSale[] = stadium.zones.map((z) => ({
    name: z.name,
    color: z.color,
    sold: Math.round((item.sold * z.capacity) / stadium.capacity),
    capacity: z.capacity,
  }));

  const dailyBase = [1800, 2600, 3200, 2400, 4100, 5200, 4600, 5800, 4300, 3600, 2900, 3300, 2100];
  const dailyLabels = ["1 oct", "3 oct", "5 oct", "8 oct", "10 oct", "13 oct", "15 oct", "18 oct", "20 oct", "23 oct", "25 oct", "28 oct", "31 oct"];
  const scale = item.sold / 28600;
  const dailySales: DailySale[] = dailyBase.map((v, i) => ({
    label: dailyLabels[i],
    value: Math.round(v * scale),
  }));

  const ticketTemplate: { name: string; share: number; price: number; isCourtesy?: boolean }[] = [
    { name: "General", share: 0.45, price: 10 },
    { name: "Preferencial", share: 0.2, price: 25 },
    { name: "Palco", share: 0.08, price: 80 },
    { name: "VIP", share: 0.07, price: 50 },
    { name: "Cortesía", share: 0.2, price: 0, isCourtesy: true },
  ];

  const ticketTypes: TicketType[] = ticketTemplate.map((t, i) => ({
    id: `tt${i + 1}`,
    name: t.name,
    price: t.price,
    sold: Math.round(item.sold * t.share),
    capacity: Math.round(item.capacity * t.share),
    isCourtesy: t.isCourtesy,
  }));

  return {
    competition: item.competition,
    dateLong: `${WEEKDAY_ES[item.weekday] ?? item.weekday}, ${parseInt(item.day, 10)} de ${MONTH_ES[item.month] ?? item.month} de 2026`,
    home: item.home,
    away: item.away,
    venue: item.venue,
    city: stadium.city,
    time: item.time,
    stats: [
      {
        id: "s1",
        label: "Entradas vendidas",
        value: `${formatCount(item.sold)} / ${formatCount(item.capacity)}`,
        pct,
        icon: "ticket",
        color: "blue",
      },
      {
        id: "s2",
        label: "Ingresos",
        value: formatMoneyCO(ingresos),
        pct,
        icon: "money",
        color: "green",
      },
      {
        id: "s3",
        label: "Pedidos",
        value: formatCount(pedidos),
        pct: null,
        icon: "orders",
        color: "violet",
      },
      {
        id: "s4",
        label: "Asistencia estimada",
        value: formatCount(asistencia),
        pct: Math.round((asistencia / item.capacity) * 100),
        icon: "users",
        color: "orange",
      },
    ],
    zoneSales,
    dailySales,
    ticketTypes,
    attendees: specialAttendeesTemplate,
  };
}

export type EventsData = {
  kpis: EventKpi[];
  events: EventListItem[];
  totalEvents: number;
  eventDetail: EventDetail;
};

export async function getEventsData(): Promise<EventsData> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { kpis: eventsKpis, events: eventsList, totalEvents: eventsList.length, eventDetail };
}

