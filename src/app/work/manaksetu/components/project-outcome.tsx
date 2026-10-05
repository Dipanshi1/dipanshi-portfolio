import * as React from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ProjectOutcome() {
  return (
    <section
      id="outcome"
      aria-labelledby="outcome-heading"
      className="w-full bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Lead */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
              08 / Demonstrated State &amp; Roadmap
            </span>
            <h2
              id="outcome-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
            >
              Current System Demonstration &amp; Architecture Roadmap
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
              ManakSetu was successfully implemented and demonstrated for Smart India Hackathon
              (Problem Statement SIH 26108). Rather than claiming fabricated commercial scale,
              the project stands on its verified architectural capabilities.
            </p>

            {/* Verification Status Card */}
            <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2 font-mono text-xs">
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
          </div>

          {/* Right Column: Architectural Next Steps & Return CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface space-y-4">
              <div className="pb-3 border-b border-border-subtle font-mono text-xs">
                <span className="text-accent-primary uppercase tracking-wider font-semibold">
                  Verified Engineering Roadmap
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-text-primary font-semibold block text-sm font-sans">
                    1. Asynchronous Celery / Redis Batch Processing
                  </span>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed">
                    While the prototype handles synchronous extraction for tenders up to 50 pages,
                    massive multi-volume tenders (200+ pages) require offloading document chunking
                    and Qdrant vector embedding to distributed Celery worker queues with WebSocket
                    status streaming.
                  </p>
                </div>

                <div className="h-px w-full bg-border-subtle" />

                <div className="space-y-1">
                  <span className="text-text-primary font-semibold block text-sm font-sans">
                    2. Optical Character Recognition (OCR) Fallback Pipeline
                  </span>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed">
                    The current implementation defends system boundaries by explicitly rejecting
                    image-only PDFs via the <code className="font-mono text-[11px] text-amber-600 dark:text-amber-400">SCANNED_PDF</code> exception.
                    The planned next milestone integrates an asynchronous Tesseract / Surya-OCR
                    fallback to recover scanned legacy government gazettes.
                  </p>
                </div>

                <div className="h-px w-full bg-border-subtle" />

                <div className="space-y-1">
                  <span className="text-text-primary font-semibold block text-sm font-sans">
                    3. Continuous BIS Gazette Synchronization
                  </span>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed">
                    Automated cron polling of published Ministry Quality Control Orders (QCOs) to
                    instantly update applicability metadata, ensuring newly mandated standards are
                    reflected in retrieval weights within 24 hours of gazette publication.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
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
        </div>
      </Container>
    </section>
  );
}
