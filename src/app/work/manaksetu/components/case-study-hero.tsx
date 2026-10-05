import * as React from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function CaseStudyHero() {
  return (
    <section
      id="case-study-hero"
      aria-labelledby="case-study-title"
      className="relative w-full border-b border-border-subtle bg-canvas pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 transition-colors duration-150"
    >
      <Container>
        {/* Navigation Breadcrumb / Return */}
        <div className="flex items-center gap-2 pb-8 sm:pb-10">
          <a
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-xs text-text-tertiary hover:text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focus rounded-sm py-1 pr-2"
          >
            <span className="transition-transform duration-150 group-hover:-translate-x-0.5" aria-hidden="true">
              ←
            </span>
            <span>Back to Selected Work</span>
          </a>
          <span className="text-border-subtle" aria-hidden="true">/</span>
          <span className="font-mono text-xs text-text-secondary">Flagship Case Study</span>
        </div>

        {/* Small Editorial Metadata Bar */}
        <div className="pb-8 mb-8 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-text-tertiary">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle text-text-primary font-semibold tracking-wider uppercase text-[10px]">
              Flagship Case Study
            </span>
            <span className="text-border-subtle hidden sm:inline" aria-hidden="true">/</span>
            <span className="text-text-secondary">SIH 26108</span>
            <span className="text-border-subtle hidden sm:inline" aria-hidden="true">/</span>
            <span className="text-text-tertiary">AI · Procurement Intelligence</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>2024–2025</span>
            <span className="text-border-subtle" aria-hidden="true">/</span>
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Demonstrated Prototype</span>
            </div>
          </div>
        </div>

        {/* Large Editorial Headline & Positioning Statement */}
        <div className="max-w-4xl space-y-6">
          <h1
            id="case-study-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.05]"
          >
            MANAKSETU
          </h1>

          <div className="space-y-3">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-text-primary leading-snug">
              AI-powered procurement intelligence for applicable Indian Standards.
            </p>
            <p className="font-mono text-xs sm:text-sm text-accent-primary font-medium tracking-tight">
              &ldquo;From unstructured tender clauses to verified regulatory standard compliance.&rdquo;
            </p>
          </div>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal max-w-3xl">
            An end-to-end regulatory intelligence system engineered to ingest complex government
            procurement tenders, parse unstructured Bills of Quantities (BOQ), retrieve applicable
            Bureau of Indian Standards (BIS) records through hybrid vector and lexical search, and produce
            auditable, evidence-grounded compliance verifications.
          </p>

          {/* Editorial CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              size="md"
              href="#architecture"
              className="gap-2 text-xs h-10 px-5"
            >
              <span>Explore System Architecture</span>
              <span className="text-xs" aria-hidden="true">↓</span>
            </Button>

            <Button
              variant="secondary"
              size="md"
              href="#verification"
              className="gap-2 text-xs h-10 px-4"
            >
              <span>Audit Verification UI</span>
              <span className="text-xs" aria-hidden="true">→</span>
            </Button>

            <Button
              variant="outline"
              size="md"
              href={siteConfig.links.github}
              external
              className="gap-1.5 text-xs h-10 px-4"
            >
              <span>Browse Codebase</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>

        {/* Technical Specification Matrix (Hairline Technical Exhibit - Level 2 Surface) */}
        <div className="mt-12 pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          <div className="space-y-1.5">
            <span className="text-text-tertiary uppercase tracking-wider text-[10px] block">Problem Domain</span>
            <span className="text-text-primary font-medium block">
              Applied AI · Regulatory Tech · Procurement Auditing
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-text-tertiary uppercase tracking-wider text-[10px] block">Verified Stack</span>
            <span className="text-text-primary font-medium block">
              Next.js 14 · FastAPI · Qdrant · BM25 · Gemini 1.5
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-text-tertiary uppercase tracking-wider text-[10px] block">Personal Ownership</span>
            <span className="text-text-primary font-medium block">
              Product Design (Figma), Next.js Client, Retrieval Integration
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-text-tertiary uppercase tracking-wider text-[10px] block">System State</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium block">
              Functional SIH 26108 Demonstration Pipeline
            </span>
          </div>
        </div>

        {/* Hero Visual Project Artifact (Level 3 Focused Product Artifact) */}
        <div className="mt-12 w-full rounded-xl border border-border-subtle bg-surface shadow-sm overflow-hidden transition-colors duration-150">
          {/* Artifact Header Chrome */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-4 sm:px-6 py-3 border-b border-border-subtle bg-surface-elevated/70 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-primary/20 border border-accent-primary/50" aria-hidden="true" />
              <span className="font-semibold uppercase tracking-wider text-text-primary text-[11px]">
                ManakSetu Audit Engine // Runtime Artifact
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className="px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                Clause Grounded · Score 0.94
              </span>
              <span className="text-text-tertiary hidden sm:inline">·</span>
              <span className="text-text-secondary truncate max-w-[240px] sm:max-w-none">
                Sample: NIT_MCD-2024-LT-09 (Municipal LED Lighting)
              </span>
            </div>
          </div>

          {/* Artifact Body: Asymmetrical Split Inspection View */}
          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Input Tender Spec Excerpt */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 p-4 sm:p-5 rounded-lg border border-border-subtle bg-surface-elevated/40">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-text-tertiary uppercase tracking-wider text-[10px]">
                    01 / Ingested Tender Excerpt
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-[10px] text-text-secondary">
                    Page 14 · Clause 8.2
                  </span>
                </div>

                <div className="p-3 rounded border border-amber-500/20 bg-amber-500/5 text-xs font-mono text-text-primary leading-relaxed">
                  &ldquo;Supply, installation, testing and commissioning of 120W outdoor LED
                  street lighting luminaires. The luminaires shall be rated for operation at
                  240V AC, 50 Hz, with driver efficiency &gt; 85%, total harmonic distortion
                  (THD) &lt; 10%, and minimum IP66 ingress protection rating.&rdquo;
                </div>

                {/* Isolated Parameter Tags */}
                <div className="space-y-1.5 pt-1 font-mono text-[10px]">
                  <span className="text-text-tertiary uppercase tracking-wider block">
                    Extracted Specification Tokens:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                      Product: LED Luminaire
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                      Power: 120W @ 240V
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                      THD &lt; 10%
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                      IP66 Enclosure
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border-subtle/80 flex items-center justify-between font-mono text-[10px] text-text-tertiary">
                <span>Ingestion: PyMuPDF Stream</span>
                <span>Structured by Gemini 1.5</span>
              </div>
            </div>

            {/* Center: Directional Conduit / Pipeline Meter */}
            <div className="lg:col-span-2 flex flex-col justify-center items-center py-2 lg:py-0">
              <div className="flex lg:flex-col items-center justify-center gap-2 w-full text-center font-mono text-[10px] text-text-tertiary">
                <div className="h-px w-8 lg:w-px lg:h-8 bg-border-subtle" aria-hidden="true" />
                <div className="px-2.5 py-1.5 rounded border border-border-subtle bg-surface-elevated text-accent-primary font-medium uppercase tracking-wider text-[10px]">
                  Hybrid Search ↳
                </div>
                <div className="text-[10px] text-text-secondary leading-tight hidden lg:block">
                  Qdrant + BM25<br />
                  6 Signals + Boost
                </div>
                <div className="h-px w-8 lg:w-px lg:h-8 bg-border-subtle" aria-hidden="true" />
              </div>
            </div>

            {/* Right: Matched BIS Standard Grounding */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 p-4 sm:p-5 rounded-lg border border-border-subtle bg-surface-elevated/40">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent-primary uppercase tracking-wider font-semibold text-[10px]">
                    02 / Verified Indian Standard
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                    Relevance: 0.94 · High
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-sm font-bold text-text-primary">
                    IS 10322 (Part 5/Sec 3): 2012
                  </div>
                  <p className="text-xs text-text-secondary font-sans leading-snug">
                    Luminaires — Particular Requirements — Luminaires for Road and Street Lighting
                  </p>
                </div>

                {/* Evidence Provenance Quote */}
                <div className="p-3 rounded border border-border-subtle bg-surface text-xs font-mono space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-text-tertiary uppercase">
                    <span>Evidence Clause: Section 3 · Table 1</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified Active</span>
                  </div>
                  <p className="text-text-secondary font-sans leading-relaxed text-xs">
                    &ldquo;Specifies constructional and electrical safety requirements for luminaires
                    intended for road and public street illumination, including IP65/IP66 enclosure
                    ratings and driver distortion parameters.&rdquo;
                  </p>
                </div>

                {/* Score Attribution Matrix */}
                <div className="grid grid-cols-4 gap-1.5 font-mono text-[10px] text-center pt-1">
                  <div className="p-1.5 rounded bg-surface border border-border-subtle">
                    <div className="text-text-primary font-bold">0.91</div>
                    <div className="text-text-tertiary text-[9px]">Semantic</div>
                  </div>
                  <div className="p-1.5 rounded bg-surface border border-border-subtle">
                    <div className="text-text-primary font-bold">0.85</div>
                    <div className="text-text-tertiary text-[9px]">BM25</div>
                  </div>
                  <div className="p-1.5 rounded bg-surface border border-border-subtle">
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold">1.00</div>
                    <div className="text-text-tertiary text-[9px]">Product</div>
                  </div>
                  <div className="p-1.5 rounded bg-surface border border-border-subtle">
                    <div className="text-accent-primary font-bold">1.00</div>
                    <div className="text-text-tertiary text-[9px]">Meta Conf</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border-subtle/80 flex items-center justify-between font-mono text-[10px]">
                <div className="flex items-center gap-1.5 text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>QCO Mandated: S.O. 2357(E)</span>
                </div>
                <span className="text-text-tertiary">Deterministic Base + 0.30 Boost</span>
              </div>
            </div>
          </div>

          {/* Artifact Footer Banner */}
          <div className="px-4 sm:px-6 py-2.5 border-t border-border-subtle bg-surface-elevated/30 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-text-tertiary">
            <span>INDEX: 10,000+ CATALOG RECORDS (BIS)</span>
            <span className="text-text-secondary font-medium">ZERO-HALLUCINATION POLICY</span>
            <span>HUMAN REVIEW ESCALATION ON SCORES &le; 0.45</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
