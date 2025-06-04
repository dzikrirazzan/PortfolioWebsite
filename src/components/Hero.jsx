import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["Android Developer", "Software Engineer", "Front-End Developer", "Back-End Developer", "Full-Stack Developer"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-900 pt-16 sm:pt-20 md:pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="mb-6 sm:mb-8">
              <span className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 animate-pulse">🚀 Available for Exciting Projects</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-slate-100 mb-4 sm:mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Dzikri Razzan</span>
            </h1>

            <div className="h-12 sm:h-16 mb-6 sm:mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 font-semibold">
                <span className="text-blue-400">{roles[currentRole]}</span>
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
              Passionate Computer Engineering student at <span className="font-semibold text-blue-400">Diponegoro University</span>, specializing in mobile and web development. Currently building innovative solutions as part of{" "}
              <span className="font-semibold text-blue-400">Bangkit Academy 2024</span> with
              <span className="font-semibold text-blue-400"> 37+ GitHub repositories</span> and counting.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 transform transition-all duration-1000 delay-300 px-4 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <button
              onClick={scrollToProjects}
              className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center">
                🚀 Explore My Projects
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button
              onClick={scrollToAbout}
              className="group border-2 border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center">
                👨‍💻 Learn About Me
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16 transform transition-all duration-1000 delay-500 px-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">37+</div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium">GitHub Repos</div>
            </div>
            <div className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium">Years Experience</div>
            </div>
            <div className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium">Android Apps</div>
            </div>
            <div className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium">Web Application</div>
            </div>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-4 sm:space-x-6 mb-16 sm:mb-20 md:mb-24 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <a
              href="https://github.com/dzikrirazzan"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-3 sm:p-4 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dzikrirazzan/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-3 sm:p-4 rounded-2xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:dzikrirazzan02@gmail.com"
              className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-3 sm:p-4 rounded-2xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.908L12 11.185 21.456 3.82h.908c.904 0 1.636.732 1.636 1.636z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
