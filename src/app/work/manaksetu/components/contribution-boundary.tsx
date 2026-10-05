import * as React from "react";
import { Container } from "@/components/layout/container";

interface ContributionGroup {
  category: string;
  items: string[];
}

interface TeamMember {
  owner: string;
  focus: string;
  responsibilities: string[];
}

const PERSONAL_CONTRIBUTIONS: ContributionGroup[] = [
  {
    category: "Product Design & UX Architecture",
    items: [
      "Led end-to-end product design, wireframing, and interactive design system in Figma.",
      "Architected the split-view verification paradigm pairing tender clause excerpts with verified BIS standard citations.",
      "Engineered the information architecture for multi-tab procurement analysis (Requirements, Matched Standards, Gaps & Risks, PDF Audit Report).",
    ],
  },
  {
    category: "Frontend Engineering & Next.js/React Systems",
    items: [
      "Implemented the complete responsive web client in TypeScript, React, and Tailwind CSS.",
      "Built interactive audit inspection controls, parameter filters, and confidence indicator badges.",
      "Engineered client-side state management for document upload streams, analysis progress polling, and multi-standard comparison.",
    ],
  },
  {
    category: "AI Engine & Retrieval UI Integration",
    items: [
      "Established critical UI distinction: explicitly labeled search similarity as 'Retrieval Match' rather than 'Applicability' to ensure legal clarity (commit bffb981).",
      "Scaled lexical BM25 relevance scores to [0, 1] for unified visual attribution (commit 10817a8).",
      "Implemented UI separation isolating withdrawn or superseded BIS standards from active mandatory standards (commit 24a2a47).",
      "Grounded executive summary outputs strictly in applicable, validated standards rather than general model text (commit f161b45).",
    ],
  },
  {
    category: "Exportable Audit Reporting & Typography",
    items: [
      "Engineered PDF report generation module supporting multi-page findings and dynamic table splitting (commit dc82335).",
      "Integrated Unicode and Devanagari font rendering support to correctly display Hindi tender specifications in generated audit reports (commit 4cc7980).",
      "Built server error diagnostic rendering to provide procurement officers with actionable feedback on malformed documents.",
    ],
  },
];

const TEAM_SYSTEMS: TeamMember[] = [
  {
    owner: "Kartikey",
    focus: "Backend API & Compliance Pipeline",
    responsibilities: [
      "FastAPI microservice endpoints, routing, and upload lifecycle management.",
      "Core document processing pipeline (kartikey/document_processing/extractor.py).",
      "Gemini 1.5 requirement extraction prompts and structured schema contracts.",
      "Compliance reasoning engine and multi-signal evidence assembly.",
    ],
  },
  {
    owner: "Kshiraj",
    focus: "Ingestion, Vector Store & Database Adapters",
    responsibilities: [
      "PostgreSQL and async SQLAlchemy database architecture.",
      "Bureau of Indian Standards (BIS) catalog scraping and text cleaning.",
      "Qdrant Cloud vector collection indexing and hybrid retrieval connectors.",
      "External source adapters and asynchronous synchronization jobs.",
    ],
  },
];

export function ContributionBoundary() {
  return (
    <section
      id="ownership"
      aria-labelledby="ownership-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-8 sm:pb-12 border-b border-border-subtle font-mono text-xs text-text-tertiary">
          <span className="text-accent-primary font-bold text-sm sm:text-base">07</span>
          <span className="text-border-subtle">/</span>
          <span className="uppercase tracking-widest text-text-secondary font-semibold">
            Engineering Ownership
          </span>
          <span className="text-border-subtle hidden sm:inline">/</span>
          <span className="hidden sm:inline text-text-tertiary">Verified Contribution Ledger</span>
        </div>

        {/* Section Lead */}
        <div className="mt-12 sm:mt-16 max-w-3xl space-y-5">
          <h2
            id="ownership-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]"
          >
            What I Built vs. Team Implementation
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            ManakSetu was developed collaboratively for Smart India Hackathon (SIH 26108).
            To maintain complete engineering integrity, personal responsibilities are clearly
            delineated from backend microservices built by team members.
          </p>
        </div>

        {/* Dipanshi Gupta Contribution Block */}
        <div className="mt-12 sm:mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-subtle font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-primary" aria-hidden="true" />
              <span className="text-text-primary uppercase tracking-wider font-semibold">
                Personal Engineering Ownership: Dipanshi Gupta
              </span>
            </div>
            <span className="text-text-tertiary text-[11px]">
              Product Design · UI/UX Architecture · Next.js · AI UI Integration
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PERSONAL_CONTRIBUTIONS.map((group) => (
              <div
                key={group.category}
                className="p-6 sm:p-7 rounded-xl border border-border-subtle bg-surface space-y-4 font-mono text-xs hover:border-border-focus/40 transition-colors duration-150"
              >
                <div className="pb-3 border-b border-border-subtle">
                  <h3 className="font-semibold text-text-primary text-sm font-sans">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-3 font-sans text-xs text-text-secondary">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-accent-primary font-mono text-xs pt-0.5" aria-hidden="true">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Collaborators Block */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-subtle font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-text-tertiary" aria-hidden="true" />
              <span className="text-text-secondary uppercase tracking-wider font-semibold">
                Team Microservices &amp; Infrastructure Collaborators
              </span>
            </div>
            <span className="text-text-tertiary text-[11px]">
              Smart India Hackathon (SIH 26108) Backend Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM_SYSTEMS.map((member) => (
              <div
                key={member.owner}
                className="p-6 sm:p-7 rounded-xl border border-border-subtle bg-surface-elevated/40 space-y-4 font-mono text-xs"
              >
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                  <span className="font-semibold text-text-primary text-base font-sans">
                    {member.owner}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-[11px] text-text-tertiary">
                    {member.focus}
                  </span>
                </div>
                <ul className="space-y-2.5 font-sans text-xs text-text-secondary">
                  {member.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-text-tertiary font-mono text-xs pt-0.5" aria-hidden="true">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
