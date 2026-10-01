import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FlagshipProject() {
  return (
    <section
      id="work"
      aria-labelledby="flagship-heading"
      className="relative w-full border-t border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 transition-colors duration-150"
    >
      <div id="manaksetu" className="absolute -top-16" aria-hidden="true" />
      <Container>
        {/* Section Identity & Eyebrow */}
        <div className="space-y-4 max-w-3xl pb-12 sm:pb-16">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              aria-hidden="true"
            />
            <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
              Flagship Project · Applied AI &amp; Full-Stack Systems
            </Eyebrow>
          </div>
          <h2
            id="flagship-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
          >
            ManakSetu
          </h2>
          <p className="font-mono text-sm sm:text-base text-accent-primary font-medium tracking-tight">
            &ldquo;From procurement requirements to defensible standards intelligence.&rdquo;
          </p>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            AI-powered intelligence platform engineered to automate the extraction
            of complex technical specifications from Indian public procurement
            tenders and verify compliance against Bureau of Indian Standards (BIS)
            records.
          </p>
        </div>

        {/* Asymmetric 2-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Engineering Whitepaper & Technical Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            {/* The Technical Challenge */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                01 / The Technical Friction
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                Why Pure Dense Vector Search Failed
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Indian procurement tenders contain dense technical bills of quantities
                (BOQ) citing specific regulatory clauses. In benchmark testing, pure
                dense vector embeddings blurred numerical tolerances (e.g., 53 Grade
                vs 43 Grade cement) and failed to prioritize exact code citations
                over general topical relevance.
              </p>
            </div>

            <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

            {/* The Multi-Signal Solution */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                02 / Architectural Decision
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                Weighted Multi-Signal Reranking Pipeline
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Engineered a hybrid retrieval system combining Qdrant vector search
                with BM25 lexical matching. The recommendation pipeline distinguishes
                deterministic rank_results scoring from subsequent LightGBM
                applicability soft-reranking, directly verified against the codebase:
              </p>

              {/* Exact Formula Block */}
              <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated/70 font-mono text-xs space-y-2 text-text-secondary">
                <div className="text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">
                  Scoring Formula (ai-engine/src/ranking.py)
                </div>
                <div className="text-text-primary font-medium leading-relaxed whitespace-pre-line">
                  {`Base Score =
0.40 × Semantic
+ 0.15 × BM25
+ 0.20 × Product Match
+ 0.10 × App/Domain Match
+ 0.10 × Tech Coverage
+ 0.05 × Metadata Confidence

Final Relevance =
min(1.0, Base Score + 0.30 × Explicit Citation Match)`}
                </div>
                <div className="text-[11px] text-accent-primary leading-relaxed">
                  The +0.30 citation boost is a conditional additive boost applied after the base score and clamped at 1.0, not a seventh weighted component.
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

            {/* Verified Technical Highlights */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                03 / Verified System Capabilities
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent-primary font-mono text-xs pt-0.5" aria-hidden="true">
                    •
                  </span>
                  <span>
                    <strong className="text-text-primary font-medium">Dual-Pass Document Ingestion:</strong>{" "}
                    Benchmarked PyMuPDF against pdfplumber for multi-column BOQ table
                    extraction and layout preservation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent-primary font-mono text-xs pt-0.5" aria-hidden="true">
                    •
                  </span>
                  <span>
                    <strong className="text-text-primary font-medium">Zero-Hallucination Grounding:</strong>{" "}
                    Extracted clauses are verified strictly against indexed BIS records
                    with highlighted provenance; unverified fields trigger human-review flags.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent-primary font-mono text-xs pt-0.5" aria-hidden="true">
                    •
                  </span>
                  <span>
                    <strong className="text-text-primary font-medium">Applicability Classification:</strong>{" "}
                    Subsequent LightGBM applicability soft-reranking serialized via locked
                    scikit-learn pipeline to predict applicability without prediction drift.
                  </span>
                </li>
              </ul>
            </div>

            <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

            {/* Ownership & Context Transparency */}
            <div className="space-y-2 text-xs font-mono text-text-tertiary">
              <div className="text-text-secondary font-medium">
                Team Context (Smart India Hackathon · SIH 26108)
              </div>
              <p className="leading-relaxed">
                Dipanshi led product design, UI architecture in Figma &amp; Next.js/React,
                and AI retrieval/ranking integration. Backend microservices built in
                collaboration with team contributors. Batch queue architecture (Celery/Redis)
                marked for next phase.
              </p>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                href="#manaksetu"
                className="gap-2 text-xs h-10 px-5"
              >
                <span>Flagship Case Study</span>
                <span className="text-xs" aria-hidden="true">
                  →
                </span>
              </Button>

              <Button
                variant="outline"
                size="md"
                href={siteConfig.links.github}
                external
                className="gap-1.5 text-xs h-10 px-4"
              >
                <span>Codebase Repository</span>
                <span className="text-xs" aria-hidden="true">
                  ↗
                </span>
              </Button>
            </div>
          </div>

          {/* Right Column: Authentic Split-View Verification Interface Frame */}
          <div className="lg:col-span-6 w-full">
            <div
              className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-7 shadow-sm space-y-6 select-none"
              aria-label="ManakSetu tender compliance audit preview"
            >
              {/* Frame Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/40"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                    Verification Audit Engine
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                    aria-hidden="true"
                  />
                  <span>Grounded Proof</span>
                </div>
              </div>

              {/* Split Verification Panels */}
              <div className="space-y-4">
                {/* Panel 1: Tender Specification Extract */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-text-tertiary uppercase tracking-wider">
                      Input Tender Extract
                    </span>
                    <span className="text-text-secondary">
                      BOQ_Civil_Tender_2024.pdf
                    </span>
                  </div>
                  <div className="p-2.5 rounded border border-amber-500/20 bg-amber-500/5 text-xs font-mono text-text-primary leading-relaxed">
                    &ldquo;Supply of 53 Grade Ordinary Portland Cement conforming to
                    relevant Indian Standards. Minimum 28-day compressive strength of
                    53 MPa required for RCC structure.&rdquo;
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary pt-1">
                    <span>Target: Cement Specification</span>
                    <span>Clause 4.2 · Civil Section</span>
                  </div>
                </div>

                {/* Connection Indicator */}
                <div className="flex items-center justify-center -my-1 text-text-tertiary font-mono text-xs">
                  <span className="px-2 py-0.5 rounded border border-border-subtle bg-surface text-[10px] uppercase tracking-wider">
                    Hybrid Retrieval &amp; Multi-Signal Match ↳
                  </span>
                </div>

                {/* Panel 2: Verified BIS Standard Grounding */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-accent-primary uppercase tracking-wider font-semibold">
                      Matched BIS Standard
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                      Confidence: High (0.94)
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-sm font-semibold text-text-primary">
                      IS 12269:2013
                    </div>
                    <div className="text-xs text-text-secondary">
                      Ordinary Portland Cement, 53 Grade — Specification
                    </div>
                  </div>

                  <div className="p-2.5 rounded border border-border-subtle bg-surface text-xs font-mono text-text-primary space-y-1">
                    <span className="text-[10px] text-text-tertiary uppercase block">
                      Evidence Provenance (Clause 6.2 · Table 2)
                    </span>
                    <p className="text-text-secondary leading-relaxed">
                      &ldquo;28-day compressive strength shall be not less than 53 MPa.
                      Verified from indexed Bureau of Indian Standards catalog.&rdquo;
                    </p>
                  </div>

                  {/* Multi-Signal Breakdown Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[10px] text-text-tertiary">
                    <div className="p-2 rounded border border-border-subtle bg-surface text-center space-y-0.5">
                      <div className="text-text-primary font-semibold">0.91</div>
                      <div>Semantic Cosine</div>
                    </div>
                    <div className="p-2 rounded border border-border-subtle bg-surface text-center space-y-0.5">
                      <div className="text-text-primary font-semibold">0.88</div>
                      <div>BM25 Lexical</div>
                    </div>
                    <div className="p-2 rounded border border-border-subtle bg-surface text-center space-y-0.5">
                      <div className="text-emerald-600 dark:text-emerald-400 font-semibold">100%</div>
                      <div>Clause Grounding</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Flow Strip */}
              <div className="pt-3 border-t border-border-subtle space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                  End-to-End Pipeline
                </span>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-text-secondary">
                  <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                    Tender PDF
                  </span>
                  <span className="text-text-tertiary">→</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                    PyMuPDF
                  </span>
                  <span className="text-text-tertiary">→</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                    Qdrant + BM25
                  </span>
                  <span className="text-text-tertiary">→</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                    Reranking
                  </span>
                  <span className="text-text-tertiary">→</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-accent-primary">
                    Audit Report
                  </span>
                </div>
              </div>

              {/* Verified Stack Taxonomy */}
              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary">
                  FastAPI
                </span>
                <span className="px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary">
                  Qdrant Cloud
                </span>
                <span className="px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary">
                  BM25
                </span>
                <span className="px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary">
                  Gemini API
                </span>
                <span className="px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary">
                  PyMuPDF
                </span>
                <span className="px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary">
                  PostgreSQL
                </span>
                <span className="px-2 py-0.5 rounded border border-border-subtle bg-surface-elevated text-text-secondary">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
