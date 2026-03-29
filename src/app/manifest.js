const PWA_ICON_192 = "/favicon/web-app-manifest-192x192.png";
const PWA_ICON_512 = "/favicon/web-app-manifest-512x512.png";

export default function manifest() {
  return {
    id: "/",
    name: "Mohamed Oulahguine",
    short_name: "Oulahguine",
    description:
      "Explore production-style React and Next.js work with concise case studies, UI decisions, and direct links to live demos and source code.",
    lang: "en",
    dir: "ltr",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#000000",
    theme_color: "#ffffff",
    prefer_related_applications: false,
    categories: ["portfolio", "developer", "react", "nextjs"],
    icons: [
      {
        src: PWA_ICON_192,
        sizes: "192x192",
        type: "image/png",
        // Allow the icon to be used both as a standard and maskable PWA icon.
        purpose: "any maskable",
      },
      {
        src: PWA_ICON_512,
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
            src: PWA_ICON_192,
            sizes: "192x192",
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
            src: PWA_ICON_192,
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image.png",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}
