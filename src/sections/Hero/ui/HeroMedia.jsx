"use client";

// Components
import {
  ModalTrigger,
  ImageViewer,
  ImageWithFallback,
  IMAGEKIT_MEDIA,
  LOCAL_MEDIA,
} from "@/components";

// Icons
import { BsArrowsFullscreen } from "react-icons/bs";

// Data URLs
export default function HeroMedia({ classFigure, classImage }) {
  return (
    <>
      {/* Modal Trigger */}
      <ModalTrigger
        size="medium"
        closeOnOverlayClick={true}
        allowPinchZoom
        showHeader={true}
        title="Profile picture"
        renderTrigger={({ open }) => (
          <figure
            className={classFigure}
            onClick={open}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Open full-size portrait"
            title="Open full-size portrait"
          >
            {/* Profile picture */}
            <ImageWithFallback
              key={IMAGEKIT_MEDIA.hero.profilePicture}
              className={classImage}
              src={IMAGEKIT_MEDIA.hero.profilePicture}
              fallback={LOCAL_MEDIA.hero.profilePicture}
              alt={`profile picture`}
              loading="eager"
              decoding="async"
              fill
              sizes="(max-width: 778px) 200px, 160px"
              quality={100}
              priority={true}
            />

            {/* Fullscreen icon */}
            <span className="hero__media-overlay">
              <BsArrowsFullscreen aria-hidden="true" role="img" />
            </span>
            <figcaption className="sr-only">profile picture</figcaption>
          </figure>
        )}
      >
        {/* Image Viewer */}
        <ImageViewer
          src={IMAGEKIT_MEDIA.hero.largeProfilePicture}
          fallback={LOCAL_MEDIA.hero.largeProfilePicture}
          alt={`profile picture in full size portrait`}
          fill={true}
          sizes="(max-width: 778px) calc(100vw - 12px), 70vmin"
          quality={100}
        />
      </ModalTrigger>
    </>
  );
}
