// components ui
import { InlineMap, HeroMedia } from "./ui";

// Components
import { ActionPillButton } from "@/components";

// Icons
import { VerifiedBadge } from "@/components";
import { PiMapPinLight } from "react-icons/pi";

// Styles
import "./Hero.scss";

// Resume URL
const RESUME_URL = "/resume/resume.pdf";

// Hero component
export default function Hero() {
  return (
    // Hero section
    <section className="hero" aria-labelledby="hero-heading">
      {/* Container */}
      <div className="container">
        {/* Map */}
        <div className="hero__map" aria-label="Map showing Istanbul and Rabat">
          <InlineMap />
        </div>

        {/* Profile */}
        <div className="hero__profile">
          {/* Profile content */}
          <div className="hero__profile-content">
            {/* Hero media */}
            <HeroMedia classImage="hero__image" classFigure="hero__media" />

            {/* Hero info */}
            <div className="hero__info">
              {/* Hero title */}
              <h1 id="hero-title" className="hero__title">
                Mohamed Oulahguine
                <VerifiedBadge
                  className="verified-badge"
                  width={25}
                  height={25}
                />
              </h1>
              {/* Hero role */}
              <p className="hero__role">
                Frontend Developer | React • Next.js • TypeScript
              </p>
              {/* Hero location */}
              <address className="hero__location">
                <PiMapPinLight aria-hidden="true" />
                Istanbul, Turkey |{" "}
                <span className="nationality" title="Moroccan">
                  {" "}
                  from Moroccan
                </span>
              </address>
            </div>
          </div>

          {/* Resume button */}
          <div className="resume-btn-container">
            {/* Action pill button */}

            <ActionPillButton
              href={RESUME_URL}
              download
              ariaLabel="Download Resume (PDF)"
              title="Download Resume"
              label="Resume"
              variant="resume"
              doneLabel="Done!"
              enableHover={true}
              enableClickFeedback={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
