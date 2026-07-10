'use server'
import { stats } from "@/lib/constants";
import { AnimatedNumber } from "./animated-number";

export async function Stats() {
  return (
    <section className="border-b py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-gradient font-mono text-[28px] font-semibold sm:text-[34px]">
                <AnimatedNumber
                  start={stat.start}
                  end={stat.end}
                  formatter={stat.format}
                />
              </div>

              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}