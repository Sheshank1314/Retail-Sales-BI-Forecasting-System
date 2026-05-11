import type { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { Topbar } from "./topbar";
import { MobileNav } from "./mobile-nav";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex w-full bg-background text-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora-bg opacity-60" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.15]" />
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <Topbar />
        <main className="flex-1 px-4 lg:px-8 py-6 pb-24 lg:pb-8 overflow-x-hidden">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
