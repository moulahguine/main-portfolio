import { Comic_Neue } from "next/font/google";
import { generateMetadata } from "./metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Providers from "./providers";
import "../assets/styles/main.scss";

// Font
const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export { generateMetadata };

// Person JSON-LD
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Mohamed Oulahguine",
    alternateName: "moulahguine",
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer specializing in building modern web applications using React, Next.js, and TypeScript.",
    url: "https://mohamedoulahguine.com",
    mainEntityOfPage: "https://mohamedoulahguine.com",
    image:
      "https://ik.imagekit.io/moulahguine/myPortfolio/og/og-image?tr=f-auto,q-92,dpr-2,w-1200,h-630",

    sameAs: [
      "https://www.linkedin.com/in/moulahguine",
      "https://github.com/moulahguine",
      "https://www.upwork.com/freelancers/moulahguine",
      "https://medium.com/@moulahguine",
      "https://www.instagram.com/moulahguine",
      "https://leetcode.com/u/moulahguine/",
      "https://codepen.io/moulahguine",
      "https://t.me/moulahguine",
      "https://www.youtube.com/@moulahguine",
    ],
    email: "mailto:hello@mohamedoulahguine.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    knowsAbout: [
      "CSS",
      "HTML",
      "SCSS",
      "React",
      "Redux",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Framer Motion",
      "Web Development",
      "Frontend Development",
    ],
  },
};

// Root layout
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={comicNeue.variable}
      data-theme="dark"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>

      <body>
        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
