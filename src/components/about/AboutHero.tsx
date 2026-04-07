import content from "@/content/about.json";

export default function AboutHero() {
  return (
    <section
      className="relative flex items-end min-h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/career-growth.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div
        className="relative z-10 w-full max-w-3xl px-6 pb-20"
        style={{ marginLeft: "8vw" }}
      >
        <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm w-fit">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: "#FB8C00" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase text-white/90"
            style={{ fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" }}
          >
            {content.hero.tag}
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          style={{
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          {content.hero.titleLine1}
          <br />
          <span style={{ fontFamily: "var(--font-ma-shan-zheng)" }}>{content.hero.titleLine2AccentFirst}</span>
          {content.hero.titleLine2Before}
          <span style={{ color: "#FB8C00", fontFamily: "var(--font-ma-shan-zheng)" }}>{content.hero.titleLine2Accent}</span>
        </h1>
      </div>
    </section>
  );
}
