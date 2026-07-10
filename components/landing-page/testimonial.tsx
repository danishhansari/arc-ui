"use client";

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
