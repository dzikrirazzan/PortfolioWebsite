import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-8 px-6 md:px-12"
      style={{ backgroundColor: "var(--bg-dark)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p
          className="text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Dzikri Razzan
        </p>
        <p
          className="text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Jakarta, Indonesia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
