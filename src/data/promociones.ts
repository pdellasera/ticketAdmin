import { crests } from "./crests";

export type PromoStatus = "activa" | "programada" | "pausada" | "finalizada";
export type PromoType = "por-tiempo" | "paquete" | "segmento" | "cantidad" | "aliado";

export type PromoKpi = {
  id: string;
  title: string;
  value: string;
  icon: "tag" | "percent" | "money" | "users";
  color: "blue" | "green" | "violet" | "orange";
  sparkline: number[];
  spark?: "bars" | "line";
  delta: number;
  deltaDir?: "up" | "down";
};

export type PromoThumb = { name: string; crest: string; color: string };

export type PromoDetailStat = {
  id: string;
  label: string;
  value: string;
  sub?: string;
  pct?: number;
  icon: "tag" | "money" | "users" | "percent";
  color: "blue" | "green" | "violet" | "orange";
};

export type Promo = {
  id: string;
  name: string;
  code: string;
  type: PromoType;
  event: string;
  eventKey: string;
  stadium: string;
  stadiumKey: "rommel" | "muquita" | "andes" | "all";
  periodLabel: string;
  periodFull: string;
  discount: number;
  status: PromoStatus;
  sales: number;
  thumb: PromoThumb | null;
  banner: { title: string; subtitle: string };
  description: string;
  limit: string;
  perUserLimit: string;
  conditions: string[];
  stats: {
    sold: number;
    capacity: number;
    revenue: number;
    uniqueUsers: number;
    conversion: number;
  };
};

export type PromocionesData = {
  kpis: PromoKpi[];
  promos: Promo[];
  total: number;
};

const DAU: PromoThumb = { name: "Árabe Unido", crest: crests.arabeUnido, color: "#1d4ed8" };
const TFC: PromoThumb = { name: "Tauro FC", crest: crests.tauro, color: "#0f172a" };
const SFFC: PromoThumb = { name: "San Francisco FC", crest: crests.sanFrancisco, color: "#dc2626" };
const SSM: PromoThumb = { name: "Sporting San Miguelito", crest: crests.sporting, color: "#111827" };

export const promosKpis: PromoKpi[] = [
  { id: "p1", title: "Promociones activas", value: "6", icon: "tag", color: "violet", sparkline: [8, 10, 9, 12, 11, 14, 13, 16, 15, 18], delta: 50 },
  { id: "p2", title: "Entradas vendidas", value: "24,560", icon: "users", color: "green", sparkline: [12, 18, 14, 22, 20, 26, 30, 28, 34, 38], delta: 28 },
  { id: "p3", title: "Ingresos generados", value: "$ 412.350.000", icon: "money", color: "orange", sparkline: [10, 14, 12, 20, 24, 22, 30, 34, 32, 40], delta: 35 },
  { id: "p4", title: "Descuento promedio", value: "18%", icon: "percent", color: "blue", spark: "line", sparkline: [30, 28, 26, 24, 22, 21, 20, 19, 18, 18], delta: 5, deltaDir: "down" },
];

export const promoTypeOptions = [
  { value: "all", label: "Todos los tipos" },
  { value: "por-tiempo", label: "Por tiempo" },
  { value: "paquete", label: "Paquete" },
  { value: "segmento", label: "Segmento" },
  { value: "cantidad", label: "Cantidad" },
  { value: "aliado", label: "Aliado" },
];

export const promoEventOptions = [
  { value: "all", label: "Todos los eventos" },
  { value: "e1", label: "Árabe Unido vs Tauro FC" },
  { value: "e2", label: "San Francisco FC vs Herrera FC" },
  { value: "e3", label: "Sporting San Miguelito vs CD Universitario" },
  { value: "e7", label: "Tauro FC vs Sporting San Miguelito" },
  { value: "e10", label: "Tauro FC vs San Francisco FC" },
];

export const promoDateOptions = [
  { value: "all", label: "Todas las fechas" },
  { value: "hoy", label: "Hoy" },
  { value: "semana", label: "Esta semana" },
  { value: "mes", label: "Este mes" },
];

export const promosList: Promo[] = [
  {
    id: "promo1",
    name: "Early Bird",
    code: "EARLY25",
    type: "por-tiempo",
    event: "Árabe Unido vs Tauro FC",
    eventKey: "e1",
    stadium: "Estadio Rommel Fernández Gutiérrez",
    stadiumKey: "rommel",
    periodLabel: "10 oct - 15 oct",
    periodFull: "10 oct 2026 - 15 oct 2026",
    discount: 20,
    status: "activa",
    sales: 8450,
    thumb: DAU,
    banner: { title: "EARLY BIRD", subtitle: "ASEGURA TU ENTRADA AL MEJOR PRECIO" },
    description: "Compra tus entradas con anticipación y obtén un 20% de descuento sobre el precio regular.",
    limit: "2,000 entradas",
    perUserLimit: "Máximo 4 entradas",
    conditions: ["Válido en todas las localidades", "No acumulable con otras promociones"],
    stats: { sold: 8450, capacity: 20000, revenue: 126750000, uniqueUsers: 6230, conversion: 18 },
  },
  {
    id: "promo2",
    name: "Combo Familiar",
    code: "FAMILIA",
    type: "paquete",
    event: "San Francisco FC vs Herrera FC",
    eventKey: "e2",
    stadium: "Estadio Agustín \"Muquita\" Sánchez",
    stadiumKey: "muquita",
    periodLabel: "28 oct - 31 oct",
    periodFull: "28 oct 2026 - 31 oct 2026",
    discount: 25,
    status: "activa",
    sales: 5230,
    thumb: SFFC,
    banner: { title: "COMBO FAMILIAR", subtitle: "VIVE EL PARTIDO EN FAMILIA" },
    description: "Compra 4 entradas y paga solo 3. Ideal para disfrutar el partido en familia.",
    limit: "5,000 entradas",
    perUserLimit: "Máximo 8 entradas",
    conditions: ["Aplica sobre localidades Norte y Sur", "Válido por grupo familiar"],
    stats: { sold: 5230, capacity: 16000, revenue: 78450000, uniqueUsers: 3210, conversion: 22 },
  },
  {
    id: "promo3",
    name: "VIP Experience",
    code: "VIP2026",
    type: "paquete",
    event: "Todos los eventos",
    eventKey: "all",
    stadium: "Todos los estadios",
    stadiumKey: "all",
    periodLabel: "1 oct - 31 dic",
    periodFull: "1 oct 2026 - 31 dic 2026",
    discount: 15,
    status: "activa",
    sales: 2120,
    thumb: null,
    banner: { title: "VIP EXPERIENCE", subtitle: "ACCESO EXCLUSIVO + PARKING" },
    description: "Accede a la zona VIP con estacionamiento preferencial y atención personalizada.",
    limit: "1,000 entradas",
    perUserLimit: "Máximo 2 entradas",
    conditions: ["Solo zona VIP", "Incluye estacionamiento"],
    stats: { sold: 2120, capacity: 6000, revenue: 63600000, uniqueUsers: 1680, conversion: 15 },
  },
  {
    id: "promo4",
    name: "Estudiantes",
    code: "ESTU20",
    type: "segmento",
    event: "Sporting San Miguelito vs CD Universitario",
    eventKey: "e3",
    stadium: "Estadio Los Andes",
    stadiumKey: "andes",
    periodLabel: "25 oct - 25 oct",
    periodFull: "25 oct 2026",
    discount: 20,
    status: "programada",
    sales: 0,
    thumb: SSM,
    banner: { title: "ESTUDIANTES", subtitle: "PROMOCIÓN UNIVERSITARIA" },
    description: "Presenta tu carné universitario y obtén un 20% de descuento en tu entrada.",
    limit: "3,000 entradas",
    perUserLimit: "Máximo 1 entrada",
    conditions: ["Carné universitario vigente", "Solo localidad Sur"],
    stats: { sold: 0, capacity: 12000, revenue: 0, uniqueUsers: 0, conversion: 0 },
  },
  {
    id: "promo5",
    name: "Tercera Edad",
    code: "SENIOR",
    type: "segmento",
    event: "Todos los eventos",
    eventKey: "all",
    stadium: "Todos los estadios",
    stadiumKey: "all",
    periodLabel: "1 oct - 31 oct",
    periodFull: "1 oct 2026 - 31 oct 2026",
    discount: 30,
    status: "activa",
    sales: 3560,
    thumb: null,
    banner: { title: "TERCERA EDAD", subtitle: "MAYORES DE 60 AÑOS" },
    description: "Adultos mayores de 60 años disfrutan de un 30% de descuento en todas las localidades.",
    limit: "6,000 entradas",
    perUserLimit: "Máximo 2 entradas",
    conditions: ["Cédula o jubilación", "Todas las localidades"],
    stats: { sold: 3560, capacity: 24000, revenue: 53400000, uniqueUsers: 2980, conversion: 19 },
  },
  {
    id: "promo6",
    name: "Último Minuto",
    code: "ULTIMO",
    type: "por-tiempo",
    event: "Tauro FC vs San Francisco FC",
    eventKey: "e10",
    stadium: "Estadio Rommel Fernández Gutiérrez",
    stadiumKey: "rommel",
    periodLabel: "30 oct - 30 oct",
    periodFull: "30 oct 2026",
    discount: 15,
    status: "pausada",
    sales: 980,
    thumb: TFC,
    banner: { title: "ÚLTIMO MINUTO", subtitle: "OFERTA RELÁMPAGO" },
    description: "Descuento de último minuto para llenar el estadio antes del inicio del partido.",
    limit: "2,500 entradas",
    perUserLimit: "Máximo 4 entradas",
    conditions: ["Aplica 24 horas antes del partido", "Sujeto a disponibilidad"],
    stats: { sold: 980, capacity: 8000, revenue: 14700000, uniqueUsers: 860, conversion: 12 },
  },
  {
    id: "promo7",
    name: "Grupos +10",
    code: "GRUPO10",
    type: "cantidad",
    event: "Tauro FC vs Sporting San Miguelito",
    eventKey: "e7",
    stadium: "Estadio Rommel Fernández Gutiérrez",
    stadiumKey: "rommel",
    periodLabel: "12 ago - 12 ago",
    periodFull: "12 ago 2026",
    discount: 25,
    status: "activa",
    sales: 3420,
    thumb: TFC,
    banner: { title: "GRUPOS +10", subtitle: "COMPRA CORPORATIVA" },
    description: "Para grupos de 10 personas o más, obtén un 25% de descuento por entrada.",
    limit: "4,000 entradas",
    perUserLimit: "Mínimo 10 entradas",
    conditions: ["Compra mínima de 10 entradas", "Coordinación con ventas"],
    stats: { sold: 3420, capacity: 10000, revenue: 51300000, uniqueUsers: 2140, conversion: 21 },
  },
  {
    id: "promo8",
    name: "Banco Aliado",
    code: "BANCO",
    type: "aliado",
    event: "Todos los eventos",
    eventKey: "all",
    stadium: "Todos los estadios",
    stadiumKey: "all",
    periodLabel: "1 oct - 31 dic",
    periodFull: "1 oct 2026 - 31 dic 2026",
    discount: 20,
    status: "finalizada",
    sales: 720,
    thumb: null,
    banner: { title: "BANCO ALIADO", subtitle: "PAGA CON TU TARJETA" },
    description: "Paga con tarjeta del banco aliado y obtén un 20% de descuento en tu compra.",
    limit: "8,000 entradas",
    perUserLimit: "Máximo 6 entradas",
    conditions: ["Tarjeta del banco aliado", "No acumulable con otras promociones"],
    stats: { sold: 720, capacity: 16000, revenue: 10800000, uniqueUsers: 610, conversion: 9 },
  },
];

export async function getPromocionesData(): Promise<PromocionesData> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { kpis: promosKpis, promos: promosList, total: promosList.length };
}


