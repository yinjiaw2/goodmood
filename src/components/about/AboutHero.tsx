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
    <section className="relative flex min-h-[80vh] w-full overflow-hidden bg-[#0D0D0D]">
      {/* Left — text */}
      <div className="relative z-10 flex w-full flex-col justify-end px-6 py-24 md:w-1/2 md:px-[8vw]">
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

      {/* Right — image with soft diagonal blend */}
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
