"use client";

import { useLocale, useMessages, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function CompanyIntroSection() {
  const t = useTranslations("about.companyIntro");
  const messages = useMessages();
  const locale = useLocale();
  const accentFont =
    locale === "en"
      ? "var(--font-playfair-display), Georgia, serif"
      : "var(--font-ma-shan-zheng)";
  const rawDescription = messages.about?.companyIntro?.description;
  const descriptionParagraphs = Array.isArray(rawDescription)
    ? rawDescription
    : [t("description")];

  return (
    <section className="w-full bg-[#F9F7F2] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-16 max-w-6xl">
          <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
            <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
            {t("badge")}
          </div>
          <h2
            className="text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-[#1A1A1A] md:text-[42px]"
            style={fontStyle}
          >
            {t("titleBefore")}
            <span style={{ color: "#F5C400", fontFamily: accentFont }}>
              {t("titleAccent")}
            </span>
            {t("titleAfter")}
          </h2>
          <p
            className="mt-5 max-w-5xl text-[15px] leading-[1.9] text-[#6B6B6B]"
            style={fontStyle}
          >
            {descriptionParagraphs.map((paragraph, index) => (
              <span key={`${index}-${paragraph}`} className="mb-4 block last:mb-0">
                {paragraph}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
