import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so navigation can highlight it.
 *
 * @param {string[]} ids - element ids to watch (pass a stable array reference)
 * @param {{ enabled?: boolean, rootMargin?: string }} options
 * @returns {string|null} the id of the section nearest the top of the viewport
 */
const useScrollSpy = (ids, { enabled = true, rootMargin = "-45% 0px -50% 0px" } = {}) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return undefined;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topmost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
        );
        setActiveId(topmost.target.id);
      },
      { rootMargin, threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, enabled, rootMargin]);

  return activeId;
};

export default useScrollSpy;
