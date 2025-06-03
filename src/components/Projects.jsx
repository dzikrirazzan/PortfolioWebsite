import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Si-Bantu (Bangkit Capstone 2024)",
      description: "AI-powered Android application for intelligent assistance with machine learning integration. Collaborated as Mobile Developer in a team of 7 members achieving 85% model accuracy.",
      longDescription:
        "Developed as part of Bangkit 2024 Capstone Project (C242-PS026), Si-Bantu is an intelligent assistance application that leverages machine learning for smart recommendations. Built with modern Android development practices including MVVM architecture, Material Design, and comprehensive API integration.",
      technologies: ["Android", "Kotlin", "Machine Learning", "TensorFlow", "Firebase", "Material Design", "Retrofit", "MVVM"],
      github: "https://github.com/indra1222/Bangkitcapstone",
      demo: "https://aplodfix-wk452lxpxq-et.a.run.app/predict",
      image: "/api/placeholder/600/400",
      featured: true,
      category: "mobile",
      status: "completed",
      teamSize: 7,
      role: "Mobile Developer",
      highlights: ["85% Model Accuracy", "Team of 7 Members", "Full-Stack Integration"],
    },
    {
      title: "SIGAP API System",
      description: "PHP-based API system for government data management with secure authentication and comprehensive documentation.",
      longDescription: "A robust backend API system built with PHP for managing government administrative data. Features secure authentication, role-based access control, and comprehensive API documentation for seamless integration.",
      technologies: ["PHP", "MySQL", "REST API", "JWT Authentication", "Documentation"],
      github: "https://github.com/dzikrirazzan/sigap_api",
      image: "/api/placeholder/600/400",
      featured: true,
      category: "backend",
      status: "completed",
      highlights: ["Secure Authentication", "Government Data Management", "Comprehensive API"],
    },
    {
      title: "Premier League App",
      description: "JavaScript-based web application for Premier League statistics and live updates with responsive design.",
      longDescription: "Interactive web application providing comprehensive Premier League statistics, live match updates, team information, and player profiles. Built with modern JavaScript and responsive design principles.",
      technologies: ["JavaScript", "HTML5", "CSS3", "REST API", "Responsive Design"],
      github: "https://github.com/dzikrirazzan/PremierLeagueApp",
      demo: "https://dzikrirazzan.github.io/PremierLeagueApp",
      image: "/api/placeholder/600/400",
      featured: false,
      category: "web",
      status: "completed",
      highlights: ["Live Updates", "Responsive Design", "Sports Analytics"],
    },
    {
      title: "Diskominfo Pekalongan",
      description: "Government website for Pekalongan's Communication and Information Department with modern UI/UX.",
      longDescription: "Official website for the Communication and Information Department of Pekalongan featuring modern design, content management system, and citizen services integration.",
      technologies: ["Blade Template", "Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/dzikrirazzan/diskominfo_pekalongan",
      image: "/api/placeholder/600/400",
      featured: false,
      category: "web",
      status: "completed",
      highlights: ["Government Portal", "Content Management", "Public Services"],
    },
    {
      title: "Data Science Projects Collection",
      description: "Collection of machine learning and data analysis projects including regression analysis and numerical computing.",
      longDescription: "Comprehensive collection of data science projects covering regression analysis, numerical integration, interpolation methods, and linear equation systems using Python and Jupyter Notebook.",
      technologies: ["Python", "Jupyter Notebook", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/dzikrirazzan/Aplikasi-Regresi-untuk-Pemecahan-Problem",
      image: "/api/placeholder/600/400",
      featured: false,
      category: "data-science",
      status: "completed",
      highlights: ["Mathematical Modeling", "Data Analysis", "Scientific Computing"],
    },
    {
      title: "Android Learning Projects",
      description: "Collection of Android applications built during learning journey including various utility and educational apps.",
      longDescription: "Comprehensive collection of Android applications developed for learning purposes, covering different aspects of Android development from basic UI to complex features like database integration and API consumption.",
      technologies: ["Java", "Kotlin", "Android SDK", "SQLite", "Firebase", "Material Design"],
      github: "https://github.com/dzikrirazzan",
      image: "/api/placeholder/600/400",
      featured: false,
      category: "mobile",
      status: "ongoing",
      highlights: ["Learning Portfolio", "Multiple Apps", "Skill Development"],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "mobile", name: "Mobile", count: projects.filter((p) => p.category === "mobile").length },
    { id: "web", name: "Web", count: projects.filter((p) => p.category === "web").length },
    { id: "backend", name: "Backend", count: projects.filter((p) => p.category === "backend").length },
    { id: "data-science", name: "Data Science", count: projects.filter((p) => p.category === "data-science").length },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

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

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const ProjectCard = ({ project, index }) => (
    <div
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${project.featured ? "md:col-span-2 lg:col-span-2" : ""} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === "completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>{project.status === "completed" ? "Completed" : "Ongoing"}</span>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-semibold">Featured</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
          <div className="flex space-x-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300" aria-label="View on GitHub">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-300" aria-label="View Demo">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {project.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, idx) => (
                <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">+{project.technologies.length - 4} more</span>}
        </div>

        {(project.role || project.teamSize) && (
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between text-sm text-gray-500">
              {project.role && <span>Role: {project.role}</span>}
              {project.teamSize && <span>Team: {project.teamSize} members</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">A showcase of my latest work in mobile development, web applications, and data science projects</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === category.id ? "bg-blue-600 text-white shadow-lg transform scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">37+</div>
                <div className="text-gray-600">Total Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{projects.length}</div>
                <div className="text-gray-600">Featured Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">ML Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                <div className="text-gray-600">Team Collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>

        <div className="max-w-6xl mx-auto">
          {/* Featured Project */}
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl mb-12 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                    <span className="text-gray-500">Project Screenshot</span>
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <span className="text-gray-500">Project Screenshot</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
