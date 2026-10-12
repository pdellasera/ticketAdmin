import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  MONTHS,
  WEEKDAYS,
  addMonths,
  compareDay,
  daysInMonth,
  isAfterDay,
  isBeforeDay,
  isSameDay,
  isWithinRange,
} from "@/lib/date";

export type DateRange = { start: Date | null; end: Date | null };

type CalendarProps = {
  value: DateRange;
  onChange: (range: DateRange) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
};

export function Calendar({ value, onChange, minDate, maxDate, className }: CalendarProps) {
  const [viewMonth, setViewMonth] = useState(() => value.start ?? new Date());
  const [hovered, setHovered] = useState<Date | null>(null);

  const firstDay = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
  const offset = (firstDay.getDay() + 6) % 7;
  const totalDays = daysInMonth(viewMonth.getFullYear(), viewMonth.getMonth());

  const cells: Array<Date | null> = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), d));

  const handleSelect = (day: Date) => {
    const { start, end } = value;
    if (!start || (start && end)) {
      onChange({ start: day, end: null });
      return;
    }
    if (compareDay(day, start) < 0) {
      onChange({ start: day, end: start });
    } else {
      onChange({ start, end: day });
    }
  };

  const isDisabled = (day: Date) =>
    (minDate ? isBeforeDay(day, minDate) : false) || (maxDate ? isAfterDay(day, maxDate) : false);

  const rangeStart = value.start;
  const rangeEnd = value.end;

  return (
    <div className={cn("w-[300px] select-none rounded-xl bg-white p-3 shadow-lg ring-1 ring-slate-200", className)}>
      <div className="flex items-center justify-between px-1">
        <button
          onClick={() => setViewMonth(addMonths(viewMonth, -1))}
          className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
          aria-label="Mes anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <p className="text-sm font-semibold capitalize text-slate-800">
          {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
        </p>
        <button
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
          className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
          aria-label="Mes siguiente"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((w) => (
          <div key={w} className="flex h-8 items-center justify-center text-xs font-medium text-slate-400">
            {w}
          </div>
        ))}
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} className="h-9" />;
          const disabled = isDisabled(day);
          const isStart = isSameDay(day, rangeStart);
          const isEnd = isSameDay(day, rangeEnd);
          const inRange = isWithinRange(day, rangeStart, rangeEnd);
          const isToday = isSameDay(day, new Date());
          const preview =
            rangeStart && !rangeEnd && hovered && compareDay(hovered, rangeStart) > 0
              ? isWithinRange(day, rangeStart, hovered)
              : false;

          return (
            <button
              key={day.toISOString()}
              disabled={disabled}
              onClick={() => handleSelect(day)}
              onMouseEnter={() => setHovered(day)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative flex h-9 items-center justify-center rounded-lg text-sm transition-colors",
                disabled ? "cursor-not-allowed text-slate-300" : "text-slate-700 hover:bg-blue-50",
                (inRange || preview) && "rounded-none bg-blue-100",
                (isStart || isEnd) && "bg-blue-600 font-semibold text-white hover:bg-blue-600",
                isToday && !isStart && !isEnd && "ring-1 ring-inset ring-blue-400",
              )}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
