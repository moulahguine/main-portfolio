"use client";
// hooks
import { useEffect, useRef, useState } from "react";

// Framer Motion
import { AnimatePresence, motion } from "framer-motion";

// Icons
import { PiFilePdfDuotone } from "react-icons/pi";
import { MdOutlineFileDownload, MdOutlineQrCode2 } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

// Styles
import "./ActionPillButton.scss";

// Action pill button component
export default function ActionPillButton({
  href,
  download = false,
  onClick,
  ariaLabel,
  title,
  label = "",
  doneLabel = "",
  enableHover = true,
  enableClickFeedback = true,
  variant = "download",
  IdleIcon,
  HoverIcon,
  DoneIcon,
  className = "",
}) {
  // State for hover
  const [isHovered, setIsHovered] = useState(false);

  // State for done
  const [isDone, setIsDone] = useState(false);

  // State for ripples
  const [ripples, setRipples] = useState([]);

  // Ref for timeout
  const timeoutRef = useRef(null);

  // Effect to clear timeout
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Function to create ripple
  const createRipple = () => {
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, id]);

    // Timeout to clear ripple
    setTimeout(() => {
      setRipples((prev) => prev.filter((item) => item !== id));
    }, 700);
  };

  // Function to handle click
  const handleClick = (event) => {
    if (enableClickFeedback) {
      clearTimeout(timeoutRef.current);
      createRipple();
      setIsDone(true);
      timeoutRef.current = setTimeout(() => setIsDone(false), 1200);
    }

    onClick?.(event);
  };

  // Function to show hover icon
  const showHoverIcon = enableHover && isHovered && !isDone;

  // Function to get root class name
  const rootClassName = `action-pill-btn-container ${className}`.trim();

  // Function to get button class name
  const buttonClassName = "action-pill-btn";

  // Function to get icons by variant
  const iconsByVariant = {
    download: {
      idle: MdOutlineFileDownload,
      hover: MdOutlineFileDownload,
      done: CiCircleCheck,
    },
    resume: {
      idle: PiFilePdfDuotone,
      hover: MdOutlineFileDownload,
      done: CiCircleCheck,
    },
    share: {
      idle: MdOutlineQrCode2,
      hover: MdOutlineFileDownload,
      done: CiCircleCheck,
    },
  };
  // Function to get variant icons
  const variantIcons = iconsByVariant[variant] ?? iconsByVariant.download;
  const IdleIconComponent = IdleIcon ?? variantIcons.idle;
  const HoverIconComponent = HoverIcon ?? variantIcons.hover;
  const DoneIconComponent = DoneIcon ?? variantIcons.done;

  // Function to get common props
  const commonProps = {
    className: buttonClassName,
    "aria-label": ariaLabel,
    title,
    onClick: handleClick,
    onMouseEnter: () => enableHover && setIsHovered(true),
    onMouseLeave: () => enableHover && setIsHovered(false),
  };

  // Function to get content
  const content = (
    <>
      {/* Icon shell */}
      <span className="action-pill-btn__icon-shell" aria-hidden="true">
        {/* Ripples */}
        <span className="action-pill-btn__ripples">
          <AnimatePresence>
            {ripples.map((id) => (
              <motion.span
                key={id}
                className="action-pill-btn__ripple"
                initial={{ scale: 0.2, opacity: 0.5 }}
                animate={{ scale: 2.8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>
        </span>

        {/* Icons */}
        <AnimatePresence mode="wait" initial={false}>
          {isDone ? (
            <motion.span
              key="done"
              className="action-pill-btn__icon"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DoneIconComponent aria-hidden="true" />
            </motion.span>
          ) : showHoverIcon ? (
            <motion.span
              key="hover"
              className="action-pill-btn__icon"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HoverIconComponent aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              className="action-pill-btn__icon"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IdleIconComponent aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Label */}
      <AnimatePresence mode="wait" initial={false}>
        {!isDone ? (
          <motion.span
            key="label"
            className="action-pill-btn__label"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.span>
        ) : (
          <motion.span
            key="done-label"
            className="action-pill-btn__label"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {doneLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );

  // Return component
  return (
    <span className={rootClassName}>
      {/* Anchor tag */}
      {href ? (
        <a href={href} download={download} {...commonProps}>
          {content}
        </a>
      ) : (
        // Button
        <button type="button" {...commonProps}>
          {content}
        </button>
      )}
    </span>
  );
}
