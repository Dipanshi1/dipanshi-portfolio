"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";

interface PipelineStage {
  num: string;
  stageName: string;
  title: string;
  technology: string;
  purpose: string;
  input: string;
  output: string;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    num: "01",
    stageName: "INPUT",
    title: "Document Ingestion",
    technology: "FastAPI · Storage · Multi-Part Upload",
    purpose: "Accepts multi-page tender PDFs/DOCXs, validates MIME types, calculates SHA-256 hash for version caching, and performs health checks.",
    input: "Raw Tender Document (.pdf, .docx)",
    output: "Validated Binary Stream & Path",
  },
  {
    num: "02",
    stageName: "EXTRACTION",
    title: "Dual-Pass Parser",
    technology: "PyMuPDF (fitz) Primary · pdfplumber Fallback",
    purpose: "High-speed stream extraction preserving Unicode and Devanagari. Falls back to coordinate-aware pdfplumber if table layouts are detected.",
    input: "Document File Stream",
    output: "Page-Delimited Normalized Text",
  },
  {
    num: "03",
    stageName: "QUERY / REQUIREMENT",
    title: "Requirement Isolation",
    technology: "Gemini 1.5 · Structured Schema Contract",
    purpose: "Extracts discrete procurement line items from BOQ schedules into typed JSON records: category, domain, parameters, and cited IS codes.",
    input: "Normalized Document Text",
    output: "Structured Requirement Objects",
  },
  {
    num: "04",
    stageName: "HYBRID RETRIEVAL",
    title: "Hybrid Vector & Lexical Retrieval",
    technology: "Qdrant Vector DB + BM25 Lexical Index",
    purpose: "Dual retrieval across 10,000+ indexed Bureau of Indian Standards records. Qdrant handles semantic cosine distance; BM25 preserves exact codes.",
    input: "Requirement Query Representation",
    output: "Merged Candidate Standard Pool",
  },
  {
    num: "05",
    stageName: "RANKING",
    title: "Deterministic Ranking Engine",
    technology: "ranking.py · 6-Factor Multi-Signal Engine",
    purpose: "Scores candidate standards through a deterministic linear combination of 6 signals with a conditional +0.30 boost for explicit citations.",
    input: "Candidate Standards + Tender Specs",
    output: "Calibrated Relevance Scores [0, 1]",
  },
  {
    num: "06",
    stageName: "APPLICABILITY",
    title: "Applicability Classification",
    technology: "LightGBM · scikit-learn Locked Pipeline",
    purpose: "Applies a trained gradient boosted model to evaluate requirement-standard legal applicability without altering deterministic base retrieval ordering.",
    input: "Ranked Candidate Features",
    output: "Applicability Verdict & Probabilities",
  },
  {
    num: "07",
    stageName: "EVIDENCE",
    title: "Evidence & Audit Assembly",
    technology: "Next.js Console · Provenance Assembler",
    purpose: "Pairs tender requirement excerpts with verified BIS clause excerpts, highlight provenance, confidence indicators, and human-review flags.",
    input: "Scored & Verified Standard Payloads",
    output: "Interactive Audit Console & PDF Report",
  },
];

export function SystemArchitecture() {
  const [activeStage, setActiveStage] = React.useState<number>(0);

  return (
    <section
      id="architecture"
      aria-labelledby="architecture-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-8 sm:pb-12 border-b border-border-subtle font-mono text-xs text-text-tertiary">
          <span className="text-accent-primary font-bold text-sm sm:text-base">02</span>
          <span className="text-border-subtle">/</span>
          <span className="uppercase tracking-widest text-text-secondary font-semibold">
            System Architecture
          </span>
          <span className="text-border-subtle hidden sm:inline">/</span>
          <span className="hidden sm:inline text-text-tertiary">Dataflow &amp; Processing Canvas</span>
        </div>

        {/* Section Intro */}
        <div className="mt-12 sm:mt-16 max-w-3xl space-y-5">
          <h2
            id="architecture-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]"
          >
            End-to-End System Pipeline
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            The ManakSetu architecture decouples high-speed text ingestion, parameter extraction,
            hybrid retrieval, deterministic multi-signal scoring, and evidence assembly into a
            fault-tolerant, inspectable 7-stage pipeline.
          </p>
        </div>

        {/* Architectural Canvas (Level 2/3 Surface) */}
        <div className="mt-12 sm:mt-16 w-full rounded-xl border border-border-subtle bg-surface/40 overflow-hidden shadow-xs">
          {/* Canvas Controls & Status Bar */}
          <div className="px-5 sm:px-8 py-3.5 border-b border-border-subtle bg-surface-elevated/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent-primary" aria-hidden="true" />
              <span className="font-semibold uppercase tracking-wider text-text-primary text-[11px]">
                Architectural Topology Canvas
              </span>
              <span className="text-border-subtle">/</span>
              <span className="text-text-tertiary text-[11px]">7 Sequential Stages</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-text-tertiary">
              <span className="hidden md:inline">Click or hover node to inspect contracts:</span>
              <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-accent-primary font-medium">
                Stage {PIPELINE_STAGES[activeStage].num}: {PIPELINE_STAGES[activeStage].stageName}
              </span>
            </div>
          </div>

          {/* Desktop Canvas Grid (md and up) */}
          <div className="hidden md:block p-6 lg:p-8">
            {/* Top Row: Stages 01 to 04 */}
            <div className="grid grid-cols-4 gap-4 relative">
              {PIPELINE_STAGES.slice(0, 4).map((stage, idx) => {
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={stage.num}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    onMouseEnter={() => setActiveStage(idx)}
                    className={`text-left p-4 rounded-lg border transition-all duration-150 flex flex-col justify-between space-y-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focus ${
                      isSelected
                        ? "border-accent-primary/60 bg-surface shadow-xs ring-1 ring-accent-primary/20"
                        : "border-border-subtle bg-surface/70 hover:bg-surface hover:border-text-tertiary"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle/60">
                        <span className="text-accent-primary font-bold">{stage.num}</span>
                        <span className="text-[10px] uppercase tracking-wider text-text-tertiary">
                          {stage.stageName}
                        </span>
                      </div>
                      <h4 className="font-semibold text-text-primary text-sm mt-2 font-sans">
                        {stage.title}
                      </h4>
                      <p className="text-text-secondary text-xs mt-1 leading-snug line-clamp-2 font-sans">
                        {stage.purpose}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border-subtle/50 font-mono text-[10px] text-text-tertiary truncate">
                      {stage.technology}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inter-Tier Connector Conduit */}
            <div className="flex items-center justify-between py-4 px-6 text-text-tertiary font-mono text-xs">
              <div className="h-px flex-1 bg-border-subtle" />
              <div className="px-3 py-1 rounded border border-border-subtle bg-surface text-[10px] uppercase tracking-wider text-text-secondary mx-4">
                Requirement Payloads ↳ Candidate Standards (Top-K) ↳ Scored Recommendations
              </div>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>

            {/* Bottom Row: Stages 05 to 07 */}
            <div className="grid grid-cols-3 gap-4">
              {PIPELINE_STAGES.slice(4, 7).map((stage, idx) => {
                const actualIdx = idx + 4;
                const isSelected = activeStage === actualIdx;
                return (
                  <button
                    key={stage.num}
                    type="button"
                    onClick={() => setActiveStage(actualIdx)}
                    onMouseEnter={() => setActiveStage(actualIdx)}
                    className={`text-left p-4 rounded-lg border transition-all duration-150 flex flex-col justify-between space-y-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focus ${
                      isSelected
                        ? "border-accent-primary/60 bg-surface shadow-xs ring-1 ring-accent-primary/20"
                        : "border-border-subtle bg-surface/70 hover:bg-surface hover:border-text-tertiary"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle/60">
                        <span className="text-accent-primary font-bold">{stage.num}</span>
                        <span className="text-[10px] uppercase tracking-wider text-text-tertiary">
                          {stage.stageName}
                        </span>
                      </div>
                      <h4 className="font-semibold text-text-primary text-sm mt-2 font-sans">
                        {stage.title}
                      </h4>
                      <p className="text-text-secondary text-xs mt-1 leading-snug line-clamp-2 font-sans">
                        {stage.purpose}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border-subtle/50 font-mono text-[10px] text-text-tertiary truncate">
                      {stage.technology}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Timeline (hidden on md and up) */}
          <div className="md:hidden p-5 space-y-4">
            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border-subtle">
              {PIPELINE_STAGES.map((stage, idx) => {
                const isSelected = activeStage === idx;
                return (
                  <div
                    key={stage.num}
                    onClick={() => setActiveStage(idx)}
                    className={`relative p-4 rounded-lg border transition-all duration-150 space-y-2.5 ${
                      isSelected
                        ? "border-accent-primary/50 bg-surface"
                        : "border-border-subtle bg-surface/60"
                    }`}
                  >
                    <span
                      className={`absolute -left-[1.8rem] top-4 w-2.5 h-2.5 rounded-full border-2 border-canvas transition-colors ${
                        isSelected ? "bg-accent-primary" : "bg-text-tertiary"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-accent-primary font-bold">{stage.num}</span>
                      <span className="text-[10px] uppercase tracking-wider text-text-tertiary">
                        {stage.stageName}
                      </span>
                    </div>
                    <h4 className="font-semibold text-text-primary text-sm font-sans">
                      {stage.title}
                    </h4>
                    <p className="text-text-secondary text-xs font-sans leading-relaxed">
                      {stage.purpose}
                    </p>
                    <div className="pt-2 border-t border-border-subtle/50 font-mono text-[10px] text-text-tertiary">
                      {stage.technology}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Stage Data Contract Inspector Bar (Level 3 Exhibit Detail) */}
          <div className="px-5 sm:px-8 py-5 border-t border-border-subtle bg-surface-elevated/40 font-mono text-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-3 space-y-1">
                <span className="text-text-tertiary uppercase tracking-wider text-[10px] block">
                  Active Inspector Stage
                </span>
                <span className="text-text-primary font-semibold text-sm">
                  {PIPELINE_STAGES[activeStage].num} · {PIPELINE_STAGES[activeStage].title}
                </span>
              </div>
              <div className="md:col-span-4 space-y-1">
                <span className="text-text-tertiary uppercase tracking-wider text-[10px] block">
                  Input Contract
                </span>
                <span className="text-text-secondary block text-xs">
                  {PIPELINE_STAGES[activeStage].input}
                </span>
              </div>
              <div className="md:col-span-5 space-y-1">
                <span className="text-text-tertiary uppercase tracking-wider text-[10px] block">
                  Output Emission
                </span>
                <span className="text-text-primary font-medium block text-xs">
                  {PIPELINE_STAGES[activeStage].output}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Stage Specifications Ledger (Level 2 Hairline Ledger) */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs">
            <h3 className="font-semibold uppercase tracking-wider text-text-primary text-xs">
              Complete Pipeline Specification Ledger
            </h3>
            <span className="text-text-tertiary text-[11px]">Deterministic Data Flow</span>
          </div>

          <div className="divide-y divide-border-subtle border-t border-b border-border-subtle">
            {PIPELINE_STAGES.map((step) => (
              <div
                key={step.num}
                className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start text-xs font-mono hover:bg-surface/30 transition-colors duration-150"
              >
                <div className="lg:col-span-1 text-accent-primary font-bold text-sm">
                  {step.num}
                </div>
                <div className="lg:col-span-3 space-y-1">
                  <span className="font-semibold text-text-primary block text-sm font-sans">
                    {step.title}
                  </span>
                  <span className="text-text-tertiary text-[11px] block">
                    {step.technology}
                  </span>
                </div>
                <div className="lg:col-span-5 font-sans text-text-secondary text-xs leading-relaxed">
                  {step.purpose}
                </div>
                <div className="lg:col-span-3 space-y-1 text-[11px] text-text-tertiary">
                  <div>
                    <span className="text-text-secondary font-medium">In: </span>
                    {step.input}
                  </div>
                  <div>
                    <span className="text-text-secondary font-medium">Out: </span>
                    {step.output}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
