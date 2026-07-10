"use client";
import { ArrowRight, CalendarDays, Rocket, Users } from "lucide-react";

const stages = [
  {
    icon: CalendarDays,
    title: "Plan",
    description:
      "Prioritize work into focused cycles that keep everyone aligned.",
  },
  {
    icon: Users,
    title: "Collaborate",
    description:
      "Discuss, assign and review progress without leaving your workspace.",
  },
  {
    icon: Rocket,
    title: "Ship",
    description:
      "Pull requests, deployments and releases update automatically.",
  },
];

export function WorkflowSection() {
  return (
    <div className="container grid gap-8 lg:grid-cols-3">
      {stages.map((stage) => {
        const Icon = stage.icon;

        return (
            <PixelCard>
          <div className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#080808] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/15">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
            <div className="absolute inset-0 overflow-hidden rounded-[inherit]"></div>
              
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                <Icon className="h-5 w-5 text-accent-light" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">{stage.title}</h3>

              <p className="mt-4 leading-7 text-white/55">
                {stage.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm text-accent-light">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
            </PixelCard>
        );
      })}
    </div>
  );
}

import { PropsWithChildren, useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function PixelCard({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#090909]",
        className,
      )}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(220px circle at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,.16), transparent 70%)`,
        }}
      />

      {/* Pixel grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
          maskImage: `radial-gradient(220px circle at ${mouse.x}px ${mouse.y}px, black 20%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(220px circle at ${mouse.x}px ${mouse.y}px, black 20%, transparent 100%)`,
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      {children}
    </div>
  );
}
