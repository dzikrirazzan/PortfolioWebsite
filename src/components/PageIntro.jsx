import React from "react";

const PageIntro = ({ label, title, children }) => {
  return (
    <section className="page-intro" aria-labelledby={`${label.toLowerCase()}-title`}>
      <div className="container">
        <p className="section-title">{label}</p>
        <h1 id={`${label.toLowerCase()}-title`} className="page-title">
          {title}
        </h1>
        <div className="page-intro-copy">{children}</div>
      </div>
    </section>
  );
};

export default PageIntro;
