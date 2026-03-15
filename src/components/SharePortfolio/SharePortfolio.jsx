"use client";

// hooks
import { useState, useCallback, useRef } from "react";

// Components
import { ModalTrigger, DefaultContent, ActionPillButton } from "@/components";

// Icons
import { QRCodeSVG } from "qrcode.react";
import { PiShareFatLight } from "react-icons/pi";
import { toPng } from "html-to-image";

// Styles
import "./SharePortfolio.scss";

// Data
const CANONICAL_URL = "https://mohamedoulahguine.com";

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

  // QR image source
  const qrImageSrc = "/favicon/android-chrome-512x512.png";

  return (
    // Modal trigger
    <ModalTrigger
      title="Scan QR on your phone."
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
              <PiShareFatLight size={18} aria-hidden="true" />
            </span>
          </button>
        ))
      }
    >
      {/* Default content */}
      <DefaultContent className="share-portfolio-modal">
        {/* QR code */}
        <div ref={cardRef} className="qr">
          <QRCodeSVG
            value={CANONICAL_URL}
            size={250}
            level="H"
            marginSize={0}
            imageSettings={{
              src: qrImageSrc,
              height: 50,
              width: 50,
              excavate: true,
            }}
            aria-label="QR code to portfolio"
          />
        </div>
        {/* Download button */}
        <ActionPillButton
          onClick={handleDownload}
          ariaLabel={downloaded ? "Downloaded" : "Download card"}
          title="Download portfolio share card"
          label="Download Card"
          doneLabel="Done!"
          variant="share"
          className="download-btn"
          enableHover={true}
          enableClickFeedback={true}
        />
      </DefaultContent>
    </ModalTrigger>
  );
}
