import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export default function AboutHero() {
  const t = useTranslations("about.hero");
  const locale = useLocale();
  const isEnglish = locale === "en";
  const accentFont = isEnglish
    ? "var(--font-playfair-display), Georgia, serif"
    : "var(--font-ma-shan-zheng)";

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0D0D0D]"
      style={{ marginTop: "-4rem", minHeight: "100vh", paddingTop: "4rem" }}
    >
      <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-center justify-start px-6 pb-72 pt-16 md:px-10 lg:px-16">
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
            className="text-[44px] font-extrabold leading-[1.04] text-white md:text-[64px] lg:text-[78px]"
            style={{
              fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            <span>{t("titleLine1")}</span>
            <br />
            <span style={{ fontFamily: accentFont }}>
              {t("titleLine2AccentFirst")}
            </span>
            {t("titleLine2Before")}
            <br />
            <span style={{ color: "#F5C400", fontFamily: accentFont }}>
              {t("titleLine2Accent")}
            </span>
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-white/30" style={{ fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif" }}>
            Scroll
          </span>
          <ChevronDown size={20} className="text-white/30" />
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
