import * as React from "react";
import { Container } from "@/components/layout/container";

export function ContributionBoundary() {
  const personalContributions = [
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

  const teamImplementation = [
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

  return (
    <section
      id="ownership"
      aria-labelledby="ownership-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl pb-12 sm:pb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
            07 / Engineering Ownership
          </span>
          <h2
            id="ownership-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            What I Built vs. Team Implementation
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            ManakSetu was developed collaboratively for Smart India Hackathon (SIH 26108).
            To maintain complete engineering integrity, personal responsibilities are clearly
            delineated from backend microservices built by team members.
          </p>
        </div>

        {/* Personal Ownership Grid */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs">
            <span className="text-accent-primary uppercase tracking-wider font-semibold">
              Personal Ownership: Dipanshi Gupta
            </span>
            <span className="text-text-tertiary">Product Design · Frontend Architecture · AI Integration</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalContributions.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-xl border border-border-subtle bg-surface space-y-3 font-mono text-xs"
              >
                <h3 className="font-semibold text-text-primary text-sm font-sans pb-2 border-b border-border-subtle">
                  {group.category}
                </h3>
                <ul className="space-y-2 font-sans text-xs text-text-secondary">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-primary font-mono text-xs pt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Implementation Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs">
            <span className="text-text-secondary uppercase tracking-wider font-semibold">
              Team Microservices &amp; Infrastructure Collaborators
            </span>
            <span className="text-text-tertiary">SIH 26108 Backend Team</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamImplementation.map((member) => (
              <div
                key={member.owner}
                className="p-6 rounded-xl border border-border-subtle bg-surface-elevated/60 space-y-3 font-mono text-xs"
              >
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                  <span className="font-semibold text-text-primary text-sm font-sans">
                    {member.owner}
                  </span>
                  <span className="text-[11px] text-text-tertiary">
                    {member.focus}
                  </span>
                </div>
                <ul className="space-y-2 font-sans text-xs text-text-secondary">
                  {member.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-text-tertiary font-mono text-xs pt-0.5">•</span>
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
