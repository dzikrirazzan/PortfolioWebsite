import React, { useCallback, useEffect, useMemo, useState } from "react";
import usePageTitle from "./hooks/usePageTitle";
import { scrollBehavior } from "./utils/motion";
import Header from "./components/Header";
import OpenToWorkBanner from "./components/OpenToWorkBanner";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./pages/Certifications";
import Thoughts from "./pages/Thoughts";
import ThoughtDetail from "./pages/ThoughtDetail";
import ProjectDetail from "./pages/ProjectDetail";
import Now from "./pages/Now";
import Reading from "./pages/Reading";
import "./App.css";

const BANNER_DISMISSED_KEY = "otw-banner-dismissed";
const BANNER_HEIGHT = 40;

const getCurrentLocation = () => ({
  pathname: window.location.pathname,
  hash: window.location.hash.replace("#", ""),
});

const readBannerDismissed = () => {
  try {
    return window.localStorage.getItem(BANNER_DISMISSED_KEY) === "true";
  } catch (error) {
    return false;
  }
};

function App() {
  const [location, setLocation] = useState(getCurrentLocation());
  const [bannerVisible, setBannerVisible] = useState(() => !readBannerDismissed());

  const navigate = useCallback((pathname, hash = "") => {
    const target = `${pathname}${hash ? `#${hash}` : ""}`;
    window.history.pushState({}, "", target);
    setLocation({ pathname, hash });
  }, []);

  const dismissBanner = useCallback(() => {
    setBannerVisible(false);
    try {
      window.localStorage.setItem(BANNER_DISMISSED_KEY, "true");
    } catch (error) {
      /* ignore storage failures (private mode, etc.) */
    }
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
          section.scrollIntoView({ behavior: scrollBehavior() });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }, [location.pathname, location.hash]);

  const currentPage = useMemo(() => {
    if (location.pathname === "/certifications") {
      return <Certifications />;
    }

    if (location.pathname === "/now") {
      return <Now />;
    }

    if (location.pathname === "/reading") {
      return <Reading />;
    }

    if (location.pathname === "/thoughts") {
      return <Thoughts navigate={navigate} />;
    }

    if (location.pathname.startsWith("/thoughts/")) {
      const slug = location.pathname.replace("/thoughts/", "");
      return <ThoughtDetail slug={slug} navigate={navigate} />;
    }

    if (location.pathname.startsWith("/projects/")) {
      const slug = location.pathname.replace("/projects/", "");
      return <ProjectDetail slug={slug} navigate={navigate} />;
    }

    return (
      <>
        <Hero />
        <About />
        <Projects navigate={navigate} />
        <Experience />
        <Contact />
      </>
    );
  }, [location.pathname, navigate]);

  const bannerOffset = bannerVisible ? BANNER_HEIGHT : 0;

  return (
    <div className={`App ${bannerVisible ? "has-banner" : ""}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only"
        style={{ position: "absolute", top: 0, left: 0, background: "var(--accent)", padding: "8px 16px", zIndex: 9999 }}
      >
        Skip to main content
      </a>
      {bannerVisible && <OpenToWorkBanner onDismiss={dismissBanner} />}
      <Header currentPath={location.pathname} onNavigate={navigate} bannerOffset={bannerOffset} />
      <main id="main-content">
        {currentPage}
      </main>
      <Footer />
    </div>
  );
}

export default App;
