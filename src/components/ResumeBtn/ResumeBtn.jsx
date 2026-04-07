"use client";

import { RiDownloadLine } from "react-icons/ri";
import { motion } from "motion/react";
import "./ResumeBtn.scss";

// Resume URL
const RESUME_URL = "/resume/resume.pdf";

export default function ResumeBtn({
  className = "",
  href,
  download = true,
  label = "Resume",
  title = "Download",
  ariaLabel,
  onClick,
  ...motionProps
}) {
  const computedHref = href ?? (onClick ? undefined : RESUME_URL);
  const computedAriaLabel = ariaLabel ?? title;
  const combinedClassName = ["button", className].filter(Boolean).join(" ");

  const content = (
    <>
      <span className="button--icon" aria-hidden="true">
        <RiDownloadLine focusable="false" />
      </span>
      <span className="button--label">{label}</span>
    </>
  );

  if (computedHref) {
    return (
      <motion.a
        className={combinedClassName}
        href={computedHref}
        download={download}
        title={title}
        aria-label={computedAriaLabel}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={combinedClassName}
      onClick={onClick}
      title={title}
      aria-label={computedAriaLabel}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
