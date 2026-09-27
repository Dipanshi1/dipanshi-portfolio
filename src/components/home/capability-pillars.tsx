import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Pillar {
  number: string;
  discipline: string;
  focus: string;
  capabilities: string[];
  tech: string[];
}

const pillars: Pillar[] = [
  {
    number: "01",
    discipline: "Applied AI & Retrieval",
    focus:
      "Applied AI systems, hybrid retrieval pipelines, document intelligence, and grounded reasoning.",
    capabilities: [
      "Hybrid retrieval pipelines combining dense vectors and BM25 lexical scoring",
      "Grounded reasoning with structured output validation (Gemini API)",
      "Document ingestion and table extraction pipelines (PyMuPDF / pdfplumber)",
      "Computer vision classification models and containerized edge inference",
    ],
    tech: ["Qdrant", "Gemini API", "PyMuPDF", "BM25", "Scikit-learn"],
  },
  {
    number: "02",
    discipline: "Full-Stack & Systems",
    focus:
      "FastAPI, PostgreSQL, API architecture, data modeling, and containerized backend systems.",
    capabilities: [
      "Asynchronous microservices built with FastAPI and Pydantic validation",
      "Relational schema design, migrations, and SQLAlchemy database modeling",
      "Containerized deployment workflows using Docker and Docker Compose",
      "Clean REST API contract design, JWT authentication, and dependency injection",
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Python 3.11+"],
  },
  {
    number: "03",
    discipline: "Product Design & UI/UX",
    focus:
      "Design systems, Figma, Next.js interfaces, and accessible, responsive product UX.",
    capabilities: [
      "Design systems conceived in Figma with token-driven component architecture",
      "Production Next.js App Router and TypeScript frontend engineering",
      "WCAG 2.1 AA accessibility compliance, keyboard navigation, and semantic HTML",
      "Restrained interaction design and responsive fluid layout craft",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Figma", "WCAG AA"],
  },
];

export function CapabilityPillars() {
  return (
    <section
      id="stack"
      aria-labelledby="capabilities-heading"
      className="w-full border-t border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl pb-12 sm:pb-16">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              aria-hidden="true"
            />
            <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
              Capability Pillars · 03 Disciplines
            </Eyebrow>
          </div>
          <h2
            id="capabilities-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            Engineering &amp; Design Architecture
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            Three interconnected disciplines spanning retrieval systems, backend
            infrastructure, and production product interfaces.
          </p>
        </div>

        {/* 3 Pillars Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`flex flex-col space-y-6 ${
                index > 0
                  ? "md:border-l md:border-border-subtle md:pl-8 lg:pl-10"
                  : ""
              }`}
            >
              {/* Number and Discipline Header */}
              <div className="space-y-2 pb-2">
                <span className="font-mono text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight">
                  {pillar.number}
                </span>
                <h3 className="font-mono text-sm uppercase tracking-wider font-semibold text-text-primary">
                  {pillar.discipline}
                </h3>
              </div>

              {/* Focus Summary */}
              <p className="text-sm text-text-secondary leading-relaxed font-normal">
                {pillar.focus}
              </p>

              <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

              {/* Core Capabilities List */}
              <div className="space-y-3 flex-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary block">
                  Core Capabilities
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {pillar.capabilities.map((cap, capIdx) => (
                    <li key={capIdx} className="flex items-start gap-2">
                      <span
                        className="text-accent-primary font-mono text-xs select-none shrink-0 pt-0.5"
                        aria-hidden="true"
                      >
                        ↳
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

              {/* Technology Tags Strip */}
              <div className="pt-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block pb-2">
                  Verified Toolchain
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-text-tertiary">
                  {pillar.tech.map((item, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
