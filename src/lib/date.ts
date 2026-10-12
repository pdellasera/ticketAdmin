export const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];

export const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export function startOfDay(d: Date): Date {
  const n = new Date(d);
  n.setHours(0, 0, 0, 0);
  return n;
}

export function addDays(d: Date, amount: number): Date {
  const n = new Date(d);
  n.setDate(n.getDate() + amount);
  return n;
}

export function addMonths(d: Date, amount: number): Date {
  const n = new Date(d);
  n.setMonth(n.getMonth() + amount);
  return n;
}

export function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function isSameDay(a: Date | null | undefined, b: Date | null | undefined): boolean {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isBeforeDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function isAfterDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}

export function isWithinRange(d: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  const day = startOfDay(d);
  return day.getTime() > startOfDay(start).getTime() && day.getTime() < startOfDay(end).getTime();
}

export function compareDay(a: Date, b: Date): number {
  return startOfDay(a).getTime() - startOfDay(b).getTime();
}

export function formatShortDate(d: Date): string {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}
