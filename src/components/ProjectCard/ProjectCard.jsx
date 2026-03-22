import SkillIcon from "@/data/skillsData";
import ProjectLinks from "./ProjectLinks";
import { GoArrowUpRight } from "react-icons/go";
import "./ProjectCard.scss";
import ImageWithFallback from "@/components/ImageWithFallback/ImageWithFallback";

export default function ProjectCard({ project }) {
  const maxTechsToShow = 3;
  const visibleTechs = project.technologies.slice(0, maxTechsToShow);
  const remainingCount = project.technologies.length - maxTechsToShow;

  return (
    <>
      <figure className="project-card__media">
        <ImageWithFallback
          className="project-card__mediaImg"
          src={project.media.image}
          fallback={project.media.fallback}
          alt={`${project.title} project interface screenshot built by Mohamed Oulahguine`}
          width={1200}
          height={800}
        />

        <figcaption className="sr-only">
          Preview of the {project.title} project interface and user experience
        </figcaption>
      </figure>

      <div className="project-card__details">
        <h3 className="project-card__title">
          {project.title}

          <GoArrowUpRight size={20} />
        </h3>

        <div className="project-card__content">
          <p className="project-card__description">{project.description}</p>

          <div className="project-card__technologies">
            {visibleTechs.map((tech, index) => (
              <span
                style={{ "--colorTech": tech.color }}
                key={index}
                className="project-card__tech-item"
                title={tech.name}
              >
                <SkillIcon
                  icon={tech.icon}
                  color={tech.color}
                  size={18}
                  title={tech.name}
                  className="project-card__tech-icon"
                />
                <span className="project-card__tech-name">{tech.name}</span>
              </span>
            ))}
            {remainingCount > 0 && (
              <span
                className="project-card__tech-more"
                title={`View all ${project.technologies.length} technologies`}
              >
                +{remainingCount} more
              </span>
            )}
          </div>
        </div>

        <ProjectLinks
          demoLink={project.demoLink}
          githubLink={project.githubLink}
        />
      </div>
    </>
  );
}
