import React from "react";

/**
 * Dismissable top banner signalling availability to recruiters.
 * Visibility state lives in App so the fixed header can offset beneath it.
 */
const OpenToWorkBanner = ({ onDismiss }) => {
  return (
    <div className="open-to-work-banner" role="region" aria-label="Availability status">
      <div className="open-to-work-inner">
        <span className="open-to-work-dot" aria-hidden="true" />
        <p className="open-to-work-text">
          Open to software engineering roles &amp; internships.{" "}
          <a
            href="https://www.linkedin.com/in/dzikrirazzan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&rsquo;s talk &rarr;
          </a>
        </p>
      </div>
      <button
        type="button"
        className="open-to-work-close"
        onClick={onDismiss}
        aria-label="Dismiss availability banner"
      >
        &times;
      </button>
    </div>
  );
};

export default OpenToWorkBanner;
