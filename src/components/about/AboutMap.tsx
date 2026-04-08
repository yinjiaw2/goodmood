"use client";

import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useTranslations } from "next-intl";

const font = "var(--font-geist-sans), Arial, Helvetica, sans-serif";
const OFFICE_POSITION = { lat: -37.82243837398955, lng: 144.95363742552018 };

export default function AboutMap() {
  const t = useTranslations("about.map");

  return (
    <section
      className="w-full py-20 px-6"
      style={{ backgroundColor: "#F2F1EF" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Pill tag */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 bg-white mb-6">
          <span
            className="text-xs font-semibold tracking-widest uppercase text-gray-500"
            style={{ fontFamily: font }}
          >
            {t("label")}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight"
          style={{ fontFamily: font, letterSpacing: "-0.03em" }}
        >
          {t("title")}
        </h2>

        {/* Address */}
        <p className="text-gray-500 mb-8" style={{ fontFamily: font }}>
          {t("address")}
        </p>

        {/* Map */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
          <Map
            defaultCenter={OFFICE_POSITION}
            defaultZoom={17}
            mapId="e04d3dc23484cd2b24cff6b2"
            style={{ width: "100%", height: "100%" }}
          >
            <AdvancedMarker
              position={OFFICE_POSITION}
              title={t("address")}
            />
          </Map>
        </div>
      </div>
    </section>
  );
}
