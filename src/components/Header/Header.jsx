"use client";

import { useMediaQuery } from "react-responsive";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import {
  Navigation,
  Menu,
  Logo,
  IMAGEKIT_MEDIA,
  LOCAL_MEDIA,
  ResumeBtn,
} from "@/components";
import "./Header.scss";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 778px)" });
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 10 && isMobile) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* desktop header */}
      <motion.header
        className="header"
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
            alt=""
            width={50}
            height={50}
            priority
          />

          {/* navigation */}
          {!isMobile && <Navigation className="nav__desktop" />}

          {/* menu */}
          <Menu />
        </div>
      </motion.header>

      {/* mobile navigation */}
      {isMobile && (
        <>
          <motion.div
            className="mobile__button-wrapper"
            variants={{
              visible: {
                borderRadius: "",
                width: "fit-content",
                y: -65,
              },
              hidden: {
                borderRadius: "30%",
                width: "50px",
                y: 0,
              },
            }}
            animate={hidden ? "hidden" : "visible"}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            aria-label="Mobile resume button"
          >
            <ResumeBtn
              className="mobile__button--resume"
              variants={{
                visible: {
                  scale: 1,
                  x: 0,
                  overflow: "visible",
                },
                hidden: {
                  x: 15,
                  scale: 1.5,
                  overflow: "hidden",
                },
              }}
              whileTap={{ scale: 0.92 }}
              animate={hidden ? "hidden" : "visible"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            id="mobile-nav"
            className="nav__mobile--wrapper"
            variants={{
              visible: { y: 0 },
              hidden: { y: 100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            aria-label="Mobile navigation"
            aria-hidden={!isMobile}
          >
            <Navigation className="nav__mobile" />
          </motion.div>
        </>
      )}
    </>
  );
}
