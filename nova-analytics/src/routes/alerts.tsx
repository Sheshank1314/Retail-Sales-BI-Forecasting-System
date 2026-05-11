import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { PageHeader, Section } from "@/components/section";
import { AlertTriangle, Bell, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [{ title: "Alerts — Lumen" }, { name: "description", content: "Real-time alerts and anomaly detection." }] }),
  component: Alerts,
});

const alerts = [
  { tone: "destructive", title: "Stock-out imminent", body: "Trail Runner v3 will sell out in 2 days at current velocity.", time: "5m ago" },
  { tone: "warning", title: "Forecast deviation", body: "Apparel category trending 12% below predicted weekly revenue.", time: "1h ago" },
  { tone: "success", title: "Goal achieved", body: "Q3 revenue target hit 18 days ahead of schedule.", time: "3h ago" },
  { tone: "warning", title: "Refund spike", body: "Refund rate up 4.2% in Electronics. Investigate quality signals.", time: "6h ago" },
];

const map: Record<string, { Icon: any; cls: string }> = {
  destructive: { Icon: AlertTriangle, cls: "bg-destructive/10 text-destructive" },
  warning: { Icon: Bell, cls: "bg-[color:var(--warning)]/10 text-[color:var(--warning)]" },
  success: { Icon: CheckCircle2, cls: "bg-[color:var(--success)]/10 text-[color:var(--success)]" },
};

function Alerts() {
  return (
    <DashboardLayout>
      <PageHeader eyebrow="Alerts" title="Anomaly Center" description="Real-time anomaly detection across sales, inventory and customer signals." />
      <Section className="space-y-3">
        {alerts.map((a, i) => {
          const m = map[a.tone];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-4 flex items-start gap-4 shadow-soft hover:shadow-glow transition"
            >
              <div className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 ${m.cls}`}>
                <m.Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-display font-semibold text-sm">{a.title}</h4>
                  <span className="text-[10px] text-muted-foreground">{a.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{a.body}</p>
              </div>
              <button className="text-[11px] font-semibold px-3 py-1.5 rounded-md hover:bg-muted transition">Resolve</button>
            </motion.div>
          );
        })}
      </Section>
    </DashboardLayout>
  );
}
