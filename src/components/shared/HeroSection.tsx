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

export default function HeroSection({ namespace = "serviceSocial", imageSrc }: Props) {
  const t = useTranslations(`${namespace}.hero`);

  return (
    <section className="relative w-full overflow-hidden bg-secondary">
      {/* Right-side background image */}
      {imageSrc && (
        <div className="absolute inset-y-0 right-0 w-[48%]">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Gradient: fades the image into the dark background on the left */}
          <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
          {/* Subtle dark overlay to keep image from being too bright */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Text content */}
      <div className="relative z-10 px-16 pt-36 pb-32 w-full">
        <div className="max-w-2xl flex flex-col gap-8 ml-14">
          {/* Badge */}
          <div className="inline-flex">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border"
              style={{
                color: "#F5C400",
                borderColor: "rgba(245,196,0,0.4)",
                backgroundColor: "rgba(245,196,0,0.08)",
                ...fontStyle,
              }}
            >
              {t("badge")}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
            style={{ ...fontStyle, letterSpacing: "-0.02em" }}
          >
            {t("titlePrefix")}{" "}
            <span style={{ color: "#F5C400" }}>{t("titleHighlight")}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg text-gray-400 leading-relaxed"
            style={fontStyle}
          >
            {t("subtitle")}
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#1a1a1a] transition hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#F5C400", ...fontStyle }}
            >
              {t("cta")}
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 transition hover:border-white/50 active:scale-95"
              style={fontStyle}
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
