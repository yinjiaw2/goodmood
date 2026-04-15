"use client";

import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

interface Props {
  namespace: string;
}

export default function ServiceSubFeaturesSection({ namespace }: Props) {
  const t = useTranslations(namespace);
  const count = parseInt(t("subFeatures.count"), 10);

  const items = Array.from({ length: count }, (_, i) => ({
    key: `item${i + 1}`,
    title: t(`subFeatures.item${i + 1}Title`),
    desc: t(`subFeatures.item${i + 1}Desc`),
  }));

  return (
    <section className="w-full bg-[#1A1A1A] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
              <span className="inline-block h-px w-7.5 shrink-0 bg-[#F5C400]" />
              {t("subFeatures.badge")}
            </div>
            <h2
              className="text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[42px]"
              style={fontStyle}
            >
              {t("subFeatures.title")}
              <span style={{ color: "#F5C400" }}>{t("subFeatures.titleHighlight")}</span>
            </h2>
          </div>
        </div>

        {/* Feature chips grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 xl:grid-cols-3">
          {items.map(({ key, title, desc }) => (
            <article
              key={key}
              className="flex flex-col gap-3 bg-[#1A1A1A] px-7 py-6 transition-colors duration-200 hover:bg-[#222222]"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#F5C400" }}
                />
                <h3
                  className="text-[15px] font-bold text-white"
                  style={fontStyle}
                >
                  {title}
                </h3>
              </div>
              <p
                className="text-[13px] leading-[1.75] text-white/50"
                style={fontStyle}
              >
                {desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
