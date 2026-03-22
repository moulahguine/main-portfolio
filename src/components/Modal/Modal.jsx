"use client";

// React
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RemoveScroll } from "react-remove-scroll";
// Motion
import { AnimatePresence, motion } from "framer-motion";
// Components
import CloseButton from "../CloseButton/CloseButton";
// Styles
import "./Modal.scss";

// Constants
const MODAL_SIZES = new Set(["small", "medium", "large", "xlarge"]);
const MODAL_EASE = "easeInOut";
const MODAL_DURATION = 0.24;
const OVERLAY_MOTION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const CONTAINER_MOTION = {
  initial: { opacity: 0, y: 0, scale: 0.96 },
  animate: { opacity: 1, y: -5, scale: 1 },
  exit: { opacity: 0, y: 0, scale: 0.96 },
};
const MODAL_TRANSITION = { duration: MODAL_DURATION, ease: MODAL_EASE };

// Component
export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "large",
  showHeader = true,
  showCloseButton = true,
  closeOnOverlayClick = true,
  style,
  removeScrollBar = true,
  allowPinchZoom = false,
}) {
  // state to mount the component
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  if (!mounted) return null;

  // Normalize the size of the modal
  const normalizedSize = MODAL_SIZES.has(size) ? size : "large";
  const hasHeader = showHeader && (title || showCloseButton);
  const contentVariantClass = hasHeader ? "with-header" : "without-header";
  const closeButton = (
    <CloseButton onClick={onClose} ariaLabel="Close modal" ariaHidden={true} />
  );

  const modalContent = (
    // AnimatePresence is used to animate the modal when it is opened and closed
    <AnimatePresence mode="wait" initial={false}>
      {isOpen && (
        // RemoveScroll is used to prevent the scrollbar from appearing when the modal is open
        <RemoveScroll
          enabled={isOpen}
          removeScrollBar={removeScrollBar}
          allowPinchZoom={allowPinchZoom}
        >
          {/* Overlay */}
          <motion.div
            className="modal__overlay"
            onClick={handleOverlayClick}
            {...OVERLAY_MOTION}
            transition={MODAL_TRANSITION}
          >
            {/* Container */}
            <motion.div
              tabIndex={-1}
              className={`modal__container ${normalizedSize}`}
              onClick={(e) => e.stopPropagation()}
              style={{ ...style }}
              {...CONTAINER_MOTION}
              transition={MODAL_TRANSITION}
            >
              {/* Header */}
              {hasHeader && (
                <header className="modal__header">
                  {title && <h2 className="modal__header-title">{title}</h2>}
                  {showCloseButton && (
                    <span className="modal__header-close">{closeButton}</span>
                  )}
                </header>
              )}

              {/* Content */}
              <div className={`modal__content ${contentVariantClass}`}>
                {!showHeader && showCloseButton && (
                  <span className="modal__content-close">{closeButton}</span>
                )}
                {children}
              </div>
            </motion.div>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
