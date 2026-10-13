import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Resume & Qualifications — Dipanshi Gupta",
  description:
    "Resume and verified technical background of Dipanshi Gupta. 3rd-year Computer Science student specializing in Applied AI Systems, Scalable Backends, and Product Design.",
};

export default function ResumePage() {
  const skillGroups = [
    {
      category: "AI & Retrieval",
      skills:
        "Hybrid vector search (Qdrant), BM25 lexical ranking, Gemini API structured extraction, OpenCV image preprocessing",
    },
    {
      category: "Systems & Backend",
      skills:
        "FastAPI asynchronous microservices, PostgreSQL relational schemas, SQLAlchemy, RESTful APIs, Docker",
    },
    {
      category: "Frontend & UI Engineering",
      skills:
        "Next.js 14 App Router, TypeScript, Tailwind CSS, component systems, WCAG 2.1 AA accessibility",
    },
  ];

  const selectedProjects = [
    {
      name: "ManakSetu",
      description:
        "AI-powered regulatory procurement compliance platform utilizing hybrid vector and lexical retrieval for public tender analysis.",
      contributions:
        "Engineered dual-pass PDF ingestion, hybrid Qdrant and BM25 retrieval pipeline, deterministic multi-signal ranking, and verifiable citation interface.",
      technologies: ["Qdrant", "BM25", "FastAPI", "Gemini API", "Next.js"],
      link: "/work/manaksetu",
      linkText: "View Case Study",
      external: false,
    },
    {
      name: "AgriVision AI",
      description:
        "Computer vision pipeline classifying crop leaf pathologies with automated image enhancement and containerized inference.",
      contributions:
        "Implemented OpenCV CLAHE preprocessing, input normalization, feature extraction, and containerized FastAPI inference endpoint.",
      technologies: ["OpenCV", "FastAPI", "Docker", "Python", "NumPy"],
      link: "https://github.com/Dipanshi1/agri-vision-ai",
      linkText: "View Repository",
      external: true,
    },
    {
      name: "Interview Tracker Pro",
      description:
        "Recruitment workflow service featuring relational lifecycle state modeling and row-level tenant security.",
      contributions:
        "Architected normalized PostgreSQL relational schemas, lifecycle state transitions, Pydantic v2 validation, and stateless JWT authentication.",
      technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT Auth", "Docker"],
      link: siteConfig.links.github,
      linkText: "View Repository Profile",
      external: true,
    },
  ];

  return (
    <article className="relative w-full py-16 sm:py-20 lg:py-24 transition-colors duration-150">
      <Container>
        {/* Header Breadcrumb & Heading */}
        <div className="space-y-4 max-w-3xl pb-10 sm:pb-12 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              aria-hidden="true"
            />
            <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
              Candidate Background · Resume &amp; Availability
            </Eyebrow>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
            Resume &amp; Qualifications
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            Dipanshi Gupta · 3rd-Year Computer Science Student specializing in Applied AI,
            scalable FastAPI/PostgreSQL backend services, and modern Next.js interfaces.
          </p>
        </div>

        {/* Direct Resume Download & View Panel */}
        <div className="my-10 rounded-xl border border-border-subtle bg-surface/60 p-6 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">
                Resume Document
              </span>
              <span className="text-border-subtle">·</span>
              <StatusPill variant="available">
                {siteConfig.status}
              </StatusPill>
            </div>
            <span className="font-mono text-xs text-text-tertiary">
              PDF Document · Summer &amp; Fall 2026
            </span>
          </div>

          <div className="space-y-2 max-w-2xl">
            <h2 className="text-lg font-semibold text-text-primary">
              Official Resume (PDF)
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Verified curriculum vitae for Dipanshi Gupta. View the document directly in your
              browser or download a local copy for recruitment and engineering evaluation.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              href="/resume.pdf"
              external
              className="gap-2 text-xs h-10 px-5"
            >
              <span>View Resume</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="/resume.pdf"
              download="Dipanshi Gupta_resume.pdf"
              className="gap-2 text-xs h-10 px-5"
            >
              <span>Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="md"
              href="/work/manaksetu"
              className="gap-2 text-xs h-10 px-5"
            >
              <span>View Flagship Case Study</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>
            <Link
              href="/"
              className="inline-flex items-center justify-center font-sans font-medium select-none transition-all duration-150 ease-out-expo border border-border-subtle bg-transparent text-text-primary rounded-md hover:bg-surface-elevated hover:border-text-secondary active:scale-[0.98] h-10 px-4 text-xs gap-1.5"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* Compact 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4">
          {/* Left Column: Education & Technical Competencies */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education & Standing */}
            <section className="space-y-3" aria-labelledby="education-heading">
              <h2
                id="education-heading"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-text-tertiary"
              >
                Education &amp; Standing
              </h2>
              <div className="rounded-lg border border-border-subtle bg-surface/40 p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-text-primary text-base">
                    Bachelor of Technology in Computer Science &amp; Engineering
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">3rd Year</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Focus: Applied Artificial Intelligence, Asynchronous Microservices, and Distributed Vector Retrieval.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
                  <span>Available for Summer &amp; Fall 2026 Internships</span>
                </div>
              </div>
            </section>

            {/* Technical Competencies */}
            <section className="space-y-4" aria-labelledby="skills-heading">
              <h2
                id="skills-heading"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-text-tertiary"
              >
                Technical Competencies
              </h2>
              <div className="space-y-3">
                {skillGroups.map((group) => (
                  <div
                    key={group.category}
                    className="rounded-lg border border-border-subtle bg-surface/40 p-4 space-y-1.5"
                  >
                    <div className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
                      {group.category}
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {group.skills}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Selected Projects (Max 3) */}
          <div className="lg:col-span-7 space-y-4">
            <section className="space-y-4" aria-labelledby="projects-heading">
              <h2
                id="projects-heading"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-text-tertiary"
              >
                Selected Engineering Projects
              </h2>
              <div className="space-y-4">
                {selectedProjects.map((project) => (
                  <div
                    key={project.name}
                    className="rounded-lg border border-border-subtle bg-surface/40 p-5 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-base text-text-primary">
                        {project.name}
                      </h3>
                      {project.external ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1"
                        >
                          <span>{project.linkText}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <Link
                          href={project.link}
                          className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1"
                        >
                          <span>{project.linkText}</span>
                          <span aria-hidden="true">↗</span>
                        </Link>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                    <div className="p-3 rounded border border-border-subtle bg-surface-elevated/40 text-xs text-text-secondary leading-relaxed">
                      <span className="font-mono text-[11px] text-text-tertiary block mb-1 uppercase tracking-wider">
                        Technical Contributions
                      </span>
                      {project.contributions}
                    </div>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded border border-border-subtle bg-surface text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
