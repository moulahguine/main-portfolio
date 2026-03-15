"use client";
// React
import Image from "next/image";
import { useTheme } from "next-themes";
// Icons
import { BsFillPlayCircleFill } from "react-icons/bs";
// Motion;
import { motion } from "framer-motion";
// Components
import { ModalTrigger, VideoViewer } from "@/components";

// Data URLs
const VIDEO_URL =
  "https://ik.imagekit.io/moulahguine/myPortfolio/introVideo/introVideo?updatedAt=1773501165021?tr=f-auto,q-92,w-480,h-270";
const POSTER_DARK_URL =
  "https://ik.imagekit.io/moulahguine/myPortfolio/introVideo/ThumbnailDarkTheme?tr=f-auto,q-92,dpr-2,w-800";
const POSTER_LIGHT_URL =
  "https://ik.imagekit.io/moulahguine/myPortfolio/introVideo/ThumbnailLightTheme?tr=f-auto,q-92,dpr-2,w-800";

// Component
export default function IntroVideo() {
  const { theme, resolvedTheme } = useTheme();

  const rootTheme =
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme")
      : null;
  const activeTheme = resolvedTheme ?? theme ?? rootTheme ?? "dark";
  const posterSrc =
    activeTheme === "light" ? POSTER_LIGHT_URL : POSTER_DARK_URL;

  return (
    <>
      <ModalTrigger
        showHeader={true}
        title="A Quick Introduction"
        size="xlarge"
        allowPinchZoom
        renderTrigger={({ open }) => (
          <motion.button
            type="button"
            className="video__preview"
            onClick={open}
            aria-label="Play Mohamed Oulahguine's frontend developer introduction video"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            viewport={{
              once: false,
              amount: 0.35,
              margin: "0px 0px -50px 0px",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/*  Thumbnail image */}
            <div className="thumbnail">
              <Image
                key={posterSrc}
                src={posterSrc}
                alt="Thumbnail preview for Mohamed Oulahguine's frontend developer introduction video"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                quality={100}
                className="thumbnail__img"
              />
            </div>

            {/* Play button overlay */}
            <span className="video__preview__play">
              <BsFillPlayCircleFill aria-hidden="true" />
            </span>
          </motion.button>
        )}
      >
        {({ isOpen }) => (
          <VideoViewer
            src={VIDEO_URL}
            isOpen={isOpen}
            autoplayInline={false}
            loop={false}
            volume={0.1}
            ariaLabel="Mohamed Oulahguine introducing his frontend development background, projects, and technical focus"
          />
        )}
      </ModalTrigger>
    </>
  );
}
