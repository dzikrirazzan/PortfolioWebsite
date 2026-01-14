import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "var(--bg-medium)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-sm uppercase tracking-widest mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Contact
          </p>

          <h2
            className="mb-6"
            style={{ color: "var(--text-white)" }}
          >
            Let's talk
          </h2>

          <p
            className="text-lg mb-10"
            style={{ color: "var(--text-gray)" }}
          >
            Have a project in mind or just want to chat? I'm always open to new opportunities and interesting conversations.
          </p>

          <a
            href="mailto:dzikrirazzan02@gmail.com"
            className="btn inline-block mb-12"
          >
            dzikrirazzan02@gmail.com
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/dzikrirazzan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--text-gray)" }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dzikrirazzan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--text-gray)" }}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/dzikrirazzan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--text-gray)" }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
