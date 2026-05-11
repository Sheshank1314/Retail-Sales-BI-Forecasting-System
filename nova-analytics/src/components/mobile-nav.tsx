import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, TrendingUp, Sparkles, Boxes, Users } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: LayoutDashboard },
  { to: "/analytics", label: "Sales", icon: TrendingUp },
  { to: "/forecasting", label: "Forecast", icon: Sparkles },
  { to: "/inventory", label: "Stock", icon: Boxes },
  { to: "/customers", label: "Users", icon: Users },
];

export function MobileNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="lg:hidden fixed bottom-3 inset-x-3 z-40 glass rounded-2xl shadow-elegant px-2 py-2 flex justify-around">
      {items.map((i) => {
        const active = path === i.to;
        const Icon = i.icon;
        return (
          <Link key={i.to} to={i.to} className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition ${active ? "bg-[var(--gradient-primary)] text-primary-foreground shadow-glow" : "text-muted-foreground"}`}>
            <Icon className="w-4 h-4" />
            <span className="text-[10px] font-medium">{i.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
