import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[130px]" />
      <div className="container relative text-center">
        <h2 className="text-balance text-[32px] font-semibold tracking-[-0.02em] sm:text-[42px]">
          Set up your team in minutes
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-foreground-muted">
          Import from your current tracker, invite your team, and start your
          first cycle today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="accent" size="lg" className="gap-1.5">
            Start building <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
}
