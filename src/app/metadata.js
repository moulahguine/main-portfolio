import { FAVICON_ASSETS } from "@/assets/favicon";

const faviconBase = "https://ik.imagekit.io/moulahguine/myPortfolio/favicon";

const favicon = {
  icoLight: `${faviconBase}/favicon.ico-light`,
  icoDark: `${faviconBase}/favicon.ico-dark`,
  png192Light: `${faviconBase}/android-chrome-192x192-light`,
  png192Dark: `${faviconBase}/android-chrome-192x192-dark`,
  png512Light: `${faviconBase}/android-chrome-512x512-light`,
  png512Dark: `${faviconBase}/android-chrome-512x512-dark`,
  appleLight: `${faviconBase}/apple-touch-icon-light`,
  appleDark: `${faviconBase}/apple-touch-icon-dark`,
};

const faviconLocal = {
  png16Light: FAVICON_ASSETS.icon16Light,
  png16Dark: FAVICON_ASSETS.icon16Dark,
  png32Light: FAVICON_ASSETS.icon32Light,
  png32Dark: FAVICON_ASSETS.icon32Dark,
  png192Light: FAVICON_ASSETS.android192Light,
  png192Dark: FAVICON_ASSETS.android192Dark,
  png512Light: FAVICON_ASSETS.android512Light,
  png512Dark: FAVICON_ASSETS.android512Dark,
  appleLight: FAVICON_ASSETS.appleLight,
  appleDark: FAVICON_ASSETS.appleDark,
};

export const metadata = {
  metadataBase: new URL("https://mohamedoulahguine.com"),
  title: "Mohamed Oulahguine • Frontend Developer",
  description:
    "This is my frontend portfolio where I share my real projects I built with React and Next.js. Jump to live demos, source code, and short notes on performance and design decisions.",
  keywords: [
    "Mohamed Oulahguine",
    "Mohamed Oulahguine developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "modern web development",
    "frontend engineering",
    "React Next.js portfolio",
    "web developer portfolio",
    "frontend developer Istanbul",
    "frontend developer Morocco",
  ],
  authors: [{ name: "Mohamed Oulahguine" }],
  creator: "Mohamed Oulahguine",
  publisher: "Mohamed Oulahguine",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: favicon.icoLight,
        sizes: "any",
        type: "image/x-icon",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: favicon.icoDark,
        sizes: "any",
        type: "image/x-icon",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: favicon.png192Light,
        sizes: "192x192",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: favicon.png192Dark,
        sizes: "192x192",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: favicon.png512Light,
        sizes: "512x512",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: favicon.png512Dark,
        sizes: "512x512",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: faviconLocal.png32Light,
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: faviconLocal.png32Dark,
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: faviconLocal.png16Light,
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: faviconLocal.png16Dark,
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: faviconLocal.png192Light,
        sizes: "192x192",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: faviconLocal.png192Dark,
        sizes: "192x192",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: faviconLocal.png512Light,
        sizes: "512x512",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: faviconLocal.png512Dark,
        sizes: "512x512",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: favicon.appleLight,
        sizes: "180x180",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: favicon.appleDark,
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: faviconLocal.appleLight,
        sizes: "180x180",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: faviconLocal.appleDark,
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: [
      {
        url: favicon.icoLight,
        type: "image/x-icon",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: favicon.icoDark,
        type: "image/x-icon",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "theme-color": "#ffffff",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamedoulahguine.com",
    siteName: "Mohamed Oulahguine • Frontend Developer",
    title: "Mohamed Oulahguine | Frontend Developer | Portfolio Website",
    description:
      "See what I build: compact React/Next.js projects with fast UX and clean UI. Live demos, code, and quick notes on how things were built.",
    images: [
      {
        url: "https://ik.imagekit.io/moulahguine/myPortfolio/og/og-image?tr=w-1200,h-630",
        width: 1200,
        height: 630,
        alt: "this is the og image",
        type: "image/png",
      },
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "this is the og image",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Oulahguine | Frontend Developer | Portfolio Website",
    description:
      "Frontend portfolio with React & Next.js projects with live demos, clean UI, and performance notes.",
    images: [
      "https://ik.imagekit.io/moulahguine/myPortfolio/og/og-image?tr=w-1200,h-630",
      "https://mohamedoulahguine.com/og/og-image.png",
    ],
    site: "@moulahguine",
    creator: "@moulahguine",
  },
  alternates: {
    canonical: "https://mohamedoulahguine.com",
  },
};
