"use client";

import {
  Activity,
  Gem,
  LineChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
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
    cn: t(`item${n}Cn`),
    en: t(`item${n}En`),
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-10">
          {items.map(({ Icon, cn, en, desc }, index) => (
            <article
              key={en}
              className={`group relative overflow-hidden rounded-[28px] border border-black/8 px-7 py-8 shadow-[0_18px_50px_rgba(58,38,42,0.06)] transition-all duration-300 hover:-translate-y-1 ${
                index === 0 || index === 3
                  ? "bg-[#1A1A1A] text-white xl:col-span-4"
                  : index === 4
                    ? "bg-[#FFFDF8] text-[#1A1A1A] md:col-span-2 xl:col-span-4"
                    : "bg-[#FFFDF8] text-[#1A1A1A] xl:col-span-3"
              }`}
            >
              <div
                className={`mb-12 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${
                  index === 0 || index === 3
                    ? "border-white/10 bg-white/6"
                    : "border-[#E7DCCF] bg-[#F7F1E7]"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  size={20}
                  className={index === 0 || index === 3 ? "text-[#F5C400]" : "text-[#AD8400]"}
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                  <h3
                    className="text-[24px] font-bold leading-none tracking-[-0.02em]"
                    style={fontStyle}
                  >
                    {cn}
                  </h3>
                  <span
                    className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${
                      index === 0 || index === 3 ? "text-[#F5C400]/78" : "text-[#8B827B]"
                    }`}
                    style={fontStyle}
                  >
                    {en}
                  </span>
                </div>

                <p
                  className={`max-w-[360px] text-[14px] leading-[1.85] ${
                    index === 0 || index === 3 ? "text-white/82" : "text-[#625B56]"
                  }`}
                  style={fontStyle}
                >
                  {desc}
                </p>
              </div>

              <span
                className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  index === 0 || index === 3 ? "bg-[#F5C400]" : "bg-[#D8B448]"
                }`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
