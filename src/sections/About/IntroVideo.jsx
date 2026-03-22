"use client";
// Icons
import { BsFillPlayCircleFill } from "react-icons/bs";
// Motion;
import { motion } from "framer-motion";
import useThemeAsset from "@/hooks/useThemeAsset";
// Components
import {
  ModalTrigger,
  VideoViewer,
  ImageWithFallback,
  IMAGEKIT_MEDIA,
  LOCAL_MEDIA,
} from "@/components";

// Component
export default function IntroVideo() {
  const { pickByTheme } = useThemeAsset({ fallbackTheme: "dark" });
  const posterSrc = pickByTheme(
    IMAGEKIT_MEDIA.about.posterLight,
    IMAGEKIT_MEDIA.about.posterDark
  );
  const posterFallback = pickByTheme(
    LOCAL_MEDIA.about.posterLight,
    LOCAL_MEDIA.about.posterDark
  );

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
            aria-label="Play introduction video"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            viewport={{
              once: false,
              amount: 0.35,
              margin: "0px 0px -100px 0px",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/*  Thumbnail image */}
            <div className="thumbnail">
              <ImageWithFallback
                key={posterSrc}
                src={posterSrc}
                fallback={posterFallback}
                alt="Introduction video thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
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
            src={IMAGEKIT_MEDIA.about.video}
            fallbackSrc={LOCAL_MEDIA.about.video}
            isOpen={isOpen}
            autoplayInline={false}
            loop={false}
            volume={0.1}
            ariaLabel="Introduction video"
          />
        )}
      </ModalTrigger>
    </>
  );
}
