import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, Heart, Repeat, Award } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { PageHeader, Section } from "@/components/section";
import { KpiCard } from "@/components/kpi-card";
import { CategoryPie } from "@/components/charts";
import { customers } from "@/lib/mock-data";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customer Intelligence — Lumen" },
      { name: "description", content: "Segmentation, retention and lifetime value analytics." },
    ],
  }),
  component: Customers,
});

function Customers() {
  const total = customers.reduce((s, c) => s + c.count, 0);
  return (
    <DashboardLayout>
      <PageHeader eyebrow="Customers" title="Customer Intelligence" description="Understand who buys, why they stay, and how to grow lifetime value." />

      <Section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <KpiCard label="Total Customers" value={9762} delta={6.4} icon={Users} />
        <KpiCard label="Retention Rate" value={78.4} suffix="%" delta={3.1} icon={Heart} decimals={1} delay={0.05} />
        <KpiCard label="Repeat Rate" value={42.1} suffix="%" delta={5.6} icon={Repeat} decimals={1} delay={0.1} />
        <KpiCard label="Avg LTV" value={412} prefix="$" delta={9.8} icon={Award} delay={0.15} />
      </Section>

      <Section delay={0.1} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-1">Segmentation</h3>
          <p className="text-xs text-muted-foreground mb-3">Customers by RFM segment</p>
          <CategoryPie data={customers.map((c) => ({ name: c.segment, value: c.count, color: c.color }))} />
        </div>

        <div className="lg:col-span-2 glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-4">Segment Breakdown</h3>
          <div className="space-y-4">
            {customers.map((c, i) => {
              const pct = (c.count / total) * 100;
              return (
                <motion.div
                  key={c.segment}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="flex items-center justify-between mb-1.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: c.color }} />
                      <span className="font-semibold">{c.segment}</span>
                      <span className="text-muted-foreground">{c.count.toLocaleString()} customers</span>
                    </div>
                    <span className="font-display font-bold tabular-nums">${(c.value / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.06 }} className="h-full rounded-full" style={{ background: c.color }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </DashboardLayout>
  );
}
