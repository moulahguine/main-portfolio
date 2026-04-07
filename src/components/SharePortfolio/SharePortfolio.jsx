"use client";

import { useState, useCallback, useRef } from "react";
import { ModalTrigger, ResumeBtn, IMAGEKIT_MEDIA } from "@/components";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
import "./SharePortfolio.scss";

const CANONICAL_URL = "https://mohamedoulahguine.com";
const profileLogo = IMAGEKIT_MEDIA.logo.logo;
const qrImageSrc =
  typeof profileLogo === "string" ? profileLogo : profileLogo.src;

// Share portfolio component
export default function SharePortfolio({ renderTrigger }) {
  const [downloaded, setDownloaded] = useState(false);
  const cardRef = useRef(null);

  // Handle download
  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 5,
        cacheBust: true,
        backgroundColor: "#0000",
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
      title="Scan QR ."
      size="small"
      showHeader={true}
      renderTrigger={renderTrigger}
    >
      {/* Modal content */}
      <div className="share-portfolio-modal">
        {/* QR code */}
        <div ref={cardRef} className="qr">
          <QRCodeSVG
            value={CANONICAL_URL}
            size={250}
            level="H"
            marginSize={0}
            imageSettings={{
              src: qrImageSrc,
              width: 30,
              height: 30,
              excavate: true,
            }}
            aria-label="QR code linking to my portfolio"
          />
        </div>
        {/* Download button */}
        <ResumeBtn
          onClick={handleDownload}
          ariaLabel={downloaded ? "Downloaded" : "Download QR code as PNG"}
          title="Download"
          label={downloaded ? "Done!" : "Download"}
          className="download-btn"
          whileTap={{ scale: 0.96 }}
        />
      </div>
    </ModalTrigger>
  );
}
