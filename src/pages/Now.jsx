import React from "react";
import PageIntro from "../components/PageIntro";
import usePageTitle from "../hooks/usePageTitle";
import useMeta from "../hooks/useMeta";
import { now } from "../data/now";

const Now = () => {
  usePageTitle("Now");
  useMeta({
    title: "Now | Dzikri Razzan Athallah",
    description: now.intro,
    url: "https://dzikrirazzan.me/now",
  });

  return (
    <main className="page-shell">
      <PageIntro label="Now" title="What I'm focused on right now">
        <p>{now.intro}</p>
        <p className="now-updated">Last updated {now.lastUpdated}</p>
      </PageIntro>

      <section className="now-section" aria-label="Current focus">
        <div className="container now-grid">
          {now.sections.map((section) => (
            <div key={section.heading} className="now-block">
              <h2>{section.heading}</h2>
              <ul>
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Now;
