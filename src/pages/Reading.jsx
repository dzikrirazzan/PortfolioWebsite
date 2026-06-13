import React from "react";
import PageIntro from "../components/PageIntro";
import usePageTitle from "../hooks/usePageTitle";
import useMeta from "../hooks/useMeta";
import { reading } from "../data/reading";

const STATUS_LABELS = {
  reading: "Reading now",
  finished: "Finished",
  queued: "Up next",
};

const Reading = () => {
  usePageTitle("Reading");
  useMeta({
    title: "Reading | Dzikri Razzan Athallah",
    description: "Books and articles that shaped how I think and build.",
    url: "https://dzikrirazzan.me/reading",
  });

  return (
    <main className="page-shell">
      <PageIntro label="Reading" title="What I'm reading and learning from">
        <p>
          A running list of the books that shaped how I think and build. The note matters more than
          the title — it's why the book stuck with me.
        </p>
      </PageIntro>

      <section className="reading-section" aria-label="Reading list">
        <div className="container reading-list">
          {reading.map((book) => (
            <article key={book.title} className="reading-item">
              <div className="reading-meta">
                <span className={`reading-status reading-status--${book.status}`}>
                  {STATUS_LABELS[book.status] || book.status}
                </span>
              </div>
              <div className="reading-content">
                <h2>{book.title}</h2>
                <p className="reading-author">{book.author}</p>
                <p className="reading-note">{book.note}</p>
                {book.link && (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    Learn more
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Reading;
