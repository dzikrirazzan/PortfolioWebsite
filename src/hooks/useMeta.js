import { useEffect } from "react";

const updateAttr = (selector, attr, value) => {
  const element = document.head.querySelector(selector);
  if (!element) return null;

  const previous = element.getAttribute(attr);
  element.setAttribute(attr, value);
  return () => {
    if (previous === null) {
      element.removeAttribute(attr);
    } else {
      element.setAttribute(attr, previous);
    }
  };
};

/**
 * Updates social/meta tags for the current view and restores the previous
 * values on unmount. Lets shared links (LinkedIn, Twitter, etc.) reflect the
 * page being viewed instead of the generic site default.
 *
 * Note: crawlers that do not execute JavaScript still read the static tags in
 * public/index.html; full coverage would require SSR or prerendering.
 */
const useMeta = ({ title, description, url, image } = {}) => {
  useEffect(() => {
    const restores = [];
    const apply = (selector, attr, value) => {
      if (value == null) return;
      const restore = updateAttr(selector, attr, value);
      if (restore) restores.push(restore);
    };

    if (title != null) {
      apply('meta[property="og:title"]', "content", title);
      apply('meta[name="twitter:title"]', "content", title);
    }
    if (description != null) {
      apply('meta[name="description"]', "content", description);
      apply('meta[property="og:description"]', "content", description);
      apply('meta[name="twitter:description"]', "content", description);
    }
    if (url != null) {
      apply('meta[property="og:url"]', "content", url);
      apply('meta[name="twitter:url"]', "content", url);
      apply('link[rel="canonical"]', "href", url);
    }
    if (image != null) {
      apply('meta[property="og:image"]', "content", image);
      apply('meta[name="twitter:image"]', "content", image);
    }

    return () => restores.forEach((restore) => restore());
  }, [title, description, url, image]);
};

export default useMeta;
