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
      { threshold: 0.1 }
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
        return "from-blue-500 to-cyan-500";
      case "education":
        return "from-green-500 to-teal-500";
      case "experience":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={experienceRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">My journey in software development, from academic learning to professional projects</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? "lg:pr-1/2 lg:text-right" : "lg:pl-1/2 lg:ml-8"} ml-16 lg:ml-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-8 w-6 h-6 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                  <span className="text-xs">{getTypeIcon(exp.type)}</span>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">{exp.company}</p>
                      <div className="flex flex-col lg:flex-row gap-2 text-sm text-gray-500">
                        <span className="flex items-center">📅 {exp.period}</span>
                        <span className="flex items-center">📍 {exp.location}</span>
                        {exp.status && (
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${exp.status === "current" ? "bg-green-100 text-green-700" : exp.status === "ongoing" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
                            {exp.status === "current" ? "Current" : exp.status === "ongoing" ? "Ongoing" : "Completed"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">▸</span>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`bg-gradient-to-r ${getTypeColor(exp.type)} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap justify-between text-sm text-gray-500 gap-4">
                      {exp.role && (
                        <span>
                          <strong>Role:</strong> {exp.role}
                        </span>
                      )}
                      {exp.teamSize && (
                        <span>
                          <strong>Team Size:</strong> {exp.teamSize} members
                        </span>
                      )}
                      {exp.gpa && (
                        <span>
                          <strong>GPA:</strong> {exp.gpa}
                        </span>
                      )}
                      {exp.projects && (
                        <span>
                          <strong>Projects:</strong> {exp.projects}
                        </span>
                      )}
                      {exp.duration && (
                        <span>
                          <strong>Duration:</strong> {exp.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience Summary</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">37+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Android Apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                <div className="text-gray-600">Team Collaborations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
