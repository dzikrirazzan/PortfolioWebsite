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
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
      image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
      image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
      className={`group bg-slate-800 border border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === "completed" ? "bg-blue-600 text-white" : "bg-slate-600 text-slate-200"}`}>{project.status === "completed" ? "Completed" : "Ongoing"}</span>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">Featured</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
          <div className="flex space-x-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-300" aria-label="View on GitHub">
                <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-300" aria-label="View Demo">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-300 mb-4 line-clamp-3">{project.description}</p>

        {project.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, idx) => (
                <span key={idx} className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-700">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && <span className="px-3 py-1 bg-slate-600 text-slate-400 text-sm rounded-full">+{project.technologies.length - 4} more</span>}
        </div>

        {(project.role || project.teamSize) && (
          <div className="pt-4 border-t border-slate-700">
            <div className="flex justify-between text-sm text-slate-400">
              {project.role && <span>Role: {project.role}</span>}
              {project.teamSize && <span>Team: {project.teamSize} members</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-12 sm:py-20 bg-slate-900" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8">A showcase of my latest work in mobile development, web applications, and data science projects</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                filter === category.id ? "bg-blue-600 text-white shadow-lg transform scale-105" : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              <span className="hidden sm:inline">
                {category.name} ({category.count})
              </span>
              <span className="sm:hidden">
                {category.name.split(" ")[0]} ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 sm:mb-6">Project Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">37+</div>
                <div className="text-slate-400 text-xs sm:text-base">Total Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">{projects.length}</div>
                <div className="text-slate-400 text-xs sm:text-base">Featured Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">85%</div>
                <div className="text-slate-400 text-xs sm:text-base">ML Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">7</div>
                <div className="text-slate-400 text-xs sm:text-base">Team Collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
