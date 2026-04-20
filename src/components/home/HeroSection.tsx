"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

type StatDisplay = {
  label: string;
  prefix: string;
  suffix: string;
  value: number;
};

function parseStatValue(value: string): Omit<StatDisplay, "label"> {
  const match = value.match(/\d[\d,.]*/);

  if (!match) {
    return {
      prefix: "",
      suffix: value,
      value: 0,
    };
  }

  const [numericPart] = match;
  const numericStart = match.index ?? 0;
  const numericEnd = numericStart + numericPart.length;

  return {
    prefix: value.slice(0, numericStart),
    suffix: value.slice(numericEnd),
    value: Number(numericPart.replace(/,/g, "")),
  };
}

function formatStatValue(
  stat: Omit<StatDisplay, "label">,
  currentValue: number,
  locale: string,
) {
  const formattedNumber = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(currentValue);

  return `${stat.prefix}${formattedNumber}${stat.suffix}`;
}

export default function HeroSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  const statsRef = useRef<HTMLDivElement>(null);
  const stat1Value = t("hero.stat1Value");
  const stat2Value = t("hero.stat2Value");
  const stat3Value = t("hero.stat3Value");
  const stat4Value = t("hero.stat4Value");

  const stats = [
    { ...parseStatValue(stat1Value), label: t("hero.stat1Label") },
    { ...parseStatValue(stat2Value), label: t("hero.stat2Label") },
    { ...parseStatValue(stat3Value), label: t("hero.stat3Label") },
    { ...parseStatValue(stat4Value), label: t("hero.stat4Label") },
  ];

  const [animatedValues, setAnimatedValues] = useState(() =>
    stats.map(() => 0),
  );

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const animationTargets = [
      parseStatValue(stat1Value),
      parseStatValue(stat2Value),
      parseStatValue(stat3Value),
      parseStatValue(stat4Value),
    ];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const reducedMotionFrame = window.requestAnimationFrame(() => {
        setAnimatedValues(animationTargets.map((stat) => stat.value));
      });

      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    let frameId = 0;
    let timeoutId = 0;
    let hasAnimated = false;

    const animate = () => {
      const duration = 1400;
      const startTime = performance.now();

      const tick = (currentTime: number) => {
        const elapsed = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - elapsed, 3);

        setAnimatedValues(
          animationTargets.map((stat) =>
            Math.round(stat.value * easedProgress),
          ),
        );

        if (elapsed < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated) return;

        hasAnimated = true;
        timeoutId = window.setTimeout(animate, 120);
        observer.disconnect();
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [stat1Value, stat2Value, stat3Value, stat4Value]);

  return (
    <section id="hero" className="relative w-full">
      {/* Main content */}
      <div className="px-16 pt-36 pb-32 bg-secondary w-full">
        <div className="max-w-2xl flex flex-col gap-8 ml-14">
          {/* Badge */}
          <div className="inline-flex">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border"
              style={{
                color: "#F5C400",
                borderColor: "rgba(245,196,0,0.4)",
                backgroundColor: "rgba(245,196,0,0.08)",
                ...fontStyle,
              }}
            >
              {t("hero.badge")}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
            style={{ ...fontStyle, letterSpacing: "-0.02em" }}
          >
            {t("hero.titlePrefix")}
            {t("hero.titlePrefix") ? " " : ""}
            <span style={{ color: "#F5C400" }}>{t("hero.titleHighlight")}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg text-gray-400 leading-relaxed"
            style={fontStyle}
          >
            {t("hero.subtitle")}
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#1a1a1a] transition hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#F5C400", ...fontStyle }}
            >
              {t("hero.cta")}
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 transition hover:border-white/50 active:scale-95"
              style={fontStyle}
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats card — overlaps into dark section from below */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 -mt-16 pb-0 justify-center items-center">
        <div
          id="numbers"
          ref={statsRef}
          className="rounded-2xl shadow-2xl grid grid-cols-4 overflow-hidden justify-center items-center"
          style={{ backgroundColor: "var(--white)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 px-10 py-8 border-r border-black/8 last:border-r-0 justify-center items-center"
            >
              <span
                className="text-4xl md:text-5xl font-extrabold"
                style={{ color: "#F5C400", ...fontStyle }}
              >
                {formatStatValue(stat, animatedValues[i] ?? 0, locale)}
              </span>
              <span
                className="text-sm font-medium text-gray-600"
                style={fontStyle}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom padding so card sits flush */}
      <div className="pb-10" />
    </section>
  );
}