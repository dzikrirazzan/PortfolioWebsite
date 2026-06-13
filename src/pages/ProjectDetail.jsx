import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import useMeta from "../hooks/useMeta";
import { getProjectBySlug } from "../data/projects";

const Section = ({ heading, paragraphs }) => (
  <section className="case-study-section">
    <h2>{heading}</h2>
    {paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </section>
);

const ProjectDetail = ({ slug, navigate }) => {
  const project = getProjectBySlug(slug);
  const caseStudy = project?.caseStudy;

  usePageTitle(project ? project.title : "Project Not Found");
  useMeta(
    project
      ? {
          title: `${project.title} | Dzikri Razzan Athallah`,
          description: project.description,
          url: `https://dzikrirazzan.me/projects/${project.slug}`,
        }
      : {
          title: "Project Not Found | Dzikri Razzan Athallah",
          description: "This project might have been moved, renamed, or removed.",
          url: "https://dzikrirazzan.me/",
        }
  );

  const goHome = (event) => {
    event.preventDefault();
    navigate("/", "projects");
  };

  if (!project || !caseStudy) {
    return (
      <main className="page-shell article-shell">
        <article className="container article-container">
          <a href="/#projects" className="back-link" onClick={goHome}>
            Back to projects
          </a>
          <h1>Project not found</h1>
          <p style={{ color: "var(--text-gray)" }}>
            This project might have been moved, renamed, or removed.
          </p>
        </article>
      </main>
    );
  }

  return (
    <main className="page-shell article-shell">
      <article className="container article-container">
        <a href="/#projects" className="back-link" onClick={goHome}>
          Back to projects
        </a>

        <header className="article-header">
          <p className="article-date">
            {caseStudy.role}
            {caseStudy.timeline ? ` · ${caseStudy.timeline}` : ""}
          </p>
          <h1>{project.title}</h1>
          <p className="case-study-summary">{project.description}</p>

          {project.stack && (
            <ul className="tag-list" aria-label={`${project.title} tech stack`}>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          )}

          <div className="case-study-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">
                Visit live site
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
                View code
              </a>
            )}
          </div>
        </header>

        <div className="article-body">
          <Section heading="The problem" paragraphs={caseStudy.problem} />
          <Section heading="What I built" paragraphs={caseStudy.solution} />
          <Section heading="The outcome" paragraphs={caseStudy.outcome} />
        </div>
      </article>
    </main>
  );
};

export default ProjectDetail;
