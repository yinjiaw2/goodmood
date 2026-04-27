import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function ServiceIntroSection() {
  const t = useTranslations("services.intro");
  const locale = useLocale();
  const title = t("title");
  const highlightText =
    locale === "en" ? "measurable digital performance" : "所有增长渠道";
  const eyebrowLabel = locale === "en" ? "Strategic Approach" : "增长方法";
  const hasHighlight = title.includes(highlightText);
  const [titleBefore, titleAfter] = hasHighlight
    ? title.split(highlightText)
    : [title, ""];

  return (
    <section className="w-full bg-[#FCFBF8] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#9A9A9A]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F5C400]/14 text-[#B38700]">
            <Sparkles size={16} />
          </span>
          <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
          <span style={fontStyle}>{t("badge")}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.78fr)] lg:items-start lg:gap-14">
          <div>
            <h2
              className="max-w-[720px] text-[34px] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#1A1A1A] md:text-[48px] lg:text-[56px]"
              style={fontStyle}
            >
              {hasHighlight ? (
                <>
                  {titleBefore}
                  <span className="text-[#D8A800]">{highlightText}</span>
                  {titleAfter}
                </>
              ) : (
                title
              )}
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#E8DED2] bg-white p-7 shadow-[0_18px_50px_rgba(58,38,42,0.06)] md:p-8">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[28px] bg-[radial-gradient(circle_at_top_right,rgba(245,196,0,0.22),transparent_70%)]" />
            <div className="mb-5 flex items-center justify-between gap-4">
              <span
                className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B09B8A]"
                style={fontStyle}
              >
                {eyebrowLabel}
              </span>
            </div>
            <p
              className="relative text-lg leading-[1.9] text-[#625B56] md:text-[19px]"
              style={fontStyle}
            >
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
