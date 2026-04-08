import { useTranslations } from "next-intl";

const font = "var(--font-geist-sans), Arial, Helvetica, sans-serif";

export default function AboutIntro() {
  const t = useTranslations("about.intro");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section
      className="w-full py-44 px-52"
      style={{ backgroundColor: "#F2F1EF" }}
    >
      <div className="max-w-2xl" style={{ marginLeft: "8vw" }}>
        {/* Pill tag */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 bg-white mb-8">
          <span
            className="text-xs font-semibold tracking-widest uppercase text-gray-500"
            style={{ fontFamily: font }}
          >
            {t("label")}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight"
          style={{ fontFamily: font, letterSpacing: "-0.03em" }}
        >
          {t("title")}
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-6">
          {paragraphs.map((para, i: number) => (
            <p
              key={i}
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: font }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
