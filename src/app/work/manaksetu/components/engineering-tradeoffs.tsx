import * as React from "react";
import { Container } from "@/components/layout/container";

export function EngineeringTradeoffs() {
  const tradeoffs = [
    {
      num: "01",
      title: "Hybrid Retrieval vs. Pure Dense Embeddings",
      decision:
        "Engineered a hybrid retrieval system coupling Qdrant Cloud dense vector search with Rank-BM25 lexical indexing, rather than relying solely on dense neural representations.",
      rationale:
        "Dense vectors capture conceptual semantics but blur critical numerical tolerances (such as 53 MPa vs 43 MPa cement compressive strength) and dilute exact alphanumeric standard codes (such as 'IS 10322'). BM25 ensures exact code mentions and technical acronyms receive strong keyword weighting, while dense embeddings resolve vocabulary differences.",
    },
    {
      num: "02",
      title: "Deterministic Linear Ranking vs. Black-Box Neural Reranking",
      decision:
        "Implemented a deterministic 6-factor mathematical formula in ranking.py with auditable linear weights, reserving machine learning (LightGBM) strictly for downstream applicability classification.",
      rationale:
        "Government procurement committees require legally defensible, reproducible decisions. If an auditor asks why Standard A outranked Standard B, an opaque transformer cross-encoder cannot provide a verifiable breakdown. The deterministic formula allows inspecting exact contributions from semantic, BM25, product, domain, parameter coverage, and catalog confidence signals.",
    },
    {
      num: "03",
      title: "Dual-Pass Text Extraction vs. Heavyweight Monolithic OCR",
      decision:
        "Adopted a two-tiered extraction layer pairing PyMuPDF (fitz) for fast stream extraction with pdfplumber for coordinate-aware table layouts, deliberately rejecting image-only scans via explicit error codes.",
      rationale:
        "Running end-to-end OCR over 100+ page tender PDFs imposes severe latency and computational cost on serverless or containerized backends. PyMuPDF processes digital PDFs in milliseconds while preserving Hindi/Devanagari Unicode encodings. Fallback pdfplumber handles complex multi-column BOQ schedules. When a PDF lacks a text layer (_MIN_TEXT_LENGTH < 100), the system fails safely with SCANNED_PDF rather than passing corrupted data downstream.",
    },
    {
      num: "04",
      title: "Additive Citation Boost (+0.30) vs. Weighted Feature Averaging",
      decision:
        "Applied a conditional additive boost (+0.30 × ref_boost, clamped at 1.0) for explicit tender citations after computing the base linear score, rather than including citation match as a diluted 7th weight.",
      rationale:
        "An explicit standard citation in a government tender is a binding legal mandate, not an optional feature. If treated as a fractional 10% or 15% weight, a cited standard could be outscored by an un-cited standard with higher descriptive word overlap. The additive post-score boost guarantees that explicitly cited standards achieve high-confidence rankings while preserving comparative scoring among un-cited standards.",
    },
  ];

  return (
    <section
      id="tradeoffs"
      aria-labelledby="tradeoffs-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl pb-12 sm:pb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
            06 / Architectural Tradeoffs
          </span>
          <h2
            id="tradeoffs-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            Engineering Tradeoffs &amp; System Constraints
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            Building software for public sector procurement requires prioritizing legal auditability,
            reproducibility, and structural resilience over superficial benchmark chasing. Every key
            system component reflects a deliberate engineering compromise.
          </p>
        </div>

        {/* Tradeoffs List */}
        <div className="space-y-8">
          {tradeoffs.map((item) => (
            <div
              key={item.num}
              className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-border-subtle font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-accent-primary font-bold text-sm">{item.num}</span>
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary font-sans">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[11px] text-text-tertiary">Verified Codebase Tradeoff</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 font-mono text-xs">
                <div className="lg:col-span-5 space-y-1.5">
                  <span className="text-text-tertiary uppercase tracking-wider text-[10px] block">
                    Architectural Decision
                  </span>
                  <p className="text-text-primary font-medium leading-relaxed font-sans text-xs sm:text-sm">
                    {item.decision}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-1.5">
                  <span className="text-accent-primary uppercase tracking-wider text-[10px] block font-semibold">
                    Technical Rationale &amp; Operational Defense
                  </span>
                  <p className="text-text-secondary leading-relaxed font-sans text-xs sm:text-sm">
                    {item.rationale}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
