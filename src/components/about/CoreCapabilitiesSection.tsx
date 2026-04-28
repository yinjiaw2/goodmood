"use client";

import { Target, Lightbulb, Globe2, TrendingUp, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const icons = [Target, Lightbulb, Globe2, TrendingUp, Users];

interface Props {
  namespace?: string;
  variant?: "about" | "whyUs";
}

const whyUsCardLayouts = [
  "xl:col-span-2 xl:col-start-1",
  "xl:col-span-2 xl:col-start-4 xl:pt-14",
  "xl:col-span-2 xl:col-start-1 xl:-mt-2",
  "xl:col-span-2 xl:col-start-3 xl:pt-10",
  "xl:col-span-2 xl:col-start-5 xl:pt-4",
];

const floatProfiles = [
  {
    x: "18px",
    y: "-20px",
    duration: "6.8s",
    delay: "-1.1s",
    rotateStart: "-2.6deg",
    rotateEnd: "1.2deg",
    hoverRotate: "-1.2deg",
  },
  {
    x: "-20px",
    y: "18px",
    duration: "7.6s",
    delay: "-2.4s",
    rotateStart: "2.8deg",
    rotateEnd: "-1deg",
    hoverRotate: "1.4deg",
  },
  {
    x: "22px",
    y: "14px",
    duration: "6.4s",
    delay: "-3.2s",
    rotateStart: "-1.4deg",
    rotateEnd: "2.4deg",
    hoverRotate: "-2deg",
  },
  {
    x: "-16px",
    y: "-22px",
    duration: "8.1s",
    delay: "-1.8s",
    rotateStart: "1.8deg",
    rotateEnd: "-2.2deg",
    hoverRotate: "2deg",
  },
  {
    x: "20px",
    y: "-16px",
    duration: "7.1s",
    delay: "-2.9s",
    rotateStart: "-2deg",
    rotateEnd: "1.8deg",
    hoverRotate: "-1.6deg",
  },
];

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
          <div
            className={`mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.25em] ${
              variant === "whyUs" ? "text-[#B8C7BE]" : "text-[#9A9A9A]"
            }`}
          >
            <span
              className={`inline-block h-px w-7 shrink-0 ${
                variant === "whyUs" ? "bg-[#F7D54A]" : "bg-[#F5C400]"
              }`}
            />
            {t("badge")}
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className={`max-w-[560px] font-extrabold tracking-[-0.03em] ${
                variant === "whyUs"
                  ? "text-[38px] leading-none text-[#F6F1E8] md:text-[52px]"
                  : "text-[32px] leading-tight text-[#1A1A1A] md:text-[46px]"
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
              className={`text-lg lg:text-right ${
                variant === "whyUs"
                  ? "max-w-[420px] leading-[1.7] text-[#1A1A1A]"
                  : "max-w-[400px] leading-[1.75] text-[#6B6B6B]"
              }`}
              style={fontStyle}
            >
              {t("subtitle")}
            </p>
          </div>
        </div>

        {variant === "whyUs" ? (
          <div className="chalkboard relative overflow-hidden rounded-[32px] border border-[#1B2A25] bg-[#13211C] px-5 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.32)] md:px-8 md:py-10 xl:px-10 xl:py-12">
            <div className="pointer-events-none absolute inset-0 opacity-100">
              <div className="absolute left-[8%] top-[10%] h-28 w-28 rounded-full bg-white/[0.03] blur-3xl" />
              <div className="absolute bottom-[12%] right-[10%] h-36 w-36 rounded-full bg-[#F5C400]/[0.05] blur-3xl" />
              <div className="absolute left-[18%] top-[16%] h-px w-24 bg-white/10 rotate-[8deg]" />
              <div className="absolute right-[16%] top-[24%] h-px w-20 bg-white/10 -rotate-[14deg]" />
              <div className="absolute bottom-[22%] left-[12%] h-px w-28 bg-white/10 rotate-[5deg]" />
            </div>
            <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
            {items.map(({ Icon, title, desc }, index) => {
              const profile = floatProfiles[index] ?? floatProfiles[0]!;

              return (
                <div
                  key={title}
                  className={whyUsCardLayouts[index] ?? ""}
                  style={{
                    ["--float-x" as string]: profile.x,
                    ["--float-y" as string]: profile.y,
                    ["--float-duration" as string]: profile.duration,
                    ["--float-delay" as string]: profile.delay,
                    ["--rotate-start" as string]: profile.rotateStart,
                    ["--rotate-end" as string]: profile.rotateEnd,
                    ["--hover-rotate" as string]: profile.hoverRotate,
                  }}
                >
                  <article
                    className="why-us-float group relative z-0 flex h-full min-h-[280px] flex-col gap-4 rounded-[22px] border border-[#D9CBA8] bg-[#F7F0D9] px-7 py-10 shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow,transform,border-color] duration-300 hover:z-30 hover:border-[#F5C400] hover:bg-[#FFF4C7] hover:shadow-[0_34px_80px_rgba(0,0,0,0.34)]"
                  >
                    <span className="pointer-events-none absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] rounded-sm border border-white/30 bg-white/35 shadow-[0_4px_10px_rgba(0,0,0,0.12)] backdrop-blur-[1px]" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(245,196,0,0.10)] transition-colors duration-300 group-hover:bg-[rgba(245,196,0,0.22)]">
                      <Icon
                        aria-hidden="true"
                        size={20}
                        className="text-[#C79D00] transition-colors duration-300 group-hover:text-[#A07800]"
                      />
                    </div>
                    <h3
                      className="text-xl font-bold text-[#1A1A1A]"
                      style={fontStyle}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-lg leading-[1.75] text-[#5F584F]"
                      style={fontStyle}
                    >
                      {desc}
                    </p>
                  </article>
                </div>
              );
            })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/8 bg-black/8 md:grid-cols-2 xl:grid-cols-6">
            {items.map(({ Icon, title, desc }, index) => (
              <article
                key={title}
                className={`group flex flex-col gap-4 bg-white px-9 py-10 transition-colors duration-300 hover:bg-[#FFFBEE] ${
                  index < 3 ? "xl:col-span-2" : "xl:col-span-3"
                } ${index === 4 ? "md:col-span-2 xl:col-span-3" : ""}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(245,196,0,0.10)] transition-colors duration-300 group-hover:bg-[rgba(245,196,0,0.22)]">
                  <Icon
                    aria-hidden="true"
                    size={20}
                    className="text-[#C79D00] transition-colors duration-300 group-hover:text-[#A07800]"
                  />
                </div>
                <h3
                  className="text-[17px] font-bold text-[#1A1A1A]"
                  style={fontStyle}
                >
                  {title}
                </h3>
                <p
                  className="text-lg leading-[1.8] text-[#6B6B6B]"
                  style={fontStyle}
                >
                  {desc}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
      {variant === "whyUs" ? (
        <style jsx>{`
          .why-us-float {
            animation: whyUsFloat var(--float-duration) ease-in-out infinite;
            animation-delay: var(--float-delay);
            transform-origin: center center;
            will-change: transform;
          }

          .why-us-float:hover {
            animation-play-state: paused;
            transform: translate3d(0, -10px, 0) rotate(var(--hover-rotate))
              scale(1.1);
          }

          @keyframes whyUsFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(var(--rotate-start));
            }
            50% {
              transform: translate3d(var(--float-x), var(--float-y), 0)
                rotate(var(--rotate-end));
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .why-us-float {
              animation: none;
              transform: none;
            }

            .why-us-float:hover {
              transform: rotate(var(--hover-rotate)) scale(1.05);
            }
          }
        `}</style>
      ) : null}
    </section>
  );
}
