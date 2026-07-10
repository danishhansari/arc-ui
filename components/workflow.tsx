const stages = [
  {
    n: "01",
    title: "Plan the cycle",
    copy: "Scope work into weekly or bi-weekly cycles. Estimate with points or time, and let Arc track velocity automatically.",
  },
  {
    n: "02",
    title: "Build in the open",
    copy: "Every issue is visible to the team. Sub-issues, dependencies, and blockers surface before they cost you a day.",
  },
  {
    n: "03",
    title: "Ship and close the loop",
    copy: "Merge the PR and the issue closes itself. Release notes compile from completed work, no extra step.",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflows" className="border-b border-white/6 py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {stages.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="font-mono text-[13px] text-accent-light">{s.n}</div>
              <h3 className="mt-3 text-[18px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">
                {s.copy}
              </p>
              {i < stages.length - 1 && (
                <div className="absolute -right-5 top-1 hidden h-px w-10 bg-white/10 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
