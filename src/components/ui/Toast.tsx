import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "info" | "warning";
export type ToastItem = { id: number; type: ToastType; title: string; description?: string };
export type ToastInput = { type?: ToastType; title: string; description?: string };

type ToastContextValue = {
  toast: (input: ToastInput) => void;
  success: (title: string, description?: string) => void;
  error: (title: string, description?: string) => void;
  info: (title: string, description?: string) => void;
  warning: (title: string, description?: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const icons = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

const styles = {
  success: { bar: "bg-emerald-500", icon: "text-emerald-500" },
  error: { bar: "bg-red-500", icon: "text-red-500" },
  info: { bar: "bg-blue-500", icon: "text-blue-500" },
  warning: { bar: "bg-amber-500", icon: "text-amber-500" },
};

let counter = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const toast = useCallback(
    (input: ToastInput) => {
      const id = ++counter;
      const item: ToastItem = { id, type: input.type ?? "info", title: input.title, description: input.description };
      setToasts((prev) => [...prev, item]);
      const timer = setTimeout(() => dismiss(id), 4500);
      timers.current.set(id, timer);
    },
    [dismiss],
  );

  const value = useMemo<ToastContextValue>(
    () => ({
      toast,
      success: (t, d) => toast({ type: "success", title: t, description: d }),
      error: (t, d) => toast({ type: "error", title: t, description: d }),
      info: (t, d) => toast({ type: "info", title: t, description: d }),
      warning: (t, d) => toast({ type: "warning", title: t, description: d }),
    }),
    [toast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-6 right-6 z-[100] flex w-96 flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => {
            const Icon = icons[t.type];
            const style = styles[t.type];
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="pointer-events-auto relative flex items-start gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-lg"
              >
                <span className={cn("absolute inset-y-0 left-0 w-1", style.bar)} />
                <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", style.icon)} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800">{t.title}</p>
                  {t.description && <p className="mt-0.5 text-sm text-slate-500">{t.description}</p>}
                </div>
                <button
                  onClick={() => dismiss(t.id)}
                  className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  aria-label="Cerrar"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
