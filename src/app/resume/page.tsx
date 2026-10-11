import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Resume & Credentials — Dipanshi Gupta",
  description:
    "Curriculum Vitae and verified technical background of Dipanshi Gupta. 3rd-year Computer Science student available for Summer & Fall 2026 internship opportunities.",
};

export default function ResumePage() {
  const competencies = [
    {
      domain: "01 / Applied AI & Retrieval",
      badge: "Flagship Domain",
      description:
        "Hybrid vector search (Qdrant) + BM25 lexical matching, structured LLM extraction (Gemini API), and computer vision inference.",
      technologies: "Qdrant · Gemini API · PyMuPDF · BM25 · OpenCV",
    },
    {
      domain: "02 / Systems & Backend",
      badge: "Core Strength",
      description:
        "Asynchronous FastAPI microservices, relational schema modeling (PostgreSQL / SQLAlchemy), row-level tenant security, and Docker.",
      technologies: "FastAPI · PostgreSQL · SQLAlchemy · Docker",
    },
    {
      domain: "03 / Product Design & UI",
      badge: "Frontend Craft",
      description:
        "Production Next.js App Router engineering, token-driven Figma design systems, WCAG 2.1 AA accessibility, and responsive layouts.",
      technologies: "Next.js 14 · TypeScript · Tailwind CSS · Figma",
    },
  ];

  const highlights = [
    {
      title: "ManakSetu — AI Regulatory Procurement Intelligence",
      role: "Lead Full-Stack & AI Systems Contributor · SIH 26108 Flagship",
      details:
        "Built hybrid Qdrant and BM25 retrieval engine, deterministic multi-signal scoring, and evidence-grounded verification interface for complex public tender compliance.",
    },
    {
      title: "AgriVision AI — Deep Learning Crop Health",
      role: "Computer Vision & Backend Engineering",
      details:
        "Engineered visual diagnostic inference pipeline with automated leaf pathology detection and responsive Next.js inspection tooling.",
    },
    {
      title: "Google Developer Groups (GDG) on Campus",
      role: "Active Community Contributor",
      details:
        "Collaborated with student engineers, conducted architectural code reviews, and organized developer sessions on modern web engineering and developer tooling.",
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
              Candidate Background · Resume &amp; Credentials
            </Eyebrow>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
            Curriculum Vitae &amp; Credentials
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            Dipanshi Gupta · 3rd-Year Computer Science Student specializing in Applied AI,
            scalable FastAPI/PostgreSQL backend services, and production Next.js interfaces.
          </p>
        </div>

        {/* Status Callout Banner (Gracefully Reflecting Limitation) */}
        <div className="my-10 rounded-xl border border-border-subtle bg-surface/60 p-6 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">
                Resume Status
              </span>
              <span className="text-border-subtle">·</span>
              <StatusPill variant="available">
                {siteConfig.status}
              </StatusPill>
            </div>
            <span className="font-mono text-xs text-text-tertiary">
              Summer &amp; Fall 2026 Internship Recruiting
            </span>
          </div>

          <div className="space-y-2 max-w-2xl">
            <h2 className="text-lg font-semibold text-text-primary">
              Official PDF Resume Available Upon Request
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              The tailored PDF resume document is provided directly to recruiters and hiring teams
              upon request. To receive a copy or schedule an introductory interview, please email
              canonical contact{" "}
              <a
                href={`mailto:${siteConfig.email}?subject=Resume%20Request%20%E2%80%94%20Dipanshi%20Gupta`}
                className="text-text-primary underline hover:text-text-primary font-mono text-xs"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              href={`mailto:${siteConfig.email}?subject=Resume%20Request%20%E2%80%94%20Dipanshi%20Gupta`}
              className="gap-2 text-xs h-10 px-5"
            >
              <span>Request PDF via Email</span>
              <span className="text-xs" aria-hidden="true">✉</span>
            </Button>
            <Button
              variant="secondary"
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

        {/* 2-Column Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4">
          {/* Left Column: Academic & Technical Pillars */}
          <div className="lg:col-span-7 space-y-10">
            {/* Academic Standing */}
            <section className="space-y-3" aria-labelledby="education-heading">
              <h2
                id="education-heading"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-text-tertiary"
              >
                Education &amp; Standing
              </h2>
              <div className="rounded-lg border border-border-subtle bg-surface/40 p-5 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-text-primary text-base">
                    Bachelor of Technology in Computer Science &amp; Engineering
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">3rd Year</span>
                </div>
                <p className="text-xs text-text-secondary">
                  Focus: Applied Artificial Intelligence, Asynchronous Microservices, Distributed Vector Retrieval.
                </p>
                <div className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 pt-1">
                  Availability: Summer &amp; Fall 2026 Internship Opportunities
                </div>
              </div>
            </section>

            {/* Core Competencies */}
            <section className="space-y-4" aria-labelledby="skills-heading">
              <h2
                id="skills-heading"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-text-tertiary"
              >
                Technical Competencies
              </h2>
              <div className="space-y-3">
                {competencies.map((comp) => (
                  <div
                    key={comp.domain}
                    className="rounded-lg border border-border-subtle bg-surface/40 p-5 space-y-2"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-semibold text-text-primary uppercase tracking-wider">
                        {comp.domain}
                      </span>
                      <span className="text-accent-primary text-[11px]">{comp.badge}</span>
                    </div>
                    <p className="text-xs text-text-secondary font-sans leading-relaxed">
                      {comp.description}
                    </p>
                    <div className="font-mono text-[11px] text-text-tertiary pt-0.5">
                      {comp.technologies}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Engineering Highlights & Direct Outbound */}
          <div className="lg:col-span-5 space-y-8">
            <section className="space-y-4" aria-labelledby="experience-heading">
              <h2
                id="experience-heading"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-text-tertiary"
              >
                Production Highlights
              </h2>
              <div className="space-y-3.5">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border-subtle bg-surface/40 p-4 sm:p-5 space-y-1.5"
                  >
                    <h3 className="font-medium text-sm text-text-primary">
                      {item.title}
                    </h3>
                    <div className="font-mono text-[11px] text-text-tertiary">
                      {item.role}
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed pt-1">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Card */}
            <div className="rounded-lg border border-border-subtle bg-surface/50 p-5 space-y-3 font-mono text-xs">
              <div className="text-text-tertiary uppercase tracking-wider text-[11px]">
                Recruiter Direct Contact
              </div>
              <div className="text-text-primary font-sans font-medium text-sm">
                Dipanshi Gupta
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1.5 break-all text-xs"
              >
                <span>{siteConfig.email}</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </a>
              <div className="pt-2 border-t border-border-subtle flex items-center gap-4 text-text-secondary text-xs">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors duration-150"
                >
                  GitHub ↗
                </a>
                <span className="text-border-subtle">·</span>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors duration-150"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
