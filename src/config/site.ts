export const siteConfig = {
  name: "Dipanshi Gupta",
  monogram: "DG",
  title: "Dipanshi Gupta — AI Systems & Product Design",
  description:
    "Personal portfolio and engineering case studies showcasing work in Applied AI, Full-Stack Systems, and Product Design.",
  role: "Computer Science Student · AI & Product Design",
  status: "Available for Internships",
  email: "dipanshig98@gmail.com",
  links: {
    github: "https://github.com/Dipanshi1",
    linkedin: "https://linkedin.com/in/dipanshi-gupta",
    resume: "/resume",
    email: "mailto:dipanshig98@gmail.com",
  },
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Stack", href: "/#stack" },
    { label: "About", href: "/#about" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
