import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, TrendingUp, Target, Percent, ShoppingCart, Boxes, Calendar, Download } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { KpiCard } from "@/components/kpi-card";
import { Section, PageHeader } from "@/components/section";
import { RevenueAreaChart, CategoryPie, RegionBarChart, OrdersBar } from "@/components/charts";
import { InsightsPanel, ActivityFeed } from "@/components/insights-panel";
import { revenueTrend, categories, regions, activity } from "@/lib/mock-data";
import { useEffect, useState } from "react";
import { fetchRevenue } from "@/services/api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Lumen Retail Intelligence" },
      { name: "description", content: "Real-time KPIs, revenue trends and AI insights for retail performance." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {

  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    async function loadRevenue() {
      try {
        const data = await fetchRevenue();

        console.log(data);

        setRevenue(Number(data.total_revenue));
      } catch (error) {
        console.error(error);
      }
    }

    loadRevenue();
  }, []);

  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="Overview"
        title="Welcome back, Sarah"
        description="Your retail network is up 18.4% week-over-week. Here's what AI is watching today."
        actions={
          <>
            <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-border hover:bg-muted transition">
              <Calendar className="w-3.5 h-3.5" /> Last 30 days
            </button>
            <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition">
              <Download className="w-3.5 h-3.5" /> Export
            </button>
          </>
        }
      />

      <Section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
<KpiCard
  label="Total Revenue"
  value={874320}
  prefix="$"
  delta={18.4}
  icon={DollarSign}
  delay={0}
/>
        <KpiCard label="Monthly Growth" value={12.8} suffix="%" delta={4.2} icon={TrendingUp} decimals={1} delay={0.05} />
        <KpiCard label="Forecast Accuracy" value={94.6} suffix="%" delta={1.8} icon={Target} decimals={1} delay={0.1} />
        <KpiCard label="Profit Margin" value={32.4} suffix="%" delta={2.1} icon={Percent} decimals={1} delay={0.15} />
        <KpiCard label="Total Orders" value={24180} delta={8.7} icon={ShoppingCart} delay={0.2} />
        <KpiCard label="Inventory Health" value={87} suffix="%" delta={-2.4} icon={Boxes} delay={0.25} />
      </Section>

      <Section delay={0.1} className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
        <div className="xl:col-span-2 glass rounded-2xl p-5 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-semibold">Revenue Trend</h3>
              <p className="text-xs text-muted-foreground">Actual vs AI forecast — last 9 months</p>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[color:var(--violet)]" /> Actual</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[color:var(--cyan)]" /> Forecast</span>
            </div>
          </div>
          <RevenueAreaChart data={revenueTrend} />
        </div>
        <InsightsPanel />
      </Section>

      <Section delay={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-1">Category Mix</h3>
          <p className="text-xs text-muted-foreground mb-3">Revenue share by category</p>
          <CategoryPie data={categories} />
        </div>
        <div className="lg:col-span-2 glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-1">Regional Performance</h3>
          <p className="text-xs text-muted-foreground mb-3">Sales by geography</p>
          <RegionBarChart data={regions} />
        </div>
      </Section>

      <Section delay={0.2} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-1">Orders Volume</h3>
          <p className="text-xs text-muted-foreground mb-3">Monthly order count</p>
          <OrdersBar data={revenueTrend} />
        </div>
        <ActivityFeed items={activity} />
      </Section>
    </DashboardLayout>
  );
}
