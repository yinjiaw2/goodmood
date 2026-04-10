import { useTranslations } from "next-intl";
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
    { value: t("hero.stat4Value"), label: t("hero.stat4Label") },
  ];

  const titleSuffix = t("hero.titleSuffix");

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen w-full bg-[#0D1B2A] pt-16"
    >
      <div className="w-full max-w-7xl px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column: Badge, headline, subtitle, CTA */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border"
              style={{
                color: "#FB8C00",
                borderColor: "rgba(251,140,0,0.4)",
                backgroundColor: "rgba(251,140,0,0.08)",
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
            <span style={{ color: "#FB8C00" }}>{t("hero.titleHighlight")}</span>
            {titleSuffix ? (
              <>
                <br />
                {titleSuffix}
              </>
            ) : null}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            style={fontStyle}
          >
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#FB8C00", ...fontStyle }}
            >
              {t("hero.cta")}
              <ArrowRight size={18} />
            </a>
            <a
              href="/about"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-gray-300 border border-white/20 transition hover:border-white/40 hover:text-white active:scale-95"
              style={fontStyle}
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>

        {/* Right column: Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-8 rounded-2xl border border-white/10 transition hover:border-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <span
                className="text-4xl font-extrabold"
                style={{ color: "#FB8C00", ...fontStyle }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm text-gray-400 font-medium leading-snug"
                style={fontStyle}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
