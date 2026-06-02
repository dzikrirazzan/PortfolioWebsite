import React, { useEffect } from "react";
import CertificationItem from "../components/CertificationItem";
import PageIntro from "../components/PageIntro";
import { certifications } from "../data/certifications";

const Certifications = () => {
  useEffect(() => {
    document.title = "Certifications | Dzikri Razzan Athallah";
  }, []);

  return (
    <main className="page-shell">
      <PageIntro label="Certifications" title="Proof of what I have been learning">
        <p>
          A quiet place for certificates, awards, and learning milestones. I keep the notes short
          because the certificate is only part of the story; the useful part is what changed in how
          I build and think.
        </p>
      </PageIntro>

      <section className="certifications-section" aria-label="Certification list">
        <div className="container certification-list">
          {certifications.map((certification) => (
            <CertificationItem key={certification.title} certification={certification} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Certifications;
