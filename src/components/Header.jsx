import React, { useState, useEffect } from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import { scrollBehavior } from "../utils/motion";

const NAV_ITEMS = [
  { label: "About", type: "section", id: "about", href: "/#about" },
  { label: "Projects", type: "section", id: "projects", href: "/#projects" },
  { label: "Experience", type: "section", id: "experience", href: "/#experience" },
  { label: "Certifications", type: "page", path: "/certifications", href: "/certifications" },
  { label: "Thoughts", type: "page", path: "/thoughts", href: "/thoughts" },
  { label: "Now", type: "page", path: "/now", href: "/now" },
  { label: "Reading", type: "page", path: "/reading", href: "/reading" },
  { label: "Contact", type: "section", id: "contact", href: "/#contact" },
];

const SECTION_IDS = NAV_ITEMS.filter((item) => item.type === "section").map((item) => item.id);

const Header = ({ currentPath = "/", onNavigate, bannerOffset = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = currentPath === "/";
  const activeSection = useScrollSpy(SECTION_IDS, { enabled: isHome });

  const navigateToSection = (sectionId) => {
    if (!isHome) {
      onNavigate("/", sectionId);
      setIsMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: scrollBehavior() });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (item) => {
    if (item.type === "page") {
      return (
        currentPath === item.path ||
        (item.path === "/thoughts" && currentPath.startsWith("/thoughts/"))
      );
    }
    return isHome && activeSection === item.id;
  };

  const handleNavClick = (event, item) => {
    event.preventDefault();
    if (item.type === "page") {
      navigateToPage(item.path);
    } else {
      navigateToSection(item.id);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
      style={{
        top: bannerOffset,
        backgroundColor: isScrolled ? "rgba(26, 26, 26, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center w-full">
        {/* Logo */}
        <a
          href="/#hero"
          onClick={(e) => {
            e.preventDefault();
            navigateToSection("hero");
          }}
          className="text-lg font-medium"
          style={{ color: "var(--text-white)" }}
        >
          Dzikri Razzan
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => handleNavClick(event, item)}
              className={`nav-link text-sm transition-opacity ${isActive(item) ? "is-active" : ""}`}
              style={{ color: "var(--text-gray)" }}
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-sm font-medium"
          style={{ color: "var(--text-white)" }}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 border-t"
          style={{
            backgroundColor: "#1a1a1a",
            borderColor: "#404040",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item)}
                className={`nav-link text-base text-left py-2 ${isActive(item) ? "is-active" : ""}`}
                style={{ color: "#a3a3a3" }}
                aria-current={isActive(item) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
