import React, { useEffect } from "react";
import PageIntro from "../components/PageIntro";
import ThoughtPreview from "../components/ThoughtPreview";
import { thoughts } from "../data/thoughts";

const Thoughts = ({ navigate }) => {
  useEffect(() => {
    document.title = "Thoughts | Dzikri Razzan Athallah";
  }, []);

  const onNavigate = navigate || (() => {
    throw new Error("navigate prop is required for Thoughts component");
  });

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
        <div className="container thought-list">
          {thoughts.map((thought) => (
            <ThoughtPreview key={thought.slug} thought={thought} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Thoughts;
