/**
 * Returns true when the user has requested reduced motion at the OS level.
 * Used to swap smooth scrolling for instant jumps.
 */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Scroll behavior that respects the reduced-motion preference. */
export const scrollBehavior = () => (prefersReducedMotion() ? "auto" : "smooth");
