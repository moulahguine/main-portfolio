"use client";

import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "./ProjectLinks.scss";

export default function ProjectLinks({ demoLink, githubLink }) {
  const handleClick = (e, url) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-card__links">
      <button
        onClick={(e) => handleClick(e, demoLink)}
        className="project-card__link demo"
        aria-label="View Live Demo"
        title="🔗 Live Demo"
      >
        <FiExternalLink size={20} role="img" aria-hidden="true" />
        <span>Demo</span>
      </button>

      <button
        onClick={(e) => handleClick(e, githubLink)}
        className="project-card__link github"
        aria-label="View on GitHub"
        title="💻 GitHub Repo"
      >
        <FaGithub size={20} role="img" aria-hidden="true" />
        <span>source</span>
      </button>
    </div>
  );
}
