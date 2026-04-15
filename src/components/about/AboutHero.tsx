import { useLocale, useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("about.hero");
  const locale = useLocale();
  const isEnglish = locale === "en";
  const accentFont = isEnglish
    ? "var(--font-playfair-display), Georgia, serif"
    : "var(--font-ma-shan-zheng)";

  return (
    <section
      className="relative flex items-end min-h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/career-growth.jpg)" }}
    >
      <div className="absolute inset-0 bg-black" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-2xl px-6 py-24 mx-auto md:ml-[8vw] md:mr-0">
        <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm w-fit">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: "#F5C400" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase text-white/90"
            style={{
              fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
            }}
          >
            {t("tag")}
          </span>
        </div>

        <h1
          className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
          style={{
            fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          <span
            className={isEnglish ? "inline-block whitespace-nowrap" : undefined}
          >
            {t("titleLine1")}
          </span>
          <br />
          <span
            className={isEnglish ? "inline-block whitespace-nowrap" : undefined}
          >
            <span style={{ fontFamily: accentFont }}>
              {t("titleLine2AccentFirst")}
            </span>
            {t("titleLine2Before")}
            <span style={{ color: "#F5C400", fontFamily: accentFont }}>
              {t("titleLine2Accent")}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
