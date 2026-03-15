"use client";

// nextjs client components
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

// icons
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { RxPerson } from "react-icons/rx";
import { PiShareFatLight } from "react-icons/pi";

// components
import { ConnectLinks, SharePortfolio } from "@/components";

// motion
import { AnimatePresence, motion } from "motion/react";

// styles
import "./Menu.scss";

// Menu component
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeQuickAction, setActiveQuickAction] = useState(null);
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const { theme, setTheme } = useTheme();

  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const wasOpenRef = useRef(false);

  // mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // handle pointer down
  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event) {
      const target = event.target;
      const targetElement = target instanceof Element ? target : null;

      const clickedInsideModal = targetElement?.closest(
        ".modal__overlay, .modal__container"
      );
      if (clickedInsideModal) return;

      const clickedInsidePanel =
        panelRef.current && panelRef.current.contains(target);

      const clickedOnTrigger =
        triggerRef.current && triggerRef.current.contains(target);

      if (!clickedInsidePanel && !clickedOnTrigger) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // handle focus
  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      setHoveredTheme(null);
      setActiveQuickAction(null);
      const firstInteractive = panelRef.current?.querySelector(
        "button, a[href], [tabindex]:not([tabindex='-1'])"
      );
      firstInteractive?.focus();
      return;
    }

    if (wasOpenRef.current) {
      triggerRef.current?.focus();
      wasOpenRef.current = false;
    }
  }, [isOpen]);

  // theme options

  const themeOptions = [
    { id: "dark", label: "Dark", icon: HiOutlineMoon },
    { id: "light", label: "Light", icon: HiOutlineSun },
  ];

  // current theme
  const currentTheme = theme || "dark";

  // switch theme
  const switchTheme = (newTheme) => {
    if (!mounted || currentTheme === newTheme) return;
    setTheme(newTheme);
  };

  // set quick action active
  const setQuickActionActive = (key) => setActiveQuickAction(key);

  // get quick action props
  const getQuickActionProps = (key, action) => ({
    onPointerEnter: () => setQuickActionActive(key),
    onFocus: () => setQuickActionActive(key),
    onClick: () => {
      setQuickActionActive(key);
      action?.();
    },
  });

  // render quick action indicator
  const renderQuickActionIndicator = (key) =>
    activeQuickAction === key ? (
      <motion.span
        layoutId="menu-link-highlight"
        className="menu__link-indicator"
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      />
    ) : null;

  // render menu
  return (
    <div className="menu">
      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        className={`menu__trigger ${isOpen ? "menu__trigger--active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls="menu-panel"
      >
        <span className="menu__trigger-line menu__trigger-line--first"></span>
        <span className="menu__trigger-line menu__trigger-line--second"></span>
        <span className="menu__trigger-line menu__trigger-line--third"></span>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            id="menu-panel"
            className="menu__panel"
            role="dialog"
            aria-modal="false"
            aria-label="Quick actions"
            initial={{ opacity: 0, y: 0, scale: 0 }}
            animate={{ opacity: 1, y: -5, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Theme */}
            <section className="menu__section">
              {/* Title */}
              <h2 className="menu__section-title">Theme:</h2>

              {/* Options */}
              <div className="menu__theme-options">
                {themeOptions.map((option) => {
                  const Icon = option.icon;
                  const isActive = currentTheme === option.id;

                  return (
                    // Theme button
                    <motion.button
                      key={option.id}
                      type="button"
                      className="menu__theme-btn"
                      aria-label={`Switch to ${option.id} theme`}
                      aria-pressed={isActive}
                      onClick={() => switchTheme(option.id)}
                      onHoverStart={() => setHoveredTheme(option.id)}
                      onHoverEnd={() => setHoveredTheme(null)}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 28,
                      }}
                      animate={{
                        color: isActive ? "var(--white)" : "var(--gray-700)",
                      }}
                    >
                      {hoveredTheme === option.id && !isActive && (
                        <motion.span
                          layoutId="menu-theme-hover-indicator"
                          className="menu__theme-hover-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                          }}
                        />
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="menu-theme-active-indicator"
                          className="menu__theme-active-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                          }}
                        />
                      )}
                      <Icon size={16} aria-hidden="true" />
                      <span className="menu__theme-label">{option.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </section>

            {/* Contact & Share */}
            <section className="menu__section">
              {/* Title */}
              <h2 className="menu__section-title">Contact & Share:</h2>

              {/* Links */}
              <div className="menu__links">
                {/* Social Links Link */}
                <ConnectLinks
                  renderTrigger={({ open }) => (
                    <button
                      type="button"
                      className="menu__link-btn menu__link-btn--social"
                      {...getQuickActionProps("social", open)}
                    >
                      {renderQuickActionIndicator("social")}
                      <RxPerson size={16} aria-hidden="true" />
                      <span className="menu__link-text">Social Links</span>
                    </button>
                  )}
                />

                {/* Share Portfolio Link */}
                <SharePortfolio
                  renderTrigger={({ open }) => (
                    <button
                      type="button"
                      className="menu__link-btn menu__link-btn--share"
                      {...getQuickActionProps("share", open)}
                    >
                      {renderQuickActionIndicator("share")}
                      <PiShareFatLight size={16} aria-hidden="true" />
                      <span className="menu__link-text">Share Portfolio</span>
                    </button>
                  )}
                />

                {/* Contact Link */}
                <Link
                  href="/contact"
                  className="menu__link-btn menu__link-btn--contact"
                  {...getQuickActionProps("contact", () => setIsOpen(false))}
                >
                  {renderQuickActionIndicator("contact")}
                  <HiOutlineChatBubbleLeftRight size={16} aria-hidden="true" />
                  <span className="menu__link-text">Contact Me</span>
                </Link>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
