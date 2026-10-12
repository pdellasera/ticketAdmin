import { crests } from "./crests";

export type RecaudoKpiColor = "green" | "blue" | "violet" | "orange";
export type RecaudoKpiIcon = "money" | "ticket" | "users" | "clock";

export type RecaudoKpi = {
  id: string;
  title: string;
  value: string;
  icon: RecaudoKpiIcon;
  color: RecaudoKpiColor;
  sparkline: number[];
  delta: number;
};

export type DailyRecaudoPoint = {
  label: string;
  fullLabel: string;
  recaudo: number;
  entradas: number;
};

export type RecaudoMethod =
  | "tarjeta-credito"
  | "tarjeta-debito"
  | "pse"
  | "efectivo"
  | "billetera"
  | "otros";

export type PaymentMethodSlice = {
  id: RecaudoMethod;
  label: string;
  color: string;
  pct: number;
  amount: number;
};

export type RecaudoTeam = { name: string; crest: string; color: string };

export type EventRecaudoRow = {
  id: string;
  home: RecaudoTeam;
  away: RecaudoTeam;
  date: string;
  tickets: number;
  revenue: number;
};

export type LocalityRecaudoRow = {
  id: string;
  name: string;
  color: string;
  tickets: number;
  revenue: number;
  pct: number;
};

export type RecaudoTransaction = {
  id: string;
  orderId: string;
  dateTime: string;
  customer: string;
  event: string;
  locality: string;
  quantity: number;
  method: RecaudoMethod;
  amount: number;
  status: "pagado";
  reference: string;
};

export type RecaudoData = {
  kpis: RecaudoKpi[];
  dailyRecaudo: DailyRecaudoPoint[];
  paymentMethods: PaymentMethodSlice[];
  recaudoByEvent: EventRecaudoRow[];
  recaudoByLocality: LocalityRecaudoRow[];
  transactions: RecaudoTransaction[];
};

const DAU: RecaudoTeam = { name: "Árabe Unido", crest: crests.arabeUnido, color: "#1d4ed8" };
const TFC: RecaudoTeam = { name: "Tauro FC", crest: crests.tauro, color: "#0f172a" };
const SFFC: RecaudoTeam = { name: "San Francisco FC", crest: crests.sanFrancisco, color: "#dc2626" };
const HFC: RecaudoTeam = { name: "Herrera FC", crest: crests.herrera, color: "#eab308" };
const SSM: RecaudoTeam = { name: "Sporting San Miguelito", crest: crests.sporting, color: "#111827" };
const CDU: RecaudoTeam = { name: "CD Universitario", crest: crests.cdu, color: "#2563eb" };
const VU: RecaudoTeam = { name: "Veraguas United FC", crest: crests.veraguas, color: "#1e40af" };

export const recaudoKpis: RecaudoKpi[] = [
  { id: "r1", title: "Recaudo total", value: "$ 412.350.000", icon: "money", color: "green", sparkline: [8, 12, 10, 16, 14, 20, 22, 26, 24, 30, 34], delta: 28 },
  { id: "r2", title: "Entradas pagadas", value: "26,842", icon: "ticket", color: "blue", sparkline: [10, 14, 12, 18, 16, 22, 26, 24, 28, 32, 36], delta: 24 },
  { id: "r3", title: "Pedidos pagados", value: "12,560", icon: "users", color: "violet", sparkline: [8, 10, 12, 10, 14, 18, 16, 20, 24, 22, 26], delta: 22 },
  { id: "r4", title: "Ticket promedio", value: "$ 15,350", icon: "clock", color: "orange", sparkline: [6, 8, 10, 9, 12, 14, 12, 16, 18, 17, 20], delta: 5 },
];

export const dailyRecaudo: DailyRecaudoPoint[] = [
  { label: "1 oct", fullLabel: "1 oct 2026", recaudo: 8200000, entradas: 340 },
  { label: "4 oct", fullLabel: "4 oct 2026", recaudo: 12400000, entradas: 560 },
  { label: "7 oct", fullLabel: "7 oct 2026", recaudo: 15100000, entradas: 710 },
  { label: "10 oct", fullLabel: "10 oct 2026", recaudo: 21000000, entradas: 940 },
  { label: "13 oct", fullLabel: "13 oct 2026", recaudo: 28600000, entradas: 1240 },
  { label: "16 oct", fullLabel: "16 oct 2026", recaudo: 31800000, entradas: 1720 },
  { label: "19 oct", fullLabel: "19 oct 2026", recaudo: 50500000, entradas: 3800 },
  { label: "22 oct", fullLabel: "22 oct 2026", recaudo: 29800000, entradas: 1260 },
  { label: "25 oct", fullLabel: "25 oct 2026", recaudo: 20400000, entradas: 890 },
  { label: "28 oct", fullLabel: "28 oct 2026", recaudo: 21900000, entradas: 960 },
  { label: "31 oct", fullLabel: "31 oct 2026", recaudo: 14800000, entradas: 640 },
];

export const paymentMethods: PaymentMethodSlice[] = [
  { id: "tarjeta-credito", label: "Tarjeta de crédito", color: "#2563eb", pct: 48, amount: 198420000 },
  { id: "tarjeta-debito", label: "Tarjeta de débito", color: "#7c3aed", pct: 22, amount: 90720000 },
  { id: "pse", label: "Transferencia / PSE", color: "#f97316", pct: 15, amount: 61850000 },
  { id: "efectivo", label: "Efectivo (taquilla)", color: "#f59e0b", pct: 8, amount: 32250000 },
  { id: "billetera", label: "Billetera digital", color: "#ef4444", pct: 5, amount: 20610000 },
  { id: "otros", label: "Otros", color: "#cbd5e1", pct: 2, amount: 8500000 },
];

export const recaudoByEvent: EventRecaudoRow[] = [
  { id: "re1", home: DAU, away: TFC, date: "18 oct 2026", tickets: 28600, revenue: 298450000 },
  { id: "re2", home: SFFC, away: HFC, date: "25 oct 2026", tickets: 21450, revenue: 126750000 },
  { id: "re3", home: SSM, away: CDU, date: "31 oct 2026", tickets: 15200, revenue: 84320000 },
  { id: "re4", home: VU, away: TFC, date: "05 nov 2026", tickets: 10540, revenue: 52150000 },
  { id: "re5", home: DAU, away: SFFC, date: "28 ago 2026", tickets: 8920, revenue: 41320000 },
];

export const recaudoByLocality: LocalityRecaudoRow[] = [
  { id: "loc1", name: "Occidental Baja", color: "#fb7185", tickets: 8560, revenue: 142350000, pct: 34 },
  { id: "loc2", name: "Occidental Alta", color: "#ef4444", tickets: 6240, revenue: 98420000, pct: 24 },
  { id: "loc3", name: "Oriental", color: "#f97316", tickets: 5820, revenue: 72650000, pct: 18 },
  { id: "loc4", name: "Norte", color: "#3b82f6", tickets: 3450, revenue: 45320000, pct: 11 },
  { id: "loc5", name: "Sur", color: "#22c55e", tickets: 2980, revenue: 36280000, pct: 9 },
  { id: "loc6", name: "VIP", color: "#8b5cf6", tickets: 1120, revenue: 17330000, pct: 4 },
];

export const recaudoTransactions: RecaudoTransaction[] = [
  { id: "t1", orderId: "PED-784512", dateTime: "18 oct 2026 19:24", customer: "Juan Pérez", event: "Árabe Unido vs Tauro FC", locality: "Occidental Baja", quantity: 4, method: "tarjeta-credito", amount: 276000, status: "pagado", reference: "**** 4582" },
  { id: "t2", orderId: "PED-784511", dateTime: "18 oct 2026 19:22", customer: "María Gómez", event: "Árabe Unido vs Tauro FC", locality: "Oriental", quantity: 2, method: "pse", amount: 138000, status: "pagado", reference: "PSE-998721" },
  { id: "t3", orderId: "PED-784510", dateTime: "18 oct 2026 19:20", customer: "Carlos Ramírez", event: "Árabe Unido vs Tauro FC", locality: "VIP", quantity: 2, method: "tarjeta-debito", amount: 620000, status: "pagado", reference: "**** 2310" },
  { id: "t4", orderId: "PED-784509", dateTime: "18 oct 2026 19:18", customer: "Ana Torres", event: "Árabe Unido vs Tauro FC", locality: "Sur", quantity: 1, method: "billetera", amount: 69000, status: "pagado", reference: "NEQUI-5541" },
  { id: "t5", orderId: "PED-784508", dateTime: "18 oct 2026 19:16", customer: "Luis Herrera", event: "Árabe Unido vs Tauro FC", locality: "Norte", quantity: 3, method: "efectivo", amount: 207000, status: "pagado", reference: "TAQ-00231" },
  { id: "t6", orderId: "PED-784507", dateTime: "18 oct 2026 19:12", customer: "Carla Mendoza", event: "San Francisco FC vs Herrera FC", locality: "Occidental Alta", quantity: 2, method: "tarjeta-credito", amount: 138000, status: "pagado", reference: "**** 1123" },
];

export const recaudoEventOptions = [
  { value: "all", label: "Todos los eventos" },
  { value: "e1", label: "Árabe Unido vs Tauro FC" },
  { value: "e2", label: "San Francisco FC vs Herrera FC" },
  { value: "e3", label: "Sporting San Miguelito vs CD Universitario" },
  { value: "e4", label: "Veraguas United FC vs Tauro FC" },
];

export const recaudoMethodOptions = [
  { value: "all", label: "Todos los métodos" },
  { value: "tarjeta-credito", label: "Tarjeta de crédito" },
  { value: "tarjeta-debito", label: "Tarjeta de débito" },
  { value: "pse", label: "Transferencia / PSE" },
  { value: "efectivo", label: "Efectivo (taquilla)" },
  { value: "billetera", label: "Billetera digital" },
];

export const recaudoDayOptions = [
  { value: "hoy", label: "Hoy, 18 oct 2026" },
  { value: "ayer", label: "Ayer, 17 oct 2026" },
  { value: "7d", label: "Últimos 7 días" },
  { value: "30d", label: "Últimos 30 días" },
];

export async function getRecaudoData(): Promise<RecaudoData> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return {
    kpis: recaudoKpis,
    dailyRecaudo,
    paymentMethods,
    recaudoByEvent,
    recaudoByLocality,
    transactions: recaudoTransactions,
  };
}
