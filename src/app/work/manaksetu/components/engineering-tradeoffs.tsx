import * as React from "react";
import { Container } from "@/components/layout/container";

interface TradeoffItem {
  num: string;
  decision: string;
  decisionDetail: string;
  why: string;
  tradeoff: string;
}

const TRADEOFFS: TradeoffItem[] = [
  {
    num: "01",
    decision: "Hybrid Retrieval Architecture",
    decisionDetail: "Coupled Qdrant Cloud dense vector search with Rank-BM25 lexical indexing rather than relying on pure neural embeddings.",
    why: "Semantic search captures high-level conceptual meaning across differing tender vocabulary, while BM25 guarantees exact alphanumeric standard codes (e.g. 'IS 10322') and rigid engineering acronyms ('OPC', 'THD', 'IP66') receive mandatory weighting.",
    tradeoff: "Additional system complexity: dual indexing pipelines, latency coordination between vector store and lexical engine, and cross-metric score normalization.",
  },
  {
    num: "02",
    decision: "Deterministic Linear Ranking",
    decisionDetail: "Implemented a 6-factor linear mathematical formula in ranking.py, reserving machine learning (LightGBM) strictly for downstream applicability classification.",
    why: "Public procurement committees require legally defensible, reproducible decisions. If an auditor asks why Standard A outranked Standard B, an opaque transformer cross-encoder cannot provide a verifiable breakdown. The deterministic formula allows inspecting exact contributions.",
    tradeoff: "Less adaptive to complex non-linear feature interactions than a deep cross-encoder; requires careful calibration of linear signal weights.",
  },
  {
    num: "03",
    decision: "Dual-Pass Text Extraction Pipeline",
    decisionDetail: "Pairing PyMuPDF (fitz) for fast stream extraction with pdfplumber for coordinate-aware table layouts, deliberately rejecting image-only scans via explicit error codes.",
    why: "Running monolithic OCR over 100+ page tenders imposes prohibitive latency and memory cost in microservices. PyMuPDF processes digital PDFs in milliseconds while preserving Hindi/Devanagari Unicode encodings. Fallback pdfplumber handles complex multi-column BOQ schedules.",
    tradeoff: "Requires heuristic fallback invocation logic; image-only scanned PDFs are halted with SCANNED_PDF exceptions rather than processed inline.",
  },
  {
    num: "04",
    decision: "Conditional Additive Citation Boost (+0.30)",
    decisionDetail: "Applied a conditional additive boost (+0.30 × ref_boost, clamped at 1.0) for explicit tender citations after computing the base linear score.",
    why: "An explicit standard citation in a government tender is a binding legal mandate, not an optional feature. If treated as a fractional 10% or 15% weight, a cited standard could be outscored by an un-cited standard with higher descriptive word overlap.",
    tradeoff: "Non-linear scoring step requires strict boundary clamping and explicit documentation to ensure procurement auditors understand it is not a 7th base weight.",
  },
];

export function EngineeringTradeoffs() {
  return (
    <section
      id="tradeoffs"
      aria-labelledby="tradeoffs-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-8 sm:pb-12 border-b border-border-subtle font-mono text-xs text-text-tertiary">
          <span className="text-accent-primary font-bold text-sm sm:text-base">06</span>
          <span className="text-border-subtle">/</span>
          <span className="uppercase tracking-widest text-text-secondary font-semibold">
            Architectural Tradeoffs
          </span>
          <span className="text-border-subtle hidden sm:inline">/</span>
          <span className="hidden sm:inline text-text-tertiary">Technical Decision Ledger</span>
        </div>

        {/* Section Lead */}
        <div className="mt-12 sm:mt-16 max-w-3xl space-y-5">
          <h2
            id="tradeoffs-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]"
          >
            Engineering Tradeoffs &amp; System Constraints
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            Building software for public sector procurement requires prioritizing legal auditability,
            reproducibility, and structural resilience over superficial benchmark chasing. Every key
            system component reflects a deliberate engineering compromise.
          </p>
        </div>

        {/* Editorial Decision Ledger (Level 2 Hairline Matrix) */}
        <div className="mt-12 sm:mt-16 space-y-6">
          <div className="hidden lg:grid grid-cols-12 gap-8 pb-3 border-b border-border-subtle font-mono text-xs text-text-tertiary uppercase tracking-wider">
            <span className="col-span-1">No.</span>
            <span className="col-span-4">Architectural Decision</span>
            <span className="col-span-4">Technical Rationale (Why)</span>
            <span className="col-span-3">Operational Tradeoff</span>
          </div>

          <div className="divide-y divide-border-subtle border-t lg:border-t-0 border-b border-border-subtle">
            {TRADEOFFS.map((item) => (
              <div
                key={item.num}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start hover:bg-surface/30 transition-colors duration-150"
              >
                {/* Number & Index */}
                <div className="lg:col-span-1 font-mono text-accent-primary font-bold text-base sm:text-lg">
                  {item.num}
                </div>

                {/* Decision */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="lg:hidden font-mono text-[10px] text-text-tertiary uppercase tracking-wider block">
                    Decision
                  </span>
                  <h3 className="font-semibold text-text-primary text-base font-sans leading-snug">
                    {item.decision}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    {item.decisionDetail}
                  </p>
                </div>

                {/* Why / Rationale */}
                <div className="lg:col-span-4 space-y-1.5">
                  <span className="lg:hidden font-mono text-[10px] text-accent-primary uppercase tracking-wider block font-semibold">
                    Technical Rationale (Why)
                  </span>
                  <p className="text-xs sm:text-sm text-text-primary leading-relaxed font-sans font-normal">
                    {item.why}
                  </p>
                </div>

                {/* Tradeoff */}
                <div className="lg:col-span-3 space-y-1.5">
                  <span className="lg:hidden font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-wider block font-semibold">
                    Operational Tradeoff
                  </span>
                  <div className="p-3 rounded bg-surface border border-border-subtle font-sans text-xs text-text-secondary leading-relaxed">
                    {item.tradeoff}
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
