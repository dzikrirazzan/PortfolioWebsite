import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Certifications", path: "/certifications" },
  { label: "Thoughts", path: "/thoughts" },
  { label: "Now", path: "/now" },
  { label: "Reading", path: "/reading" },
];

const Header = ({ currentPath = "/", onNavigate, bannerOffset = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (item.path === "/") return currentPath === "/";
    if (item.path === "/thoughts") {
      return currentPath === "/thoughts" || currentPath.startsWith("/thoughts/");
    }
    return currentPath === item.path;
  };

  const handleNavClick = (event, item) => {
    event.preventDefault();
    navigateToPage(item.path);
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
          href="/"
          onClick={(event) => {
            event.preventDefault();
            navigateToPage("/");
          }}
          className="text-lg font-medium"
          style={{ color: "var(--text-white)" }}
        >
          Dzikri Razzan
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.path}
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
          className="md:hidden text-sm font-medium"
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
          className="md:hidden absolute top-full left-0 right-0 border-t"
          style={{
            backgroundColor: "#1a1a1a",
            borderColor: "#404040",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.path}
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
