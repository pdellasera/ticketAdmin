import { Banknote, CreditCard, Landmark, MoreHorizontal, Wallet, type LucideIcon } from "lucide-react";
import type { RecaudoMethod } from "@/data/recaudo";

export const paymentMethodMeta: Record<RecaudoMethod, { label: string; icon: LucideIcon; iconClass: string }> = {
  "tarjeta-credito": { label: "Tarjeta de crédito", icon: CreditCard, iconClass: "text-blue-600" },
  "tarjeta-debito": { label: "Tarjeta de débito", icon: CreditCard, iconClass: "text-blue-600" },
  pse: { label: "Transferencia / PSE", icon: Landmark, iconClass: "text-violet-600" },
  efectivo: { label: "Efectivo (taquilla)", icon: Banknote, iconClass: "text-emerald-600" },
  billetera: { label: "Billetera digital", icon: Wallet, iconClass: "text-orange-500" },
  otros: { label: "Otros", icon: MoreHorizontal, iconClass: "text-slate-500" },
};
