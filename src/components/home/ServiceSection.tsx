"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function ServiceSection() {
  const t = useTranslations("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: t("services.card1Title"),
      desc: t("services.card1Desc"),
      image: "/google-ads.webp",
      href: "/services/google-ads",
    },
    {
      title: t("services.card2Title"),
      desc: t("services.card2Desc"),
      image: "/meta-ads.jpg",
      href: "/services/meta-ads",
    },
    {
      title: t("services.card3Title"),
      desc: t("services.card3Desc"),
      image: "/tiktok-ads.png",
      href: "/services/tiktok-ads",
    },
    {
      title: t("services.card4Title"),
      desc: t("services.card4Desc"),
      image: "/social-media-marketing.jpg",
      href: "/services/social-media-marketing",
    },
    {
      title: t("services.card5Title"),
      desc: t("services.card5Desc"),
      image: "/SEO.jpeg",
      href: "/services/seo",
    },
    {
      title: t("services.card6Title"),
      desc: t("services.card6Desc"),
      image: "/email-marketing.jpeg",
      href: "/services/email-marketing",
    },
  ];

  return (
    <section
      id="core-services"
      className="w-full bg-white py-24 scroll-mt-16 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div className="flex flex-col gap-4">
          <span
            className="inline-flex w-fit text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border"
            style={{
              color: "#FB8C00",
              borderColor: "rgba(251,140,0,0.35)",
              backgroundColor: "rgba(251,140,0,0.07)",
              ...fontStyle,
            }}
          >
            {t("services.badge")}
          </span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[#0D1B2A] leading-tight"
            style={{ ...fontStyle, letterSpacing: "-0.02em" }}
          >
            {t("services.title")}{" "}
            <span style={{ color: "#FB8C00" }}>{t("services.titleHighlight")}</span>
          </h2>
        </div>
        <p
          className="text-base text-gray-500 max-w-xs sm:text-right sm:pb-1"
          style={fontStyle}
        >
          {t("services.subtitle")}
        </p>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-8 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative shrink-0 w-72 h-96 rounded-2xl overflow-hidden snap-start"
            style={{ textDecoration: "none" }}
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.35) 55%, transparent 100%)",
              }}
            />

            {/* Arrow */}
            <div
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ backgroundColor: "#FB8C00" }}
            >
              <ArrowUpRight size={18} className="text-white" />
            </div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1.5">
              <h3
                className="text-lg font-bold text-white leading-snug"
                style={fontStyle}
              >
                {card.title}
              </h3>
              <p
                className="text-sm text-gray-300 leading-relaxed"
                style={fontStyle}
              >
                {card.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
