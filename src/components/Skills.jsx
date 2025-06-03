import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillsRef = useRef(null);

  const skills = [
    {
      category: "Mobile Development",
      icon: "📱",
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "Android (Java/Kotlin)", level: 90, description: "Native Android development with Java & Kotlin" },
        { name: "Android Studio", level: 95, description: "Expert in Android development environment" },
        { name: "Firebase", level: 85, description: "Backend services, authentication, database" },
        { name: "SQLite", level: 80, description: "Local database management" },
        { name: "Material Design", level: 85, description: "Modern UI/UX design principles" },
        { name: "MVVM Architecture", level: 75, description: "Clean architecture patterns" },
      ],
    },
    {
      category: "Programming Languages",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Java", level: 90, description: "Object-oriented programming expertise" },
        { name: "Kotlin", level: 85, description: "Modern Android development language" },
        { name: "JavaScript", level: 75, description: "Web development and React" },
        { name: "Python", level: 80, description: "Data science, ML, and backend development" },
        { name: "C++", level: 70, description: "System programming and algorithms" },
        { name: "PHP", level: 65, description: "Backend web development" },
      ],
    },
    {
      category: "Data Science & ML",
      icon: "🤖",
      color: "from-green-500 to-teal-500",
      items: [
        { name: "Machine Learning", level: 80, description: "Model development and training" },
        { name: "TensorFlow", level: 75, description: "Deep learning framework" },
        { name: "Jupyter Notebook", level: 85, description: "Data analysis and visualization" },
        { name: "NumPy & Pandas", level: 80, description: "Data manipulation and analysis" },
        { name: "Scikit-learn", level: 75, description: "Machine learning algorithms" },
        { name: "Data Analysis", level: 85, description: "Statistical analysis and insights" },
      ],
    },
    {
      category: "Web Development",
      icon: "🌐",
      color: "from-orange-500 to-red-500",
      items: [
        { name: "React.js", level: 75, description: "Modern frontend development" },
        { name: "HTML/CSS", level: 85, description: "Frontend markup and styling" },
        { name: "Tailwind CSS", level: 80, description: "Utility-first CSS framework" },
        { name: "REST APIs", level: 85, description: "API development and integration" },
        { name: "FastAPI", level: 70, description: "Python web framework" },
        { name: "Flask", level: 65, description: "Lightweight web framework" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      color: "from-indigo-500 to-purple-500",
      items: [
        { name: "Git/GitHub", level: 90, description: "Version control and collaboration" },
        { name: "Google Cloud Platform", level: 75, description: "Cloud computing and deployment" },
        { name: "Docker", level: 65, description: "Containerization and deployment" },
        { name: "Figma", level: 70, description: "UI/UX design and prototyping" },
        { name: "Gradle", level: 80, description: "Android build automation" },
        { name: "Retrofit", level: 85, description: "Android networking library" },
      ],
    },
    {
      category: "Soft Skills",
      icon: "🎯",
      color: "from-pink-500 to-rose-500",
      items: [
        { name: "Problem Solving", level: 95, description: "Analytical thinking and solution design" },
        { name: "Team Collaboration", level: 90, description: "Effective teamwork and communication" },
        { name: "Project Management", level: 80, description: "Agile methodologies and planning" },
        { name: "Leadership", level: 75, description: "Team guidance and mentoring" },
        { name: "Communication", level: 85, description: "Technical documentation and presentation" },
        { name: "Continuous Learning", level: 95, description: "Adaptability and growth mindset" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A comprehensive overview of my technical expertise and professional capabilities</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4 transform group-hover:scale-110 transition-transform duration-300">{skillCategory.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{skillCategory.category}</h3>
              </div>

              <div className="space-y-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative" onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)} onMouseLeave={() => setHoveredSkill(null)}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-sm font-semibold">{skill.level}%</span>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${skillCategory.color} h-2 rounded-full transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 200 + skillIndex * 100}ms`,
                          }}
                        ></div>
                      </div>

                      {/* Tooltip */}
                      {hoveredSkill === `${index}-${skillIndex}` && skill.description && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg z-10 whitespace-nowrap opacity-0 animate-fadeIn">
                          {skill.description}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Average Proficiency</span>
                  <span className="font-semibold">{Math.round(skillCategory.items.reduce((acc, skill) => acc + skill.level, 0) / skillCategory.items.length)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Proficiency Overview</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">37+</div>
                <div className="text-gray-600">GitHub Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-gray-600">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600">Programming Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
