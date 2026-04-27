"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function HeroSection() {
  const t = useTranslations("services.hero");

  return (
    <section
      className="relative w-full bg-secondary flex flex-col"
      style={{ marginTop: "-4rem", minHeight: "100vh", paddingTop: "4rem" }}
    >
      {/* Main content */}
      <div className="mx-auto max-w-7xl w-full px-6 pt-24 pb-16 md:px-10 lg:px-16">
        <div className="max-w-2xl flex flex-col gap-8">
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
              {t("badge")}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
            style={{ ...fontStyle, letterSpacing: "-0.02em" }}
          >
            {t("titlePrefix")}{t("titlePrefix") ? " " : ""}
            <span style={{ color: "#F5C400" }}>{t("titleHighlight")}</span>
            {t("titleSuffix") ? ` ${t("titleSuffix")}` : ""}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg text-gray-400 leading-relaxed"
            style={fontStyle}
          >
            {t("subtitle")}
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#1a1a1a] transition hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#F5C400", ...fontStyle }}
            >
              {t("cta")}
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 transition hover:border-white/50 active:scale-95"
              style={fontStyle}
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Scroll indicator */}
      <div className="flex justify-center pb-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-white/30" style={fontStyle}>
            Scroll
          </span>
          <ChevronDown size={20} className="text-white/30" />
        </div>
      </div>
    </section>
  );
}
