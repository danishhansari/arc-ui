import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IssuePreview } from "./issue-previewer";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_80%)]" />
      <div className="pointer-events-none absolute left-1/2 -top-45 h-130 w-225 -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

      <div className="container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <a
            href="#changelog"
            className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[12px] text-foreground-muted opacity-0 [animation-delay:0ms] hover:border-white/20"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-status-progress" />
            Arc 2.0 — now with dependency graphs
            <ArrowRight className="h-3 w-3" />
          </a>

          <h1
            className="animate-fade-up text-balance font-semibold leading-[1.08] tracking-[-0.03em] text-gradient opacity-0 [animation-delay:80ms] text-4xl sm:text-md md:text-7xl"
          >
            Issue tracking built for
            <br />
            teams that ship fast
          </h1>

          <p
            className="mt-5 max-w-2xl animate-fade-up text-balance text-md leading-relaxed text-muted-foreground opacity-0 [animation-delay:160ms] sm:text-md"
          >
            Arc is the fast, keyboard-first issue tracker for modern
            engineering teams. Plan cycles, track progress, and ship without
            the overhead of project management.
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-col items-center gap-3 opacity-0 [animation-delay:240ms] sm:flex-row"
          >
            <Button variant="default" size="lg" className="gap-1.5">
              Start building <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch demo
            </Button>
          </div>

          <p className="mt-4 animate-fade-up text-[12px] text-muted opacity-0 [animation-delay:300ms]">
            No credit card required · Free for teams up to 10
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl animate-fade-up opacity-0 [animation-delay:380ms]">
          <IssuePreview />
        </div>
      </div>
    </section>
  );
}
