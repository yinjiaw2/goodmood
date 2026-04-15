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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map(({ key, title, desc }, i) => (
            <article
              key={key}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/8 bg-[#242424] px-8 py-7 transition-colors duration-300 hover:border-[#F5C400]/30 hover:bg-[#2A2A2A]"
            >
              {/* Number + title row */}
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="text-[19px] font-bold leading-snug text-white"
                  style={fontStyle}
                >
                  {title}
                </h3>
                <span
                  className="shrink-0 text-[28px] font-extrabold leading-none tabular-nums"
                  style={{ color: "rgba(245,196,0,0.18)", ...fontStyle }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Divider */}
              <span className="block h-px w-full bg-white/8 group-hover:bg-[#F5C400]/20 transition-colors duration-300" />

              {/* Description */}
              <p
                className="text-[15px] leading-[1.75] text-white/55"
                style={fontStyle}
              >
                {desc}
              </p>

              {/* Yellow accent bar on hover */}
              <span className="absolute left-0 top-0 h-full w-0.75 scale-y-0 rounded-r-full bg-[#F5C400] transition-transform duration-300 origin-top group-hover:scale-y-100" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
