import * as React from "react";
import { Container } from "@/components/layout/container";

export function DocumentExtraction() {
  return (
    <section
      id="extraction"
      aria-labelledby="extraction-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl pb-12 sm:pb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
            04 / Document Extraction Layer
          </span>
          <h2
            id="extraction-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            Dual-Pass Extraction &amp; Tabular Layout Resilience
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            Indian public procurement tenders present diverse structural challenges: bilingual Hindi
            and English text, legacy multi-column layouts, and dense tabular Bills of Quantities.
            The extraction layer implements a dual-pass strategy to balance processing speed with
            layout fidelity.
          </p>
        </div>

        {/* Dual Parser Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Primary Parser: PyMuPDF */}
          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <div>
                <span className="text-accent-primary uppercase tracking-wider font-semibold block">
                  Primary Parser: PyMuPDF (fitz)
                </span>
                <span className="text-[11px] text-text-tertiary">
                  High-Throughput Stream Ingestion
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[10px] text-text-secondary">
                Default Engine
              </span>
            </div>

            <ul className="space-y-2.5 font-sans text-xs text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-primary font-mono text-xs pt-0.5">•</span>
                <span>
                  <strong className="text-text-primary font-medium">Native Unicode &amp; Devanagari:</strong>{" "}
                  Preserves complex Devanagari ligatures and font encodings common in bilingual
                  Indian central and state government tender notices.
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
                  <strong className="text-text-primary font-medium">Page Boundary Preservation:</strong>{" "}
                  Automatically inserts structured markers (<code className="font-mono text-[11px] px-1 py-0.5 bg-surface-elevated rounded border border-border-subtle">--- Page N ---</code>)
                  enabling downstream requirement tracking to cite original page locations.
                </span>
              </li>
            </ul>
          </div>

          {/* Fallback Parser: pdfplumber */}
          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <div>
                <span className="text-accent-primary uppercase tracking-wider font-semibold block">
                  Fallback Parser: pdfplumber
                </span>
                <span className="text-[11px] text-text-tertiary">
                  Coordinate &amp; Layout-Aware Engine
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[10px] text-text-secondary">
                Structural Fallback
              </span>
            </div>

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
                  <strong className="text-text-primary font-medium">Selective Invocation:</strong>{" "}
                  Invoked selectively when table density or column disorder thresholds are detected,
                  avoiding unnecessary latency overhead on clean narrative tenders.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Robustness Mechanisms Block */}
        <div className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface-elevated/70 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle font-mono text-xs">
            <span className="font-semibold uppercase tracking-wider text-text-primary">
              Defensive Document Ingestion Policies
            </span>
            <span className="text-text-tertiary text-[11px]">
              kartikey/document_processing/extractor.py
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="space-y-2">
              <span className="text-text-primary font-semibold block">
                1. Scanned Document Detection
              </span>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                If the extracted text content is under 100 characters (<code className="font-mono text-[11px]">_MIN_TEXT_LENGTH = 100</code>),
                the pipeline halts extraction and raises an explicit <code className="font-mono text-[11px] text-amber-600 dark:text-amber-400">SCANNED_PDF</code> error.
                This prevents hallucinated extraction on image-only scans.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-text-primary font-semibold block">
                2. Encryption &amp; Corrupt File Guards
              </span>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                Password-protected tender submissions are rejected early with <code className="font-mono text-[11px] text-amber-600 dark:text-amber-400">ENCRYPTED_PDF</code> exceptions,
                protecting the worker queue from indefinite hangs or memory leaks.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-text-primary font-semibold block">
                3. Traceable Page Provenance
              </span>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                Each page is tagged with a deterministic header. When downstream Gemini reasoning
                identifies a requirement, it links directly to the physical source page, allowing
                procurement officers to immediately verify the original PDF clause.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
