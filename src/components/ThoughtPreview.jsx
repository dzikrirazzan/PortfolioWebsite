import React from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const ThoughtPreview = ({ thought, onNavigate }) => {
  const href = `/thoughts/${thought.slug}`;

  return (
    <article className="thought-preview">
      <a
        href={href}
        onClick={(event) => {
          event.preventDefault();
          onNavigate(href);
        }}
        className="thought-preview-link"
      >
        <div className="thought-preview-date">{formatDate(thought.date)}</div>
        <div className="thought-preview-main">
          <h2>{thought.title}</h2>
          <p>{thought.excerpt}</p>
          <ul className="tag-list" aria-label={`${thought.title} tags`}>
            {thought.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <svg
          className="thought-preview-arrow"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M17 8l4 4m0 0l-4 4m4-4H3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        </svg>
      </a>
    </article>
  );
};

export default ThoughtPreview;
