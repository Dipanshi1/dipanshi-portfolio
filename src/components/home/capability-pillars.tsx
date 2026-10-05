import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Pillar {
  number: string;
  discipline: string;
  summary: string;
  description: string;
  tech: string[];
}

const pillars: Pillar[] = [
  {
    number: "01",
    discipline: "Applied AI",
    summary: "Retrieval · LLM Applications · Computer Vision",
    description:
      "Hybrid Qdrant vector search and BM25 lexical retrieval, structured Pydantic schema validation over Gemini API, and OpenCV image preprocessing for anomaly classification.",
    tech: ["Qdrant", "Gemini API", "PyMuPDF", "BM25", "OpenCV"],
  },
  {
    number: "02",
    discipline: "Full-Stack",
    summary: "Next.js · FastAPI · PostgreSQL · APIs",
    description:
      "Asynchronous backend services with FastAPI, relational schema modeling and migrations with PostgreSQL / SQLAlchemy, row-level tenant isolation, and containerized Docker runtimes.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Python"],
  },
  {
    number: "03",
    discipline: "Product Design",
    summary: "Figma · UI/UX · Product Interfaces",
    description:
      "Design systems created in Figma with token-driven components, production Next.js 14 App Router engineering, keyboard-accessible flows, and restrained interaction design.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Figma", "WCAG AA"],
  },
];

export function CapabilityPillars() {
  return (
    <section
      id="stack"
      aria-labelledby="capabilities-heading"
      className="w-full border-t border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150 scroll-mt-16"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl pb-10 sm:pb-14">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              aria-hidden="true"
            />
            <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
              Core Capabilities · 03 Focus Areas
            </Eyebrow>
          </div>
          <h2
            id="capabilities-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            Engineering &amp; Design Stack
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            A cohesive foundation spanning applied AI retrieval, scalable backend systems,
            and production product interfaces.
          </p>
        </div>

        {/* 3 Pillars Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`flex flex-col justify-between space-y-5 p-5 sm:p-6 rounded-xl border border-border-subtle bg-surface/50 ${
                index > 0 ? "md:border-border-subtle" : ""
              }`}
            >
              <div className="space-y-3">
                {/* Number & Discipline */}
                <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
                  <span className="text-accent-primary font-bold text-base">
                    {pillar.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-text-tertiary">
                    Focus Area
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-text-primary font-sans">
                  {pillar.discipline}
                </h3>

                <p className="font-mono text-xs text-accent-primary font-medium">
                  {pillar.summary}
                </p>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              {/* Technology Tags Strip */}
              <div className="pt-3 border-t border-border-subtle/70">
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {pillar.tech.map((item) => (
                    <span
                      key={item}
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
