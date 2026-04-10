import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function HeroSection() {
  const t = useTranslations("home");

  const stats = [
    { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
    { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
    { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
  ];

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
              href="/#core-services"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#1a1a1a] transition hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#F5C400", ...fontStyle }}
            >
              {t("hero.cta")}
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 transition hover:border-white/50 active:scale-95"
              style={fontStyle}
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats card — overlaps into dark section from below */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 -mt-16 pb-0 ">
        <div
          className="rounded-2xl shadow-2xl grid grid-cols-3 overflow-hidden"
          style={{ backgroundColor: "var(--white)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 px-10 py-8 border-r border-black/8 last:border-r-0"
            >
              <span
                className="text-4xl md:text-5xl font-extrabold"
                style={{ color: "#F5C400", ...fontStyle }}
              >
                {stat.value}
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
