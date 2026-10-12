import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PlaceholderPage({
  title,
  icon: Icon,
  description,
}: {
  title: string;
  icon: LucideIcon;
  description: string;
}) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex h-[calc(100vh-140px)] items-center justify-center"
    >
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <Icon className="h-10 w-10" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
          <Construction className="h-3.5 w-3.5" /> En construcción
        </div>
        <button
          onClick={() => navigate("/inicio")}
          className="mt-6 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Volver al inicio
        </button>
      </div>
    </motion.div>
  );
}
