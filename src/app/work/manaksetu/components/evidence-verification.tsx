import * as React from "react";
import { Container } from "@/components/layout/container";

export function EvidenceVerification() {
  return (
    <section
      id="verification"
      aria-labelledby="verification-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl pb-12 sm:pb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
            05 / Product Design &amp; Audit Interaction
          </span>
          <h2
            id="verification-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            Evidence-Grounded Verification Interface
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            A primary product design objective was eliminating opaque &ldquo;black-box&rdquo;
            AI scores. In regulatory procurement audits, officers must never be presented with an
            unjustified percentage. The interface is engineered as an interactive split audit
            exhibit that explicitly explains <em>why</em> an Indian Standard applies.
          </p>
        </div>

        {/* Product Design Principles Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 font-mono text-xs">
          <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
            <span className="text-accent-primary uppercase tracking-wider font-semibold block text-[11px]">
              1. Retrieval vs. Applicability
            </span>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Separates the retrieval match (statistical similarity to search terms) from legal
              applicability (whether the standard is officially enforced under a gazetted Quality
              Control Order).
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
            <span className="text-accent-primary uppercase tracking-wider font-semibold block text-[11px]">
              2. Clause-Level Provenance
            </span>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Every match is grounded in an exact clause excerpt, table reference, and catalog
              edition date, allowing immediate human inspection and legal defensibility.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
            <span className="text-accent-primary uppercase tracking-wider font-semibold block text-[11px]">
              3. Human-in-the-Loop Escalation
            </span>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Borderline scores or unverified catalog entries explicitly trigger human-review
              alerts rather than asserting false certainty.
            </p>
          </div>
        </div>

        {/* Polished Editorial Split-View Interface Frame */}
        <div className="rounded-xl border border-border-subtle bg-surface-elevated/50 p-5 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-primary/20 border border-accent-primary/50" />
              <span className="font-semibold uppercase tracking-wider text-text-primary">
                Audit Verification Exhibit · Live System Reproduction
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                Status: Clause Grounded
              </span>
              <span className="text-text-tertiary">·</span>
              <span className="text-text-secondary">Tender Ref: NIT_MCD-2024-LT-09</span>
            </div>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left: Input Tender Specification Excerpt */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-text-tertiary uppercase tracking-wider text-[11px]">
                    Input Tender Excerpt
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[11px] text-text-secondary">
                    Page 14 · Clause 8.2
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-medium text-text-primary">
                    NIT_MCD-2024-LT-09_LED_Street_Lighting.pdf
                  </span>
                  <div className="p-3.5 rounded border border-amber-500/25 bg-amber-500/5 text-xs font-mono text-text-primary leading-relaxed">
                    &ldquo;Supply, installation, testing and commissioning of 120W outdoor LED
                    street lighting luminaires. The luminaires shall be rated for operation at
                    240V AC, 50 Hz, with driver efficiency &gt; 85%, total harmonic distortion
                    (THD) &lt; 10%, and minimum IP66 ingress protection rating.&rdquo;
                  </div>
                </div>

                {/* Extracted Parameters Matrix */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block">
                    Isolated Procurement Parameters
                  </span>
                  <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="p-2 rounded bg-surface-elevated border border-border-subtle space-y-0.5">
                      <span className="text-text-tertiary block text-[10px]">Product Category</span>
                      <span className="text-text-primary font-medium">LED Street Luminaire</span>
                    </div>
                    <div className="p-2 rounded bg-surface-elevated border border-border-subtle space-y-0.5">
                      <span className="text-text-tertiary block text-[10px]">Power Rating</span>
                      <span className="text-text-primary font-medium">120 Watts @ 240V</span>
                    </div>
                    <div className="p-2 rounded bg-surface-elevated border border-border-subtle space-y-0.5">
                      <span className="text-text-tertiary block text-[10px]">Harmonic Distortion</span>
                      <span className="text-text-primary font-medium">THD &lt; 10%</span>
                    </div>
                    <div className="p-2 rounded bg-surface-elevated border border-border-subtle space-y-0.5">
                      <span className="text-text-tertiary block text-[10px]">Ingress Protection</span>
                      <span className="text-text-primary font-medium">IP66 Waterproof</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border-subtle font-mono text-[11px] text-text-tertiary flex items-center justify-between">
                <span>Domain: Electrical / Municipal Lighting</span>
                <span>Gemini 1.5 Extracted</span>
              </div>
            </div>

            {/* Right: Matched BIS Standard & Provenance */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-lg border border-border-subtle bg-surface flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent-primary uppercase tracking-wider font-semibold text-[11px]">
                    Matched Bureau of Indian Standard
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                    Relevance: 0.94 · High Confidence
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-base font-bold text-text-primary">
                    IS 10322 (Part 5/Sec 3): 2012
                  </div>
                  <div className="text-xs text-text-secondary">
                    Luminaires — Particular Requirements — Luminaires for Road and Street Lighting
                  </div>
                </div>

                {/* Grounded Evidence Excerpt */}
                <div className="p-3.5 rounded border border-border-subtle bg-surface-elevated space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-[10px] text-text-tertiary uppercase">
                    <span>Evidence Provenance: Section 3 · Table 1</span>
                    <span className="text-accent-primary">Verified BIS Catalog</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed font-sans text-xs">
                    &ldquo;Specifies constructional and electrical safety requirements for
                    luminaires intended for road and public street illumination, including ingress
                    protection ratings (minimum IP65/IP66 for outdoor enclosures) and driver
                    distortion parameters.&rdquo;
                  </p>
                </div>

                {/* Multi-Signal Breakdown Scores */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block">
                    Mathematical Signal Attribution
                  </span>
                  <div className="grid grid-cols-4 gap-2 font-mono text-[10px] text-center">
                    <div className="p-2 rounded bg-surface-elevated border border-border-subtle space-y-0.5">
                      <div className="text-text-primary font-bold">0.91</div>
                      <div className="text-text-tertiary">Semantic</div>
                    </div>
                    <div className="p-2 rounded bg-surface-elevated border border-border-subtle space-y-0.5">
                      <div className="text-text-primary font-bold">0.85</div>
                      <div className="text-text-tertiary">BM25</div>
                    </div>
                    <div className="p-2 rounded bg-surface-elevated border border-border-subtle space-y-0.5">
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold">1.00</div>
                      <div className="text-text-tertiary">Product</div>
                    </div>
                    <div className="p-2 rounded bg-surface-elevated border border-border-subtle space-y-0.5">
                      <div className="text-accent-primary font-bold">1.00</div>
                      <div className="text-text-tertiary">Meta Conf</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulatory Mandate Footer */}
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>QCO Mandated: S.O. 2357(E)</span>
                </div>
                <span className="text-text-tertiary">Status: Active / Current</span>
              </div>
            </div>
          </div>

          {/* Audit Caveat Notice */}
          <div className="pt-4 border-t border-border-subtle/70 text-[11px] font-mono text-text-tertiary leading-relaxed">
            <span className="text-text-secondary font-medium">Compliance Audit Transparency:</span>{" "}
            The platform provides evidence-grounded recommendations to assist procurement officials.
            It does not replace statutory administrative review or legal tender committee determinations.
          </div>
        </div>
      </Container>
    </section>
  );
}
