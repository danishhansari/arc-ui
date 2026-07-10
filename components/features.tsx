import { Badge } from "@/components/ui/badge";
import { GitBranch, Inbox, Workflow, Gauge } from "lucide-react";

function SectionHeading() {
  return (
    <div className="mx-auto mb-14 max-w-xl text-center">
      <Badge variant="secondary">Product</Badge>
      <h2 className="mt-4 text-balance text-[32px] font-semibold tracking-[-0.02em] sm:text-[40px]">
        Every part of the workflow,
        <br />
        without the friction
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted">
        Arc replaces a dozen scattered tools with one fast, opinionated
        system for tracking work.
      </p>
    </div>
  );
}

function ShortcutRow({ keys, label }: { keys: string[]; label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-2.5 last:border-0">
      <span className="text-[13px] text-foreground-muted">{label}</span>
      <span className="flex gap-1">
        {keys.map((k) => (
          <kbd
            key={k}
            className="rounded border border-white/10 bg-white/[0.05] px-1.5 py-0.5 font-mono text-[11px] text-foreground/80"
          >
            {k}
          </kbd>
        ))}
      </span>
    </div>
  );
}

function CycleBar() {
  const days = [40, 65, 30, 90, 55, 75, 100];
  return (
    <div className="flex h-24 items-end gap-1.5">
      {days.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/30 to-accent"
          style={{ height: `${h}%`, opacity: 0.4 + (i / days.length) * 0.6 }}
        />
      ))}
    </div>
  );
}

export function Features() {
  return (
    <section id="product" className="border-b border-white/[0.06] py-24">
      <div className="container">
        <SectionHeading />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Speed - large card */}
          <div className="card-glow rounded-lg border border-white/10 bg-surface p-6 md:col-span-2">
            <Gauge className="h-5 w-5 text-accent-light" />
            <h3 className="mt-4 text-[18px] font-semibold">Built for keyboard speed</h3>
            <p className="mt-1.5 max-w-sm text-[14px] leading-relaxed text-foreground-muted">
              Every action has a shortcut. Create, assign, and move issues
              without touching the mouse.
            </p>
            <div className="mt-6 rounded-md border border-white/[0.06] bg-surface-2 p-4">
              <ShortcutRow keys={["C"]} label="Create issue" />
              <ShortcutRow keys={["⌘", "K"]} label="Open command menu" />
              <ShortcutRow keys={["G", "I"]} label="Go to inbox" />
              <ShortcutRow keys={["A"]} label="Assign to..." />
            </div>
          </div>

          {/* Cycles */}
          <div className="card-glow rounded-lg border border-white/10 bg-surface p-6">
            <Workflow className="h-5 w-5 text-accent-light" />
            <h3 className="mt-4 text-[18px] font-semibold">Cycles that build rhythm</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-foreground-muted">
              Automatic scope tracking so your team always knows the pace of
              delivery.
            </p>
            <div className="mt-6 rounded-md border border-white/[0.06] bg-surface-2 p-4">
              <CycleBar />
              <p className="mt-3 text-center font-mono text-[11px] text-foreground-subtle">
                Cycle 24 · 7 days
              </p>
            </div>
          </div>

          {/* Triage */}
          <div className="card-glow rounded-lg border border-white/10 bg-surface p-6">
            <Inbox className="h-5 w-5 text-accent-light" />
            <h3 className="mt-4 text-[18px] font-semibold">Triage without the noise</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-foreground-muted">
              Incoming reports land in one queue. Route, merge, or dismiss in
              a single keystroke.
            </p>
            <div className="mt-6 space-y-2">
              {["Duplicate of ENG-137", "Needs reproduction steps", "Routed to Design"].map(
                (t) => (
                  <div
                    key={t}
                    className="rounded-md border border-white/[0.06] bg-surface-2 px-3 py-2 text-[12px] text-foreground-subtle"
                  >
                    {t}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Git integration - large card */}
          <div className="card-glow rounded-lg border border-white/10 bg-surface p-6 md:col-span-2">
            <GitBranch className="h-5 w-5 text-accent-light" />
            <h3 className="mt-4 text-[18px] font-semibold">Connected to your code</h3>
            <p className="mt-1.5 max-w-sm text-[14px] leading-relaxed text-foreground-muted">
              Branches, commits, and pull requests link back to issues
              automatically. Status updates when the PR merges.
            </p>
            <div className="mt-6 rounded-md border border-white/[0.06] bg-surface-2 p-4 font-mono text-[12px] text-foreground-muted">
              <div className="flex items-center gap-2">
                <span className="text-status-done">✓</span>
                <span className="text-foreground/90">feat/eng-142-webhook-retry-backoff</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-foreground-subtle">
                <span>→</span>
                <span>merged into main · ENG-142 marked Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
