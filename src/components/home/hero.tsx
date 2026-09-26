import * as React from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* Left / Primary Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            {/* Restrained Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent-primary"
                aria-hidden="true"
              />
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary select-none">
                AI × Full-Stack × Product Design
              </p>
            </div>

            {/* Dominant Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-semibold tracking-[-0.035em] leading-[1.08] text-text-primary"
            >
              I design and build <br />
              AI-powered products.
            </h1>

            {/* Factual Supporting Copy */}
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl font-normal">
              Computer Science engineering student specializing in applied AI systems,
              scalable FastAPI and PostgreSQL backends, and modern Next.js interfaces.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Button
                variant="primary"
                size="lg"
                href="#work"
                className="justify-center gap-2 h-11 px-6 text-sm font-medium"
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
                className="justify-center h-11 px-6 text-sm font-medium"
              >
                <span>Contact Me</span>
              </Button>
            </div>

            {/* Factual Contextual Metadata */}
            <div className="flex items-center gap-3 text-xs font-mono text-text-tertiary pt-2">
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

          {/* Right / Secondary Column: Editorial Technical Artifact */}
          <div className="lg:col-span-5 w-full">
            <div
              className="rounded-xl border border-border-subtle bg-surface/50 p-6 sm:p-8 lg:p-9 space-y-7 select-none"
              aria-label="Technical focus and capability domains"
            >
              {/* Artifact Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary">
                  Technical Focus &amp; Domains
                </span>
                <span className="font-mono text-[11px] text-text-tertiary">
                  03 Disciplines
                </span>
              </div>

              {/* 3 Discipline Sections (Typographic, Clean, No Card Nesting) */}
              <div className="space-y-6">
                {/* 01: Applied AI & Retrieval */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary uppercase tracking-wide">
                      01 — Applied AI &amp; Retrieval
                    </span>
                    <span className="text-[10px] text-text-tertiary uppercase">
                      RAG / Search
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-snug font-normal">
                    Hybrid Retrieval · Dense Embeddings · Grounded Reasoning
                  </p>
                  <p className="font-mono text-xs text-text-tertiary pt-0.5">
                    Qdrant · Gemini API · PyMuPDF · BM25
                  </p>
                </div>

                <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

                {/* 02: Systems & Backend */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary uppercase tracking-wide">
                      02 — Systems &amp; Backend
                    </span>
                    <span className="text-[10px] text-text-tertiary uppercase">
                      Core / APIs
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-snug font-normal">
                    Async Microservices · Relational Schemas · Container Runtimes
                  </p>
                  <p className="font-mono text-xs text-text-tertiary pt-0.5">
                    FastAPI · PostgreSQL · SQLAlchemy · Docker
                  </p>
                </div>

                <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

                {/* 03: Product & Interaction */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary uppercase tracking-wide">
                      03 — Product &amp; Interaction
                    </span>
                    <span className="text-[10px] text-text-tertiary uppercase">
                      Interface
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-snug font-normal">
                    Design Systems · Responsive Architecture · Accessible UI
                  </p>
                  <p className="font-mono text-xs text-text-tertiary pt-0.5">
                    Next.js 14 · TypeScript · Tailwind CSS · Figma
                  </p>
                </div>
              </div>

              {/* Artifact Footer: Discipline Flow */}
              <div className="pt-3.5 border-t border-border-subtle flex items-center justify-between font-mono text-[11px] text-text-tertiary">
                <span className="uppercase tracking-wider">Discipline Flow</span>
                <span className="text-text-secondary font-medium">
                  Design{" "}
                  <span className="text-text-tertiary mx-1" aria-hidden="true">
                    →
                  </span>{" "}
                  Build{" "}
                  <span className="text-text-tertiary mx-1" aria-hidden="true">
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
