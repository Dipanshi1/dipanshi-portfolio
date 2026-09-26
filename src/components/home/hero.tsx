import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { TechTag } from "@/components/ui/tech-tag";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Left / Primary Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent-primary"
                aria-hidden="true"
              />
              <Eyebrow className="text-accent-primary font-semibold tracking-wider">
                AI × Full-Stack × Product Design
              </Eyebrow>
            </div>

            {/* Dominant Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold tracking-[-0.03em] leading-[1.08] text-text-primary"
            >
              I design and build{" "}
              <br className="hidden sm:inline" />
              AI-powered products.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-normal">
              Computer Science engineering student specializing in applied AI systems,
              scalable FastAPI and PostgreSQL architectures, and polished Next.js
              product interfaces.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <Button
                variant="primary"
                size="lg"
                href="#work"
                className="justify-center gap-2"
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
                className="justify-center"
              >
                <span>Contact Me</span>
              </Button>
            </div>

            {/* Contextual Technical Metadata */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-text-tertiary pt-2">
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-text-tertiary"
                  aria-hidden="true"
                />
                Based in India
              </span>
              <span className="text-border-subtle" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5 text-text-secondary">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent-success"
                  aria-hidden="true"
                />
                Open to Internships
              </span>
              <span className="text-border-subtle" aria-hidden="true">
                ·
              </span>
              <span>B.Tech CSE &apos;26</span>
            </div>
          </div>

          {/* Right / Secondary Column: Restrained Technical Workspace Abstraction */}
          <div className="lg:col-span-5 w-full">
            <div
              className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 shadow-sm space-y-5 select-none"
              aria-label="Engineering and design stack overview"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/40"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                    System Architecture
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-text-tertiary px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse"
                    aria-hidden="true"
                  />
                  <span>Verified Stack</span>
                </div>
              </div>

              {/* 3 Discipline Layers */}
              <div className="space-y-3.5">
                {/* Layer 1: Applied AI & Retrieval */}
                <div className="p-3.5 rounded-lg border border-border-subtle bg-surface-elevated/50 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary">
                      01 / Applied AI & Retrieval
                    </span>
                    <span className="text-[10px] text-accent-primary uppercase tracking-wide">
                      Hybrid
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-snug">
                    Vector indexing, dense + sparse ranking, and grounded LLM reasoning.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <TechTag dot active>Qdrant</TechTag>
                    <TechTag dot active>Gemini API</TechTag>
                    <TechTag>PyMuPDF</TechTag>
                    <TechTag>BM25</TechTag>
                  </div>
                </div>

                {/* Layer 2: Systems & Backend */}
                <div className="p-3.5 rounded-lg border border-border-subtle bg-surface-elevated/50 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary">
                      02 / Systems & Backend
                    </span>
                    <span className="text-[10px] text-text-tertiary uppercase tracking-wide">
                      Core
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-snug">
                    Async Python microservices, relational schemas, and containerized runtime.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <TechTag dot>FastAPI</TechTag>
                    <TechTag dot>PostgreSQL</TechTag>
                    <TechTag>SQLAlchemy</TechTag>
                    <TechTag>Docker</TechTag>
                  </div>
                </div>

                {/* Layer 3: Product & Interaction */}
                <div className="p-3.5 rounded-lg border border-border-subtle bg-surface-elevated/50 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-text-primary">
                      03 / Product & Interaction
                    </span>
                    <span className="text-[10px] text-text-tertiary uppercase tracking-wide">
                      UI/UX
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-snug">
                    Design systems in Figma translated into accessible App Router interfaces.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <TechTag dot>Next.js 14</TechTag>
                    <TechTag dot>TypeScript</TechTag>
                    <TechTag>Tailwind</TechTag>
                    <TechTag>Figma</TechTag>
                  </div>
                </div>
              </div>

              {/* Bottom Pipeline Strip */}
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-tertiary">
                <span className="text-[10px] uppercase tracking-wider">Discipline Flow</span>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-text-secondary">
                  <span>Design</span>
                  <span className="text-accent-primary" aria-hidden="true">→</span>
                  <span>Build</span>
                  <span className="text-accent-primary" aria-hidden="true">→</span>
                  <span>Ship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
