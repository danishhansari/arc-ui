// 'use server'
// import { stats } from "@/lib/constants";
// import { AnimatedNumber } from "./animated-number";

// export async function Stats() {
//   return (
//     <section className="border-b py-20">
//       <div className="container">
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
//           {stats.map((stat) => (
//             <div key={stat.label} className="text-center md:text-left">
//               <div className="text-gradient font-mono text-[28px] font-semibold sm:text-[34px]">
//                 <AnimatedNumber
//                   start={stat.start}
//                   end={stat.end}
//                   formatter={stat.format}
//                 />
//               </div>

//               <div className="mt-1 text-sm text-muted-foreground">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use server";

import { ArrowUpRight, GitBranch, Rocket, Timer, Users, Zap } from "lucide-react";
import { AnimatedNumber } from "./animated-number";

const stats = [
  {
    icon: Zap,
    value: 60,
    suffix: "%",
    title: "Faster planning",
    description: "Less time organizing work",
  },
  {
   icon: Users,
    value: 100,
    suffix: "%",
    title: "Team Visibility",
    description: "Everyone stays on the same page.",
  },
  {
    icon: GitBranch,
    value: 24,
    suffix: "/7",
    title: "Git synchronization",
    description: "Always connected",
  },
  {
    icon: Rocket,
    value: 4,
    suffix: "×",
    title: "Faster releases",
    description: "Ship with confidence",
  },
];

export async function Stats() {
  return (
    <section className="border-y border-white/6 py-28">
      <div className="container">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-white/40">
            Built for engineering teams
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Focus on shipping,
            <br />
            not managing work.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/55">
            Everything stays connected from planning and triage to pull
            requests and production.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#080808] p-7 transition-all duration-500 hover:border-white/15"
              >
                {/* gradient */}

                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

                {/* top line */}

                <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* icon */}

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                    <Icon className="h-5 w-5 text-accent-light" />
                  </div>

                  {/* value */}

                  <div className="mt-8 flex items-end gap-1">
                    <span className="text-gradient text-5xl font-semibold tracking-tight">
                      <AnimatedNumber
                        start={0}
                        end={stat.value}
                        formatter=""
                      />
                    </span>

                    <span className="mb-1 text-2xl text-accent-light">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* title */}

                  <h3 className="mt-6 text-lg font-semibold">
                    {stat.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {stat.description}
                  </p>

                  {/* footer */}

                  <div className="mt-8 flex items-center justify-between border-t border-white/6 pt-5">
                    <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                      Live
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-white/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}