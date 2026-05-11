import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delta: number;
  icon: LucideIcon;
  decimals?: number;
  delay?: number;
}

export function KpiCard({ label, value, prefix = "", suffix = "", delta, icon: Icon, decimals = 0, delay = 0 }: KpiCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => `${prefix}${v.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.4, ease: "easeOut", delay });
      return controls.stop;
    }
  }, [inView, value, mv, delay]);

  const positive = delta >= 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-5 relative overflow-hidden group cursor-pointer shadow-soft hover:shadow-glow transition-shadow"
    >
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[var(--gradient-primary)] opacity-10 group-hover:opacity-30 transition-opacity blur-2xl" />
      <div className="flex items-start justify-between mb-4 relative">
        <div className="w-9 h-9 rounded-lg bg-muted/60 grid place-items-center">
          <Icon className="w-4 h-4 text-[color:var(--violet)]" />
        </div>
        <span className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-1 rounded-md ${positive ? "text-[color:var(--success)] bg-[color:var(--success)]/10" : "text-destructive bg-destructive/10"}`}>
          {positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {Math.abs(delta)}%
        </span>
      </div>
      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{label}</p>
      <motion.div className="text-2xl font-display font-bold tracking-tight">{display}</motion.div>
    </motion.div>
  );
}
