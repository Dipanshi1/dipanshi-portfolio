import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FlagshipProject() {
  const technicalSignals = [
    "Hybrid Retrieval (Qdrant + BM25)",
    "Deterministic 6-Signal Ranking",
    "Evidence-Grounded Verification",
    "Dual-Pass Parser (PyMuPDF)",
    "FastAPI & Next.js 14",
  ];

  return (
    <section
      id="work"
      aria-labelledby="flagship-heading"
      className="relative w-full border-t border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150 scroll-mt-16"
    >
      <div id="manaksetu" className="absolute -top-16" aria-hidden="true" />
      <Container>
        {/* Section Identity */}
        <div className="space-y-3 max-w-3xl pb-10 sm:pb-14">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              aria-hidden="true"
            />
            <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
              Flagship Project · Applied AI &amp; Regulatory Systems
            </Eyebrow>
          </div>
          <h2
            id="flagship-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
          >
            ManakSetu
          </h2>
          <p className="font-mono text-sm sm:text-base text-accent-primary font-medium tracking-tight">
            AI-powered procurement intelligence for applicable Indian Standards.
          </p>
        </div>

        {/* 2-Column High-Impact Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Problem, Value Statement & Technical Signals */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Concise Value Statement */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                The Engineering Problem
              </span>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Indian government procurement tenders arrive as dense, unstandardized PDFs.
                In benchmark testing, pure vector search failed by blurring numerical tolerances
                (e.g., 53 Grade vs 43 Grade cement) and diluting exact standard codes.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                ManakSetu automates parameter extraction and executes hybrid vector and lexical retrieval
                across 10,000+ Bureau of Indian Standards (BIS) records, delivering mathematically
                defensible compliance audits for public sector procurement officers.
              </p>
            </div>

            {/* 5 Strong Technical Signals */}
            <div className="space-y-2.5 pt-1">
              <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                Key Technical Signals
              </span>
              <div className="flex flex-wrap gap-2">
                {technicalSignals.map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface border border-border-subtle font-mono text-xs text-text-primary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" aria-hidden="true" />
                    <span>{signal}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Team Context Note */}
            <div className="p-3.5 rounded-lg border border-border-subtle bg-surface/50 font-mono text-xs text-text-tertiary space-y-1">
              <span className="text-text-secondary font-medium text-[11px] block">
                Smart India Hackathon (SIH 26108) Prototype
              </span>
              <p className="text-[11px] leading-relaxed">
                Dipanshi led product design in Figma, frontend systems in Next.js 14, and
                retrieval/ranking UI integration. Backend microservices built collaboratively with team contributors.
              </p>
            </div>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="md"
                href="/work/manaksetu"
                className="gap-2 text-xs h-10 px-5"
              >
                <span>View Full Case Study</span>
                <span className="text-xs" aria-hidden="true">→</span>
              </Button>

              <Button
                variant="outline"
                size="md"
                href={siteConfig.links.github}
                external
                className="gap-1.5 text-xs h-10 px-4"
              >
                <span>Codebase Repository</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Strong Product / System Visual */}
          <div className="lg:col-span-7 w-full">
            <div
              className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-7 shadow-xs space-y-5 select-none"
              aria-label="ManakSetu tender compliance audit preview"
            >
              {/* Frame Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/50"
                    aria-hidden="true"
                  />
                  <span className="font-semibold uppercase tracking-wider text-text-secondary text-[11px]">
                    Audit Verification Preview
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span>Clause Grounded · Score 0.94</span>
                </div>
              </div>

              {/* Split Verification Panels */}
              <div className="space-y-4">
                {/* Panel 1: Tender Specification Extract */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated/50 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-text-tertiary uppercase tracking-wider text-[11px]">
                      01 / Ingested Tender Extract
                    </span>
                    <span className="text-text-secondary text-[11px]">
                      NIT_MCD-2024-LT-09 (p. 14 § 8.2)
                    </span>
                  </div>
                  <div className="p-3 rounded border border-amber-500/20 bg-amber-500/5 text-xs font-mono text-text-primary leading-relaxed">
                    &ldquo;Supply of 120W outdoor LED street lighting luminaires rated for operation
                    at 240V AC, 50 Hz, with total harmonic distortion (THD) &lt; 10%, and minimum
                    IP66 ingress protection rating.&rdquo;
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-text-secondary pt-1">
                    <span className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle">
                      120W Rating
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle">
                      THD &lt; 10%
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle">
                      IP66 Ingress
                    </span>
                  </div>
                </div>

                {/* Connection Indicator */}
                <div className="flex items-center justify-center -my-1 text-text-tertiary font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded border border-border-subtle bg-surface text-[10px] uppercase tracking-wider">
                    Hybrid Retrieval &amp; Deterministic Scoring ↳
                  </span>
                </div>

                {/* Panel 2: Matched Standard */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated/50 space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-accent-primary uppercase tracking-wider font-semibold text-[11px]">
                      02 / Matched Indian Standard
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                      High Confidence
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <div className="font-mono text-sm sm:text-base font-bold text-text-primary">
                      IS 10322 (Part 5/Sec 3): 2012
                    </div>
                    <div className="text-xs text-text-secondary font-sans leading-snug">
                      Luminaires — Particular Requirements — Luminaires for Road and Street Lighting
                    </div>
                  </div>

                  <div className="p-3 rounded border border-border-subtle bg-surface text-xs font-mono space-y-1">
                    <span className="text-[10px] text-text-tertiary uppercase block">
                      Evidence Provenance: Section 3 · Table 1
                    </span>
                    <p className="text-text-secondary leading-relaxed font-sans text-xs">
                      &ldquo;Specifies electrical safety, ingress protection (minimum IP65/IP66 for outdoor enclosures),
                      and driver distortion thresholds for public street lighting.&rdquo;
                    </p>
                  </div>

                  {/* 4 Attribution Scores */}
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
              </div>

              {/* Footer Strip */}
              <div className="pt-2 border-t border-border-subtle flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>QCO Mandated: S.O. 2357(E)</span>
                </div>
                <a
                  href="/work/manaksetu"
                  className="text-accent-primary hover:underline text-[11px]"
                >
                  Read full case study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
