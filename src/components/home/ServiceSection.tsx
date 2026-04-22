"use client";

import {
  BadgeDollarSign,
  Mail,
  Search,
  Smartphone,
  Target,
  Video,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function ServiceSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  const cards = [
    {
      key: "social",
      icon: Smartphone,
      title: t("serviceGrid.card1Title"),
      desc: t("serviceGrid.card1Desc"),
      tags: [
        t("serviceGrid.card1Tag1"),
        t("serviceGrid.card1Tag2"),
        t("serviceGrid.card1Tag3"),
      ],
    },
    {
      key: "ads",
      icon: BadgeDollarSign,
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
      icon: Video,
      title: t("serviceGrid.card3Title"),
      desc: t("serviceGrid.card3Desc"),
      tags: [
        t("serviceGrid.card3Tag1"),
        t("serviceGrid.card3Tag2"),
        t("serviceGrid.card3Tag3"),
      ],
    },
    {
      key: "ecommerce",
      icon: Target,
      title: t("serviceGrid.card4Title"),
      desc: t("serviceGrid.card4Desc"),
      tags: [
        t("serviceGrid.card4Tag1"),
        t("serviceGrid.card4Tag2"),
        t("serviceGrid.card4Tag3"),
      ],
    },
    {
      key: "email",
      icon: Mail,
      title: t("serviceGrid.card5Title"),
      desc: t("serviceGrid.card5Desc"),
      tags: [
        t("serviceGrid.card5Tag1"),
        t("serviceGrid.card5Tag2"),
        t("serviceGrid.card5Tag3"),
      ],
    },
    {
      key: "web",
      icon: Search,
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
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[2px] text-[#F5C400]">
            {t("serviceGrid.badge")}
          </div>

          <h2 className="mb-4 text-[38px] font-extrabold leading-[1.1] tracking-[-1px] text-white md:text-[52px]">
            {t("serviceGrid.title")}
          </h2>

          <p className="max-w-[560px] text-[19px] font-bold leading-[1.6] text-white md:text-[20px]">
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
                <card.icon
                  aria-hidden="true"
                  size={22}
                  className="mb-5 h-11 w-11 rounded-lg bg-[rgba(245,196,0,0.12)] p-[10px] text-[#F5C400] transition-colors duration-300 group-hover:bg-black/10 group-hover:text-black"
                />

                <h3 className="mb-3 text-[23px] font-bold tracking-[-0.3px] text-white transition-colors duration-300 group-hover:text-black">
                  {card.title}
                </h3>

                <p className="mb-5 text-[15.5px] leading-[1.65] text-white/55 transition-colors duration-300 group-hover:text-black/75">
                  {card.desc}
                </p>

                <div className="mt-auto flex flex-nowrap gap-2 pr-8">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center whitespace-nowrap rounded-full border border-[#F5C400] px-[10px] py-[4px] text-[12px] font-semibold leading-none text-[#F5C400] transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {locale !== "en" ? (
                  <div className="absolute bottom-0 right-0 text-[20px] text-white/30 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-black">
                  ↗
                  </div>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
