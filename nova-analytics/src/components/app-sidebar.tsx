import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  Sparkles,
  Boxes,
  Users,
  FileBarChart,
  Bell,
  Settings,
  Zap,
} from "lucide-react";

const items = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/analytics", label: "Sales Analytics", icon: TrendingUp },
  { to: "/forecasting", label: "Forecasting", icon: Sparkles },
  { to: "/inventory", label: "Inventory", icon: Boxes },
  { to: "/customers", label: "Customers", icon: Users },
  { to: "/reports", label: "Reports", icon: FileBarChart },
  { to: "/alerts", label: "Alerts", icon: Bell },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function AppSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar/60 backdrop-blur-xl">
      <div className="px-6 py-6 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-[var(--gradient-primary)] grid place-items-center shadow-glow">
          <Zap className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
        </div>
        <div>
          <div className="font-display font-bold text-sidebar-foreground leading-tight">Lumen</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Retail Intel</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1">
        {items.map((item) => {
          const active = path === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors group"
            >
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-lg bg-[var(--gradient-primary)] opacity-100 shadow-glow"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={`w-4 h-4 shrink-0 relative z-10 ${active ? "text-primary-foreground" : ""}`} />
              <span className={`relative z-10 ${active ? "text-primary-foreground" : ""}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="m-3 p-4 rounded-2xl glass">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[color:var(--violet)]" />
          <span className="text-xs font-semibold">AI Pro</span>
        </div>
        <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">
          Unlock predictive scenarios & deeper forecasting.
        </p>
        <button className="w-full text-xs font-semibold py-2 rounded-lg bg-[var(--gradient-primary)] text-primary-foreground hover:opacity-90 transition">
          Upgrade
        </button>
      </div>
    </aside>
  );
}
