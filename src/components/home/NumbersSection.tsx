"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

type StatItem = {
  id: number;
  number: string;
  label: string;
  category: string;
};

function parseAnimatedValue(value: string) {
  const numericPart = value.replace(/[^0-9.]/g, "");
  const parsedValue = Number(numericPart || "0");

  return {
    parsedValue,
    prefix: value.match(/^[^0-9]+/)?.[0] ?? "",
    suffix: value.match(/[^0-9.]+$/)?.[0] ?? "",
    decimals: numericPart.includes(".") ? numericPart.split(".")[1].length : 0,
  };
}

function formatAnimatedValue(value: number, template: string) {
  const { prefix, suffix, decimals } = parseAnimatedValue(template);
  const rounded = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  const [integerPart, decimalPart] = rounded.split(".");
  const formattedInteger = Number(integerPart).toLocaleString("en-US");

  return `${prefix}${decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger}${suffix}`;
}

export default function NumberSection() {
  const t = useTranslations("numbers");
  const stats = t.raw("stats") as StatItem[];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState(stats.map(() => 0));

  const parsedStats = useMemo(
    () => stats.map((stat) => parseAnimatedValue(stat.number)),
    [stats]
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1400;
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValues(
        parsedStats.map((stat) => stat.parsedValue * easedProgress)
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated, parsedStats]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-14 md:mb-18"
          style={{ fontFamily: font, letterSpacing: "-0.03em" }}
        >
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-gray-200 rounded-none">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center px-8 py-10 bg-white"
            >
              <span
                className="text-5xl md:text-6xl font-extrabold mb-5"
                style={{
                  color: "#FB8C00",
                  fontFamily: font,
                  letterSpacing: "-0.04em",
                }}
              >
                {formatAnimatedValue(displayValues[index] ?? 0, stat.number)}
              </span>
              <p
                className="max-w-xs text-lg md:text-xl font-semibold text-gray-900 leading-snug"
                style={{ fontFamily: font }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
