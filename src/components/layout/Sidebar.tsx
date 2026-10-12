import { NavLink } from "react-router-dom";
import { Ellipsis } from "lucide-react";
import { navItems } from "@/data/nav";
import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";
import sidebarBg from "@/assets/background_sidebar.png";
import logoWhite from "@/assets/logo_white.png";

export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-[260px] shrink-0">
      <div className="relative flex h-full flex-col overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          <img src={sidebarBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1b3e]/40" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a1b3e]/80 to-transparent" />
        </div>

        <div className="px-5 pb-6 pt-6">
          <img src={logoWhite} alt="TicketGest" className="h-12 w-auto object-contain" />
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/inicio"}
                className={({ isActive }) =>
                  cn(
                    "group flex h-11 items-center gap-3 rounded-xl px-3.5 text-[15px] font-medium transition-colors",
                    isActive
                      ? "bg-[#1d6fe8] text-white shadow-lg shadow-blue-950/40"
                      : "text-blue-100/90 hover:bg-white/10 hover:text-white",
                  )
                }
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto space-y-3 px-3 pb-4">
          <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/10">
            <Avatar name="Administrador" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold">Administrador</p>
            </div>
            <button className="p-1.5 text-blue-200 transition-colors hover:text-white" aria-label="Opciones">
              <Ellipsis className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
