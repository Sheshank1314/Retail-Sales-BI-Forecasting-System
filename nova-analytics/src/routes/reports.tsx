import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Download, Share2, Calendar, Plus } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { PageHeader, Section } from "@/components/section";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports — Lumen" },
      { name: "description", content: "Export, schedule and share analytics reports." },
    ],
  }),
  component: Reports,
});

const reports = [
  { name: "Q3 Revenue Summary", type: "PDF", updated: "2h ago", size: "1.4 MB" },
  { name: "Inventory Health Report", type: "XLSX", updated: "1d ago", size: "820 KB" },
  { name: "Customer Cohort Analysis", type: "PDF", updated: "3d ago", size: "2.1 MB" },
  { name: "Forecast Accuracy Audit", type: "PDF", updated: "1w ago", size: "1.8 MB" },
  { name: "Regional Performance", type: "CSV", updated: "2w ago", size: "412 KB" },
];

function Reports() {
  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="Reports"
        title="Reports & Exports"
        description="Generate, schedule and share executive-ready analytics."
        actions={
          <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition">
            <Plus className="w-3.5 h-3.5" /> New Report
          </button>
        }
      />

      <Section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { icon: Download, title: "Export Snapshots", body: "Download branded PDF or CSV exports of any dashboard view." },
          { icon: Calendar, title: "Schedule Reports", body: "Daily, weekly or monthly auto-delivery to your team's inbox." },
          { icon: Share2, title: "Share Securely", body: "Permission-based dashboard links with expiry and audit logs." },
        ].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-5 shadow-soft hover:shadow-glow transition">
            <div className="w-9 h-9 rounded-lg bg-[var(--gradient-primary)] grid place-items-center shadow-glow mb-3">
              <c.icon className="w-4 h-4 text-primary-foreground" />
            </div>
            <h4 className="font-display font-semibold mb-1">{c.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </Section>

      <Section delay={0.1} className="glass rounded-2xl p-5 shadow-soft">
        <h3 className="font-display font-semibold mb-4">Recent Reports</h3>
        <div className="space-y-2">
          {reports.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-muted grid place-items-center">
                <FileText className="w-4 h-4 text-[color:var(--violet)]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{r.name}</div>
                <div className="text-[11px] text-muted-foreground">Updated {r.updated} · {r.size}</div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-1 rounded bg-muted">{r.type}</span>
              <button className="opacity-0 group-hover:opacity-100 transition w-8 h-8 grid place-items-center rounded-lg hover:bg-background">
                <Download className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </Section>
    </DashboardLayout>
  );
}
