"use client";

// React
import { useEffect, useRef, useState } from "react";

// Component
export default function VideoViewer({
  src,
  fallbackSrc,
  className = "",
  ariaLabel = "Video content",
  autoplayInline = false,
  loop = false,
  playsInline = false,
  preload = "none",
  isOpen,
  volume = 1,
}) {
  const videoRef = useRef(null);
  const [activeSrc, setActiveSrc] = useState(src);

  useEffect(() => {
    setActiveSrc(src);
  }, [src, fallbackSrc]);

  // Use effect to handle video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If the video is open, play the video
    if (isOpen) {
      video.muted = false;
      video.volume = Math.min(Math.max(volume, 0), 1);
      video.controls = true;
      video.currentTime = 0;
      // Play the video
      video.play().catch(() => {
        console.error("Failed to play video");
      });
      // If the video is not open, pause the video
    } else if (autoplayInline) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.controls = false;
      // Play the video
      video.play().catch(() => {
        console.error("Failed to play video");
      });
      // If the video is not open and autoplay is not enabled, pause the video
    } else {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.controls = false;
    }
  }, [isOpen, autoplayInline, volume]);

  return (
    // Video viewer
    <div className="modal-content-viewer modal-content-viewer--video">
      {/* Video viewer frame  */}
      <div className="modal-content-viewer__frame modal-content-viewer__frame--video">
        {/* Video element  */}
        <video
          ref={videoRef}
          className={`modal-content-viewer__media modal-content-viewer__media--video ${className}`.trim()}
          src={activeSrc}
          onError={() => {
            if (fallbackSrc && activeSrc !== fallbackSrc) {
              setActiveSrc(fallbackSrc);
            }
          }}
          aria-label={ariaLabel}
          title={ariaLabel}
          muted
          loop={loop}
          playsInline={playsInline}
          preload={preload}
        />
      </div>
    </div>
  );
}
