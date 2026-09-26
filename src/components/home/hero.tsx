import * as React from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100svh-4rem)] flex flex-col justify-center py-12 sm:py-16 lg:py-0 overflow-hidden"
    >
      <Container className="w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* Left / Primary Column: Identity & Positioning */}
          <div className="lg:col-span-7 flex flex-col space-y-8 sm:space-y-10">
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

            {/* Dominant Editorial Display Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-6xl lg:text-[4.25rem] xl:text-[5rem] 2xl:text-[5.5rem] font-semibold tracking-[-0.04em] leading-[0.98] sm:leading-[1.0] lg:leading-[1.02] text-text-primary"
            >
              I design and build <br />
              AI-powered products.
            </h1>

            {/* Factual Supporting Copy */}
            <p className="text-lg sm:text-xl lg:text-[1.35rem] text-text-secondary leading-relaxed max-w-2xl font-normal">
              Computer Science engineering student specializing in applied AI systems,
              scalable FastAPI and PostgreSQL backends, and modern Next.js interfaces.
            </p>

            {/* Actions & Contextual Metadata */}
            <div className="space-y-6 pt-2">
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

          {/* Right / Secondary Column: Open Editorial Technical Specification */}
          <div className="lg:col-span-5 w-full">
            <div
              className="w-full space-y-7 lg:space-y-8 select-none"
              aria-label="Technical focus and capability domains"
            >
              {/* Artifact Header Strip */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle font-mono text-[11px] text-text-tertiary">
                <span className="uppercase tracking-widest font-medium">
                  Technical Focus
                </span>
                <span className="tracking-wider">
                  03 Domains
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
                    <div className="space-y-1 flex-1 min-w-0">
                      <h2 className="font-mono text-xs uppercase tracking-wider font-semibold text-text-primary">
                        Applied AI &amp; Retrieval
                      </h2>
                      <p className="text-sm sm:text-base text-text-secondary leading-snug">
                        Hybrid Retrieval · Grounded Reasoning
                      </p>
                      <p className="font-mono text-xs text-text-tertiary pt-0.5">
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
                    <div className="space-y-1 flex-1 min-w-0">
                      <h2 className="font-mono text-xs uppercase tracking-wider font-semibold text-text-primary">
                        Systems &amp; Backend
                      </h2>
                      <p className="text-sm sm:text-base text-text-secondary leading-snug">
                        Async APIs · Relational Schemas
                      </p>
                      <p className="font-mono text-xs text-text-tertiary pt-0.5">
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
                    <div className="space-y-1 flex-1 min-w-0">
                      <h2 className="font-mono text-xs uppercase tracking-wider font-semibold text-text-primary">
                        Product &amp; Interaction
                      </h2>
                      <p className="text-sm sm:text-base text-text-secondary leading-snug">
                        Design Systems · Accessible UI
                      </p>
                      <p className="font-mono text-xs text-text-tertiary pt-0.5">
                        Next.js 14 · TypeScript · Tailwind CSS · Figma
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Artifact Footer Strip */}
              <div className="pt-3.5 border-t border-border-subtle flex items-center justify-between font-mono text-[11px] text-text-tertiary">
                <span className="uppercase tracking-widest">
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
