"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(
  () => import("@/components/Location/InteractiveMap"),
  {
    ssr: false,
    loading: () => (
      <div className="hero-section__map--wrapper-loading" aria-live="polite">
        loading map...
      </div>
    ),
  },
);

export default function AsideInlineMap() {
  return <DynamicMap />;
}
