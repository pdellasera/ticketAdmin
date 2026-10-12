import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SocialButton({
  icon,
  label,
  onClick,
  className,
}: {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-[56px] flex-1 items-center justify-center gap-2.5 rounded-[10px] border border-slate-200 bg-white text-[15px] font-semibold text-slate-800 transition-colors hover:bg-slate-50",
        className,
      )}
    >
      {icon}
      {label}
    </button>
  );
}
