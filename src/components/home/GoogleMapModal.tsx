"use client";

import { useEffect } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { X } from "lucide-react";

const OFFICE_POSITION = { lat: -37.8222, lng: 144.9533 };
const OFFICE_LABEL = "Tower 3, Level 9 / 18-38 Siddeley St, Docklands VIC 3005";

type Props = {
  onClose: () => void;
};

export default function GoogleMapModal({ onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ height: 420 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
          aria-label="Close map"
        >
          <X size={18} className="text-gray-700" />
        </button>

        <Map
          defaultCenter={OFFICE_POSITION}
          defaultZoom={17}
          mapId="siddeley-office"
          style={{ width: "100%", height: "100%" }}
        >
          <AdvancedMarker position={OFFICE_POSITION} title={OFFICE_LABEL} />
        </Map>
      </div>
    </div>
  );
}
