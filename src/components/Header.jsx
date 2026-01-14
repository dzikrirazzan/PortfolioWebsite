import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Projects", "Experience", "Contact"];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(26, 26, 26, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center w-full">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="text-lg font-medium"
          style={{ color: "var(--text-white)" }}
        >
          Dzikri Razzan
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--text-gray)" }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-sm font-medium"
          style={{ color: "var(--text-white)" }}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-t"
          style={{ 
            backgroundColor: "#1a1a1a",
            borderColor: "#404040"
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-base text-left py-2"
                style={{ color: "#a3a3a3" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
