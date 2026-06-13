import React from "react";
import PageIntro from "./PageIntro";

const ListPage = ({ label, title, intro, items, renderItem, listClassName, sectionClassName, sectionLabel }) => {
  return (
    <main className="page-shell">
      <PageIntro label={label} title={title}>
        {intro}
      </PageIntro>

      <section className={sectionClassName} aria-label={sectionLabel}>
        <div className={`container ${listClassName}`}>
          {items.map(renderItem)}
        </div>
      </section>
    </main>
  );
};

export default ListPage;
