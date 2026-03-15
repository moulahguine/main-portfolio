"use client";
import Image from "next/image";
// Components
import { ModalTrigger, ImageViewer } from "@/components";
// Icons
import { BsArrowsFullscreen } from "react-icons/bs";

// Data URLs
export default function HeroMedia({ classFigure, classImage }) {
  // ImageKit URLs
  const profilePicture =
    "https://ik.imagekit.io/moulahguine/myPortfolio/profilePicture/profilePicture?tr=w-400,h-400";
  const largeProfilePicture =
    "https://ik.imagekit.io/moulahguine/myPortfolio/profilePicture/lagreprofilepicture?tr=w-800,h-800";

  const profileAlt =
    "Portrait of Mohamed Oulahguine, frontend developer specialized in React and Next.js";

  return (
    <>
      {/* Modal Trigger */}
      <ModalTrigger
        size="large"
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
            aria-label="Open full-size portrait of Mohamed Oulahguine"
            title="Open full-size portrait"
          >
            {/* Profile picture */}
            <Image
              key={profilePicture}
              className={classImage}
              src={profilePicture}
              alt={profileAlt}
              loading="eager"
              decoding="async"
              fill
              sizes="(max-width: 778px) 300px, 160px"
              quality={100}
              priority={true}
            />
            {/* Fullscreen icon */}
            <span className="hero__media-overlay">
              <BsArrowsFullscreen size={18} />
            </span>
            <figcaption className="sr-only">{profileAlt}</figcaption>
          </figure>
        )}
      >
        {/* Image Viewer */}
        <ImageViewer
          src={largeProfilePicture}
          alt={`${profileAlt} in full size`}
        />
      </ModalTrigger>
    </>
  );
}
