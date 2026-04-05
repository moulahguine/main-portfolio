import { InlineMap, HeroMedia } from "./ui";
import { ResumeBtn } from "@/components";
import { RiVerifiedBadgeFill, RiMapPinUserLine } from "react-icons/ri";

import "./Hero.scss";

export default function Hero() {
  return (
    // Hero section
    <section
      className="hero-section"
      id="hero-section"
      aria-label="hero banner "
    >
      {/* Container */}
      <div className="hero-section__container">
        {/* ==== Map ==== */}
        <div
          className="hero-section__map--wrapper"
          aria-label="Map showing my location"
        >
          <InlineMap />
        </div>

        {/* ==== Profile content ==== */}
        <div className="hero-section__profile--content">
          <HeroMedia
            classImage="hero-section__media--image"
            classFigure="hero-section__media--figure"
          />

          {/* Hero fullname */}
          <div className="hero-section__info">
            <h1 id="hero-fullname" className="hero-section__fullname">
              <b className="hero-section__fullname--text">Mohamed Oulahguine</b>
              <span className="hero-section__fullname--verified">
                <RiVerifiedBadgeFill
                  className="hero-section__fullname--verified-icon"
                  aria-hidden="true"
                  role="img"
                />
              </span>
            </h1>

            {/* Hero role */}
            <p className="hero-section__role">
              Frontend Developer | React • Next.js • TypeScript
            </p>

            {/* Hero location */}
            <address className="hero-section__location">
              <span className="hero-section__location--icon">
                <RiMapPinUserLine aria-hidden="true" role="img" />
              </span>
              <p
                className="hero-section__location--text"
                title="Istanbul, Turkey"
              >
                Istanbul, Turkey
                <span
                  className="hero-section__location--text-nationality"
                  title="Moroccan"
                >
                  From Morocco
                </span>
              </p>
            </address>
          </div>
        </div>
        {/* ==== Resume button ==== */}
        <ResumeBtn className="hero-section__button" />
      </div>
    </section>
  );
}
