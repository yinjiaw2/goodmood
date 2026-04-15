"use client";

import { useEffect, useRef, useState } from "react";

const fontStyle = { fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" };

export interface CounterItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

interface Props {
  items: CounterItem[];
}

export default function CounterCards({ items }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frameId = 0;
    let timeoutId = 0;
    let animated = false;

    const animate = () => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        setProgress(eased);
        if (elapsed < 1) frameId = requestAnimationFrame(tick);
      };
      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || animated) return;
        animated = true;
        timeoutId = window.setTimeout(animate, 120);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={ref} className="grid h-full grid-cols-2 gap-4 content-start">
      {items.map((item) => {
        const decimals = item.decimals ?? (item.value % 1 !== 0 ? 1 : 0);
        const current = (item.value * progress).toFixed(decimals);
        return (
          <div
            key={item.label}
            className="flex flex-col justify-center gap-2 rounded-2xl bg-[#F9F7F4] px-5 py-6"
          >
            <span
              className="text-[30px] font-extrabold leading-none tracking-tight text-[#1A1A1A]"
              style={fontStyle}
            >
              {item.prefix}{current}{item.suffix}
            </span>
            <span className="text-[11px] font-medium leading-snug text-[#9A9A9A]" style={fontStyle}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
