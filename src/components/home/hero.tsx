import * as React from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100svh-4rem)] flex flex-col justify-start lg:justify-center pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-8 lg:pb-24 overflow-hidden"
    >
      <Container className="w-full">
        <div className="grid grid-cols-1 editorial-hero-grid gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left / Primary Column: Identity & Positioning (7.5fr) */}
          <div className="flex flex-col space-y-7 sm:space-y-9">
            {/* Restrained Technical Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent-primary"
                aria-hidden="true"
              />
              <p className="font-mono text-xs uppercase tracking-widest text-text-tertiary select-none">
                AI × Full-Stack × Product Design
              </p>
            </div>

            {/* Dominant Editorial Display Headline (Balanced Two Lines) */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.35rem] 2xl:text-[4.75rem] font-semibold tracking-[-0.035em] leading-[1.04] sm:leading-[1.02] text-text-primary"
            >
              <span className="block">I design and build</span>
              <span className="block">AI-powered products.</span>
            </h1>

            {/* Factual Supporting Copy */}
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl font-normal">
              Computer Science engineering student specializing in applied AI systems,
              scalable FastAPI and PostgreSQL backends, and modern Next.js interfaces.
            </p>

            {/* Actions & Contextual Metadata */}
            <div className="space-y-6 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="#work"
                  className="justify-center gap-2 h-12 px-7 text-sm font-medium"
                >
                  <span>View My Work</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
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
                  href="#contact"
                  className="justify-center h-12 px-7 text-sm font-medium"
                >
                  <span>Contact Me</span>
                </Button>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-text-tertiary">
                <span>Based in India</span>
                <span className="text-border-subtle" aria-hidden="true">
                  /
                </span>
                <span className="inline-flex items-center gap-1.5 text-text-secondary">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent-success"
                    aria-hidden="true"
                  />
                  Available for Internships
                </span>
              </div>
            </div>
          </div>

          {/* Right / Secondary Column: Open Editorial Technical Specification (4.5fr) */}
          <div className="w-full">
            <div
              className="w-full space-y-7 lg:space-y-8 select-none"
              aria-label="Technical focus and capability domains"
            >
              {/* Artifact Header Strip */}
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle font-mono text-xs text-text-tertiary">
                <span className="uppercase tracking-widest font-medium">
                  Technical Focus
                </span>
                <span className="tracking-wider">
                  03 Disciplines
                </span>
              </div>

              {/* The 3 Disciplines with Prominent Indices & Hairline Dividers */}
              <div className="space-y-7 lg:space-y-8">
                {/* 01: Applied AI & Retrieval */}
                <div className="space-y-2.5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight shrink-0 w-8">
                      01
                    </span>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h2 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-text-primary">
                        Applied AI &amp; Retrieval
                      </h2>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                        Hybrid Retrieval · Grounded Reasoning · Vector Indexing
                      </p>
                      <p className="font-mono text-xs sm:text-[13px] text-text-tertiary pt-0.5">
                        Qdrant · Gemini API · PyMuPDF · BM25
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

                {/* 02: Systems & Backend */}
                <div className="space-y-2.5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight shrink-0 w-8">
                      02
                    </span>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h2 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-text-primary">
                        Systems &amp; Backend
                      </h2>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                        Async APIs · Relational Schemas · Container Runtimes
                      </p>
                      <p className="font-mono text-xs sm:text-[13px] text-text-tertiary pt-0.5">
                        FastAPI · PostgreSQL · SQLAlchemy · Docker
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

                {/* 03: Product & Interaction */}
                <div className="space-y-2.5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight shrink-0 w-8">
                      03
                    </span>
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h2 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-text-primary">
                        Product &amp; Interaction
                      </h2>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                        Design Systems · Responsive Architecture · Accessible UI
                      </p>
                      <p className="font-mono text-xs sm:text-[13px] text-text-tertiary pt-0.5">
                        Next.js 14 · TypeScript · Tailwind CSS · Figma
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Artifact Footer Strip */}
              <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-text-tertiary">
                <span className="uppercase tracking-widest font-medium">
                  Discipline Flow
                </span>
                <span className="text-text-secondary font-medium tracking-wide">
                  Design{" "}
                  <span className="text-text-tertiary mx-1.5" aria-hidden="true">
                    →
                  </span>{" "}
                  Build{" "}
                  <span className="text-text-tertiary mx-1.5" aria-hidden="true">
                    →
                  </span>{" "}
                  Ship
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
