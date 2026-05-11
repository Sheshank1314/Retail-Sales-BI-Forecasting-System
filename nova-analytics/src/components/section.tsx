import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--violet)] mb-2">{eyebrow}</div>}
        <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
          {title.split(" ").map((w, i, arr) => (
            <span key={i} className={i === arr.length - 1 ? "text-gradient" : ""}>{w}{i < arr.length - 1 ? " " : ""}</span>
          ))}
        </h1>
        {description && <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
