import { useTranslations } from "next-intl";
import HeroContactForm from "./HeroContactForm";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function HeroSection() {
  const t = useTranslations("home");

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen w-full bg-[#0D1B2A] "
    >
      <div className="w-full max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column: Badge, headline, subtitle */}
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
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            style={fontStyle}
          >
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Right column: Contact form */}
        <div className="flex items-center justify-center w-full">
          <HeroContactForm />
        </div>
      </div>
    </section>
  );
}
