import React, { useCallback, useEffect, useMemo, useState } from "react";
import usePageTitle from "./hooks/usePageTitle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./pages/Certifications";
import Thoughts from "./pages/Thoughts";
import ThoughtDetail from "./pages/ThoughtDetail";
import "./App.css";

const getCurrentLocation = () => ({
  pathname: window.location.pathname,
  hash: window.location.hash.replace("#", ""),
});

function App() {
  const [location, setLocation] = useState(getCurrentLocation());

  const navigate = useCallback((pathname, hash = "") => {
    const target = `${pathname}${hash ? `#${hash}` : ""}`;
    window.history.pushState({}, "", target);
    setLocation({ pathname, hash });
  }, []);

  useEffect(() => {
    const handleLocationChange = () => setLocation(getCurrentLocation());

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const isHome = location.pathname === "/";
  usePageTitle(isHome ? "Dzikri Razzan Athallah - Software Engineer | dzikrirazzan.me" : null, { raw: true });

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        const section = document.getElementById(location.hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  const currentPage = useMemo(() => {
    if (location.pathname === "/certifications") {
      return <Certifications />;
    }

    if (location.pathname === "/thoughts") {
      return <Thoughts navigate={navigate} />;
    }

    if (location.pathname.startsWith("/thoughts/")) {
      const slug = location.pathname.replace("/thoughts/", "");
      return <ThoughtDetail slug={slug} navigate={navigate} />;
    }

    return (
      <>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </>
    );
  }, [location.pathname, navigate]);

  return (
    <div className="App">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only"
        style={{ position: "absolute", top: 0, left: 0, background: "var(--accent)", padding: "8px 16px", zIndex: 9999 }}
      >
        Skip to main content
      </a>
      <Header currentPath={location.pathname} onNavigate={navigate} />
      <main id="main-content">
        {currentPage}
      </main>
      <Footer />
    </div>
  );
}

export default App;
