import { Issue, Priority, Status } from "@/types";
import { Circle, CircleDashed, CircleDot, CheckCircle2, SignalHigh, SignalMedium, SignalLow, Search } from "lucide-react";
import { JSX } from "react/jsx-runtime";



const statusIcon: Record<Status, JSX.Element> = {
  backlog: <CircleDashed className="h-3.5 w-3.5 text-status-backlog" />,
  todo: <Circle className="h-3.5 w-3.5 text-status-todo" />,
  progress: <CircleDot className="h-3.5 w-3.5 text-status-progress" />,
  done: <CheckCircle2 className="h-3.5 w-3.5 text-status-done" />,
};

const priorityIcon: Record<Priority, JSX.Element> = {
  high: <SignalHigh className="h-3.5 w-3.5 text-foreground-muted" />,
  medium: <SignalMedium className="h-3.5 w-3.5 text-foreground-muted" />,
  low: <SignalLow className="h-3.5 w-3.5 text-foreground-subtle" />,
};

const issues: Issue[] = [
  { id: "ENG-142", title: "Sync webhook retries drop after gateway timeout", status: "progress", priority: "high", assignee: "AK", color: "#F2994A" },
  { id: "ENG-139", title: "Add keyboard shortcut for bulk status change", status: "todo", priority: "medium", assignee: "RS", color: "#5E6AD2" },
  { id: "ENG-137", title: "Migrate issue search index to trigram", status: "done", priority: "medium", assignee: "MP", color: "#4CB782" },
  { id: "ENG-134", title: "Duplicate detection false positives on imports", status: "backlog", priority: "low", assignee: "JT", color: "#EB5757" },
  { id: "ENG-129", title: "Cycle view: carry over incomplete items", status: "progress", priority: "high", assignee: "AK", color: "#F2994A" },
];

export function IssuePreview() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-surface shadow-[0_20px_70px_-15px_rgba(0,0,0,0.7)]">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/6 bg-surface-2 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-white/4 px-2.5 py-1 text-[12px] text-foreground-subtle">
          <Search className="h-3 w-3" />
          <span>Jump to issue, project, or command…</span>
          <span className="ml-auto flex items-center gap-0.5 font-mono text-[10px]">
            <kbd className="rounded border border-white/10 bg-white/6 px-1 py-0.5">⌘</kbd>
            <kbd className="rounded border border-white/10 bg-white/6 px-1 py-0.5">K</kbd>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-white/6 px-4 py-2.5">
        <div className="flex items-center gap-2 text-[13px] font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Engineering
          <span className="text-foreground-subtle font-normal">/ Active cycle</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-foreground-subtle">
          <span>5 issues</span>
        </div>
      </div>

      <div>
        {issues.map((issue, i) => (
          <div
            key={issue.id}
            className="group flex items-center gap-3 border-b border-white/4 px-4 py-2.5 last:border-b-0 hover:bg-white/2"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            {priorityIcon[issue.priority]}
            {statusIcon[issue.status]}
            <span className="w-17 shrink-0 font-mono text-[12px] text-foreground-subtle">
              {issue.id}
            </span>
            <span className="flex-1 truncate text-[13px] text-foreground/90">
              {issue.title}
            </span>
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold text-white"
              style={{ backgroundColor: issue.color }}
              title={issue.assignee}
            >
              {issue.assignee}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
