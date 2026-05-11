import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { PageHeader, Section } from "@/components/section";
import { useTheme } from "@/components/theme-provider";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Lumen" }, { name: "description", content: "Workspace and account settings." }] }),
  component: Settings,
});

function Settings() {
  const { theme, toggle } = useTheme();
  return (
    <DashboardLayout>
      <PageHeader eyebrow="Settings" title="Workspace Settings" description="Personalize your Lumen experience." />
      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-4">Appearance</h3>
          <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40">
            <div>
              <div className="text-sm font-medium">Theme</div>
              <div className="text-xs text-muted-foreground">Currently {theme}</div>
            </div>
            <button onClick={toggle} className="text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--gradient-primary)] text-primary-foreground shadow-glow">
              Switch to {theme === "dark" ? "light" : "dark"}
            </button>
          </div>
        </div>
        <div className="glass rounded-2xl p-5 shadow-soft">
          <h3 className="font-display font-semibold mb-4">Profile</h3>
          <div className="space-y-3">
            <Field label="Name" value="Sarah Chen" />
            <Field label="Email" value="sarah@acmeretail.com" />
            <Field label="Role" value="Head of Analytics" />
          </div>
        </div>
      </Section>
    </DashboardLayout>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</label>
      <input defaultValue={value} className="mt-1 w-full px-3 py-2 text-sm rounded-lg bg-muted/60 border border-transparent focus:bg-background focus:border-ring focus:outline-none transition" />
    </div>
  );
}
