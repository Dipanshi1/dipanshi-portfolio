import * as React from "react";
import { Container } from "@/components/layout/container";

export function DocumentExtraction() {
  return (
    <section
      id="extraction"
      aria-labelledby="extraction-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-8 sm:pb-12 border-b border-border-subtle font-mono text-xs text-text-tertiary">
          <span className="text-accent-primary font-bold text-sm sm:text-base">04</span>
          <span className="text-border-subtle">/</span>
          <span className="uppercase tracking-widest text-text-secondary font-semibold">
            Document Extraction Layer
          </span>
          <span className="text-border-subtle hidden sm:inline">/</span>
          <span className="hidden sm:inline text-text-tertiary">Dual-Pass Execution Flow</span>
        </div>

        {/* Section Lead */}
        <div className="mt-12 sm:mt-16 max-w-3xl space-y-5">
          <h2
            id="extraction-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]"
          >
            Dual-Pass Extraction &amp; Tabular Layout Resilience
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            Indian public procurement tenders present severe structural challenges: bilingual Hindi
            and English text, legacy multi-column layouts, and dense tabular Bills of Quantities.
            The extraction layer implements a dual-pass strategy to balance millisecond processing speed
            with layout fidelity.
          </p>
        </div>

        {/* Execution Flow Diagram (Level 2/3 Surface) */}
        <div className="mt-12 rounded-xl border border-border-subtle bg-surface shadow-xs overflow-hidden">
          {/* Chrome Header */}
          <div className="px-5 sm:px-8 py-3.5 border-b border-border-subtle bg-surface-elevated/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-primary/20 border border-accent-primary/50" aria-hidden="true" />
              <span className="font-semibold uppercase tracking-wider text-text-primary text-[11px]">
                Extraction Execution Flow // kartikey/document_processing/extractor.py
              </span>
            </div>
            <div className="text-[10px] text-text-tertiary">
              Deterministic Dual-Pass Ingestion
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Input Node */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border-subtle bg-surface-elevated/40 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-accent-primary font-bold text-xs">INPUT</span>
                <span className="text-text-primary font-semibold">Tender File Stream</span>
                <span className="text-text-tertiary text-[11px]">(.pdf, .docx multi-page tender document)</span>
              </div>
              <span className="text-[11px] text-text-tertiary hidden sm:inline">SHA-256 Validated</span>
            </div>

            {/* Split Flow: Primary vs Fallback */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
              {/* Primary Path: PyMuPDF */}
              <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-lg border border-border-subtle bg-canvas space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
                    <span className="text-accent-primary uppercase tracking-wider font-semibold text-[11px]">
                      Primary Path: PyMuPDF (fitz)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[10px] text-text-secondary">
                      Default Engine
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-text-primary text-base">
                    High-Throughput Stream Ingestion
                  </h3>

                  <ul className="space-y-2.5 font-sans text-xs text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary font-mono text-xs pt-0.5">•</span>
                      <span>
                        <strong className="text-text-primary font-medium">Native Unicode &amp; Devanagari:</strong>{" "}
                        Preserves complex Devanagari ligatures and font encodings common in bilingual
                        Indian government tender notices.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary font-mono text-xs pt-0.5">•</span>
                      <span>
                        <strong className="text-text-primary font-medium">Minimal Memory Footprint:</strong>{" "}
                        C-level bindings allow rapid extraction of 100+ page tenders without excessive
                        memory spikes in containerized microservices.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary font-mono text-xs pt-0.5">•</span>
                      <span>
                        <strong className="text-text-primary font-medium">Structured Page Delimiters:</strong>{" "}
                        Automatically inserts explicit <code className="font-mono text-[11px] px-1 py-0.5 bg-surface-elevated rounded border border-border-subtle">--- Page N ---</code> markers
                        enabling downstream requirement tracking to cite exact pages.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                  <span>Execution Outcome:</span>
                  <span>Fast Extraction (90%+ clean tenders)</span>
                </div>
              </div>

              {/* Fallback Path: pdfplumber */}
              <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-lg border border-border-subtle bg-canvas space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
                    <span className="text-accent-primary uppercase tracking-wider font-semibold text-[11px]">
                      Fallback Path: pdfplumber
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[10px] text-text-secondary">
                      Structural Fallback
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-text-primary text-base">
                    Coordinate-Aware Layout Recovery
                  </h3>

                  <ul className="space-y-2.5 font-sans text-xs text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary font-mono text-xs pt-0.5">•</span>
                      <span>
                        <strong className="text-text-primary font-medium">Multi-Column Geometry:</strong>{" "}
                        Applies bounding-box coordinate tracking to prevent multi-column tender text from
                        being interleaved across columns into unintelligible paragraphs.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary font-mono text-xs pt-0.5">•</span>
                      <span>
                        <strong className="text-text-primary font-medium">Dense Tabular BOQ Extraction:</strong>{" "}
                        Resolves nested table boundaries, preserving itemized parameter rows alongside
                        corresponding unit values and acceptable tolerances.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary font-mono text-xs pt-0.5">•</span>
                      <span>
                        <strong className="text-text-primary font-medium">Conditional Invocation:</strong>{" "}
                        Triggered when table density or column disorder heuristics are detected,
                        avoiding unnecessary latency overhead on clean narrative tenders.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-text-secondary flex items-center justify-between">
                  <span>Execution Outcome:</span>
                  <span>Geometry-Preserved Structured Recovery</span>
                </div>
              </div>
            </div>

            {/* Downstream Emission Node */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-border-subtle bg-surface-elevated/40 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-accent-primary font-bold text-xs">EMISSION</span>
                <span className="text-text-primary font-semibold">Page-Delimited Normalized Text Stream</span>
              </div>
              <span className="text-[11px] text-accent-primary hidden sm:inline">
                Fed to Gemini 1.5 Parameter Isolator ↳
              </span>
            </div>
          </div>
        </div>

        {/* Explicit Defensive Edge Conditions (Level 2 Hairline Ledger) */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle font-mono text-xs">
            <span className="uppercase tracking-wider text-text-primary font-semibold text-xs">
              Defensive Document Ingestion Policies &amp; Edge Guards
            </span>
            <span className="text-text-tertiary text-[11px]">System Guardrails</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-4 sm:p-5 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between text-text-tertiary uppercase text-[10px]">
                <span>Edge Condition 01</span>
                <span className="text-amber-600 dark:text-amber-400">Strict Error Halt</span>
              </div>
              <span className="text-text-primary font-semibold block text-sm font-sans">
                Scanned Document Guard
              </span>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                If the extracted text is under 100 characters (<code className="font-mono text-[11px]">_MIN_TEXT_LENGTH = 100</code>),
                the pipeline halts extraction and raises an explicit <code className="font-mono text-[11px] text-amber-600 dark:text-amber-400">SCANNED_PDF</code> error.
                This prevents hallucinated LLM extraction on image-only scans.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between text-text-tertiary uppercase text-[10px]">
                <span>Edge Condition 02</span>
                <span className="text-amber-600 dark:text-amber-400">Worker Safety</span>
              </div>
              <span className="text-text-primary font-semibold block text-sm font-sans">
                Encryption &amp; Corrupt File Guards
              </span>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                Password-protected tender submissions are rejected early with <code className="font-mono text-[11px] text-amber-600 dark:text-amber-400">ENCRYPTED_PDF</code> exceptions,
                protecting the worker queue from indefinite hangs or memory leaks.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between text-text-tertiary uppercase text-[10px]">
                <span>Edge Condition 03</span>
                <span className="text-emerald-600 dark:text-emerald-400">Clause Traceability</span>
              </div>
              <span className="text-text-primary font-semibold block text-sm font-sans">
                Deterministic Page Provenance
              </span>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                Each page is tagged with an immutable header. When downstream Gemini reasoning
                identifies a requirement, it links directly to the physical source page, allowing
                officers to immediately verify the original PDF clause.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
