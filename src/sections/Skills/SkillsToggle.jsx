"use client";

// hook
import { useState } from "react";
// icons
import { GoChevronDown, GoChevronUp } from "react-icons/go";
// motion
import * as motion from "motion/react-client";

// component to toggle the skills section
export default function SkillsToggle({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      {/* wrapper */}
      <motion.div
        className={"skills__wrapper"}
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 230 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* content */}
        <div className="skills__content">{children}</div>

        {!isExpanded ? (
          //  fade overlay
          <div className="skills__fade">
            {/* more indicator button */}
            <button
              className="skills__more-indicator"
              onClick={() => setIsExpanded(true)}
              aria-label="Show all skills"
              type="button"
            >
              <GoChevronDown size={24} aria-hidden="true" role="img" />
            </button>
          </div>
        ) : (
          // collapse button
          <button
            className="skills__collapse-btn"
            onClick={() => setIsExpanded(false)}
            aria-label="Show less skills"
            type="button"
          >
            <GoChevronUp size={24} aria-hidden="true" role="img" />
            Show Less
          </button>
        )}
      </motion.div>
    </>
  );
}
