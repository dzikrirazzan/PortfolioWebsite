import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view, then stops observing.
 * Replaces the repeated IntersectionObserver boilerplate across sections.
 *
 * @param {{ threshold?: number }} options
 * @returns {[React.RefObject, boolean]} ref to attach, and whether it has been seen
 */
const useOnceVisible = ({ threshold = 0.1 } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

export default useOnceVisible;
