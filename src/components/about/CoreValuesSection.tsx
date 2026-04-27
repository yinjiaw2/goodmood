"use client";

import { Activity, Gem, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const icons = [Activity, Gem, LineChart, ShieldCheck, Sparkles];

export default function CoreValuesSection() {
  const t = useTranslations("about.coreValues");
  const locale = useLocale();
  const accentFont =
    locale === "en"
      ? "var(--font-playfair-display), Georgia, serif"
      : "var(--font-ma-shan-zheng)";

  const items = [1, 2, 3, 4, 5].map((n, i) => ({
    Icon: icons[i]!,
    title: t(`item${n}Title`),
    desc: t(`item${n}Desc`),
  }));

  return (
    <section className="w-full bg-[#F9F7F2] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-14 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
              <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
              {t("badge")}
            </div>
            <h2
              className="max-w-[620px] text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#1A1A1A] md:text-[48px]"
              style={fontStyle}
            >
              {t("titleBefore")}
              <span style={{ color: "#F5C400", fontFamily: accentFont }}>
                {t("titleAccent")}
              </span>
              {t("titleAfter")}
            </h2>
          </div>

          <p
            className="max-w-[460px] text-[15px] leading-[1.85] text-[#5F5854] lg:justify-self-end"
            style={fontStyle}
          >
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {items.map(({ Icon, title, desc }, index) => {
            const isDark = index === 3;
            const colSpanClass =
              index < 2
                ? "xl:col-span-3"
                : index === 4
                  ? "md:col-span-2 xl:col-span-2"
                  : "xl:col-span-2";

            return (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-[28px] border border-black/8 px-8 py-10 shadow-[0_18px_50px_rgba(58,38,42,0.06)] transition-all duration-300 hover:-translate-y-1 ${colSpanClass} ${
                  isDark
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-[#FFFDF8] text-[#1A1A1A]"
                }`}
              >
                <div
                  className={`mb-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${
                    isDark
                      ? "border-white/10 bg-white/6"
                      : "border-[#E7DCCF] bg-[#F7F1E7]"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    size={24}
                    className={isDark ? "text-[#F5C400]" : "text-[#AD8400]"}
                  />
                </div>

                <div className="space-y-4">
                  <h3
                    className="text-[22px] font-bold leading-none tracking-[-0.02em] md:text-[24px]"
                    style={fontStyle}
                  >
                    {title}
                  </h3>

                  <p
                    className={`text-[15px] leading-[1.8] ${
                      isDark ? "text-white/80" : "text-[#625B56]"
                    }`}
                    style={fontStyle}
                  >
                    {desc}
                  </p>
                </div>

                <span
                  className={`absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    isDark ? "bg-[#F5C400]" : "bg-[#D8B448]"
                  }`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
