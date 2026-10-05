import * as React from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ProjectOutcome() {
  const secondaryWorks = [
    {
      title: "AgriVision AI",
      domain: "Computer Vision · FastAPI · Docker",
      description: "Automated crop disease anomaly detection with CLAHE preprocessing and containerized inference.",
      href: "https://github.com/Dipanshi1/agri-vision-ai",
      external: true,
    },
    {
      title: "Interview Tracker Pro",
      domain: "Full-Stack · PostgreSQL · JWT",
      description: "Multi-tenant recruitment workflow engine with relational state machine and row-level isolation.",
      href: "/#secondary-projects",
      external: false,
    },
    {
      title: "Career Adviser",
      domain: "LLM Systems · Next.js · Pydantic",
      description: "Structured career path guidance with strict schema enforcement preventing model hallucinations.",
      href: "/#secondary-projects",
      external: false,
    },
  ];

  return (
    <section
      id="outcome"
      aria-labelledby="outcome-heading"
      className="w-full bg-canvas py-16 sm:py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-8 sm:pb-12 border-b border-border-subtle font-mono text-xs text-text-tertiary">
          <span className="text-accent-primary font-bold text-sm sm:text-base">08</span>
          <span className="text-border-subtle">/</span>
          <span className="uppercase tracking-widest text-text-secondary font-semibold">
            Demonstrated State &amp; Roadmap
          </span>
          <span className="text-border-subtle hidden sm:inline">/</span>
          <span className="hidden sm:inline text-text-tertiary">Verified Prototype</span>
        </div>

        {/* 2-Column Asymmetric Conclusion */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Conclusion */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-accent-primary font-mono text-xs font-semibold tracking-wider uppercase block">
              Demonstrated System
            </span>

            <h2
              id="outcome-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]"
            >
              A complete procurement intelligence workflow.
            </h2>

            <p className="text-base text-text-secondary leading-relaxed font-normal">
              From raw tender document ingestion to evidence-grounded standards recommendation,
              ManakSetu was successfully implemented and demonstrated for Smart India Hackathon
              (Problem Statement SIH 26108).
            </p>

            <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span className="text-text-primary font-semibold">
                  Verified Technical Demonstration
                </span>
              </div>
              <p className="text-text-secondary font-sans text-xs leading-relaxed">
                Full end-to-end execution demonstrated: from uploading real tender PDFs (such as
                municipal LED street lighting notices) to parsing parameters, executing hybrid
                Qdrant/BM25 retrieval, computing deterministic scores, and rendering grounded
                clause-by-clause audit reports.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                href="/#work"
                className="gap-2 text-xs h-10 px-5"
              >
                <span>Back to Selected Work</span>
                <span className="text-xs" aria-hidden="true">←</span>
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

          {/* Right Column: Verified Engineering Roadmap */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs">
                <span className="text-text-primary uppercase tracking-wider font-semibold">
                  Verified Engineering Roadmap
                </span>
                <span className="text-text-tertiary text-[11px]">System Evolution</span>
              </div>

              <div className="space-y-6 font-mono text-xs">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-text-primary font-semibold text-sm font-sans">
                    <span className="text-accent-primary font-mono text-xs">01.</span>
                    <span>Asynchronous Celery / Redis Batch Processing</span>
                  </div>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed pl-5">
                    While the prototype handles synchronous extraction for tenders up to 50 pages,
                    massive multi-volume tenders (200+ pages) require offloading document chunking
                    and Qdrant vector embedding to distributed Celery worker queues with WebSocket
                    status streaming.
                  </p>
                </div>

                <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-text-primary font-semibold text-sm font-sans">
                    <span className="text-accent-primary font-mono text-xs">02.</span>
                    <span>Optical Character Recognition (OCR) Fallback Pipeline</span>
                  </div>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed pl-5">
                    The current implementation defends system boundaries by explicitly rejecting
                    image-only PDFs via the <code className="font-mono text-[11px] text-amber-600 dark:text-amber-400">SCANNED_PDF</code> exception.
                    The planned next milestone integrates an asynchronous Tesseract / Surya-OCR
                    fallback to recover scanned legacy government gazettes.
                  </p>
                </div>

                <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-text-primary font-semibold text-sm font-sans">
                    <span className="text-accent-primary font-mono text-xs">03.</span>
                    <span>Continuous BIS Gazette Synchronization</span>
                  </div>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed pl-5">
                    Automated cron polling of published Ministry Quality Control Orders (QCOs) to
                    instantly update applicability metadata, ensuring newly mandated standards are
                    reflected in retrieval weights within 24 hours of gazette publication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next / Selected Work Visual Closure (Section 18) */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-border-subtle space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-accent-primary font-bold">NEXT</span>
              <span className="text-border-subtle">/</span>
              <span className="uppercase tracking-widest text-text-secondary font-semibold">
                More Selected Engineering Work
              </span>
            </div>
            <a
              href="#case-study-hero"
              className="text-text-tertiary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1.5"
            >
              <span>Back to Top of Case Study</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {secondaryWorks.map((work) => (
              <a
                key={work.title}
                href={work.href}
                {...(work.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group p-5 rounded-xl border border-border-subtle bg-surface hover:bg-surface-elevated hover:border-border-focus/50 transition-all duration-150 flex flex-col justify-between space-y-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focus"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-text-primary text-sm font-sans group-hover:text-accent-primary transition-colors duration-150">
                      {work.title}
                    </span>
                    <span className="text-text-tertiary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" aria-hidden="true">
                      {work.external ? "↗" : "→"}
                    </span>
                  </div>
                  <span className="text-[11px] text-text-tertiary block">
                    {work.domain}
                  </span>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed">
                    {work.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border-subtle/50 text-[11px] text-accent-primary font-medium">
                  {work.external ? "View Repository ↗" : "Inspect System Architecture →"}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
