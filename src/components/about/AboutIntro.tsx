import { useTranslations } from "next-intl";

const font = "var(--font-app-sans), Arial, Helvetica, sans-serif";

export default function AboutIntro() {
  const t = useTranslations("about.intro");
  const paragraphKeys = ["0", "1", "2"] as const;

  return (
    <section
      className="w-full py-20 px-6"
      style={{ backgroundColor: "#F2F1EF" }}
    >
      <div className="max-w-2xl mx-auto md:ml-[8vw] md:mr-0">
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
          {paragraphKeys.map((paragraphKey) => (
            <p
              key={paragraphKey}
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: font }}
            >
              {t(`paragraphs.${paragraphKey}`)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
