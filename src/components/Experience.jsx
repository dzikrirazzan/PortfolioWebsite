import React, { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  const experiences = [
    {
      period: "2024 — 2025",
      title: "Bangkit Academy",
      role: "Mobile Development Path",
      description: "Led by Google, GoTo, and Traveloka. Built Si-Bantu app with ML integration.",
    },
    {
      period: "2025",
      title: "Badan Pusat Statistik",
      role: "Full-Stack Developer Intern",
      description: "Developed web monitoring dashboard for administrative efficiency.",
    },
    {
      period: "2024",
      title: "Diskominfo Pekalongan",
      role: "Front End Developer Intern",
      description: "Redesigned official government website with Laravel backend.",
    },
    {
      period: "2022 — Now",
      title: "Diponegoro University",
      role: "Computer Engineering Student",
      description: "GPA 3.7/4.0. Active in BEM FT and Himaskom organizations.",
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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "var(--bg-dark)" }}
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
            Experience
          </p>
          <h2 style={{ color: "var(--text-white)" }}>
            Where I've been
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-4 gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3
                  className="text-lg font-medium mb-1"
                  style={{ color: "var(--text-white)" }}
                >
                  {exp.title}
                </h3>
                <p
                  className="text-sm mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {exp.role}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-gray)" }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
