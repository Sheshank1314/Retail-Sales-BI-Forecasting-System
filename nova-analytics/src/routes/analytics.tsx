import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { PageHeader, Section } from "@/components/section";
import { RevenueAreaChart, CategoryPie, RegionBarChart, OrdersBar } from "@/components/charts";
import { revenueTrend, categories, regions } from "@/lib/mock-data";
import { Filter, Search } from "lucide-react";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Sales Analytics — Lumen" },
      { name: "description", content: "Drill-down sales analytics across products, regions and time." },
    ],
  }),
  component: Analytics,
});

const filters = ["All Products", "Electronics", "Apparel", "Home", "Beauty"];
const ranges = ["7D", "30D", "90D", "YTD", "All"];

function Analytics() {
  return (
    <DashboardLayout>
      <PageHeader eyebrow="Analytics" title="Sales Analytics" description="Slice and explore performance across every dimension of your retail network." />

      <Section className="glass rounded-2xl p-4 mb-6 flex flex-wrap items-center gap-3 shadow-soft">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-muted/60 focus:bg-background border border-transparent focus:border-ring focus:outline-none transition" placeholder="Search SKU, product, customer..." />
        </div>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/60">
          {filters.map((f, i) => (
            <button key={f} className={`text-xs font-medium px-3 py-1.5 rounded-md transition ${i === 0 ? "bg-background shadow-soft" : "text-muted-foreground hover:text-foreground"}`}>{f}</button>
          ))}
        </div>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/60">
          {ranges.map((r, i) => (
            <button key={r} className={`text-xs font-semibold px-2.5 py-1.5 rounded-md transition ${i === 1 ? "bg-[var(--gradient-primary)] text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{r}</button>
          ))}
        </div>
        <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-border hover:bg-muted transition"><Filter className="w-3.5 h-3.5" /> More filters</button>
      </Section>

      <Section delay={0.05} className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-5">
        <div className="xl:col-span-2 glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-3">Revenue & Forecast</h3>
          <RevenueAreaChart data={revenueTrend} />
        </div>
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-3">Category Split</h3>
          <CategoryPie data={categories} />
        </div>
      </Section>

      <Section delay={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-3">Regional Sales</h3>
          <RegionBarChart data={regions} />
        </div>
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-3">Orders Volume</h3>
          <OrdersBar data={revenueTrend} />
        </div>
      </Section>
    </DashboardLayout>
  );
}
