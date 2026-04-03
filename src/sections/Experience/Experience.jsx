"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  experienceTabs,
  getExperiences,
  PREVIEW_LIMIT,
  experienceData,
} from "@/data/experienceData";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import { GoArrowUpRight } from "react-icons/go";
import "./Experiences.scss";
import { RiSendPlaneLine } from "react-icons/ri";

function Experiences({ mode = "full" }) {
  const isPreview = mode === "preview";
  const [activeTab, setActiveTab] = useState("education");
  const spring = { type: "spring", stiffness: 300, damping: 30 };

  const currentExperiences = getExperiences(
    activeTab,
    isPreview && activeTab !== "languages" ? PREVIEW_LIMIT : null,
  );

  const totalCount = experienceData[activeTab]?.length || 0;
  const hasMore =
    isPreview && activeTab !== "languages" && totalCount > PREVIEW_LIMIT;

  const currentTabLabel =
    experienceTabs.find((tab) => tab.id === activeTab)?.label || "";

  const activeIndex = experienceTabs.findIndex((tab) => tab.id === activeTab);

  return (
    // Experiences section
    <section
      id="experiences"
      className="experiences"
      style={{
        "--tab-count": experienceTabs.length,
        "--active-index": activeIndex,
      }}
    >
      {/* Container */}
      <div className="container">
        {/* Header */}
        <header className="experiences__header">
          {/* Title */}
          <h2 className="title">Experience</h2>

          {/* View all link */}
          {hasMore && (
            <Link href="/experience" className="view-all-link">
              View More {currentTabLabel} (+{totalCount - PREVIEW_LIMIT}){" "}
              <GoArrowUpRight size={18} />
            </Link>
          )}
        </header>

        <div className="container-inner">
          {/* Tabs */}
          <div
            className="tabs"
            role="tablist"
            aria-label="Experience categories"
          >
            {/* Sliding indicator */}
            <span className="indicator" aria-hidden="true" />

            {/* Tabs */}
            {experienceTabs.map((tab) => (
              // Tab button
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                <span className="label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Timeline Content */}
          <motion.div layout transition={spring} className="timeline-wrapper">
            <AnimatePresence mode="wait">
              {/* Time line */}
              <motion.div
                key={activeTab}
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={activeTab}
                className="timeline"
                initial={{ opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Experiences */}
                {currentExperiences.length > 0 ? (
                  activeTab === "languages" ? (
                    //  Languages
                    <ul className="languages">
                      {currentExperiences.map((lang) => (
                        <li key={lang.id} className="language">
                          {/* Name */}
                          <h4 className="name">{lang.name}</h4>
                          {/* Level */}
                          <p className="level">{lang.level}</p>
                          {/* Flag */}
                          <span
                            className="flag"
                            aria-label={`${lang.name} flag`}
                          >
                            <lang.flag title={lang.name} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    currentExperiences.map((experience, index) => (
                      <ExperienceCard
                        key={experience.id}
                        experience={experience}
                        section={activeTab}
                        isPreview={isPreview}
                        isLast={index === currentExperiences.length - 1}
                      />
                    ))
                  )
                ) : activeTab === "work" ? (
                  <div className="hire-me">
                    <div className="content">
                      <motion.p
                        className="text"
                        initial={{ opacity: 0.5, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        Seeking First Frontend Role
                      </motion.p>
                      <Link className="button" href="/contact">
                        <span>hire me</span>
                        <RiSendPlaneLine size={20} />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p className="empty">No {currentTabLabel} to display.</p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
