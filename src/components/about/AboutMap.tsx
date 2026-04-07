"use client";

import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const OFFICE_POSITION = { lat: -37.82243837398955, lng: 144.95363742552018 };

export default function AboutMap() {
  return (
    <Map
      defaultCenter={OFFICE_POSITION}
      defaultZoom={17}
      mapId="e04d3dc23484cd2b24cff6b2"
      style={{ width: "100%", height: "100%" }}
      disableDefaultUI={false}
    >
      <AdvancedMarker
        position={OFFICE_POSITION}
        title="Tower 3, Level 9 / 18-38 Siddeley St, Docklands VIC 3005"
      />
    </Map>
  );
}
