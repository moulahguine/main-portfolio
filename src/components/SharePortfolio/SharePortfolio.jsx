"use client";

// hooks
import { useState, useCallback, useRef } from "react";

// Components
import { ModalTrigger, ActionPillButton, LOCAL_MEDIA } from "@/components";

// Icons
import { QRCodeSVG } from "qrcode.react";
import { PiShareFatLight } from "react-icons/pi";
import { toPng } from "html-to-image";

// Styles
import "./SharePortfolio.scss";

// Data
const CANONICAL_URL = "https://mohamedoulahguine.com";

const profileLogo = LOCAL_MEDIA.logo.logo;
const qrImageSrc =
  typeof profileLogo === "string" ? profileLogo : profileLogo.src;

// Share portfolio component
export default function SharePortfolio({ renderTrigger }) {
  // State
  const [downloaded, setDownloaded] = useState(false);

  // Ref
  const cardRef = useRef(null);

  // Handle download
  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: "#f3f3f4",
        skipFonts: true,
        filter: (node) => node.tagName?.toLowerCase() !== "image",
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "share-portfolio.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (err) {
      console.error("Download failed:", err);
      setDownloaded(false);
    }
  }, []);

  return (
    // Modal trigger
    <ModalTrigger
      title="Scan QR Code."
      size="small"
      showHeader={true}
      renderTrigger={
        renderTrigger ??
        (({ open }) => (
          <button
            className="share-portfolio-trigger-btn"
            onClick={open}
            aria-label="Share portfolio"
            type="button"
            title="Share portfolio"
          >
            {/* Icon */}
            <span className="share-portfolio__icon" aria-hidden="true">
              <PiShareFatLight size={18} aria-hidden="true" role="img" />
            </span>
          </button>
        ))
      }
    >
      {/* Modal content */}
      <div className="share-portfolio-modal">
        {/* QR code */}
        <div ref={cardRef} className="qr">
          <QRCodeSVG
            value={CANONICAL_URL}
            size={270}
            level="H"
            marginSize={0}
            imageSettings={{
              src: qrImageSrc,
              width: 40,
              height: 40,
              borderRadius: 50,
              excavate: true,
            }}
            aria-label="QR code to portfolio"
          />
        </div>
        {/* Download button */}
        <ActionPillButton
          onClick={handleDownload}
          aria-label={downloaded ? "Downloaded" : "Download card"}
          title="Download Card "
          label="Download Card"
          doneLabel="Done!"
          variant="share"
          className="download-btn"
          enableHover={true}
          enableClickFeedback={true}
        />
      </div>
    </ModalTrigger>
  );
}
