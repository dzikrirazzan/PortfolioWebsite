import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dzikrirazzan",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dzikrirazzan/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/dzikrirazzan/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      url: "mailto:dzikrirazzan02@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.903.732-1.636 1.636-1.636h.909L12 11.71l9.455-7.889h.909c.904 0 1.636.733 1.636 1.636z" />
        </svg>
      ),
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const services = ["Android Development", "Web Development", "API Development", "Database Design", "Code Review", "Technical Consulting"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg">DR</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-400">Dzikri Razzan</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Software Engineer</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Passionate about creating innovative mobile applications and elegant software solutions. Always excited to tackle new challenges and collaborate on meaningful projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-center p-2 sm:p-4 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">37+</div>
                  <div className="text-xs text-slate-400">Projects</div>
                </div>
                <div className="text-center p-2 sm:p-4 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">5+</div>
                  <div className="text-xs text-slate-400">Years</div>
                </div>
                <div className="text-center p-2 sm:p-4 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-xs text-slate-400">Passion</div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full mr-2 sm:mr-3"></span>
                  Let's Connect
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 sm:p-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                      aria-label={link.name}
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6">{link.icon}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full mr-2 sm:mr-3"></span>
                Quick Links
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <button key={link.name} onClick={() => scrollToSection(link.href.slice(1))} className="block text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 py-1 text-sm sm:text-base">
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full mr-2 sm:mr-3"></span>
                Services
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <div key={service} className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 py-1 cursor-pointer text-sm sm:text-base">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 lg:px-8 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
              <div className="text-slate-400 text-xs sm:text-sm">© {currentYear} Dzikri Razzan. All rights reserved.</div>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-slate-400">
                <span>Made with ❤️ using React & Tailwind CSS</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
