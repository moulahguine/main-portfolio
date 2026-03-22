import { FAVICON_ASSETS } from "@/assets/favicon";

const IK_FAVICON_BASE =
  "https://ik.imagekit.io/moulahguine/myPortfolio/favicon";

export default function manifest() {
  return {
    id: "/",
    name: "Mohamed Oulahguine ",
    short_name: "Moulahguine",
    description:
      "Explore production-style React and Next.js work with concise case studies, UI decisions, and direct links to live demos and source code.",
    lang: "en",
    dir: "ltr",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "browser"],
    orientation: "portrait",
    background_color: "#0e0e10",
    theme_color: "#0e0e10",
    prefer_related_applications: false,
    categories: ["portfolio", "developer", "business", "education"],
    icons: [
      {
        src: FAVICON_ASSETS.android192Light,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: FAVICON_ASSETS.android512Light,
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: `${IK_FAVICON_BASE}/android-chrome-192x192-light`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${IK_FAVICON_BASE}/android-chrome-512x512-light`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    shortcuts: [
      {
        name: "Projects",
        short_name: "Projects",
        description: "View project case studies",
        url: "/projects",
        icons: [
          {
            src: FAVICON_ASSETS.icon32Light,
            sizes: "32x32",
            type: "image/png",
          },
        ],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Contact me",
        url: "/contact",
        icons: [
          {
            src: FAVICON_ASSETS.icon32Light,
            sizes: "32x32",
            type: "image/png",
          },
        ],
      },
    ],
    screenshots: [
      {
        src: FAVICON_ASSETS.ogImage,
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}
