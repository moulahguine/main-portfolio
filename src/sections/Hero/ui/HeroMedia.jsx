"use client";

import {
  ModalTrigger,
  ImageViewer,
  ImageWithFallback,
  IMAGEKIT_MEDIA,
  LOCAL_MEDIA,
} from "@/components";

// Data URLs
export default function HeroMedia({ classFigure, classImage }) {
  return (
    <>
      {/* Modal Trigger */}
      <ModalTrigger
        size="medium"
        closeOnOverlayClick={true}
        allowPinchZoom
        showHeader={false}
        showCloseButton={false}
        style={{ borderRadius: "50%" }}
        renderTrigger={({ open }) => (
          <button
            className={classFigure}
            onClick={open}
            aria-label="View larger profile photo"
            title="View larger profile photo"
          >
            {/* Profile picture */}
            <ImageWithFallback
              key={IMAGEKIT_MEDIA.hero.profilePicture}
              src={IMAGEKIT_MEDIA.hero.profilePicture}
              fallback={LOCAL_MEDIA.hero.profilePicture}
              className={classImage}
              alt="Profile photo of Mohamed Oulahguine"
              loading="eager"
              decoding="async"
              fill
              sizes="(max-width: 778px) 200px, 160px"
              quality={100}
              priority={true}
            />
          </button>
        )}
      >
        {/* Image Viewer */}
        <ImageViewer
          src={IMAGEKIT_MEDIA.hero.largeProfilePicture}
          fallback={LOCAL_MEDIA.hero.largeProfilePicture}
          alt="Large profile photo of Mohamed Oulahguine"
          fill={true}
          sizes="(max-width: 778px) calc(100vw - 12px), 70vmin"
          quality={100}
          className="hero-section__media--image-viewer"
        />
      </ModalTrigger>
    </>
  );
}
