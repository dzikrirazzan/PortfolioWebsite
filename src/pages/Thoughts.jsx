import React, { useMemo, useState } from "react";
import PageIntro from "../components/PageIntro";
import ThoughtPreview from "../components/ThoughtPreview";
import usePageTitle from "../hooks/usePageTitle";
import { thoughts } from "../data/thoughts";

const ALL_TAGS = "All";

const Thoughts = ({ navigate }) => {
  usePageTitle("Thoughts");

  const [activeTag, setActiveTag] = useState(ALL_TAGS);

  const tags = useMemo(() => {
    const unique = new Set();
    thoughts.forEach((thought) => thought.tags.forEach((tag) => unique.add(tag)));
    return [ALL_TAGS, ...Array.from(unique).sort()];
  }, []);

  const visibleThoughts = useMemo(() => {
    if (activeTag === ALL_TAGS) return thoughts;
    return thoughts.filter((thought) => thought.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <main className="page-shell">
      <PageIntro label="Thoughts" title="Writing things down while I learn">
        <p>
          Notes, reflections, and small essays from projects, campus life, and the parts of
          programming that I am still figuring out. This is meant to feel closer to a notebook than
          a formal blog.
        </p>
      </PageIntro>

      <section className="thoughts-section" aria-label="Writing list">
        <div className="container">
          <div className="tag-filter" role="group" aria-label="Filter writing by tag">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag-filter-chip ${activeTag === tag ? "is-active" : ""}`}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="thought-list">
            {visibleThoughts.map((thought) => (
              <ThoughtPreview key={thought.slug} thought={thought} onNavigate={navigate} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Thoughts;
