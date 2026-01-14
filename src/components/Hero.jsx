import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const photos = [
    { src: "/photos/team-undip-new.jpg", alt: "Dzikri Razzan with Team Undip" },
    { src: "/photos/team-photo-1.jpg", alt: "Dzikri Razzan Team Activity" },
    { src: "/photos/award-photo.jpg", alt: "Dzikri Razzan Platinum Award VIIIC 2025" },
    { src: "/photos/tekkom-building.jpg", alt: "Computer Engineering Building Diponegoro University" },
    { src: "/photos/team-campus.jpg", alt: "Dzikri Razzan Team Discussion" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      {/* Photo Collage Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full grid grid-cols-3 md:grid-cols-5 gap-1">
          {photos.map((photo, index) => (
            <div key={index} className="relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                title={photo.alt}
                className="w-full h-full object-cover"
                style={{ 
                  filter: "grayscale(100%)",
                  transform: index % 2 === 0 ? "scale(1.1)" : "scale(1)" 
                }}
              />
            </div>
          ))}
        </div>
        {/* Dark overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.95) 100%)" 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="text-sm uppercase tracking-widest mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Software Engineer
            </p>

            <h1
              className="mb-6"
              style={{ color: "var(--text-white)" }}
            >
              Dzikri Razzan
            </h1>

            <p
              className="text-xl md:text-2xl mb-4 max-w-2xl"
              style={{ color: "var(--text-gray)" }}
            >
              Computer Engineering student at Diponegoro University.
            </p>

            <p
              className="text-lg mb-8 max-w-2xl"
              style={{ color: "var(--text-muted)" }}
            >
              Bangkit Academy 2024 graduate. Platinum Award winner at VIIIC 2025 International Competition (UiTM Malaysia).
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn">
                View Projects
              </a>
              <a href="#contact" className="btn-outline btn">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ color: "var(--text-muted)" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8" style={{ backgroundColor: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
