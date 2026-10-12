import { Ellipsis, LayoutGrid, Pencil, QrCode, ReceiptText, Tag } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

const actions = [
  { label: "Editar evento", icon: Pencil },
  { label: "Gestionar localidades", icon: LayoutGrid },
  { label: "Crear promoción", icon: Tag },
  { label: "Ver pedidos", icon: ReceiptText },
  { label: "Control de acceso", icon: QrCode },
  { label: "Más acciones", icon: Ellipsis },
];

export function QuickActions() {
  const { info } = useToast();

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-[16px] font-bold text-slate-900">Acciones rápidas</h3>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              onClick={() => info(a.label, "Módulo en construcción")}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-4 text-center transition-colors hover:border-blue-200 hover:bg-blue-50/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[13px] font-semibold text-slate-700">{a.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
