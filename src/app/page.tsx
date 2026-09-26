import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen p-6 sm:p-12 max-w-4xl mx-auto flex flex-col justify-between">
      {/* Foundation Header Shell */}
      <header className="flex items-center justify-between py-4 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold px-2 py-1 rounded border border-border-subtle bg-surface text-text-secondary">
            M1-FOUNDATION
          </span>
          <span className="text-sm font-medium text-text-primary">
            Dipanshi Gupta — System Baseline
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-tertiary hidden sm:inline-block font-mono">
            Theme Mode:
          </span>
          <ThemeToggle />
        </div>
      </header>

      {/* Token & Typography Verification Panel */}
      <section className="my-16 space-y-8">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-primary">
            Milestone 1 · Dual-Theme & Typography Verification
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
            Editorial Tech Product Design Tokens
          </h1>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
            Obsidian Dark serves as the default visual direction with a zero-flicker toggle to Warm-Neutral Light.
            Shared layout, typography, and component structures adapt strictly via semantic CSS custom properties.
          </p>
        </div>

        {/* Semantic Color Token Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-4 rounded-md border border-border-subtle bg-surface space-y-1">
            <span className="text-text-tertiary block">Surface</span>
            <span className="text-text-primary font-semibold">var(--bg-surface)</span>
          </div>
          <div className="p-4 rounded-md border border-border-subtle bg-surface-elevated space-y-1">
            <span className="text-text-tertiary block">Elevated</span>
            <span className="text-text-primary font-semibold">var(--bg-surface-elevated)</span>
          </div>
          <div className="p-4 rounded-md border border-border-subtle bg-surface space-y-1">
            <span className="text-accent-primary block">Accent Primary</span>
            <span className="text-text-primary font-semibold">#38BDF8 / #0284C7</span>
          </div>
          <div className="p-4 rounded-md border border-border-subtle bg-surface space-y-1">
            <span className="text-accent-success block">Status Success</span>
            <span className="text-text-primary font-semibold">#10B981 / #059669</span>
          </div>
        </div>

        {/* Typography Demonstration */}
        <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-4">
          <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider block">
            Typography Proof · Geist Sans + Geist Mono
          </span>
          <p className="text-text-primary font-sans text-lg font-medium">
            Geist Sans: Clean geometric curves engineered for high-density developer tooling.
          </p>
          <p className="text-text-secondary font-mono text-sm">
            Geist Mono: Strict character width reserved for technical metadata, IS codes, and metrics.
          </p>
        </div>
      </section>

      {/* Foundation Footer Status */}
      <footer className="py-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-tertiary font-mono">
        <span>Ready for Milestone 2: UI Primitives & Global Shell</span>
        <span>WCAG 2.1 AA Compliant Tokens</span>
      </footer>
    </main>
  );
}
