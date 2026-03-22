import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageWithFallback } from "@/components";
import {
  getProjectBySlug,
  getStaticProjectParams,
  getAllProjects,
} from "@/lib/projects";
import "./page.scss";

/**
 * Generate static parameters for all projects
 * Pre-renders all project pages at build time
 */
export async function generateStaticParams() {
  return getStaticProjectParams();
}

/**
 * Generate metadata for each project
 * Used for SEO and social sharing
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Minimal, one-column case study UI
  const role = "Frontend Developer"; // default role
  const timeframe = project.year ? String(project.year) : "";
  const coreTechs = (project.technologies || []).slice(0, 3).map((t) => t.name);
  const projectType = project.featured ? "Personal" : "Client"; // simple derivation

  // One-sentence short description (max 12 words)
  const shortDesc = (() => {
    if (!project.description) return "";
    const firstSentence =
      project.description.split(/\.|!/)[0] || project.description;
    const words = firstSentence.trim().split(/\s+/).slice(0, 12);
    return words.join(" ") + (words.length >= 12 ? "…" : "");
  })();

  // Hiring signals (skill-focused, 3-4 items)
  const hiringSignals = [
    "Component architecture",
    "UX-driven decisions",
    "Animation restraint",
    "Performance awareness",
  ];

  return (
    <main className="case-study">
      <div className="case-study__container container">
        {/* Breadcrumb */}
        <nav className="case-study__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <Link href="/projects">Projects</Link>
          <span className="sep">/</span>
          <span aria-current="page" className="current">
            {project.title}
          </span>
        </nav>

        {/* Title + one-line description */}
        <header className="case-study__header">
          <h1 className="case-study__title">{project.title}</h1>
          {shortDesc && <p className="case-study__subtitle">{shortDesc}</p>}

          {/* Snapshot chips */}
          <div className="case-study__chips">
            <span className="chip">{role}</span>
            {timeframe && <span className="chip">{timeframe}</span>}
            {coreTechs.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
            <span className="chip">{projectType}</span>
          </div>
        </header>

        {/* Visual proof */}
        <figure className="case-study__visual">
          <ImageWithFallback
            src={project.media.image}
            fallback={project.media.fallback}
            alt={`${project.title} full case-study hero image showing the implemented frontend interface`}
            width={1200}
            height={700}
            className="visual__img"
            priority
          />
          {project.media.caption && (
            <figcaption className="visual__caption">
              {project.media.caption}
            </figcaption>
          )}
        </figure>

        {/* Hiring signal section */}
        <section className="case-study__signals">
          <h2 className="signals__title">What this project shows</h2>
          <ul className="signals__list">
            {hiringSignals.map((s) => (
              <li key={s} className="signals__item">
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* Actions */}
        <div className="case-study__actions">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Live Demo
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            GitHub
          </a>

          <Link href="/projects" className="back-link">
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
