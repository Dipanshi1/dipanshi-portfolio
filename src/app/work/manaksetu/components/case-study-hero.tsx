import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function CaseStudyHero() {
  return (
    <section
      aria-labelledby="case-study-title"
      className="relative w-full border-b border-border-subtle bg-canvas pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 transition-colors duration-150"
    >
      <Container>
        {/* Navigation Breadcrumb / Return */}
        <div className="flex items-center gap-2 pb-8 sm:pb-10">
          <a
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-xs text-text-tertiary hover:text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded-sm py-1 pr-2"
          >
            <span className="transition-transform duration-150 group-hover:-translate-x-0.5" aria-hidden="true">
              ←
            </span>
            <span>Back to Selected Work</span>
          </a>
          <span className="text-border-subtle" aria-hidden="true">/</span>
          <span className="font-mono text-xs text-text-secondary">Flagship Case Study</span>
        </div>

        {/* Hero Narrative Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2 h-2 rounded-full bg-accent-primary shrink-0"
              aria-hidden="true"
            />
            <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
              Flagship Case Study · Smart India Hackathon (SIH 26108)
            </Eyebrow>
          </div>

          <h1
            id="case-study-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary leading-[1.12]"
          >
            ManakSetu: Defensible Standards Intelligence for Public Procurement
          </h1>

          <p className="font-mono text-sm sm:text-base text-accent-primary font-medium tracking-tight">
            &ldquo;From unstructured tender clauses to verified regulatory standard compliance.&rdquo;
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-normal max-w-3xl">
            An AI-powered regulatory intelligence platform engineered to ingest complex government
            procurement tenders, parse unstructured Bills of Quantities (BOQ), retrieve applicable
            Bureau of Indian Standards (BIS) records through hybrid search, and produce auditable,
            evidence-grounded compliance verifications.
          </p>
        </div>

        {/* Technical Specification Matrix */}
        <div className="mt-12 pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 font-mono text-xs">
          <div className="space-y-1.5">
            <span className="text-text-tertiary uppercase tracking-wider block">Domain</span>
            <span className="text-text-primary font-medium block">
              Applied AI · Regulatory Tech · Procurement Intelligence
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-text-tertiary uppercase tracking-wider block">Verified Role</span>
            <span className="text-text-primary font-medium block">
              Product Design (Figma), Frontend Systems (Next.js/React), Retrieval &amp; Ranking Integration
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-text-tertiary uppercase tracking-wider block">Team Microservices</span>
            <span className="text-text-primary font-medium block">
              FastAPI Pipeline (Kartikey), Ingestion &amp; Vector Store (Kshiraj)
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-text-tertiary uppercase tracking-wider block">Status</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                Demonstrated Prototype (SIH 26108)
              </span>
            </div>
          </div>
        </div>

        {/* Quick Anchor Navigation & External Links */}
        <div className="mt-8 pt-6 border-t border-border-subtle/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-text-secondary">
            <span className="text-text-tertiary uppercase tracking-wider hidden sm:inline">Jump To:</span>
            <a
              href="#architecture"
              className="px-2.5 py-1 rounded border border-border-subtle bg-surface hover:bg-surface-elevated hover:text-text-primary transition-colors duration-150"
            >
              02 / Architecture
            </a>
            <a
              href="#ranking"
              className="px-2.5 py-1 rounded border border-border-subtle bg-surface hover:bg-surface-elevated hover:text-text-primary transition-colors duration-150"
            >
              03 / Ranking Formula
            </a>
            <a
              href="#extraction"
              className="px-2.5 py-1 rounded border border-border-subtle bg-surface hover:bg-surface-elevated hover:text-text-primary transition-colors duration-150"
            >
              04 / Extraction Layer
            </a>
            <a
              href="#verification"
              className="px-2.5 py-1 rounded border border-border-subtle bg-surface hover:bg-surface-elevated hover:text-text-primary transition-colors duration-150"
            >
              05 / Verification UI
            </a>
            <a
              href="#tradeoffs"
              className="px-2.5 py-1 rounded border border-border-subtle bg-surface hover:bg-surface-elevated hover:text-text-primary transition-colors duration-150"
            >
              06 / Tradeoffs
            </a>
            <a
              href="#ownership"
              className="px-2.5 py-1 rounded border border-border-subtle bg-surface hover:bg-surface-elevated hover:text-text-primary transition-colors duration-150"
            >
              07 / Contributions
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={siteConfig.links.github}
              external
              className="gap-1.5 text-xs h-9 px-3.5"
            >
              <span>Codebase Repository</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
