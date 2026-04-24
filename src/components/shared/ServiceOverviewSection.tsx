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
  const cardNumbers = [1, 2, 3, 4, 5, 6].filter(
    (n) => t.has(`details.card${n}Title`) && t.has(`details.card${n}Desc`),
  );
  const cards = cardNumbers.map((n) => ({
    key: `card${n}`,
    title: t(`details.card${n}Title`),
    desc: t(`details.card${n}Desc`),
  }));
  const hasFourCards = cards.length === 4;
  const hasFiveCards = cards.length === 5;
  const fourCardLabels = [
    "Messaging & Positioning",
    "Creative & Production",
    "Retainer & Growth",
    "Analytics & ROI",
  ];

  return (
    <section className="w-full bg-[#F7F4EF] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A8F88]">
          <span className="inline-block h-px w-7.5 shrink-0 bg-[#F5C400]" />
          {t("details.badge")}
        </div>
        <h2
          className="mb-10 max-w-[780px] text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-[#1A1A1A] md:text-[44px]"
          style={fontStyle}
        >
          {t("details.title")}
        </h2>

        {hasFourCards ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map(({ key, title, desc }, i) => {
              const darkCard = i === 1 || i === 2;
              return (
                <article
                  key={key}
                  className={`flex min-h-[300px] flex-col justify-between rounded-[8px] border px-8 py-8 shadow-[0_18px_36px_rgba(58,38,42,0.06)] md:px-10 md:py-9 ${
                    darkCard
                      ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                      : "border-[#E3D7B2] bg-[#F5C400] text-[#1A1A1A]"
                  }`}
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`text-[12px] font-semibold uppercase tracking-[0.16em] ${
                          darkCard ? "text-[#F5C400]/85" : "text-[#1A1A1A]/65"
                        }`}
                        style={fontStyle}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`h-px flex-1 ${
                          darkCard ? "bg-white/12" : "bg-[#1A1A1A]/12"
                        }`}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3
                        className="max-w-[320px] text-[26px] font-bold leading-[1.02] tracking-[-0.02em]"
                        style={fontStyle}
                      >
                        {title}
                      </h3>
                      <p
                        className={`max-w-[520px] text-[14px] leading-[1.9] md:text-[15px] ${
                          darkCard ? "text-white/88" : "text-[#1A1A1A]/82"
                        }`}
                        style={fontStyle}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                      darkCard ? "text-white/72" : "text-[#1A1A1A]"
                    }`}
                    style={fontStyle}
                  >
                    {fourCardLabels[i] ?? "Service Detail"}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 gap-5 md:grid-cols-2 ${
              hasFiveCards ? "xl:grid-cols-5" : "xl:grid-cols-3"
            }`}
          >
            {cards.map(({ key, title, desc }, i) => (
              <article
                key={key}
                className={`flex min-h-[280px] flex-col gap-4 border px-6 py-7 shadow-[0_18px_36px_rgba(58,38,42,0.06)] xl:min-h-[340px] ${
                  i % 2 === 1
                    ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                    : "border-[#E3D7B2] bg-[#F5C400] text-[#1A1A1A]"
                }`}
              >
                <span
                  className={`text-[12px] font-semibold uppercase tracking-[0.16em] ${
                    i % 2 === 1 ? "text-[#F5C400]/80" : "text-[#1A1A1A]/70"
                  }`}
                  style={fontStyle}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="max-w-[220px] text-[21px] font-bold leading-[1.08] xl:text-[19px]"
                  style={fontStyle}
                >
                  {title}
                </h3>
                <p
                  className={`max-w-[260px] whitespace-pre-line text-[14px] leading-[1.75] xl:text-[13px] ${
                    i % 2 === 1 ? "text-white/88" : "text-[#1A1A1A]/82"
                  }`}
                  style={fontStyle}
                >
                  {desc}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
