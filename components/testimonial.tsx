// export function Testimonial() {
//   return (
//     <section className="border-b border-white/6 py-24">
//       <div className="container">
//         <div className="mx-auto max-w-2xl text-center">
//           <p className="text-balance text-[22px] font-medium leading-snug tracking-[-0.01em] text-foreground/90 sm:text-[26px]">
//             “We moved off three tools and a spreadsheet. Our team ships on a
//             tighter cycle because nobody is asking where an issue stands
//             anymore — they just look.”
//           </p>
//           <div className="mt-6 flex items-center justify-center gap-3">
//             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[12px] font-semibold text-white">
//               PL
//             </span>
//             <div className="text-left">
//               <div className="text-[13px] font-medium">Priya Lang</div>
//               <div className="text-[12px] text-foreground-subtle">
//                 Head of Engineering, Northwind
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "The keyboard-first workflow is what sold our team. It feels like the issue tracker gets out of the way so we can focus on shipping.",
    name: "Sarah Chen",
    role: "Staff Engineer",
    company: "Atlas Labs",
  },
  {
    quote:
      "Planning cycles used to take hours. Now everything is visible, predictable, and everyone knows what they're working on.",
    name: "Michael Brooks",
    role: "Engineering Manager",
    company: "LaunchStack",
  },
  {
    quote:
      "Finally an issue tracker that's fast enough to keep up with engineers instead of slowing them down.",
    name: "David Kim",
    role: "Principal Engineer",
    company: "Northstar",
  },
];

export function Testimonial() {
  return (
    <section className="border-b py-24">
      <div className="container">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000
            })
          ]}
          opts={{
            loop: true,
          }}
          className="mx-auto max-w-3xl"
        >
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.name}>
                <div className="text-center">
                  <p className="text-balance text-2xl font-medium leading-relaxed tracking-tight">
                    "{item.quote}"
                  </p>

                  <div className="mt-8">
                    <div className="text-lg font-semibold">{item.name}</div>
                    <p className="text-sm text-muted-foreground">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
