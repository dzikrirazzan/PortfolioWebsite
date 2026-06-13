import React from "react";
import ThoughtPreview from "../components/ThoughtPreview";
import ListPage from "../components/ListPage";
import usePageTitle from "../hooks/usePageTitle";
import { thoughts } from "../data/thoughts";

const Thoughts = ({ navigate }) => {
  usePageTitle("Thoughts");

  return (
    <ListPage
      label="Thoughts"
      title="Writing things down while I learn"
      intro={
        <p>
          Notes, reflections, and small essays from projects, campus life, and the parts of
          programming that I am still figuring out. This is meant to feel closer to a notebook than
          a formal blog.
        </p>
      }
      items={thoughts}
      renderItem={(thought) => (
        <ThoughtPreview key={thought.slug} thought={thought} onNavigate={navigate} />
      )}
      sectionClassName="thoughts-section"
      sectionLabel="Writing list"
      listClassName="thought-list"
    />
  );
};

export default Thoughts;
