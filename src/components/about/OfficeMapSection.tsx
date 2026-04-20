"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

interface Office {
  key: string;
  lat: number;
  lng: number;
  city: string;
  role: string;
}

const OFFICES: Office[] = [
  {
    key: "shanghai",
    lat: 31.2304,
    lng: 121.4737,
    city: "Shanghai",
    role: "HQ & Strategy",
  },
  {
    key: "hongkong",
    lat: 22.3193,
    lng: 114.1694,
    city: "Hong Kong",
    role: "Finance & Media",
  },
  {
    key: "singapore",
    lat: 1.3521,
    lng: 103.8198,
    city: "Singapore",
    role: "SEA Expansion",
  },
  {
    key: "losangeles",
    lat: 34.0522,
    lng: -118.2437,
    city: "Los Angeles",
    role: "North America",
  },
  { key: "london", lat: 51.5074, lng: -0.1278, city: "London", role: "Europe" },
  { key: "sydney", lat: -33.8688, lng: 151.2093, city: "Sydney", role: "APAC" },
];

const MAP_ID = "e04d3dc23484cd2b1dca4350";

export default function OfficeMapSection() {
  const t = useTranslations("about.officeMap");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const activeOffice = OFFICES.find((o) => o.key === activeKey) ?? null;

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

        {/* Map */}
        <style>{`.gm-ui-hover-effect { display: none !important; }`}</style>
        <div
          className="overflow-hidden rounded-2xl border border-white/10"
          style={{ height: 480 }}
        >
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
          >
            <Map
              mapId={MAP_ID}
              defaultCenter={{ lat: 25, lng: 60 }}
              defaultZoom={2.4}
              gestureHandling="cooperative"
              disableDefaultUI
              colorScheme="DARK"
              style={{ width: "100%", height: "100%" }}
            >
              {OFFICES.map((office) => (
                <AdvancedMarker
                  key={office.key}
                  position={{ lat: office.lat, lng: office.lng }}
                  onClick={() =>
                    setActiveKey((prev) =>
                      prev === office.key ? null : office.key,
                    )
                  }
                >
                  <Pin
                    background="#F5C400"
                    borderColor="#C79D00"
                    glyphColor="#1A1A1A"
                  />
                </AdvancedMarker>
              ))}

              {activeOffice && (
                <InfoWindow
                  position={{ lat: activeOffice.lat, lng: activeOffice.lng }}
                  pixelOffset={[0, -42]}
                  onCloseClick={() => setActiveKey(null)}
                >
                  <div
                    style={{ ...fontStyle, padding: "4px 2px", minWidth: 120 }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: "#1A1A1A",
                        margin: 0,
                      }}
                    >
                      {activeOffice.city}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#6B6B6B",
                        margin: "3px 0 0",
                      }}
                    >
                      {activeOffice.role}
                    </p>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
}
