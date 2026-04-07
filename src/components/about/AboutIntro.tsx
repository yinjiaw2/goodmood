import content from "@/content/about.json";

export default function AboutIntro() {
  return (
    <section
      className="w-full py-24 px-6"
      style={{ backgroundColor: "#F2F1EF" }}
    >
      <div className="max-w-3xl" style={{ marginLeft: "8vw" }}>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{
            color: "#FB8C00",
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
          }}
        >
          {content.intro.label}
        </p>
        <p
          className="text-xl md:text-2xl text-gray-800 leading-relaxed"
          style={{
            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {content.intro.body}
        </p>
      </div>
    </section>
  );
}
