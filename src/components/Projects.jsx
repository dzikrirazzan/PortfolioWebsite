import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Sigap Undip",
      description: "Campus emergency and incident reporting platform with real time response workflows.",
      link: "https://sigapundip.xyz/",
      github: "https://github.com/dzikrirazzan/sigap_api",
    },
    {
      title: "RetenSYNC",
      description: "ML powered employee turnover prediction. Platinum Award winner at VIIIC 2025.",
      link: "https://retensync.vercel.app/",
      github: "https://github.com/dzikrirazzan/turnover_api",
    },
    {
      title: "EMSys",
      description: "Real time engine monitoring system for critical vehicle parameters.",
      link: "https://capstone-website-snowy.vercel.app/",
      github: "https://github.com/dzikrirazzan/capstoneWebsite",
    },
    {
      title: "Si-Bantu",
      description: "AI powered Android app for local service discovery. Bangkit capstone.",
      github: "https://github.com/indra1222/Bangkitcapstone",
    },
    {
      title: "Big Games",
      description: "Room booking system with AI powered recommendations.",
      github: "https://github.com/dzikrirazzan/biggames_backend",
    },
    {
      title: "Premier League App",
      description: "Web app for live Premier League statistics.",
      link: "https://dzikrirazzan.github.io/PremierLeagueApp",
      github: "https://github.com/dzikrirazzan/PremierLeagueApp",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
          <h2 style={{ color: "var(--text-white)" }}>
            Selected Projects
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`block group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 py-6 border-b md:items-center"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Title */}
                <div className="md:col-span-4 flex items-center justify-between md:justify-start">
                  <h3
                    className="text-lg md:text-xl font-medium group-hover:text-amber-500 transition-colors"
                    style={{ color: "var(--text-white)" }}
                  >
                    {project.title}
                  </h3>
                  {/* Arrow - visible only on mobile, inline with title */}
                  <svg
                    className="w-5 h-5 md:hidden transform group-hover:translate-x-1 transition-transform"
                    style={{ color: "var(--text-muted)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                {/* Description */}
                <div className="md:col-span-7">
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Arrow - Desktop only */}
                <div className="hidden md:flex md:col-span-1 justify-end">
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    style={{ color: "var(--text-muted)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
