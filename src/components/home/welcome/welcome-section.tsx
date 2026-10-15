"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { WelcomeScene } from "./welcome-scene";

export function WelcomeArea() {
  const portalRef = React.useRef<SVGGElement>(null);

  const handleEnterProjects = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
      // Attempt to focus the workstation button after scrolling
      setTimeout(() => {
        const stationButton = document.getElementById("workstation-manaksetu");
        if (stationButton) {
          stationButton.focus();
        }
      }, 400);
    } else {
      window.location.hash = "#work";
    }
  };

  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="relative w-full bg-canvas pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 transition-colors duration-150 scroll-mt-16 overflow-hidden"
    >
      <Container>
        {/* Sole Hero Introduction Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-border-subtle">
          {/* Identity, Display Headline & Narrative */}
          <div className="space-y-4 max-w-2xl">
            {/* Identity & Availability Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
              <span className="font-semibold text-text-primary uppercase tracking-wider">
                {siteConfig.name}
              </span>
              <span className="text-border-subtle" aria-hidden="true">
                /
              </span>
              <span className="text-text-secondary">
                3rd-Year Computer Science Student
              </span>
              <span className="text-border-subtle hidden sm:inline" aria-hidden="true">
                /
              </span>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-medium select-none">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"
                  aria-hidden="true"
                />
                <span>{siteConfig.status}</span>
              </div>
            </div>

            {/* Dominant Display Headline */}
            <h1
              id="welcome-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] leading-[1.1] text-text-primary"
            >
              I design and build{" "}
              <span className="sm:whitespace-nowrap">AI-powered products.</span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
              Computer Science engineering student specializing in applied AI systems,
              scalable FastAPI and PostgreSQL backends, and modern Next.js interfaces.
              Step inside my interactive digital studio to inspect verified system
              architectures, production prototypes, and engineering case studies.
            </p>
          </div>

          {/* Recruiter Primary Actions & Direct Channels */}
          <div className="flex flex-col gap-3.5 self-start lg:self-end shrink-0">
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={handleEnterProjects}
                className="gap-2 text-xs sm:text-sm h-10 px-5 font-medium"
              >
                <span>Explore Project Lab</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={siteConfig.links.resume}
                external
                className="gap-1.5 text-xs sm:text-sm h-10 px-4 font-medium"
              >
                <span>View Resume PDF</span>
                <span className="text-xs" aria-hidden="true">
                  ↗
                </span>
              </Button>
            </div>

            {/* Direct Channel Access: GitHub, LinkedIn, Email */}
            <div className="flex flex-wrap items-center gap-3.5 text-xs font-mono text-text-tertiary pt-0.5">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1 py-0.5"
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
              <span className="text-border-subtle" aria-hidden="true">
                ·
              </span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1 py-0.5"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>
              <span className="text-border-subtle" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1 py-0.5"
              >
                <span>{siteConfig.email}</span>
              </a>
              <span className="text-border-subtle hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="text-text-tertiary hidden sm:inline">Based in India</span>
            </div>
          </div>
        </div>

        {/* Isometric Pixel-Art Scene Centerpiece */}
        <div className="pt-6 sm:pt-8 space-y-5">
          <WelcomeScene
            onEnterProjects={handleEnterProjects}
            portalRef={portalRef}
          />

          {/* Companion Station Quick Card (Mobile & Screen Reader Friendly) */}
          <div className="p-4 sm:p-5 rounded-xl border border-border-subtle bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-primary">
                  Interactive Exploration · Project Lab Doorway
                </span>
              </div>
              <h2 className="font-semibold text-base sm:text-lg text-text-primary">
                Next Destination: Project Lab Workstations
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary max-w-xl">
                Ready to review production code and case studies? Step through the
                Project Lab doorway to inspect the ManakSetu regulatory compliance engine.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleEnterProjects}
                aria-label="Enter Project Lab and inspect workstations"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-text-primary text-canvas font-mono text-xs font-medium hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-border-focus"
              >
                <span>Enter Project Lab</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Keyboard & Screen Navigation Tip */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-tertiary">
            <p>
              Keyboard navigation: Use{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                Tab
              </kbd>{" "}
              to focus the Project Lab doorway,{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                Enter
              </kbd>{" "}
              to advance.
            </p>
            <a
              href="#work"
              className="text-text-secondary hover:text-text-primary hover:underline transition-colors text-right"
            >
              Direct anchor: #work →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
