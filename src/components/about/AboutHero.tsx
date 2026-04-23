import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("about.hero");
  const locale = useLocale();
  const isEnglish = locale === "en";
  const accentFont = isEnglish
    ? "var(--font-playfair-display), Georgia, serif"
    : "var(--font-ma-shan-zheng)";

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-end justify-start px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        {/* Hero text */}
        <div className="flex w-full max-w-none flex-col items-start text-left">
          <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
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
            className="max-w-[1180px] text-[44px] font-extrabold leading-[1.04] text-white md:text-[64px] lg:text-[78px]"
            style={{
              fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            <span>{t("titleLine1")}</span>
            {isEnglish ? " " : ""}
            <span className="inline-block">
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
      </div>

      {/* Right image with soft diagonal blend */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[60%]">
        <Image
          src="/about-us.jpeg"
          alt="About us"
          fill
          className="object-cover"
          priority
        />
        {/* dark tint on image */}
        <div className="absolute inset-0 bg-black/50" />
        {/* soft diagonal fade from dark background into image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, #0D0D0D 25%, rgba(13,13,13,0.6) 45%, rgba(13,13,13,0.15) 62%, transparent 75%)",
          }}
        />
      </div>
    </section>
  );
}
