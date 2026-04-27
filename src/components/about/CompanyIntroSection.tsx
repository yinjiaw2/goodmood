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
    <section className="w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 xl:gap-24">
          <div className="flex flex-col justify-start">
            <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
              <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
              {t("badge")}
            </div>
            <h2
              className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1A1A1A] md:text-[46px] lg:text-[52px]"
              style={fontStyle}
            >
              {t("titleBefore")}
              <span style={{ color: "#F5C400", fontFamily: accentFont }}>
                {t("titleAccent")}
              </span>
              {t("titleAfter")}
            </h2>
          </div>

          <div className="flex flex-col justify-center pt-2 lg:pt-8">
            <p
              className="text-[16px] leading-[1.85] text-[#5F5854] md:text-[17px]"
              style={fontStyle}
            >
              {descriptionParagraphs.map((paragraph, index) => (
                <span
                  key={`${index}-${paragraph}`}
                  className="mb-6 block last:mb-0"
                >
                  {paragraph}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
