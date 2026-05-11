import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Sparkles, Info } from "lucide-react";
import { insights } from "@/lib/mock-data";

const iconMap = {
  warning: { Icon: AlertTriangle, color: "text-[color:var(--warning)]", bg: "bg-[color:var(--warning)]/10" },
  success: { Icon: CheckCircle2, color: "text-[color:var(--success)]", bg: "bg-[color:var(--success)]/10" },
  destructive: { Icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10" },
  primary: { Icon: Sparkles, color: "text-[color:var(--violet)]", bg: "bg-[color:var(--violet)]/10" },
};

export function InsightsPanel() {
  return (
    <div className="glass rounded-2xl p-5 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[color:var(--violet)]" />
          <h3 className="font-display font-semibold text-sm">AI Insights</h3>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Live</span>
      </div>
      <div className="space-y-3">
        {insights.map((ins, i) => {
          const meta = iconMap[ins.tone as keyof typeof iconMap] ?? iconMap.primary;
          const Icon = meta.Icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-3 p-3 rounded-xl hover:bg-muted/50 transition cursor-pointer group"
            >
              <div className={`w-8 h-8 rounded-lg grid place-items-center shrink-0 ${meta.bg}`}>
                <Icon className={`w-4 h-4 ${meta.color}`} />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold mb-0.5 group-hover:text-[color:var(--violet)] transition">{ins.title}</div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{ins.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function ActivityFeed({ items }: { items: { user: string; action: string; time: string }[] }) {
  return (
    <div className="glass rounded-2xl p-5 shadow-soft">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-4 h-4 text-[color:var(--cyan)]" />
        <h3 className="font-display font-semibold text-sm">Activity</h3>
      </div>
      <ul className="space-y-3">
        {items.map((a, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-3 text-xs"
          >
            <div className="w-7 h-7 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-[10px] font-bold text-primary-foreground shrink-0">
              {a.user.split(" ").map((s) => s[0]).join("").slice(0, 2)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="leading-tight"><span className="font-semibold">{a.user}</span> <span className="text-muted-foreground">{a.action}</span></p>
              <span className="text-[10px] text-muted-foreground">{a.time}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
