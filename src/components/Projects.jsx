import React from "react";
import useOnceVisible from "../hooks/useOnceVisible";
import { projects } from "../data/projects";

const ArrowIcon = ({ className }) => (
  <svg
    className={className}
    style={{ color: "var(--text-muted)" }}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const Projects = ({ navigate }) => {
  const [projectsRef, isVisible] = useOnceVisible({ threshold: 0.1 });

  const renderCard = (project, index) => {
    const hasCaseStudy = Boolean(project.caseStudy && project.slug);
    const internalHref = hasCaseStudy ? `/projects/${project.slug}` : null;
    const externalHref = project.link || project.github;

    const sharedClassName = `block group transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;
    const sharedStyle = { transitionDelay: `${index * 100}ms` };

    const inner = (
      <div
        className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 py-6 border-b md:items-center"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="md:col-span-4 flex items-center justify-between md:justify-start">
          <h3
            className="text-lg md:text-xl font-medium group-hover:text-amber-500 transition-colors"
            style={{ color: "var(--text-white)" }}
          >
            {project.title}
          </h3>
          <ArrowIcon className="w-5 h-5 md:hidden transform group-hover:translate-x-1 transition-transform" />
        </div>

        <div className="md:col-span-7">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {project.description}
          </p>
          {hasCaseStudy && (
            <span
              className="inline-block mt-2 text-xs uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Read case study
            </span>
          )}
        </div>

        <div className="hidden md:flex md:col-span-1 justify-end">
          <ArrowIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    );

    if (hasCaseStudy && navigate) {
      return (
        <a
          key={project.title}
          href={internalHref}
          onClick={(event) => {
            event.preventDefault();
            navigate(internalHref);
          }}
          className={sharedClassName}
          style={sharedStyle}
        >
          {inner}
        </a>
      );
    }

    return (
      <a
        key={project.title}
        href={externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
        style={sharedStyle}
      >
        {inner}
      </a>
    );
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "var(--bg-medium)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-sm uppercase tracking-widest mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Work
          </p>
          <h2 style={{ color: "var(--text-white)" }}>Selected Projects</h2>
        </div>

        {/* Project List */}
        <div className="space-y-0">{projects.map(renderCard)}</div>

        {/* GitHub Link */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://github.com/dzikrirazzan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: "var(--text-gray)" }}
          >
            View all projects on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
