import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AlertTriangle, Package, TrendingUp, RefreshCw } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { PageHeader, Section } from "@/components/section";
import { KpiCard } from "@/components/kpi-card";
import { inventory } from "@/lib/mock-data";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory Intelligence — Lumen" },
      { name: "description", content: "Stock levels, demand signals and AI-powered restock recommendations." },
    ],
  }),
  component: Inventory,
});

const statusColor: Record<string, string> = {
  critical: "bg-destructive/10 text-destructive",
  low: "bg-[color:var(--warning)]/10 text-[color:var(--warning)]",
  healthy: "bg-[color:var(--success)]/10 text-[color:var(--success)]",
};

function Inventory() {
  return (
    <DashboardLayout>
      <PageHeader eyebrow="Inventory" title="Stock Intelligence" description="Real-time inventory health with AI demand forecasting and restock priorities." />

      <Section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <KpiCard label="SKUs Tracked" value={1284} delta={3.2} icon={Package} />
        <KpiCard label="Critical Stock" value={18} delta={12.5} icon={AlertTriangle} delay={0.05} />
        <KpiCard label="Turnover Rate" value={4.8} suffix="x" delta={6.4} icon={RefreshCw} decimals={1} delay={0.1} />
        <KpiCard label="Avg Demand Lift" value={14.2} suffix="%" delta={2.8} icon={TrendingUp} decimals={1} delay={0.15} />
      </Section>

      <Section delay={0.1} className="glass rounded-2xl p-5 shadow-soft mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold">Live Inventory</h3>
          <button className="text-xs font-semibold px-3 py-1.5 rounded-md bg-[var(--gradient-primary)] text-primary-foreground hover:opacity-90 transition">Auto-restock</button>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border">
                <th className="py-2.5 pr-4">SKU</th>
                <th className="py-2.5 pr-4">Product</th>
                <th className="py-2.5 pr-4">Stock</th>
                <th className="py-2.5 pr-4">Threshold</th>
                <th className="py-2.5 pr-4">Demand</th>
                <th className="py-2.5">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((row, i) => {
                const pct = Math.min(100, (row.stock / (row.threshold * 2)) * 100);
                return (
                  <motion.tr
                    key={row.sku}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-border/50 hover:bg-muted/40 transition"
                  >
                    <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{row.sku}</td>
                    <td className="py-3 pr-4 font-medium">{row.name}</td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold tabular-nums w-8">{row.stock}</span>
                        <div className="w-24 h-1.5 rounded-full bg-muted overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.04 }} className={`h-full ${row.status === "critical" ? "bg-destructive" : row.status === "low" ? "bg-[color:var(--warning)]" : "bg-[color:var(--success)]"}`} />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground tabular-nums">{row.threshold}</td>
                    <td className="py-3 pr-4 capitalize">{row.demand}</td>
                    <td className="py-3">
                      <span className={`text-[10px] font-semibold uppercase px-2 py-1 rounded-md ${statusColor[row.status]}`}>{row.status}</span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>
    </DashboardLayout>
  );
}
