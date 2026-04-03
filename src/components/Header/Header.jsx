"use client";

// hooks
import { useEffect, useState } from "react";

// motion
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

// components
import {
  Navigation,
  Menu,
  Logo,
  IMAGEKIT_MEDIA,
  LOCAL_MEDIA,
} from "@/components";

// styles
import "./Header.scss";

export default function Header() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateIsMobile = (event) => {
      setIsMobile(event.matches);
      if (!event.matches) {
        setIsHidden(false);
      }
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isMobile) return;

    const previous = scrollY.getPrevious() ?? 0;
    const goingDown = current > previous;

    if (current < 12) {
      setIsHidden(false);
      return;
    }

    if (goingDown) {
      setIsHidden(true);
      return;
    }

    setIsHidden(false);
  });

  return (
    <>
      {/* desktop header */}
      <motion.header
        className="header"
        animate={isMobile ? { y: isHidden ? "-100%" : 0 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 38 }}
      >
        {/* container */}
        <div className="container">
          {/* logo */}
          <Logo
            src={IMAGEKIT_MEDIA.logo.logo}
            fallback={LOCAL_MEDIA.logo.logo}
            linkClassName="header__logo"
            logoClassName="header__logo-img"
            href="/"
            aria-label="Home"
            alt="logo"
            width={50}
            height={50}
            priority
          />
          {/* navigation */}
          <Navigation className="nav-desktop" />
          {/* menu */}
          <Menu />
        </div>
      </motion.header>
      {/* mobile header */}
      <div className="mobile-nav">
        <Navigation />
      </div>
    </>
  );
}
