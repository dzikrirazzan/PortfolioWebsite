// Projects shown on the home page. Items with a `caseStudy` get a dedicated
// /projects/<slug> page; the rest link straight out to their live site or repo.
export const projects = [
  {
    slug: "sigap-undip",
    title: "Sigap Undip",
    description:
      "Campus emergency and incident reporting platform with real time response workflows.",
    link: "https://sigapundip.xyz/",
    github: "https://github.com/dzikrirazzan/sigap_api",
    stack: ["Laravel", "REST API", "MySQL", "Real-time"],
    caseStudy: {
      role: "Backend Developer",
      timeline: "2024",
      problem: [
        "On a large campus, reporting an emergency usually means calling a number, explaining where you are, and hoping the message reaches the right people. That hand-off is slow and easy to lose track of, especially when several incidents happen at once.",
        "There was no shared view of what had been reported, who was handling it, or whether it had been resolved. Students and staff had no way to know if their report was even received.",
      ],
      solution: [
        "I built the backend API for Sigap Undip, a platform where anyone on campus can file an incident report and watch it move through a clear response workflow.",
        "Reports carry location and status, and move through defined states so responders and reporters always see the same, up-to-date picture. The API was designed to stay responsive when multiple incidents arrive close together.",
      ],
      outcome: [
        "The platform turned scattered phone calls into a single, trackable queue of incidents with accountable ownership at each step.",
        "Working on the response workflow taught me how much the structure around a feature matters: a report is only useful if someone can act on it and everyone can trust its status.",
      ],
    },
  },
  {
    slug: "retensync",
    title: "RetenSYNC",
    description:
      "ML powered employee turnover prediction. Platinum Award winner at VIIIC 2025.",
    link: "https://retensync.vercel.app/",
    github: "https://github.com/dzikrirazzan/turnover_api",
    stack: ["Machine Learning", "Python", "REST API", "Dashboard"],
    caseStudy: {
      role: "ML & Backend Developer",
      timeline: "2025",
      problem: [
        "Companies often notice employee turnover only after good people have already decided to leave. By then the cost — lost knowledge, hiring, retraining — is mostly unavoidable.",
        "The harder problem is not just predicting who might leave, but presenting that prediction in a way a non-technical manager can actually trust and act on.",
      ],
      solution: [
        "RetenSYNC pairs a machine learning model that predicts turnover risk with a dashboard that explains each prediction in plain terms.",
        "I focused on the model and the API that serves it, and on making the output readable: a risk signal a manager can understand without needing to know how the model works underneath.",
      ],
      outcome: [
        "RetenSYNC won the Platinum Award at VIIIC 2025, the International Business & Management Virtual Innovation Competition organized by UiTM Malaysia.",
        "The project changed how I think about ML — the accuracy of the model is only half of it; the product around the prediction is what makes it useful to real people.",
      ],
    },
  },
  {
    title: "EMSys",
    description:
      "Real time engine monitoring system for critical vehicle parameters.",
    link: "https://capstone-website-snowy.vercel.app/",
    github: "https://github.com/dzikrirazzan/capstoneWebsite",
  },
  {
    title: "Si-Bantu",
    description: "AI powered Android app for local service discovery. Bangkit capstone.",
    github: "https://github.com/indra1222/Bangkitcapstone",
  },
  {
    title: "Big Games",
    description: "Room booking system with AI powered recommendations.",
    github: "https://github.com/dzikrirazzan/biggames_backend",
  },
  {
    title: "Premier League App",
    description: "Web app for live Premier League statistics.",
    link: "https://dzikrirazzan.github.io/PremierLeagueApp",
    github: "https://github.com/dzikrirazzan/PremierLeagueApp",
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
