import { Badge } from "@/components/ui/badge";
import { Gauge, GitBranch, Inbox, Workflow } from "lucide-react";

function SectionHeading() {
  return (
    <div className="mx-auto mb-24 max-w-3xl text-center">
      <Badge
        variant="secondary"
        className="border border-white/10 bg-white/[0.03]"
      >
        Workspace
      </Badge>

      <h2 className="mt-8 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        Work without
        <br />
        switching tools.
      </h2>

      <p className="mt-8 max-w-xl mx-auto text-md leading-8 text-white/50">
        Keep projects, tasks, roadmaps, and development in one place so your
        team can focus on building instead of managing.
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-b border-white/6 py-32"
    >
      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/5 blur-[140px]" />
      </div>

      <div className="container">
        <SectionHeading />

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Command Palette */}
          <FeatureCard
            className="lg:col-span-2"
            icon={<Gauge className="h-5 w-5" />}
            title="Navigate at the speed of thought"
            description="Search, create and update work from anywhere without leaving the keyboard."
          >
            <ShortcutDemo />
          </FeatureCard>

          {/* Planning */}
          <FeatureCard
            icon={<Workflow className="h-5 w-5" />}
            title="Plan work that actually ships"
            description="Cycles keep everyone aligned with clear priorities and visible progress."
          >
            <CycleDemo />
          </FeatureCard>

          {/* Inbox */}
          <FeatureCard
            icon={<Inbox className="h-5 w-5" />}
            title="Every request starts organized"
            description="Collect bugs, feedback and feature requests in one inbox before they reach your backlog."
          >
            <InboxDemo />
          </FeatureCard>

          {/* Git */}
          <FeatureCard
            className="lg:col-span-2"
            icon={<GitBranch className="h-5 w-5" />}
            title="Development stays in sync"
            description="Branches, pull requests and deployments automatically update the work your team is tracking."
          >
            <GitDemo />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  children,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/8 bg-[#080808]",
        "transition-all duration-500",
        "hover:-translate-y-1 hover:border-white/15",
        className,
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />

      {/* Hover Glow */}
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top border highlight */}
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Noise (optional if you have a texture) */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative z-10 flex h-full min-h-[430px] flex-col p-8 lg:p-10">
        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent-light transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>

        {/* Copy */}
        <div className="mt-7">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-3 max-w-md text-[15px] leading-7 text-white/55">
            {description}
          </p>
        </div>

        {/* Product Preview */}
        <div className="mt-6 flex flex-1 items-end">
          <div className="w-full rounded-2xl border border-white/6 bg-white/[0.06]">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

import { ArrowRight, Clock3, Search } from "lucide-react";

const commands = [
  {
    title: "Create issue",
    shortcut: "C",
  },
  {
    title: "Open roadmap",
    shortcut: "G R",
  },
  {
    title: "Assign to Alex",
    shortcut: "A",
    active: true,
  },
  {
    title: "Move to Cycle 24",
    shortcut: "⇧ M",
  },
];

export function ShortcutDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/6 bg-[#050505]">
      {/* Search */}
      <div className="flex items-center gap-3 border-b border-white/6 px-4 py-3">
        <Search className="h-4 w-4 text-white/40" />

        <span className="flex-1 text-sm text-white/35">
          Jump anywhere or run a command…
        </span>

        <kbd className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-white/50">
          ⌘K
        </kbd>
      </div>

      {/* Commands */}
      <div className="p-2">
        {commands.map((command) => (
          <button
            key={command.title}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-3 transition-all ${
              command.active ? "bg-white/[0.05]" : "hover:bg-white/[0.03]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-2 w-2 rounded-full ${
                  command.active ? "bg-accent" : "bg-white/20"
                }`}
              />

              <span
                className={`text-sm ${
                  command.active ? "text-white" : "text-white/70"
                }`}
              >
                {command.title}
              </span>
            </div>

            <kbd className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-white/50">
              {command.shortcut}
            </kbd>
          </button>
        ))}
      </div>

      {/* Recent */}
      <div className="border-t border-white/6 px-4 py-3">
        <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/35">
          <Clock3 className="h-3 w-3" />
          Recent
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white/[0.02] px-3 py-3">
          <div>
            <p className="text-sm text-white/80">
              ENG-142 · Retry webhook delivery
            </p>

            <p className="mt-1 text-xs text-white/40">Updated 2 minutes ago</p>
          </div>

          <ArrowRight className="h-4 w-4 text-white/25" />
        </div>
      </div>
    </div>
  );
}

const sprintIssues = [
  {
    id: "ENG-142",
    title: "Webhook retries",
    status: "done",
  },
  {
    id: "ENG-198",
    title: "Command palette",
    status: "active",
  },
  {
    id: "ENG-214",
    title: "Cycle insights",
    status: "todo",
  },
];

export function CycleDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/6 bg-[#050505]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/6 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Current Cycle
          </p>

          <h4 className="mt-1 font-semibold text-white">Cycle 24</h4>
        </div>

        <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent-light">
          3 days left
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 pt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-white/45">Sprint Progress</span>

          <span className="text-sm font-medium text-white">17 / 25</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-[68%] rounded-full bg-accent" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 px-5 py-6">
        <div>
          <p className="text-xs text-white/40">Completed</p>

          <p className="mt-1 text-xl font-semibold text-white">17</p>
        </div>

        <div>
          <p className="text-xs text-white/40">Active</p>

          <p className="mt-1 text-xl font-semibold text-white">6</p>
        </div>

        <div>
          <p className="text-xs text-white/40">Blocked</p>

          <p className="mt-1 text-xl font-semibold text-white">2</p>
        </div>
      </div>

      {/* Work */}
      <div className="border-t border-white/6">
        {sprintIssues.map((issue) => (
          <div
            key={issue.id}
            className="flex items-center justify-between px-5 py-3 transition-colors hover:bg-white/[0.02]"
          >
            <div>
              <p className="font-mono text-[11px] text-white/35">{issue.id}</p>

              <p className="mt-1 text-sm text-white/75">{issue.title}</p>
            </div>

            <div
              className={`h-2.5 w-2.5 rounded-full ${
                issue.status === "done"
                  ? "bg-emerald-400"
                  : issue.status === "active"
                    ? "bg-accent"
                    : "bg-white/20"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const inbox = [
  {
    id: "BUG-241",
    title: "Webhook delivery timeout",
    priority: "High",
    color: "bg-red-400",
  },
  {
    id: "FEAT-102",
    title: "Bulk issue assignment",
    priority: "Medium",
    color: "bg-amber-400",
  },
  {
    id: "DES-88",
    title: "Navigation spacing",
    priority: "Low",
    color: "bg-emerald-400",
  },
];

export function InboxDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/6 bg-[#050505]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/6 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Inbox
          </p>

          <h4 className="mt-1 font-semibold text-white">Incoming Work</h4>
        </div>

        <div className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-white/60">
          12 New
        </div>
      </div>

      {/* Queue */}
      <div>
        {inbox.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between px-5 py-4 transition-colors hover:bg-white/[0.02] ${
              index !== inbox.length - 1 && "border-b border-white/6"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`mt-2 h-2.5 w-2.5 rounded-full ${item.color}`} />

              <div>
                <p className="font-mono text-[11px] text-white/35">{item.id}</p>

                <p className="mt-1 text-sm text-white/80">{item.title}</p>
              </div>
            </div>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/50">
              {item.priority}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/6 px-5 py-4">
        <span className="text-sm text-white/45">Auto triage</span>

        <span className="text-sm font-medium text-emerald-400">
          98% classified
        </span>
      </div>
    </div>
  );
}

import {
  Check,
  GitCommitHorizontal,
  GitPullRequest,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    icon: GitBranch,
    title: "Branch created",
    subtitle: "feat/eng-142-webhook-retries",
  },
  {
    icon: GitCommitHorizontal,
    title: "3 commits pushed",
    subtitle: "Retry logic • Timeout handling",
  },
  {
    icon: GitPullRequest,
    title: "Pull request approved",
    subtitle: "#284 • Ready to merge",
  },
  {
    icon: Rocket,
    title: "Production deployed",
    subtitle: "Live 2 minutes ago",
    success: true,
  },
];

export function GitDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/6 bg-[#050505]">
      {/* Header */}
      <div className="border-b border-white/6 px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
              Development
            </p>

            <h4 className="mt-1 text-base font-semibold text-white">
              ENG-142 · Webhook retries
            </h4>
          </div>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Synced
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative px-6 py-6">
        {/* Line */}
        <div className="absolute bottom-8 left-9 top-7 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

        <div className="space-y-6">
          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="group flex items-start gap-4">
                <div
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    item.success
                      ? "border-emerald-500/30 bg-emerald-500/10"
                      : "border-white/10 bg-white/[0.03] group-hover:border-white/20"
                  }`}
                >
                  {item.success ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Icon className="h-4 w-4 text-white/60" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>

                    {item.success && (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300">
                        Live
                      </span>
                    )}
                  </div>

                  <p className="mt-1 truncate font-mono text-xs text-white/40">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/6 px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white/35">Linked branch</p>

            <p className="mt-1 font-mono text-sm text-white/75">
              feat/eng-142-webhook-retries
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-white/35">Deployment</p>

            <p className="mt-1 font-semibold text-emerald-400">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
}
