import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Zap, Brain } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { PageHeader, Section } from "@/components/section";
import { ForecastChart } from "@/components/charts";
import { forecastData } from "@/lib/mock-data";

export const Route = createFileRoute("/forecasting")({
  head: () => ({
    meta: [
      { title: "AI Forecasting — Lumen" },
      { name: "description", content: "Predictive sales forecasting with confidence intervals and scenario simulation." },
    ],
  }),
  component: Forecasting,
});

function Forecasting() {
  const [growth, setGrowth] = useState(8);
  const [seasonality, setSeasonality] = useState(60);
  const [confidence, setConfidence] = useState(92);

  const scaled = forecastData.map((d) => ({
    ...d,
    predicted: d.predicted ? Math.round(d.predicted * (1 + (growth - 8) / 100)) : null,
    upper: d.upper ? Math.round(d.upper * (1 + (growth - 8) / 100) * (1 + (100 - confidence) / 400)) : null,
    lower: d.lower ? Math.round(d.lower * (1 + (growth - 8) / 100) * (1 - (100 - confidence) / 400)) : null,
  }));

  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="AI Forecasting"
        title="Predict the future"
        description="Probabilistic forecasts, confidence bands and scenario simulation powered by Lumen AI."
        actions={
          <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--gradient-primary)] text-primary-foreground shadow-glow hover:opacity-90 transition">
            <Brain className="w-3.5 h-3.5" /> Retrain Model
          </button>
        }
      />

      <Section className="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-6">
        <div className="xl:col-span-3 glass rounded-2xl p-5 shadow-soft relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[color:var(--violet)] opacity-10 blur-3xl" />
          <div className="flex items-center justify-between mb-4 relative">
            <div>
              <h3 className="font-display font-semibold">6-Month Revenue Forecast</h3>
              <p className="text-xs text-muted-foreground">Confidence band shaded — drag sliders to simulate</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[color:var(--success)]/10 text-[color:var(--success)]">
              <Sparkles className="w-3 h-3" /> {confidence}% confidence
            </span>
          </div>
          <motion.div key={growth + seasonality + confidence} initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <ForecastChart data={scaled} />
          </motion.div>
        </div>

        <div className="glass rounded-2xl p-5 shadow-soft space-y-5">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[color:var(--violet)]" />
            <h3 className="font-display font-semibold text-sm">Scenario Simulator</h3>
          </div>
          <Slider label="Growth Rate" value={growth} onChange={setGrowth} min={-10} max={30} suffix="%" />
          <Slider label="Seasonality" value={seasonality} onChange={setSeasonality} min={0} max={100} suffix="%" />
          <Slider label="Confidence" value={confidence} onChange={setConfidence} min={70} max={99} suffix="%" />

          <div className="pt-4 border-t border-border space-y-3">
            <Stat label="Projected Q4" value="$337K" delta="+24%" />
            <Stat label="Best case" value="$412K" delta="+52%" />
            <Stat label="Worst case" value="$268K" delta="-1%" tone="warn" />
          </div>
        </div>
      </Section>

      <Section delay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { icon: TrendingUp, title: "Q4 Holiday Surge", body: "Model predicts +34% revenue lift between Nov 24 and Dec 24, driven by Electronics and Apparel.", tag: "High confidence" },
          { icon: Sparkles, title: "Emerging SKUs", body: "12 products show breakout demand patterns. Allocate 18% more inventory to capture upside.", tag: "AI suggestion" },
          { icon: Brain, title: "Model Drift Detected", body: "Asia Pacific region forecast accuracy dropped 4%. Recommend retraining with last 30 days of data.", tag: "Action needed" },
        ].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-5 shadow-soft hover:shadow-glow transition">
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--gradient-primary)] grid place-items-center shadow-glow">
                <c.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--violet)]">{c.tag}</span>
            </div>
            <h4 className="font-display font-semibold mb-1">{c.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </Section>
    </DashboardLayout>
  );
}

function Slider({ label, value, onChange, min, max, suffix = "" }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number; suffix?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-xs font-semibold tabular-nums">{value}{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[color:var(--violet)] cursor-pointer"
      />
    </div>
  );
}

function Stat({ label, value, delta, tone = "ok" }: { label: string; value: string; delta: string; tone?: "ok" | "warn" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-display font-bold">{value}</span>
        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${tone === "ok" ? "bg-[color:var(--success)]/10 text-[color:var(--success)]" : "bg-[color:var(--warning)]/10 text-[color:var(--warning)]"}`}>{delta}</span>
      </div>
    </div>
  );
}
