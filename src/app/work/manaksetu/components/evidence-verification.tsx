"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";

interface AuditSample {
  id: string;
  name: string;
  tenderRef: string;
  tenderFile: string;
  clauseLocation: string;
  domain: string;
  tenderExcerpt: string;
  extractedParameters: { label: string; value: string }[];
  matchedStandard: string;
  standardTitle: string;
  provenanceClause: string;
  evidenceQuote: string;
  qcoMandate: string;
  confidenceScore: string;
  signals: {
    semantic: string;
    bm25: string;
    product: string;
    meta: string;
  };
}

const SAMPLES: AuditSample[] = [
  {
    id: "sample-1",
    name: "Tender Sample 01: LED Street Lighting",
    tenderRef: "NIT_MCD-2024-LT-09",
    tenderFile: "NIT_MCD-2024-LT-09_LED_Street_Lighting.pdf",
    clauseLocation: "Page 14 · Clause 8.2",
    domain: "Electrical / Municipal Infrastructure",
    tenderExcerpt:
      "Supply, installation, testing and commissioning of 120W outdoor LED street lighting luminaires. The luminaires shall be rated for operation at 240V AC, 50 Hz, with driver efficiency > 85%, total harmonic distortion (THD) < 10%, and minimum IP66 ingress protection rating.",
    extractedParameters: [
      { label: "Product Category", value: "LED Street Luminaire" },
      { label: "Power Rating", value: "120 Watts @ 240V" },
      { label: "Harmonic Distortion", value: "THD < 10%" },
      { label: "Ingress Protection", value: "IP66 Waterproof" },
    ],
    matchedStandard: "IS 10322 (Part 5/Sec 3): 2012",
    standardTitle: "Luminaires — Particular Requirements — Luminaires for Road and Street Lighting",
    provenanceClause: "Section 3 · Table 1",
    evidenceQuote:
      "Specifies constructional and electrical safety requirements for luminaires intended for road and public street illumination, including ingress protection ratings (minimum IP65/IP66 for outdoor enclosures) and driver distortion parameters.",
    qcoMandate: "Mandatory under QCO S.O. 2357(E)",
    confidenceScore: "0.94 · High Confidence",
    signals: {
      semantic: "0.91",
      bm25: "0.85",
      product: "1.00",
      meta: "1.00",
    },
  },
  {
    id: "sample-2",
    name: "Tender Sample 02: Structural Cement Notice",
    tenderRef: "BOQ_CIVIL-2024-C53",
    tenderFile: "BOQ_Civil_Tender_2024_Notice.pdf",
    clauseLocation: "Page 4 · Clause 4.2",
    domain: "Civil Engineering / RCC Structures",
    tenderExcerpt:
      "Supply and delivery of 53 Grade Ordinary Portland Cement conforming to relevant Indian Standards for heavy reinforced cement concrete works. Minimum 28-day compressive strength shall not be less than 53 MPa with initial setting time not less than 30 minutes.",
    extractedParameters: [
      { label: "Material Type", value: "Ordinary Portland Cement" },
      { label: "Strength Grade", value: "53 Grade (≥ 53 MPa)" },
      { label: "Setting Time", value: "Initial ≥ 30 min" },
      { label: "Application Domain", value: "Structural RCC" },
    ],
    matchedStandard: "IS 12269:2013",
    standardTitle: "Ordinary Portland Cement, 53 Grade — Specification (Second Revision)",
    provenanceClause: "Clause 6.2 · Table 2",
    evidenceQuote:
      "28-day compressive strength shall be not less than 53 MPa (53 N/mm²). Prescribes chemical and physical testing protocols for 53 grade OPC in heavy infrastructure applications.",
    qcoMandate: "Mandatory under Cement (Quality Control) Order",
    confidenceScore: "0.96 · High Confidence",
    signals: {
      semantic: "0.93",
      bm25: "0.90",
      product: "1.00",
      meta: "1.00",
    },
  },
];

export function EvidenceVerification() {
  const [selectedSample, setSelectedSample] = React.useState<AuditSample>(SAMPLES[0]);

  return (
    <section
      id="verification"
      aria-labelledby="verification-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-8 sm:pb-12 border-b border-border-subtle font-mono text-xs text-text-tertiary">
          <span className="text-accent-primary font-bold text-sm sm:text-base">05</span>
          <span className="text-border-subtle">/</span>
          <span className="uppercase tracking-widest text-text-secondary font-semibold">
            Product Design &amp; Audit Interaction
          </span>
          <span className="text-border-subtle hidden sm:inline">/</span>
          <span className="hidden sm:inline text-text-tertiary">Visual Centerpiece Exhibit</span>
        </div>

        {/* Section Lead */}
        <div className="mt-12 sm:mt-16 max-w-3xl space-y-5">
          <h2
            id="verification-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]"
          >
            Evidence-Grounded Verification Interface
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            A primary product design objective was eliminating opaque &ldquo;black-box&rdquo;
            AI scores. In regulatory procurement audits, officers must never be presented with an
            unjustified percentage. The interface is engineered as an interactive split audit
            exhibit that explicitly explains <em>why</em> an Indian Standard applies.
          </p>
        </div>

        {/* Distinction Banner: Retrieval Match vs Applicability (Level 2 Surface) */}
        <div className="mt-12 p-6 rounded-xl border border-border-subtle bg-surface-elevated/40 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
            <span className="text-text-primary uppercase tracking-wider font-semibold text-xs">
              Architectural Separation of Concerns
            </span>
            <span className="text-accent-primary text-[11px]">Core UI Paradigm</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
              <div className="flex items-center justify-between text-accent-primary uppercase tracking-wider text-[11px] font-semibold">
                <span>Retrieval Match</span>
                <span>Statistical Proximity</span>
              </div>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                Evaluates cosine embedding similarity and BM25 lexical overlap between tender phrases
                and indexed catalog entries. Measures <em>how closely the language aligns</em>,
                scaled deterministically to [0.0, 1.0].
              </p>
            </div>

            <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 space-y-2">
              <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px] font-semibold">
                <span>Legal Applicability</span>
                <span>Statutory Mandate</span>
              </div>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                Evaluates whether the matched standard is enforced under a gazetted Ministry Quality
                Control Order (QCO), confirming active statutory enforcement and clause-level
                technical compliance.
              </p>
            </div>
          </div>
        </div>

        {/* THE VISUAL CENTERPIECE: Interactive Split-View Console Exhibit (Level 3 Artifact) */}
        <div className="mt-12 rounded-xl border border-border-subtle bg-surface shadow-sm overflow-hidden transition-colors duration-150">
          {/* Console Header Bar */}
          <div className="px-5 sm:px-8 py-3.5 border-b border-border-subtle bg-surface-elevated/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-primary/20 border border-accent-primary/50" aria-hidden="true" />
              <span className="font-semibold uppercase tracking-wider text-text-primary text-[11px]">
                Procurement Audit Inspector // Split-View Exhibit
              </span>
            </div>

            {/* Interactive Sample Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-text-tertiary text-[11px] hidden md:inline">Inspect Dataset:</span>
              <div className="flex items-center gap-1.5 p-0.5 rounded bg-surface border border-border-subtle">
                {SAMPLES.map((sample) => {
                  const isActive = selectedSample.id === sample.id;
                  return (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => setSelectedSample(sample)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all duration-150 ${
                        isActive
                          ? "bg-surface-elevated text-text-primary font-semibold shadow-xs"
                          : "text-text-tertiary hover:text-text-secondary"
                      }`}
                    >
                      {sample.tenderRef}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Audit Exhibit Body: Split Composition */}
          <div className="p-5 sm:p-8 lg:p-10 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Tender Excerpt */}
              <div className="lg:col-span-6 flex flex-col justify-between p-5 sm:p-6 rounded-lg border border-border-subtle bg-surface-elevated/40 space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
                    <span className="text-text-tertiary uppercase tracking-wider text-[11px]">
                      01 / Tender Requirement Excerpt
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-[11px] text-text-secondary font-medium">
                      {selectedSample.clauseLocation}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-medium text-text-primary block truncate">
                      {selectedSample.tenderFile}
                    </span>
                    <div className="p-4 rounded border border-amber-500/25 bg-amber-500/5 text-xs font-mono text-text-primary leading-relaxed">
                      &ldquo;{selectedSample.tenderExcerpt}&rdquo;
                    </div>
                  </div>

                  {/* Extracted Parameters Matrix */}
                  <div className="space-y-2 pt-1 font-mono">
                    <span className="text-[11px] text-text-tertiary uppercase tracking-wider block">
                      Isolated Procurement Parameters:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedSample.extractedParameters.map((param) => (
                        <div
                          key={param.label}
                          className="p-2.5 rounded bg-surface border border-border-subtle space-y-0.5"
                        >
                          <span className="text-[10px] text-text-tertiary uppercase block">
                            {param.label}
                          </span>
                          <span className="text-text-primary font-medium text-xs">
                            {param.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-text-tertiary flex items-center justify-between">
                  <span>Domain: {selectedSample.domain}</span>
                  <span>Gemini 1.5 Contract Grounded</span>
                </div>
              </div>

              {/* Right Column: Matched Standard */}
              <div className="lg:col-span-6 flex flex-col justify-between p-5 sm:p-6 rounded-lg border border-border-subtle bg-surface-elevated/40 space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
                    <span className="text-accent-primary uppercase tracking-wider font-semibold text-[11px]">
                      02 / Matched Bureau of Indian Standard
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                      {selectedSample.confidenceScore}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-base sm:text-lg font-bold text-text-primary">
                      {selectedSample.matchedStandard}
                    </div>
                    <div className="text-xs text-text-secondary font-sans leading-snug">
                      {selectedSample.standardTitle}
                    </div>
                  </div>

                  {/* Evidence Provenance Quote */}
                  <div className="p-4 rounded border border-border-subtle bg-surface space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-[10px] text-text-tertiary uppercase">
                      <span>Evidence Provenance: {selectedSample.provenanceClause}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified Active</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed font-sans text-xs">
                      &ldquo;{selectedSample.evidenceQuote}&rdquo;
                    </p>
                  </div>

                  {/* 4 Signal Breakdown Meters */}
                  <div className="space-y-2 pt-1 font-mono">
                    <span className="text-[11px] text-text-tertiary uppercase tracking-wider block">
                      Mathematical Signal Attribution:
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2 rounded bg-surface border border-border-subtle space-y-0.5">
                        <div className="text-text-primary font-bold">{selectedSample.signals.semantic}</div>
                        <div className="text-[10px] text-text-tertiary">Semantic</div>
                      </div>
                      <div className="p-2 rounded bg-surface border border-border-subtle space-y-0.5">
                        <div className="text-text-primary font-bold">{selectedSample.signals.bm25}</div>
                        <div className="text-[10px] text-text-tertiary">BM25</div>
                      </div>
                      <div className="p-2 rounded bg-surface border border-border-subtle space-y-0.5">
                        <div className="text-emerald-600 dark:text-emerald-400 font-bold">{selectedSample.signals.product}</div>
                        <div className="text-[10px] text-text-tertiary">Product</div>
                      </div>
                      <div className="p-2 rounded bg-surface border border-border-subtle space-y-0.5">
                        <div className="text-accent-primary font-bold">{selectedSample.signals.meta}</div>
                        <div className="text-[10px] text-text-tertiary">Meta Conf</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regulatory Mandate Footer */}
                <div className="pt-3 border-t border-border-subtle flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{selectedSample.qcoMandate}</span>
                  </div>
                  <span className="text-text-tertiary">Current Catalog Edition</span>
                </div>
              </div>
            </div>

            {/* Audit Caveat Notice */}
            <div className="pt-4 border-t border-border-subtle/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-text-tertiary leading-relaxed">
              <div>
                <span className="text-text-secondary font-medium">Compliance Audit Transparency:</span>{" "}
                Evidence-grounded recommendations assist procurement officials; they do not replace
                statutory administrative review or tender committee determinations.
              </div>
              <span className="text-accent-primary shrink-0">Exportable to Signed PDF Audit Report</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
