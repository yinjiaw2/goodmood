"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ServiceSection() {
  const t = useTranslations("home");

  const cards = [
    {
      key: "social",
      icon: "📱",
      title: t("serviceGrid.card1Title"),
      desc: t("serviceGrid.card1Desc"),
      tags: [
        t("serviceGrid.card1Tag1"),
        t("serviceGrid.card1Tag2"),
        t("serviceGrid.card1Tag3"),
      ],
    },
    {
      key: "ecommerce",
      icon: "🛒",
      title: t("serviceGrid.card2Title"),
      desc: t("serviceGrid.card2Desc"),
      tags: [
        t("serviceGrid.card2Tag1"),
        t("serviceGrid.card2Tag2"),
        t("serviceGrid.card2Tag3"),
      ],
    },
    {
      key: "creative",
      icon: "🎨",
      title: t("serviceGrid.card3Title"),
      desc: t("serviceGrid.card3Desc"),
      tags: [
        t("serviceGrid.card3Tag1"),
        t("serviceGrid.card3Tag2"),
        t("serviceGrid.card3Tag3"),
      ],
    },
    {
      key: "email",
      icon: "✉️",
      title: t("serviceGrid.card4Title"),
      desc: t("serviceGrid.card4Desc"),
      tags: [
        t("serviceGrid.card4Tag1"),
        t("serviceGrid.card4Tag2"),
        t("serviceGrid.card4Tag3"),
      ],
    },
    {
      key: "web",
      icon: "💻",
      title: t("serviceGrid.card5Title"),
      desc: t("serviceGrid.card5Desc"),
      tags: [
        t("serviceGrid.card5Tag1"),
        t("serviceGrid.card5Tag2"),
        t("serviceGrid.card5Tag3"),
      ],
    },
    {
      key: "ads",
      icon: "📊",
      title: t("serviceGrid.card6Title"),
      desc: t("serviceGrid.card6Desc"),
      tags: [
        t("serviceGrid.card6Tag1"),
        t("serviceGrid.card6Tag2"),
        t("serviceGrid.card6Tag3"),
      ],
    },
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-12">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-[#F5C400]">
            {t("serviceGrid.badge")}
          </div>

          <h2 className="mb-4 text-[34px] font-extrabold leading-[1.1] tracking-[-1px] text-white md:text-[46px]">
            {t("serviceGrid.title")}
          </h2>

          <p className="max-w-[520px] text-[16px] leading-[1.6] text-white/50">
            {t("serviceGrid.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={`/services/${card.key}`}
              className="group relative block min-h-[320px] overflow-hidden bg-[#1A1A1A] px-9 py-10"
              style={{ textDecoration: "none" }}
            >
              <div className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-[#F5C400] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[rgba(245,196,0,0.12)] text-[20px] transition-colors duration-300 group-hover:bg-black/10">
                  {card.icon}
                </div>

                <h3 className="mb-3 text-[20px] font-bold tracking-[-0.3px] text-white transition-colors duration-300 group-hover:text-black">
                  {card.title}
                </h3>

                <p className="mb-5 text-[14.5px] leading-[1.65] text-white/50 transition-colors duration-300 group-hover:text-black/75">
                  {card.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pr-8">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/12 px-[10px] py-[4px] text-[11px] font-semibold leading-none whitespace-nowrap text-white/45 transition-all duration-300 group-hover:border-black/20 group-hover:text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 right-0 text-[20px] text-white/30 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-black">
                  ↗
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
