export const siteConfig = {
  name: "Dipanshi Gupta",
  monogram: "DG",
  title: "Dipanshi Gupta — AI Systems & Product Design",
  description:
    "Portfolio of Dipanshi Gupta, 3rd-year Computer Science student specializing in Applied AI Systems, Scalable Backends, and Product Design.",
  role: "3rd-Year Computer Science Student · Applied AI & Full-Stack Systems",
  status: "Available for Internships",
  email: "dipanshig98@gmail.com",
  links: {
    github: "https://github.com/Dipanshi1",
    linkedin: "https://linkedin.com/in/dipanshi-gupta",
    resume: "/resume.pdf",
    email: "mailto:dipanshig98@gmail.com",
  },
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Stack", href: "/#stack" },
    { label: "About", href: "/#about" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
