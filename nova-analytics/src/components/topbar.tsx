import { Search, Bell, Sparkles, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "./theme-provider";

export function Topbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 px-4 lg:px-8 h-16 border-b border-border bg-background/70 backdrop-blur-xl">
      <button className="flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-md hover:bg-muted transition">
        <div className="w-5 h-5 rounded bg-[var(--gradient-primary)]" />
        Acme Retail
        <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
      </button>

      <div className="flex-1 max-w-xl mx-auto relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Ask AI: 'Top growing SKUs in Asia Pacific'"
          className="w-full pl-9 pr-20 py-2 text-sm rounded-lg bg-muted/60 border border-transparent focus:bg-background focus:border-ring focus:outline-none transition"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-background border border-border text-muted-foreground">⌘K</kbd>
      </div>

      <div className="flex items-center gap-1">
        <button className="w-9 h-9 grid place-items-center rounded-lg hover:bg-muted transition relative" aria-label="AI assistant">
          <Sparkles className="w-4 h-4 text-[color:var(--violet)]" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[color:var(--cyan)] animate-pulse" />
        </button>
        <button className="w-9 h-9 grid place-items-center rounded-lg hover:bg-muted transition relative" aria-label="Notifications">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-destructive" />
        </button>
        <button onClick={toggle} className="w-9 h-9 grid place-items-center rounded-lg hover:bg-muted transition" aria-label="Toggle theme">
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <div className="ml-2 w-9 h-9 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-xs font-bold text-primary-foreground shadow-glow">
          SC
        </div>
      </div>
    </header>
  );
}
