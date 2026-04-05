"use client";

import React, { useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import { useTheme } from "next-themes";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function InteractiveMap() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  // Center point between Turkey and Morocco to show both countries
  const mapCenter = useMemo(() => [41.0082, 28.9784], []);

  // Coordinates
  const istanbul = useMemo(() => [41.0082, 28.9784], []);

  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  const markerStyle = isDark
    ? {
        color: "#f3f3f4",
        fillColor: "#ffffff",
        fillOpacity: 0.95,
        weight: 1,
        opacity: 1,
      }
    : {
        color: "#060606",
        fillColor: "#181818",
        fillOpacity: 0.9,
        weight: 1,
        opacity: 0.95,
      };

  return (
    <div
      className={
        isDark
          ? "interactive-map-container interactive-map-container--dark"
          : "interactive-map-container interactive-map-container--light"
      }
    >
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        dragging={true}
        touchZoom={true}
      >
        {/* style tile layer */}
        <TileLayer
          key={tileUrl}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url={tileUrl}
          subdomains="abcd"
          maxZoom={63}
        />

        {/* Location Dots for Istanbul and Morocco */}
        <CircleMarker center={istanbul} radius={4} pathOptions={markerStyle} />
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;
