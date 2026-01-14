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
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Solo Photo Only */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src="/photos/dzikri-solo.jpg"
              alt="Dzikri Razzan Athallah - Software Engineer Portrait"
              title="Dzikri Razzan Athallah"
              className="w-full h-auto object-cover"
              style={{ filter: "brightness(0.95)" }}
            />
          </div>

          {/* Right - Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="text-sm uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              About
            </p>

            <h2
              className="mb-6"
              style={{ color: "var(--text-white)" }}
            >
              A bit about me
            </h2>

            <div className="space-y-4" style={{ color: "var(--text-gray)" }}>
              <p>
                I'm a developer who enjoys building things that work well and solve real problems. 
                Currently studying Computer Engineering at Diponegoro University with a GPA of 3.7.
              </p>

              <p>
                Recently graduated from Bangkit Academy 2024, a program led by Google, GoTo, and Traveloka. 
                The experience taught me how to work in cross functional teams and ship actual products.
              </p>

              <p>
                Earlier this year, my team won the{" "}
                <span style={{ color: "var(--accent)" }}>Platinum Award</span> at the 
                International Business & Management Virtual Innovation Competition (VIIIC 2025) 
                organized by UiTM Malaysia for our project RetenSYNC a ML powered 
                employee turnover prediction platform.
              </p>

              <p>
                Outside of coding, I'm active in campus organizations as Staff Expert of Media at BEM FT 
                and Staff Expert of Social at Himaskom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
