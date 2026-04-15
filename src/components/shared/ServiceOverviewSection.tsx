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
    <section className="w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
            <span className="inline-block h-px w-7.5 shrink-0 bg-[#F5C400]" />
            {t("details.badge")}
          </div>
          <h2
            className="text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-[#1A1A1A] md:text-[42px]"
            style={fontStyle}
          >
            {t("details.title")}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map(({ key, title, desc }, i) => (
            <article
              key={key}
              className="flex flex-col gap-5 rounded-2xl border border-black/8 bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-[#1A1A1A]"
                style={{ backgroundColor: "#F5C400" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-[18px] font-bold text-[#1A1A1A]"
                style={fontStyle}
              >
                {title}
              </h3>
              <p
                className="text-[14px] leading-[1.8] text-[#6B6B6B]"
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
