"use client";

import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

interface Props {
  namespace: string;
}

export default function ServiceOverviewSection({ namespace }: Props) {
  const t = useTranslations(namespace);

  const cards = [
    {
      key: "card1",
      title: t("details.card1Title"),
      desc: t("details.card1Desc"),
    },
    {
      key: "card2",
      title: t("details.card2Title"),
      desc: t("details.card2Desc"),
    },
    {
      key: "card3",
      title: t("details.card3Title"),
      desc: t("details.card3Desc"),
    },
  ];

  return (
    <section className="w-full bg-[#F7F4EF] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A8F88]">
          <span className="inline-block h-px w-7.5 shrink-0 bg-[#B10657]" />
          {t("details.badge")}
        </div>
        <h2
          className="mb-10 max-w-[780px] text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-[#1A1A1A] md:text-[44px]"
          style={fontStyle}
        >
          {t("details.title")}
        </h2>

        <div className="overflow-hidden border border-[#E0D5CF] bg-white shadow-[0_18px_36px_rgba(58,38,42,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
          {cards.map(({ key, title, desc }, i) => (
            <article
              key={key}
              className={`flex min-h-[250px] flex-col gap-5 px-8 py-9 md:px-9 ${
                i === 1
                  ? "bg-[#B10657] text-white"
                  : "bg-[#E9B3BB] text-[#FFF7F4]"
              }`}
            >
              <span
                className={`text-[12px] font-semibold uppercase tracking-[0.16em] ${
                  i === 1 ? "text-white/80" : "text-[#FFF4EF]/85"
                }`}
                style={fontStyle}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="max-w-[220px] text-[22px] font-bold leading-[1.1]"
                style={fontStyle}
              >
                {title}
              </h3>
              <p
                className={`max-w-[260px] text-[14px] leading-[1.8] ${
                  i === 1 ? "text-white/88" : "text-[#FFF8F5]/92"
                }`}
                style={fontStyle}
              >
                {desc}
              </p>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
