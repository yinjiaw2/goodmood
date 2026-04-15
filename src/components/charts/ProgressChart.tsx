"use client";

import { useEffect, useRef, useState } from "react";

const fontStyle = { fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" };

export interface ProgressItem {
  label: string;
  before: number;
  after: number;
  max: number;
  unit?: string;
}

interface Props {
  items: ProgressItem[];
}

export default function ProgressChart({ items }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex h-full flex-col justify-center gap-6">
      {items.map((item, i) => {
        const beforePct = (item.before / item.max) * 100;
        const afterPct = (item.after / item.max) * 100;
        return (
          <div key={item.label} className="flex flex-col gap-2">
            {/* Label row */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[#4A4A4A]" style={fontStyle}>
                {item.label}
              </span>
              <span className="text-[12px] font-bold" style={{ color: "#F5C400", ...fontStyle }}>
                {item.before}{item.unit} → {item.after}{item.unit}
              </span>
            </div>

            {/* Before bar */}
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-[#D8D8D8] transition-[width] duration-700"
                style={{
                  width: animated ? `${beforePct}%` : "0%",
                  transitionDelay: `${i * 80}ms`,
                }}
              />
            </div>

            {/* After bar */}
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
              <div
                className="absolute left-0 top-0 h-full rounded-full transition-[width] duration-1000"
                style={{
                  backgroundColor: "#F5C400",
                  width: animated ? `${afterPct}%` : "0%",
                  transitionDelay: `${i * 80 + 200}ms`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
