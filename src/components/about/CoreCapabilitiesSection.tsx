"use client";

import {
  Target,
  Lightbulb,
  Globe2,
  TrendingUp,
  Users,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const icons = [Target, Lightbulb, Globe2, TrendingUp, Users];

interface Props {
  namespace?: string;
  variant?: "about" | "whyUs";
}

export default function CoreCapabilitiesSection({
  namespace = "about.coreCapabilities",
  variant = "about",
}: Props) {
  const t = useTranslations(namespace);
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
    <section className="w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
            <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
            {t("badge")}
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className={`max-w-[560px] font-extrabold tracking-[-0.03em] text-[#1A1A1A] ${
                variant === "whyUs"
                  ? "text-[38px] leading-none md:text-[52px]"
                  : "text-[32px] leading-tight md:text-[46px]"
              }`}
              style={fontStyle}
            >
              {variant === "whyUs" ? (
                <>
                  <span className="block">{t("title")}</span>
                  <span className="block" style={{ color: "#F5C400" }}>
                    {t("titleHighlight")}
                  </span>
                </>
              ) : (
                <>
                  {t("titleBefore")}
                  <span style={{ color: "#F5C400", fontFamily: accentFont }}>
                    {t("titleAccent")}
                  </span>
                  {t("titleAfter")}
                </>
              )}
            </h2>
            <p
              className={`text-[15px] text-[#6B6B6B] lg:text-right ${
                variant === "whyUs"
                  ? "max-w-[420px] leading-[1.7]"
                  : "max-w-[400px] leading-[1.75]"
              }`}
              style={fontStyle}
            >
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/8 bg-black/8 md:grid-cols-2 ${
            variant === "whyUs" ? "xl:grid-cols-5" : "xl:grid-cols-6"
          }`}
        >
          {items.map(({ Icon, title, desc }, index) => (
            <article
              key={title}
              className={`group flex flex-col gap-4 bg-white px-9 py-10 transition-colors duration-300 hover:bg-[#FFFBEE] ${
                variant === "whyUs"
                  ? "px-7"
                  : `${index < 3 ? "xl:col-span-2" : "xl:col-span-3"} ${
                      index === 4 ? "md:col-span-2 xl:col-span-3" : ""
                    }`
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(245,196,0,0.10)] transition-colors duration-300 group-hover:bg-[rgba(245,196,0,0.22)]">
                <Icon
                  aria-hidden="true"
                  size={20}
                  className="text-[#C79D00] transition-colors duration-300 group-hover:text-[#A07800]"
                />
              </div>
              <h3
                className={`font-bold text-[#1A1A1A] ${
                  variant === "whyUs" ? "text-[18px]" : "text-[17px]"
                }`}
                style={fontStyle}
              >
                {title}
              </h3>
              <p
                className={`text-[14px] text-[#6B6B6B] ${
                  variant === "whyUs" ? "leading-[1.75]" : "leading-[1.8]"
                }`}
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
