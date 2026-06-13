import React from "react";
import { thoughts } from "../data/thoughts";
import usePageTitle from "../hooks/usePageTitle";
import formatDate from "../utils/formatDate";

const ThoughtDetail = ({ slug, navigate }) => {
  const thought = thoughts.find((item) => item.slug === slug);

  usePageTitle(thought ? thought.title : "Writing Not Found");

  if (!thought) {
    return (
      <main className="page-shell article-shell">
        <article className="container article-container">
          <a
            href="/thoughts"
            className="back-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/thoughts");
            }}
          >
            Back to thoughts
          </a>
          <h1>Writing not found</h1>
          <p style={{ color: "var(--text-gray)" }}>
            This note might have been moved, renamed, or removed.
          </p>
        </article>
      </main>
    );
  }

  return (
    <main className="page-shell article-shell">
      <article className="container article-container">
        <a
          href="/thoughts"
          className="back-link"
          onClick={(event) => {
            event.preventDefault();
            navigate("/thoughts");
          }}
        >
          Back to thoughts
        </a>

        <header className="article-header">
          <p className="article-date">{formatDate(thought.date)}</p>
          <h1>{thought.title}</h1>
          <ul className="tag-list" aria-label={`${thought.title} tags`}>
            {thought.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </header>

        <div className="article-body">
          {thought.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
};

export default ThoughtDetail;
