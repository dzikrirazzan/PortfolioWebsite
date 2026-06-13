import React from "react";
import CertificationItem from "../components/CertificationItem";
import ListPage from "../components/ListPage";
import usePageTitle from "../hooks/usePageTitle";
import { certifications } from "../data/certifications";

const Certifications = () => {
  usePageTitle("Certifications");

  return (
    <ListPage
      label="Certifications"
      title="Proof of what I have been learning"
      intro={
        <p>
          A quiet place for certificates, awards, and learning milestones. I keep the notes short
          because the certificate is only part of the story; the useful part is what changed in how
          I build and think.
        </p>
      }
      items={certifications}
      renderItem={(certification) => (
        <CertificationItem key={certification.title} certification={certification} />
      )}
      sectionClassName="certifications-section"
      sectionLabel="Certification list"
      listClassName="certification-list"
    />
  );
};

export default Certifications;
