export const siteConfig = {
  name: "Dipanshi Gupta",
  monogram: "DG",
  title: "Dipanshi Gupta — AI Systems & Product Design",
  description:
    "Personal portfolio and engineering case studies showcasing work in Applied AI, Full-Stack Systems, and Product Design.",
  role: "Computer Science Student · AI & Product Design",
  status: "Available for Internships",
  email: "dipanshig6969@gmail.com",
  links: {
    github: "https://github.com/Dipanshi1",
    linkedin: "https://linkedin.com/in/dipanshi-gupta",
    resume: "/resume",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "ManakSetu", href: "#manaksetu" },
    { label: "Stack", href: "#stack" },
    { label: "About", href: "#about" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
