"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FlagshipProject } from "@/components/home/flagship-project";
import { SecondaryProjects } from "@/components/home/secondary-projects";
import { WorkspaceScene } from "./workspace-scene";
import { WorkspacePreview } from "./workspace-preview";
import { manaksetuWorkstation } from "./workspace-data";
import { WorkspaceView, WorkstationData } from "./types";

interface ViewSwitcherProps {
  currentView: WorkspaceView;
  onChange: (v: WorkspaceView) => void;
}

function ViewSwitcher({ currentView, onChange }: ViewSwitcherProps) {
  return (
    <div
      role="tablist"
      aria-label="Work presentation view switcher"
      className="inline-flex items-center p-1 rounded-xl border border-border-subtle bg-surface shadow-xs"
    >
      <button
        type="button"
        role="tab"
        id="tab-studio-view"
        aria-selected={currentView === "studio"}
        aria-controls="panel-studio-view"
        onClick={() => onChange("studio")}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-border-focus ${
          currentView === "studio"
            ? "bg-text-primary text-canvas shadow-xs"
            : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated"
        }`}
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
        </svg>
        <span>Studio View</span>
      </button>

      <button
        type="button"
        role="tab"
        id="tab-list-view"
        aria-selected={currentView === "list"}
        aria-controls="panel-list-view"
        onClick={() => onChange("list")}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-border-focus ${
          currentView === "list"
            ? "bg-text-primary text-canvas shadow-xs"
            : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated"
        }`}
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <line x1="8" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>List View</span>
      </button>
    </div>
  );
}

export function WorkspaceSection() {
  const [view, setView] = React.useState<WorkspaceView>("studio");
  const [selectedStation, setSelectedStation] =
    React.useState<WorkstationData | null>(null);
  const workstationRef = React.useRef<SVGGElement>(null);

  // Check URL hash on client mount to respect deep-links to conventional sections
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#secondary-projects" || hash === "#manaksetu") {
        setView("list");
      }
    }
  }, []);

  const handleSelectManaksetu = () => {
    setSelectedStation(manaksetuWorkstation);
  };

  const handleClosePreview = () => {
    setSelectedStation(null);
    // Restore focus to workstation trigger element
    setTimeout(() => {
      workstationRef.current?.focus();
    }, 50);
  };

  return (
    <>
      {view === "studio" ? (
        <section
          id="work"
          aria-labelledby="workspace-heading"
          className="relative w-full border-t border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150 scroll-mt-16"
        >
          <div id="manaksetu" className="absolute -top-16" aria-hidden="true" />
          <Container>
            {/* Section Header with Studio / List Toggle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-border-subtle">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent-primary"
                    aria-hidden="true"
                  />
                  <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
                    Selected Work · Interactive Engineering Workspace
                  </Eyebrow>
                </div>
                <h2
                  id="workspace-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
                >
                  Engineering Studio
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                  Explore Dipanshi&apos;s technical workstations in a cozy pixel-art
                  studio. Click or press Enter on any workstation to inspect system
                  architecture, verified signals, and deep case studies.
                </p>
              </div>

              {/* Accessible Studio / List View Switcher */}
              <div className="self-start md:self-end">
                <ViewSwitcher currentView={view} onChange={setView} />
              </div>
            </div>

            {/* Interactive Workspace Studio Scene */}
            <div
              id="panel-studio-view"
              role="tabpanel"
              aria-labelledby="tab-studio-view"
              className="pt-8 sm:pt-10 space-y-6"
            >
              <WorkspaceScene
                station={manaksetuWorkstation}
                isSelected={selectedStation?.id === "manaksetu"}
                onSelect={handleSelectManaksetu}
                workstationRef={workstationRef}
              />

              {/* Station Quick Selector Card for Mobile & Keyboard Users */}
              <div className="p-4 sm:p-5 rounded-xl border border-border-subtle bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-primary">
                      Station 01 · Flagship Prototype
                    </span>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg text-text-primary">
                    ManakSetu — AI Procurement Intelligence
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary max-w-xl">
                    Smart India Hackathon (SIH 26108) demonstrated prototype pairing
                    hybrid vector/lexical retrieval with 6-signal ranking.
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleSelectManaksetu}
                    aria-label="Inspect ManakSetu workstation details"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-text-primary text-canvas font-mono text-xs font-medium hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-border-focus"
                  >
                    <span>Inspect Station</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>

              {/* Footer Switcher Hint */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-tertiary">
                <p>
                  Keyboard navigation: Use{" "}
                  <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                    Tab
                  </kbd>{" "}
                  to focus station,{" "}
                  <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                    Enter
                  </kbd>{" "}
                  to open preview,{" "}
                  <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">
                    Esc
                  </kbd>{" "}
                  to close.
                </p>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className="text-text-secondary hover:text-text-primary hover:underline transition-colors text-right"
                >
                  Prefer standard cards? Switch to List View →
                </button>
              </div>
            </div>
          </Container>

          {/* Accessible Workstation Preview Modal */}
          <WorkspacePreview
            station={selectedStation}
            isOpen={selectedStation !== null}
            onClose={handleClosePreview}
          />
        </section>
      ) : (
        /* List Mode: Shows the conventional, untouched project cards */
        <div id="panel-list-view" role="tabpanel" aria-labelledby="tab-list-view">
          {/* Header Strip with View Switcher */}
          <div className="border-t border-border-subtle bg-canvas pt-12 sm:pt-16 pb-2 transition-colors duration-150">
            <Container>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                    Selected Work · Conventional View
                  </span>
                  <p className="text-sm text-text-secondary">
                    Reviewing full technical cards for ManakSetu and supporting production systems.
                  </p>
                </div>

                <div className="self-start sm:self-auto">
                  <ViewSwitcher currentView={view} onChange={setView} />
                </div>
              </div>
            </Container>
          </div>

          {/* Conventional Flagship and Secondary Project Cards */}
          <FlagshipProject />
          <SecondaryProjects />
        </div>
      )}
    </>
  );
}
