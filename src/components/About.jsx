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
      {
        threshold: 0.1, // Lowered from 0.3 to 0.1 for better mobile compatibility
        rootMargin: "50px 0px", // Added margin to trigger earlier
      }
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
    <section id="about" className="py-12 sm:py-20 bg-slate-800" ref={aboutRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">About Me</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">Passionate software engineer specializing in mobile development and emerging technologies</p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-20">
            <div className={`order-2 lg:order-1 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} transition-all duration-700`}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="bg-blue-600 rounded-2xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 min-h-[400px] sm:min-h-[450px] flex items-center justify-center">
                    <div className="text-center space-y-4 sm:space-y-6">
                      <div className="text-7xl sm:text-9xl mb-4 sm:mb-6">👨‍💻</div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 mb-2">Dzikri Razzan Athallah</h3>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">Mobile Developer & Software Engineer</p>
                      </div>
                      <div className="pt-4">
                        <div className="flex justify-center space-x-4 text-2xl sm:text-3xl">
                          <span>🚀</span>
                          <span>📱</span>
                          <span>🧠</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm shadow-lg animate-pulse">🎯 Available for Projects</div>
              </div>
            </div>

            <div className={`order-1 lg:order-2 space-y-4 sm:space-y-6 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} transition-all duration-700 delay-300`}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 sm:mb-6">
                Hello! I'm <span className="text-blue-400">Dzikri Razzan</span>
              </h3>

              <div className="space-y-4 sm:space-y-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                <p>
                  I'm a passionate <strong className="text-slate-100">Computer Engineering student</strong> at Diponegoro University with a deep love for mobile application development and emerging technologies. Currently based in Jakarta,
                  Indonesia, I specialize in creating innovative Android applications that solve real-world problems.
                </p>

                <p>
                  As a <strong className="text-slate-100">Mobile Developer</strong> in the Bangkit Academy 2024 Capstone program, I'm collaborating with a multidisciplinary team to build Si-Bantu, an AI-powered assistance application. Our
                  team achieved an impressive 85% model accuracy while delivering a production-ready Android solution.
                </p>

                <p>
                  My technical journey spans <strong className="text-slate-100">5+ years</strong> of software development experience, with <strong className="text-slate-100">37+ repositories</strong> on GitHub showcasing projects in mobile
                  development, web applications, data science, and machine learning. I'm particularly passionate about integrating cutting-edge technologies like ML and AI into mobile applications.
                </p>

                <p className="hidden sm:block">
                  When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, mentoring fellow developers, or experimenting with the latest in mobile UI/UX design. I believe in continuous learning and
                  staying ahead of technology trends.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                <span className="bg-blue-900/50 text-blue-300 border border-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">🚀 Android Expert</span>
                <span className="bg-blue-900/50 text-blue-300 border border-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">🧠 ML Enthusiast</span>
                <span className="bg-blue-900/50 text-blue-300 border border-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">🌐 Full-Stack</span>
                <span className="bg-blue-900/50 text-blue-300 border border-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">🤝 Team Leader</span>
                <span className="bg-blue-900/50 text-blue-300 border border-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">📊 Data Science</span>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
                <a
                  href="https://github.com/dzikrirazzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300 font-semibold text-center text-sm sm:text-base"
                >
                  View GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dzikrirazzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-center text-sm sm:text-base"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center bg-slate-800 border border-slate-700 p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-100 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-xs sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Specializations */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-100 mb-8 sm:mb-12">Areas of Interest & Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`bg-slate-800 border border-slate-700 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 800}ms` }}
                >
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-100 mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300">{interest.title}</h4>
                  <p className="text-slate-300 text-sm sm:text-base">{interest.description}</p>
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
