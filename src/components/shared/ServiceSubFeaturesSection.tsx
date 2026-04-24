"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

interface Props {
  namespace: string;
  imageSrc?: string;
}

export default function ServiceSubFeaturesSection({
  namespace,
  imageSrc,
}: Props) {
  const t = useTranslations(namespace);
  const count = parseInt(t("subFeatures.count"), 10);

  const items = Array.from({ length: count }, (_, i) => ({
    key: `item${i + 1}`,
    title: t(`subFeatures.item${i + 1}Title`),
    desc: t(`subFeatures.item${i + 1}Desc`),
  }));

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A8F88]">
              <span className="inline-block h-px w-7.5 shrink-0 bg-[#B10657]" />
              {t("subFeatures.badge")}
            </div>
            <h2
              className="max-w-[760px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#1A1A1A] md:text-[54px]"
              style={fontStyle}
            >
              <span className="block text-[13px] font-medium uppercase tracking-[0.18em] text-[#A39890]">
                {t("details.card2Title")}
              </span>
              <span className="block">{t("subFeatures.title")}</span>
              <span style={{ color: "#B10657" }}>{t("subFeatures.titleHighlight")}</span>
            </h2>
            <div className="mt-8 max-w-[640px] space-y-5">
              <p
                className="text-[16px] leading-[1.9] text-[#56504C]"
                style={fontStyle}
              >
                {t("details.card2Desc")}
              </p>
              <p
                className="text-[15px] leading-[1.9] text-[#817873]"
                style={fontStyle}
              >
                {t("hero.subtitle")}
              </p>
              <Link
                href="/contact"
                className="inline-flex rounded-sm bg-[#B10657] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#930449]"
                style={fontStyle}
              >
                {t("hero.cta")}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-14 w-14 border border-[#E0D5CF] bg-[#F7F4EF] lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden border border-[#D8CDC6] bg-[#EFE7E0] shadow-[0_18px_40px_rgba(58,38,42,0.08)]">
              {imageSrc ? (
                <Image src={imageSrc} alt="" fill className="object-cover" />
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map(({ key, title, desc }, i) => (
            <article
              key={key}
              className="group relative flex min-h-[228px] flex-col gap-5 overflow-hidden border border-[#E3D9D2] bg-[#FBF8F4] px-8 py-7 transition-colors duration-300 hover:border-[#B10657]/25 hover:bg-[#FFFDFC]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="text-[21px] font-bold leading-snug text-[#1A1A1A]"
                  style={fontStyle}
                >
                  {title}
                </h3>
                <span
                  className="shrink-0 text-[28px] font-extrabold leading-none tabular-nums"
                  style={{ color: "rgba(177,6,87,0.18)", ...fontStyle }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="block h-px w-full bg-[#E8DED8] transition-colors duration-300 group-hover:bg-[#B10657]/18" />

              <p
                className="text-[15px] leading-[1.8] text-[#6B625D]"
                style={fontStyle}
              >
                {desc}
              </p>

              <span className="absolute left-0 top-0 h-full w-1 scale-y-0 bg-[#B10657] transition-transform duration-300 origin-top group-hover:scale-y-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
