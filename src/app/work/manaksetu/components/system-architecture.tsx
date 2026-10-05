import * as React from "react";
import { Container } from "@/components/layout/container";

export function SystemArchitecture() {
  const pipelineSteps = [
    {
      num: "01",
      title: "Document Ingestion",
      technology: "FastAPI · Storage · Multi-Part Upload",
      description:
        "Accepts multi-page government tender documents (PDF/DOCX). Validates MIME type, calculates cryptographic SHA-256 hash for version caching, and performs initial file health check.",
      input: "Raw Tender Document (.pdf, .docx)",
      output: "Validated Binary Stream & Path",
    },
    {
      num: "02",
      title: "Dual-Pass Extraction",
      technology: "PyMuPDF (fitz) Primary · pdfplumber Fallback",
      description:
        "Fast text stream extraction preserving Unicode and Devanagari characters. Falls back to coordinate-aware pdfplumber if multi-column BOQ table layouts are detected. Emits explicit '--- Page N ---' delimiters.",
      input: "Document File Stream",
      output: "Page-Delimited Normalized Text",
    },
    {
      num: "03",
      title: "Requirement Isolation",
      technology: "Gemini 1.5 · Structured Schema Contract",
      description:
        "Extracts discrete procurement line items from BOQ schedules into typed JSON records: product category, application domain, physical parameters (value, unit, tolerance), and cited IS codes.",
      input: "Normalized Document Text",
      output: "Structured Requirement Objects",
    },
    {
      num: "04",
      title: "Hybrid Retrieval",
      technology: "Qdrant Vector DB + BM25 Lexical Index",
      description:
        "Dual retrieval strategy across 10,000+ indexed Bureau of Indian Standards catalog records. Qdrant performs dense cosine similarity, while BM25 handles exact alphanumeric standard numbers and acronyms.",
      input: "Requirement Query Representation",
      output: "Merged Candidate Standard Pool",
    },
    {
      num: "05",
      title: "Deterministic Ranking",
      technology: "ranking.py · 6-Factor Multi-Signal Engine",
      description:
        "Scores candidate standards through a deterministic linear weighting of semantic, lexical, product, domain, technical, and metadata signals. Adds a conditional +0.30 boost for explicit citations, clamped to 1.0.",
      input: "Candidate Standards + Tender Specs",
      output: "Calibrated Relevance Scores [0, 1]",
    },
    {
      num: "06",
      title: "Applicability Reranking",
      technology: "LightGBM · scikit-learn Locked Pipeline",
      description:
        "Applies a trained gradient boosted model (standiq_applicability_model_v2.joblib) to evaluate requirement-standard applicability probability without altering deterministic base retrieval ordering.",
      input: "Ranked Candidate Features",
      output: "Applicability Verdict & Probabilities",
    },
    {
      num: "07",
      title: "Evidence & Audit Assembly",
      technology: "Next.js / React Console · Provenance Assembler",
      description:
        "Pairs tender requirement excerpts with verified BIS clause excerpts, highlight provenance, confidence indicators, and human-review flags for ambiguous or unverified catalog entries.",
      input: "Scored & Verified Standard Payloads",
      output: "Interactive Audit Console & PDF Report",
    },
  ];

  return (
    <section
      id="architecture"
      aria-labelledby="architecture-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl pb-12 sm:pb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
            02 / Technical Architecture
          </span>
          <h2
            id="architecture-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            End-to-End System Pipeline
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            The ManakSetu architecture decouples high-speed text ingestion, parameter extraction,
            hybrid retrieval, deterministic multi-signal scoring, and evidence assembly into a
            fault-tolerant, inspectable pipeline.
          </p>
        </div>

        {/* Visual Engineering Pipeline Diagram */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface/50 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Pipeline Data Flow Architecture
            </span>
            <span className="font-mono text-[11px] text-text-tertiary">
              Deterministic &amp; Evidence-Grounded
            </span>
          </div>

          {/* Architecture Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {/* Box 1 */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] text-text-tertiary uppercase tracking-wider block">Input Layer</span>
                <span className="text-text-primary font-semibold block text-sm mt-1">Tender Document</span>
                <p className="text-text-secondary font-sans text-xs mt-1">PDF / DOCX government procurement notice</p>
              </div>
              <div className="pt-2 border-t border-border-subtle/60 text-[10px] text-text-tertiary">
                Format validation &amp; SHA-256
              </div>
            </div>

            {/* Box 2 */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] text-text-tertiary uppercase tracking-wider block">Extraction Layer</span>
                <span className="text-text-primary font-semibold block text-sm mt-1">Dual-Pass Parser</span>
                <p className="text-text-secondary font-sans text-xs mt-1">PyMuPDF text stream + pdfplumber layout fallback</p>
              </div>
              <div className="pt-2 border-t border-border-subtle/60 text-[10px] text-accent-primary">
                Emits &ldquo;--- Page N ---&rdquo; markers
              </div>
            </div>

            {/* Box 3 */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] text-text-tertiary uppercase tracking-wider block">Structuring Layer</span>
                <span className="text-text-primary font-semibold block text-sm mt-1">Parameter Isolation</span>
                <p className="text-text-secondary font-sans text-xs mt-1">Gemini 1.5 typed extraction of BOQ specifications</p>
              </div>
              <div className="pt-2 border-t border-border-subtle/60 text-[10px] text-text-tertiary">
                Parameters, tolerances, citations
              </div>
            </div>

            {/* Box 4 */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] text-text-tertiary uppercase tracking-wider block">Retrieval Engine</span>
                <span className="text-text-primary font-semibold block text-sm mt-1">Hybrid Retrieval</span>
                <p className="text-text-secondary font-sans text-xs mt-1">Qdrant dense vector search + BM25 lexical keyword match</p>
              </div>
              <div className="pt-2 border-t border-border-subtle/60 text-[10px] text-emerald-600 dark:text-emerald-400">
                BIS Catalog Index (10k+ records)
              </div>
            </div>
          </div>

          {/* Sub-Pipeline Arrow / Flow Strip */}
          <div className="flex items-center justify-center gap-2 py-1 text-text-tertiary font-mono text-xs">
            <span className="px-3 py-1 rounded border border-border-subtle bg-surface text-[11px] uppercase tracking-wider">
              Candidate Pool (Top-K) ↳
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            {/* Box 5 */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] text-text-tertiary uppercase tracking-wider block">Ranking Stage 1</span>
                <span className="text-text-primary font-semibold block text-sm mt-1">Deterministic Ranking</span>
                <p className="text-text-secondary font-sans text-xs mt-1">
                  6-Signal weighted base score + conditional +0.30 citation boost (clamped at 1.0)
                </p>
              </div>
              <div className="pt-2 border-t border-border-subtle/60 text-[10px] text-text-tertiary">
                Implemented in ranking.py
              </div>
            </div>

            {/* Box 6 */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] text-text-tertiary uppercase tracking-wider block">Ranking Stage 2</span>
                <span className="text-text-primary font-semibold block text-sm mt-1">Applicability Reranking</span>
                <p className="text-text-secondary font-sans text-xs mt-1">
                  LightGBM classifier predicts applicability without modifying deterministic ordering
                </p>
              </div>
              <div className="pt-2 border-t border-border-subtle/60 text-[10px] text-text-tertiary">
                scikit-learn 1.9.0 locked pipeline
              </div>
            </div>

            {/* Box 7 */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] text-text-tertiary uppercase tracking-wider block">Output &amp; Presentation</span>
                <span className="text-text-primary font-semibold block text-sm mt-1">Evidence-Grounded UI</span>
                <p className="text-text-secondary font-sans text-xs mt-1">
                  Split tender vs standard inspection with clause provenance &amp; PDF audit export
                </p>
              </div>
              <div className="pt-2 border-t border-border-subtle/60 text-[10px] text-accent-primary">
                Human-in-the-loop review flags
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight text-text-primary">
            Pipeline Stage Specifications
          </h3>
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-border-subtle border border-border-subtle rounded-lg bg-surface">
              {pipelineSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-4 sm:p-5 grid grid-cols-12 gap-4 items-start text-xs font-mono"
                >
                  <div className="col-span-1 text-accent-primary font-bold">
                    {step.num}
                  </div>
                  <div className="col-span-3 space-y-1">
                    <span className="font-semibold text-text-primary block text-sm">
                      {step.title}
                    </span>
                    <span className="text-text-tertiary text-[11px] block">
                      {step.technology}
                    </span>
                  </div>
                  <div className="col-span-5 font-sans text-text-secondary text-xs leading-relaxed">
                    {step.description}
                  </div>
                  <div className="col-span-3 space-y-1 text-[11px] text-text-tertiary">
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
        </div>
      </Container>
    </section>
  );
}
