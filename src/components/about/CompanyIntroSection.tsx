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

  const regions = (t.raw("international.regions") as { city: string; role: string }[]) ?? [];
  const rawDescription = messages.about?.companyIntro?.description;
  const descriptionParagraphs = Array.isArray(rawDescription)
    ? rawDescription
    : [t("description")];

  return (
    <section className="w-full bg-[#F9F7F2] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
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

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Local Team */}
          <div className="rounded-2xl border border-black/8 bg-white p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <div
              className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-[#1A1A1A]"
              style={{ backgroundColor: "#F5C400" }}
            >
              01
            </div>
            <h3
              className="mb-3 text-[20px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]"
              style={fontStyle}
            >
              {t("localTeam.title")}
            </h3>
            <p
              className="mb-6 text-[14px] leading-[1.85] text-[#6B6B6B]"
              style={fontStyle}
            >
              {t("localTeam.desc")}
            </p>
            <ul className="flex flex-col gap-3">
              {(
                t.raw("localTeam.highlights") as string[]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#F5C400" }}
                  />
                  <span
                    className="text-[13px] leading-[1.7] text-[#4A4A4A]"
                    style={fontStyle}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* International Distribution */}
          <div className="rounded-2xl border border-black/8 bg-white p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <div
              className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-[#1A1A1A]"
              style={{ backgroundColor: "#F5C400" }}
            >
              02
            </div>
            <h3
              className="mb-3 text-[20px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]"
              style={fontStyle}
            >
              {t("international.title")}
            </h3>
            <p
              className="mb-6 text-[14px] leading-[1.85] text-[#6B6B6B]"
              style={fontStyle}
            >
              {t("international.desc")}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {regions.map(({ city, role }, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-black/6 bg-[#F9F7F2] px-4 py-3"
                >
                  <p
                    className="text-[13px] font-bold text-[#1A1A1A]"
                    style={fontStyle}
                  >
                    {city}
                  </p>
                  <p
                    className="mt-0.5 text-[11px] text-[#9A9A9A]"
                    style={fontStyle}
                  >
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
