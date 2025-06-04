import React, { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  const experiences = [
    {
      title: "Bangkit Academy Cohort 2024",
      company: "Google, Tokopedia, Gojek & Traveloka",
      period: "2024 - Present",
      location: "Remote, Indonesia",
      description:
        "Participating in the prestigious Bangkit Academy program as a Mobile Development learning path student. Working on capstone project Si-Bantu with a team of 7 members from different specializations (Mobile Development, Machine Learning, Cloud Computing).",
      achievements: [
        "Selected among thousands of applicants nationwide",
        "Completed mobile development curriculum with hands-on projects",
        "Collaborated in cross-functional team for capstone project",
        "Gained expertise in modern Android development practices",
        "Learned industry-standard development workflows",
        "Built production-ready mobile application with ML integration",
      ],
      technologies: ["Android", "Kotlin", "Machine Learning", "Cloud Computing", "Team Collaboration", "Agile"],
      type: "education",
      status: "current",
      program: "Mobile Development Path",
    },
    {
      title: "Computer Engineering Student",
      company: "Diponegoro University",
      period: "2021 - Present",
      location: "Semarang, Indonesia",
      description:
        "Pursuing Bachelor's degree in Computer Engineering with focus on software development, mobile programming, and data science. Maintaining strong academic performance while building practical skills through various projects and coursework.",
      achievements: [
        "Specialized in mobile application development and software engineering",
        "Completed advanced courses in data structures, algorithms, and mathematics",
        "Developed multiple Android applications for academic projects",
        "Participated in programming competitions and technical challenges",
        "Built strong foundation in numerical computing and mathematical modeling",
        "Active contributor to computer science student community",
      ],
      technologies: ["Java", "Kotlin", "Python", "C++", "Data Structures", "Algorithms", "Mathematics"],
      type: "education",
      status: "current",
      gpa: "3.7/4.0",
    },
    {
      title: "Software Developer",
      company: "Freelance & Personal Projects",
      period: "2020 - Present",
      location: "Indonesia",
      description:
        "Developing various software solutions including government systems, web applications, and mobile apps. Building a diverse portfolio spanning multiple technologies and domains while continuously learning new frameworks and best practices.",
      achievements: [
        "Built government data management systems with secure APIs",
        "Created responsive web applications with modern frameworks",
        "Developed multiple Android utility and educational applications",
        "Implemented data science projects for research purposes",
        "Contributed to open-source community through GitHub",
        "Maintained 37+ public repositories across different technologies",
      ],
      technologies: ["PHP", "JavaScript", "Python", "Laravel", "React", "Android", "MySQL", "Git"],
      type: "experience",
      status: "ongoing",
      projects: "37+ public repositories",
    },
    {
      title: "Android Development Learning Journey",
      company: "Self-Directed & Online Platforms",
      period: "2019 - 2021",
      location: "Indonesia",
      description:
        "Intensive self-learning journey in Android development, starting from basic Java programming to advanced Android concepts. Built multiple learning projects and applications to solidify understanding of mobile development principles.",
      achievements: [
        "Mastered Java and Kotlin programming from ground up",
        "Built 15+ Android learning applications with various features",
        "Learned Android SDK, Material Design guidelines, and architecture patterns",
        "Implemented different app architectures (MVC, MVP, MVVM)",
        "Integrated local databases (SQLite, Room) and web APIs",
        "Developed strong debugging and problem-solving skills",
      ],
      technologies: ["Java", "Kotlin", "Android SDK", "SQLite", "Firebase", "XML", "Material Design"],
      type: "education",
      status: "completed",
      duration: "2+ years intensive learning",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case "project":
        return "🚀";
      case "education":
        return "🎓";
      case "experience":
        return "💼";
      default:
        return "📋";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "project":
        return "from-blue-500 to-blue-600";
      case "education":
        return "from-blue-400 to-blue-600";
      case "experience":
        return "from-blue-600 to-blue-700";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 bg-slate-900" ref={experienceRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">Experience & Education</h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">My journey in software development, from academic learning to professional projects</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-8 sm:mb-12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"} ml-12 sm:ml-16 lg:ml-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-8 sm:-left-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-6 sm:top-8 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${getTypeColor(
                    exp.type
                  )} rounded-full border-3 sm:border-4 border-slate-900 shadow-lg flex items-center justify-center`}
                >
                  <span className="text-xs">{getTypeIcon(exp.type)}</span>
                </div>

                <div className="bg-slate-800 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700">
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100 mb-2">{exp.title}</h3>
                        <p className="text-base sm:text-lg text-blue-400 font-semibold mb-1">{exp.company}</p>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400">
                          <span className="flex items-center">📅 {exp.period}</span>
                          <span className="flex items-center">📍 {exp.location}</span>
                        </div>
                      </div>
                      {exp.status && (
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                            exp.status === "current" ? "bg-blue-900 text-blue-300" : exp.status === "ongoing" ? "bg-blue-800 text-blue-200" : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {exp.status === "current" ? "Current" : exp.status === "ongoing" ? "Ongoing" : "Completed"}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-100 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">▸</span>
                          <span className="text-slate-300 text-xs sm:text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-100 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`bg-gradient-to-r ${getTypeColor(exp.type)} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t border-slate-700">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400">
                      {exp.role && (
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-300">Role:</span>
                          <span>{exp.role}</span>
                        </div>
                      )}
                      {exp.teamSize && (
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-300">Team:</span>
                          <span>{exp.teamSize} members</span>
                        </div>
                      )}
                      {exp.gpa && (
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-300">GPA:</span>
                          <span>{exp.gpa}</span>
                        </div>
                      )}
                      {exp.projects && (
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-300">Projects:</span>
                          <span>{exp.projects}</span>
                        </div>
                      )}
                      {exp.duration && (
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-300">Duration:</span>
                          <span>{exp.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
