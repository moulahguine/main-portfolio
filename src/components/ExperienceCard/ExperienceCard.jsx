import { FiExternalLink } from "react-icons/fi";
import "./ExperienceCard.scss";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback/ImageWithFallback";

const PREVIEW_MAX_TECHS = 4;

function ExperienceCard({ experience, section, isPreview, isLast }) {
  const {
    company,
    role,
    type,
    location,
    startDate,
    endDate,
    description,
    technologies,
    link,
    logo,
    logoFallback,
  } = experience;

  const dateRange = `${startDate} - ${endDate}`;

  return (
    <article
      className={`experience-card ${section ? `${section}` : ""} ${isLast ? "last" : ""}`}
    >
      {/* Timeline indicator */}
      <div className="timeline">
        <span className="dot" aria-hidden="true" />
        {!isLast && <span className="line" aria-hidden="true" />}
      </div>

      {/* Card content */}
      <div className="content">
        {/* Header row */}
        <header className="experience-card__header">
          {/* Logo or initials fallback */}
          <div className="logo">
            {logo ? (
              <ImageWithFallback
                src={logo}
                fallback={logoFallback}
                alt={`${company} organization logo for ${role}`}
                width={40}
                height={40}
                className="logo-img"
              />
            ) : (
              <span className="initials">
                {company.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="info">
            <div className="title-row">
              <h3 className="company">
                {link ? (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    aria-label={`Visit ${company} website (opens in new tab)`}
                    title={`Visit ${company} website`}
                  >
                    {company}
                    <FiExternalLink size={15} aria-hidden="true" role="img" />
                  </Link>
                ) : (
                  company
                )}
              </h3>
              <span className="date">{dateRange}</span>
            </div>
            <p className="role">{role}</p>
            <div className="meta">
              {type && <span className="type">{type}</span>}
              {location && <span className="location">{location}</span>}
            </div>
          </div>
        </header>

        {/* Description */}
        {description && description.length > 0 && (
          <ul
            className={`description ${isPreview ? "description--clamped" : ""}`}
          >
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {isPreview && description && description.length > 3 && (
          <Link href="/experiences" className="read-more">
            read more
          </Link>
        )}

        {/* Technologies */}
        {technologies &&
          technologies.length > 0 &&
          (() => {
            const maxTechs = isPreview
              ? PREVIEW_MAX_TECHS
              : technologies.length;
            const visibleTechs = technologies.slice(0, maxTechs);
            const hiddenCount = technologies.length - maxTechs;

            return (
              <div className="technologies">
                {visibleTechs.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
                {hiddenCount > 0 && (
                  <Link href="/experiences" className="tech-item more">
                    +{hiddenCount} More Topics
                  </Link>
                )}
              </div>
            );
          })()}
      </div>
    </article>
  );
}

export default ExperienceCard;
