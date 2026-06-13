import React, { memo } from "react";
import SmartImage from "./SmartImage";

const EmptyPreview = ({ title, issuer }) => (
  <div className="certificate-preview-empty" role="img" aria-label={`${title} preview placeholder`}>
    <span className="certificate-preview-label">Certificate preview</span>
    <strong>{title}</strong>
    <span>{issuer}</span>
  </div>
);

const CertificationPreview = ({ certification }) => {
  const { title, issuer, previewSrc, previewType } = certification;

  if (previewSrc && previewType === "image") {
    return (
      <SmartImage
        src={previewSrc}
        alt={`${title} certificate preview`}
        loading="lazy"
        className="certificate-preview-image"
        fallback={<EmptyPreview title={title} issuer={issuer} />}
      />
    );
  }

  if (previewSrc && previewType === "pdf") {
    return (
      <object
        data={previewSrc}
        type="application/pdf"
        aria-label={`${title} PDF preview`}
        className="certificate-preview-pdf"
      >
        <a href={previewSrc} target="_blank" rel="noopener noreferrer">
          Open certificate PDF
        </a>
      </object>
    );
  }

  return <EmptyPreview title={title} issuer={issuer} />;
};

const CertificationItem = memo(({ certification }) => {
  return (
    <article className="certification-item">
      <div className="certificate-media">
        <CertificationPreview certification={certification} />
      </div>

      <div className="certificate-content">
        <div className="certificate-meta">
          <span>{certification.issuer}</span>
          <span>{certification.completedAt}</span>
        </div>

        <h2>{certification.title}</h2>

        <p className="certificate-note">{certification.note}</p>

        <ul className="tag-list" aria-label={`${certification.title} topics`}>
          {certification.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>

        {certification.certificateLink && (
          <a
            href={certification.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            View certificate
          </a>
        )}
      </div>
    </article>
  );
});

export default CertificationItem;
