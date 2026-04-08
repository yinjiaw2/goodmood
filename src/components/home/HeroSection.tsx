import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-[80vh] w-full bg-cover bg-center scroll-mt-16"
      style={{ backgroundImage: "url(/building-background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div
        className="relative z-10 flex flex-col items-start justify-center w-full max-w-2xl px-6 py-24"
        style={{ marginLeft: "8vw" }}
      >
        {/* Tag */}
        <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm w-fit">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#FB8C00" }} />
          <span
            className="text-xs font-semibold tracking-widest uppercase text-white/90"
            style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" }}
          >
            {t("tag")}
          </span>
        </div>

        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          style={{
            color: "#FB8C00",
            textShadow: "0 2px 24px rgba(0,0,0,0.25)",
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {t("title")}
        </h1>
        <p
          className="text-xl md:text-2xl font-medium text-white mb-8 drop-shadow-lg"
          style={{
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {t("slogan")}
        </p>
        <a
          href="#contact"
          className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            backgroundColor: "#FB8C00",
            color: "#fff",
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
          }}
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
