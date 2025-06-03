import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const stats = [
    { number: "37+", label: "GitHub Repositories", icon: "📚" },
    { number: "5+", label: "Years Experience", icon: "⏱️" },
    { number: "15+", label: "Android Apps", icon: "📱" },
    { number: "85%", label: "ML Model Accuracy", icon: "🤖" },
  ];

  const interests = [
    { icon: "🚀", title: "Mobile Development", description: "Passionate about creating intuitive Android applications" },
    { icon: "🧠", title: "Machine Learning", description: "Exploring AI integration in mobile applications" },
    { icon: "🌐", title: "Full-Stack Development", description: "Building complete web solutions from frontend to backend" },
    { icon: "📊", title: "Data Science", description: "Analyzing data and building predictive models" },
    { icon: "🎨", title: "UI/UX Design", description: "Creating beautiful and user-friendly interfaces" },
    { icon: "🤝", title: "Team Collaboration", description: "Working effectively in multidisciplinary teams" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" ref={aboutRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Passionate software engineer specializing in mobile development and emerging technologies</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} transition-all duration-700`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-xl p-8 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">👨‍💻</div>
                      <h3 className="text-2xl font-bold text-gray-800">Dzikri Razzan Athallah</h3>
                      <p className="text-gray-600">Mobile Developer & Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">🎯 Available for Projects</div>
              </div>
            </div>

            <div className={`space-y-6 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} transition-all duration-700 delay-300`}>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Dzikri Razzan</span>
              </h3>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate <strong className="text-gray-800">Computer Engineering student</strong> at Diponegoro University with a deep love for mobile application development and emerging technologies. Currently based in Jakarta,
                  Indonesia, I specialize in creating innovative Android applications that solve real-world problems.
                </p>

                <p>
                  As a <strong className="text-gray-800">Mobile Developer</strong> in the Bangkit Academy 2024 Capstone program, I'm collaborating with a multidisciplinary team to build Si-Bantu, an AI-powered assistance application. Our
                  team achieved an impressive 85% model accuracy while delivering a production-ready Android solution.
                </p>

                <p>
                  My technical journey spans <strong className="text-gray-800">5+ years</strong> of software development experience, with <strong className="text-gray-800">37+ repositories</strong> on GitHub showcasing projects in mobile
                  development, web applications, data science, and machine learning. I'm particularly passionate about integrating cutting-edge technologies like ML and AI into mobile applications.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, mentoring fellow developers, or experimenting with the latest in mobile UI/UX design. I believe in continuous learning and
                  staying ahead of technology trends.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">🚀 Android Expert</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">🧠 ML Enthusiast</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">🌐 Full-Stack</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">🤝 Team Leader</span>
                <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">📊 Data Science</span>
              </div>

              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/dzikrirazzan" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold">
                  View GitHub
                </a>
                <a href="https://linkedin.com/in/dzikrirazzan" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Specializations */}
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Areas of Interest & Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100 + 800}ms` }}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{interest.title}</h4>
                  <p className="text-gray-600">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
