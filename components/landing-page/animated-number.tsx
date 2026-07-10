"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  start: number;
  end: number;
  duration?: number;
  formatter: string;
};

export function AnimatedNumber({
  start,
  end,
  duration = 8500,
  formatter,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(start);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setStarted(true);

        const startTime = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);

          const eased = 1 - Math.pow(1 - progress, 3);

          setValue(start + (end - start) * eased);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);

        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [start, end, duration, started]);

  function formatValue(value: number) {
  switch (formatter) {
    case "ms":
      return `${Math.round(value)}ms`;

    case "%":
      return `${Math.round(value)}%`;

    case "k":
      return `${(value / 1000).toFixed(1)}k`;

    default:
      return Math.round(value).toString();
  }
}

  return <span ref={ref}>{formatValue(value)}</span>;
}