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
              Passionate Computer Engineering student at <span className="font-semibold text-blue-400">Diponegoro University</span>, specializing in mobile and web development. Building innovative solutions, part of{" "}
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

        </div>
      </div>
    </section>
  );
};

export default Hero;
