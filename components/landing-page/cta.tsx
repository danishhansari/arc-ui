import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="border-t border-white/6 py-40">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Ready when you are
          </p>

          <h2 className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Build products.
            <br />
            Not busywork.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Arc brings planning, issues, pull requests and releases together
            into one calm workspace—so your team can stay focused on shipping.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-12 rounded-xl px-7">
              Start your first cycle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="h-12 rounded-xl text-white/60 hover:bg-transparent hover:text-white"
            >
              Book a demo
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-white/35">
            <span>No credit card</span>
            <span>Free migration</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}