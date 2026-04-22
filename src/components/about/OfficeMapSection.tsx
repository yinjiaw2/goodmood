"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

// SVG viewBox "507 90 678 339" is 2:1 — container also 2:1 → perfect fill, no crop.
// Marker positions as % of viewBox:
//   Chengdu  (789.1, 165.1): left=(789.1-507)/678=41.6%  top=(165.1-90)/339=22.2%
//   Melbourne(902.7, 355.0): left=(902.7-507)/678=58.4%  top=(355.0-90)/339=78.2%
const OFFICES = [
  {
    key: "chengdu",
    city: "成都",
    cityEn: "Chengdu",
    country: "中国 · China",
    role: "Strategy & Creative",
    coords: "30°34′N  104°04′E",
    left: "41.6%",
    top: "22.2%",
    // info card opens below-right (marker is in upper area)
    cardStyle: { top: "calc(100% + 12px)", left: "-8px" } as React.CSSProperties,
  },
  {
    key: "melbourne",
    city: "墨尔本",
    cityEn: "Melbourne",
    country: "澳大利亚 · Australia",
    role: "HQ & Operations",
    coords: "37°49′S  144°57′E",
    left: "58.4%",
    top: "78.2%",
    // info card opens above-left (marker is in lower area)
    cardStyle: { bottom: "calc(100% + 12px)", right: "-8px" } as React.CSSProperties,
  },
];

export default function OfficeMapSection() {
  const t = useTranslations("about.officeMap");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const toggle = (key: string) =>
    setActiveKey((prev) => (prev === key ? null : key));

  return (
    <section className="w-full bg-[#0D0D0D] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
            <span className="inline-block h-px w-7 shrink-0 bg-[#F5C400]" />
            {t("badge")}
          </div>
          <h2
            className="text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[42px]"
            style={fontStyle}
          >
            {t("title")}
            <span style={{ color: "#F5C400" }}>{t("titleAccent")}</span>
          </h2>
          <p
            className="mt-4 text-[15px] leading-[1.8] text-[#9A9A9A]"
            style={fontStyle}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Map — 2:1 container matches SVG viewBox exactly, no alignment drift */}
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10"
          style={{ aspectRatio: "2 / 1" }}
          // click on blank map area closes open card
          onClick={() => setActiveKey(null)}
        >
          <Image
            src="/world-map.svg"
            alt="World map showing Chengdu and Melbourne offices"
            fill
            className="object-cover"
            priority
          />

          {/* Interactive markers */}
          {OFFICES.map((office) => {
            const isActive = activeKey === office.key;
            return (
              <div
                key={office.key}
                className="absolute"
                style={{ left: office.left, top: office.top, transform: "translate(-50%, -50%)" }}
              >
                {/* Clickable dot — stops propagation so blank-click-to-close still works */}
                <button
                  className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full focus:outline-none"
                  onClick={(e) => { e.stopPropagation(); toggle(office.key); }}
                  aria-label={`${office.cityEn} office details`}
                >
                  {/* Pulse ring */}
                  <span
                    className="absolute inset-0 rounded-full bg-[#F5C400] opacity-20 animate-ping"
                  />
                  {/* Inner glow ring */}
                  <span
                    className={`absolute inset-1 rounded-full border-2 transition-all duration-300 ${
                      isActive ? "border-[#F5C400] scale-110" : "border-[#F5C400]/40"
                    }`}
                  />
                  {/* Core dot */}
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#F5C400] shadow-[0_0_10px_#F5C400]" />
                </button>

                {/* Info card — animates in/out */}
                <div
                  className={`absolute z-10 min-w-[160px] rounded-xl border border-white/10 bg-[#0D0D0D]/95 px-4 py-3 backdrop-blur-md transition-all duration-200 ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-1 pointer-events-none"
                  }`}
                  style={{ ...fontStyle, ...office.cardStyle }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="mb-2 block h-px w-5 bg-[#F5C400]" />
                  <p className="text-[13px] font-bold leading-tight text-white">
                    {office.cityEn}
                  </p>
                  <p className="text-[11px] font-semibold text-[#F5C400]">{office.city}</p>
                  <p className="mt-1.5 text-[10px] text-[#9A9A9A]">{office.country}</p>
                  <p className="mt-0.5 font-mono text-[9px] tracking-wider text-[#9A9A9A]">
                    {office.coords}
                  </p>
                  <div className="mt-2 border-t border-white/10 pt-2">
                    <p className="text-[9px] uppercase tracking-[0.15em] text-[#F5C400]/70">
                      {office.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom legend bar */}
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center gap-6 border-t border-white/10 bg-[#0D0D0D]/70 px-6 py-3 backdrop-blur-sm"
            style={fontStyle}
            onClick={(e) => e.stopPropagation()}
          >
            {OFFICES.map((office, i) => (
              <div key={office.key} className="flex items-center gap-3">
                {i > 0 && <span className="h-4 w-px bg-white/20" />}
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5C400]" />
                <span className="text-[11px] font-medium text-white">{office.cityEn}</span>
                <span className="text-[10px] text-[#9A9A9A]">— {office.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
