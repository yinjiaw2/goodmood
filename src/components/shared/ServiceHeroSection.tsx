"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

interface Props {
  namespace?: string;
  /** Optional image shown on the right half of the hero. */
  imageSrc?: string;
}

export default function ServiceHeroSection({
  namespace = "serviceSocial",
  imageSrc,
}: Props) {
  const t = useTranslations(`${namespace}.hero`);

  return (
    <section className="w-full bg-[#F7F4EF] pt-32 pb-18 md:pt-38 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.85fr)] lg:gap-16">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-3">
              <span className="inline-block h-px w-9 shrink-0 bg-[#F5C400]" />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9A8F88]"
                style={fontStyle}
              >
                {t("badge")}
              </span>
            </div>

            <h1
              className="max-w-[760px] text-[44px] font-extrabold leading-[0.96] text-[#F5C400] md:text-[64px] lg:text-[76px]"
              style={{ ...fontStyle, letterSpacing: "-0.03em" }}
            >
              <span className="block text-[#1A1A1A]">{t("titlePrefix")}</span>
              <span className="block">{t("titleHighlight")}</span>
            </h1>

            <p
              className="max-w-[620px] text-[16px] leading-[1.9] text-[#5E5753] md:text-[17px]"
              style={fontStyle}
            >
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-[#F5C400] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1A1A1A] transition hover:bg-[#E6B800]"
                style={fontStyle}
              >
                {t("cta")}
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-sm border border-[#D5CBC6] bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#4C4642] transition hover:border-[#F5C400]/70 hover:text-[#1A1A1A]"
                style={fontStyle}
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-20 w-20 border border-[#E2D8D3] bg-white lg:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-16 w-16 border border-[#E2D8D3] bg-[#F5C400] lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden border border-[#D8CDC6] bg-[#EAE3DD] shadow-[0_28px_60px_rgba(58,38,42,0.10)]">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/12 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
