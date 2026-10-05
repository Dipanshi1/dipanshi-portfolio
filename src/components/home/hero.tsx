import * as React from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100svh-4rem)] flex flex-col justify-start lg:justify-center pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-8 lg:pb-24 overflow-hidden"
    >
      <Container className="w-full">
        <div className="grid grid-cols-1 editorial-hero-grid gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left / Primary Column: Identity, Positioning & Obvious Actions */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            {/* Identity & Availability Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
              <span className="font-semibold text-text-primary uppercase tracking-wider">
                Dipanshi Gupta
              </span>
              <span className="text-border-subtle" aria-hidden="true">/</span>
              <span className="text-text-secondary">
                3rd-Year Computer Science Student
              </span>
              <span className="text-border-subtle hidden sm:inline" aria-hidden="true">/</span>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
                <span>Available for Internships</span>
              </div>
            </div>

            {/* Dominant Display Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-semibold tracking-[-0.035em] leading-[1.08] text-text-primary"
            >
              <span className="lg:block">I design and build</span>{" "}
              <span className="lg:block lg:whitespace-nowrap">AI-powered products.</span>
            </h1>

            {/* Factual Supporting Copy */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-normal">
              Computer Science engineering student specializing in applied AI systems,
              scalable FastAPI and PostgreSQL backends, and modern Next.js interfaces.
              Focused on bridging complex models with production user experiences.
            </p>

            {/* Primary Actions: View Work & Resume */}
            <div className="space-y-5 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="#work"
                  className="justify-center gap-2 h-11 px-6 text-sm font-medium"
                >
                  <span>View Selected Work</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-canvas"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={siteConfig.links.resume}
                  className="justify-center gap-1.5 h-11 px-6 text-sm font-medium"
                >
                  <span>View Resume</span>
                  <span className="text-xs" aria-hidden="true">↗</span>
                </Button>
              </div>

              {/* Secondary Access: GitHub, LinkedIn, Email, Location */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-tertiary pt-1">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1 py-1"
                >
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <span className="text-border-subtle" aria-hidden="true">·</span>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1 py-1"
                >
                  <span>LinkedIn</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <span className="text-border-subtle" aria-hidden="true">·</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1 py-1"
                >
                  <span>{siteConfig.email}</span>
                </a>
                <span className="text-border-subtle hidden sm:inline" aria-hidden="true">·</span>
                <span className="text-text-tertiary hidden sm:inline">Based in India</span>
              </div>
            </div>
          </div>

          {/* Right / Secondary Column: Candidate Technical Snapshot */}
          <div className="w-full">
            <div
              className="w-full rounded-xl border border-border-subtle bg-surface/50 p-6 sm:p-7 space-y-6 select-none"
              aria-label="Candidate technical snapshot"
            >
              {/* Snapshot Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle font-mono text-xs text-text-tertiary">
                <span className="uppercase tracking-widest font-medium text-text-secondary">
                  Core Focus &amp; Stack
                </span>
                <span className="tracking-wider text-[11px]">
                  3rd-Year B.Tech CSE
                </span>
              </div>

              {/* 3 Core Competencies */}
              <div className="space-y-5">
                {/* 01: Applied AI & Retrieval */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary uppercase tracking-wider">
                      01 / Applied AI &amp; Retrieval
                    </span>
                    <span className="text-accent-primary text-[11px]">Flagship Domain</span>
                  </div>
                  <p className="text-xs text-text-secondary font-sans leading-relaxed">
                    Hybrid vector search (Qdrant) + BM25 lexical matching, structured LLM extraction (Gemini API), and computer vision inference.
                  </p>
                  <div className="font-mono text-[11px] text-text-tertiary pt-0.5">
                    Qdrant · Gemini API · PyMuPDF · BM25 · OpenCV
                  </div>
                </div>

                <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

                {/* 02: Systems & Backend */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary uppercase tracking-wider">
                      02 / Systems &amp; Backend
                    </span>
                    <span className="text-text-tertiary text-[11px]">Core Strength</span>
                  </div>
                  <p className="text-xs text-text-secondary font-sans leading-relaxed">
                    Asynchronous FastAPI microservices, relational schema modeling (PostgreSQL / SQLAlchemy), row-level tenant security, and Docker.
                  </p>
                  <div className="font-mono text-[11px] text-text-tertiary pt-0.5">
                    FastAPI · PostgreSQL · SQLAlchemy · Docker
                  </div>
                </div>

                <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

                {/* 03: Product & Interaction */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary uppercase tracking-wider">
                      03 / Product Design &amp; UI
                    </span>
                    <span className="text-text-tertiary text-[11px]">Frontend Craft</span>
                  </div>
                  <p className="text-xs text-text-secondary font-sans leading-relaxed">
                    Production Next.js App Router engineering, token-driven Figma design systems, WCAG 2.1 AA accessibility, and responsive layouts.
                  </p>
                  <div className="font-mono text-[11px] text-text-tertiary pt-0.5">
                    Next.js 14 · TypeScript · Tailwind CSS · Figma
                  </div>
                </div>
              </div>

              {/* Snapshot Footer */}
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-text-tertiary">
                <span className="text-[11px]">Smart India Hackathon (SIH 26108)</span>
                <span className="text-text-secondary font-medium text-[11px]">GDG on Campus Contributor</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
