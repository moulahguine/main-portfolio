"use client";

// nextjs client components
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// icons
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiLink,
  HiMiniQrCode,
} from "react-icons/hi2";

// components
import { ConnectLinks, SharePortfolio } from "@/components";

// motion
import { AnimatePresence, motion } from "motion/react";

// styles
import "./Menu.scss";

// theme data
const themeOptions = [
  { id: "dark", label: "Dark", icon: HiOutlineMoon },
  { id: "light", label: "Light", icon: HiOutlineSun },
];

// quick action item component
function QuickActionItem({ className, icon: Icon, label, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      <div className="link__icon--wrapper">
        <Icon aria-hidden="true" role="img" />
      </div>
      <span className="link__label">{label}</span>
    </button>
  );
}

// Menu component
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const panelRef = useRef(null);
  const triggerRef = useRef(null);

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
        ".modal__overlay, .modal__container",
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

  // current theme
  const currentTheme = theme || "dark";

  // switch theme
  const switchTheme = (newTheme) => {
    if (!mounted || currentTheme === newTheme) return;
    setTheme(newTheme);
  };

  // render menu
  return (
    <div className="menu">
      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        className={`menu__trigger ${isOpen ? "menu__trigger--active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu icon" : "Open menu icon"}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="menu-panel"
      >
        <span
          className="menu__trigger-line menu__trigger-line--first"
          aria-hidden="true"
        ></span>
        <span
          className="menu__trigger-line menu__trigger-line--second"
          aria-hidden="true"
        ></span>
        <span
          className="menu__trigger-line menu__trigger-line--third"
          aria-hidden="true"
        ></span>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <div
            key="menu-panel"
            ref={panelRef}
            id="menu-panel"
            className="menu__container"
            role="region"
            aria-modal="false"
            aria-label="Quick actions"
          >
            {/* Theme Section */}
            <motion.section
              key="theme-section"
              className="menu__section menu__section--theme"
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2, transition: { delay: 0.4 } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Theme Title */}
              <h2 className="menu__section--title">Theme:</h2>

              {/* Theme Options */}
              <div className="theme__container">
                {themeOptions.map((option) => {
                  const Icon = option.icon;
                  const isActive = currentTheme === option.id;

                  return (
                    // Theme button
                    <button
                      key={option.id}
                      type="button"
                      className={`theme__btn ${isActive ? "active" : ""} ${option.label.toLowerCase().trim()}`}
                      aria-label={`Switch to ${option.id} theme`}
                      aria-pressed={isActive}
                      onClick={() => switchTheme(option.id)}
                    >
                      {/* theme icon */}
                      <div
                        className={`theme__icon-wrapper ${option.label.toLowerCase().trim()}`}
                      >
                        <Icon
                          className="theme__icon"
                          aria-hidden="true"
                          role="img"
                        />
                      </div>
                      {/*  theme label */}
                      <span
                        className={`theme__label ${option.label.toLowerCase().trim()}`}
                      >
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.section>

            {/* Links & Share */}
            <motion.section
              key="links-section"
              className="menu__section menu__section--links"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Links & Share Title */}
              <h2 className="menu__section--title">Links & Share:</h2>

              {/* Links & Share container */}
              <ul className="links__container">
                {/* Social Links */}
                <ConnectLinks
                  renderTrigger={({ open }) => (
                    <li className="link__item">
                      <QuickActionItem
                        className="link__option link__option--social"
                        icon={HiLink}
                        label="Social Links"
                        onClick={open}
                      />
                    </li>
                  )}
                />

                {/* Share Portfolio */}
                <SharePortfolio
                  renderTrigger={({ open }) => (
                    <li className="link__item">
                      <QuickActionItem
                        className="link__option link__option--share"
                        icon={HiMiniQrCode}
                        label="Share Portfolio"
                        onClick={open}
                      />
                    </li>
                  )}
                />
              </ul>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
