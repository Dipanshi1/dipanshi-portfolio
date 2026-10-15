"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WorkstationData } from "./types";
import { allProjects } from "./workspace-data";
import { siteConfig } from "@/config/site";

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProjectId?: string;
  onSelectProject?: (id: string) => void;
}

export function ProjectDrawer({
  isOpen,
  onClose,
  selectedProjectId = "manaksetu",
  onSelectProject,
}: ProjectDrawerProps) {
  const [activeId, setActiveId] = React.useState<string>(selectedProjectId);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (selectedProjectId) {
      setActiveId(selectedProjectId);
    }
  }, [selectedProjectId]);

  // Focus trap & Escape listener
  React.useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProject: WorkstationData =
    allProjects.find((p) => p.id === activeId) || allProjects[0];

  const currentIndex = allProjects.findIndex((p) => p.id === currentProject.id);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + allProjects.length) % allProjects.length;
    const nextId = allProjects[nextIdx].id;
    setActiveId(nextId);
    onSelectProject?.(nextId);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % allProjects.length;
    const nextId = allProjects[nextIdx].id;
    setActiveId(nextId);
    onSelectProject?.(nextId);
  };

  const handleSelectTab = (id: string) => {
    setActiveId(id);
    onSelectProject?.(id);
  };

  return (
    <div
      className="fixed inset-0 z-50 w-screen h-screen flex justify-end bg-black/65 backdrop-blur-xs overflow-hidden"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-project-title"
        style={{ maxWidth: "100vw" }}
        className="relative w-full max-w-full sm:max-w-2xl min-w-0 h-full bg-surface border-l border-border-subtle shadow-2xl flex flex-col overflow-y-auto overflow-x-hidden text-text-primary"
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md border-b border-border-subtle px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary truncate">
              Project Lab Directory
            </span>
            <span className="text-border-subtle shrink-0" aria-hidden="true">·</span>
            <span className="font-mono text-[11px] text-text-tertiary shrink-0">
              {currentIndex + 1}/{allProjects.length}
            </span>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close project directory (Esc)"
            className="p-1.5 rounded-sm border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary focus-visible:outline-2 focus-visible:outline-border-focus transition-colors shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Project Selector Carousel / Tabs */}
        <div className="w-full max-w-full min-w-0 px-3 sm:px-5 py-2.5 sm:py-3 border-b border-border-subtle bg-surface-elevated/40 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="p-1.5 rounded-sm border border-border-subtle bg-surface hover:bg-surface-elevated text-text-secondary hover:text-text-primary font-mono text-xs shrink-0"
          >
            ◀
          </button>

          <div className="flex-1 min-w-0 w-0 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {allProjects.map((proj) => {
              const isSelected = proj.id === currentProject.id;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleSelectTab(proj.id)}
                  aria-pressed={isSelected}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs font-medium whitespace-nowrap shrink-0 transition-all ${
                    isSelected
                      ? "bg-accent-primary text-[#FDFBF7] border border-accent-primary shadow-2xs"
                      : "bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-elevated"
                  }`}
                >
                  <span className="font-bold opacity-75">{proj.number}</span>
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project"
            className="p-1.5 rounded-sm border border-border-subtle bg-surface hover:bg-surface-elevated text-text-secondary hover:text-text-primary font-mono text-xs shrink-0"
          >
            ▶
          </button>
        </div>

        {/* Middle Pixel-Art Vignette Banner (Pocket FM inspired) */}
        <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-[#181411] border-b border-border-subtle flex flex-col sm:flex-row items-center gap-3 sm:gap-4 min-w-0">
          {/* Mini Pixel Rig SVG */}
          <div className="shrink-0 w-24 h-24 rounded-sm bg-[#241E1A] border border-border-subtle flex items-center justify-center p-2 shadow-inner">
            <svg viewBox="0 0 80 80" className="w-full h-full" style={{ shapeRendering: "crispEdges" }} aria-hidden="true">
              {/* Desk */}
              <rect x="8" y="52" width="64" height="6" fill="#7E4720" />
              <rect x="12" y="58" width="4" height="18" fill="#4B270F" />
              <rect x="64" y="58" width="4" height="18" fill="#4B270F" />
              {/* Monitor */}
              <rect x="22" y="16" width="36" height="28" fill="#1B1714" rx="2" />
              <rect x="24" y="18" width="32" height="24" fill="#12100E" />
              <rect x="38" y="44" width="4" height="8" fill="#3D342C" />
              <rect x="32" y="50" width="16" height="2" fill="#3D342C" />
              {/* Animated Monitor Screen Content based on project */}
              {currentProject.id === "manaksetu" && (
                <g>
                  <rect x="26" y="20" width="28" height="3" fill="#3DA154" />
                  <rect x="26" y="25" width="12" height="2" fill="#D89B52" />
                  <rect x="26" y="29" width="16" height="2" fill="#D89B52" />
                  <rect x="26" y="33" width="10" height="2" fill="#C85A32" />
                  <rect x="42" y="25" width="12" height="10" fill="#B47E32" opacity="0.4" />
                </g>
              )}
              {currentProject.id === "agrivision" && (
                <g>
                  <rect x="26" y="20" width="28" height="3" fill="#3DA154" />
                  <circle cx="34" cy="28" r="4" fill="#287239" />
                  <rect x="42" y="25" width="12" height="2" fill="#D89B52" />
                  <rect x="42" y="29" width="8" height="2" fill="#C85A32" />
                </g>
              )}
              {currentProject.id === "interview-tracker" && (
                <g>
                  <rect x="26" y="20" width="28" height="3" fill="#B47E32" />
                  <rect x="26" y="25" width="8" height="6" fill="#C85A32" />
                  <rect x="36" y="25" width="8" height="6" fill="#3DA154" />
                  <rect x="46" y="25" width="8" height="6" fill="#D89B52" />
                  <line x1="34" y1="28" x2="36" y2="28" stroke="#EDE6D8" strokeWidth="1" />
                </g>
              )}
              {currentProject.id === "career-adviser" && (
                <g>
                  <rect x="26" y="20" width="28" height="3" fill="#C85A32" />
                  <rect x="26" y="25" width="28" height="2" fill="#D89B52" />
                  <rect x="26" y="29" width="20" height="2" fill="#EDE6D8" />
                  <rect x="26" y="33" width="14" height="2" fill="#B47E32" />
                </g>
              )}
              {/* Keyboard & Mouse */}
              <rect x="28" y="53" width="16" height="3" fill="#3D342C" />
              <rect x="48" y="53" width="4" height="3" fill="#3D342C" />
            </svg>
          </div>

          {/* Speech Bubble Quote */}
          <div className="relative flex-1 p-3 rounded-sm bg-surface-elevated border border-border-subtle shadow-2xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-primary font-semibold block mb-0.5">
              Engineering Stance
            </span>
            <p className="font-mono text-xs sm:text-[13px] text-text-primary leading-relaxed font-medium">
              &ldquo;{currentProject.tagline}&rdquo;
            </p>
          </div>
        </div>

        {/* Detail Content Body */}
        <div className="flex-1 w-full max-w-full min-w-0 p-4 sm:p-6 space-y-6">
          {/* Title & Domain */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" aria-hidden="true" />
              <Eyebrow className="text-text-tertiary font-semibold tracking-wider text-[11px]">
                {currentProject.domain}
              </Eyebrow>
            </div>
            <div className="flex items-center justify-between gap-3">
              <h2 id="drawer-project-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
                {currentProject.title}
              </h2>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium border border-accent-success/30 bg-accent-success/10 text-accent-success">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" aria-hidden="true" />
                <span>{currentProject.status}</span>
              </span>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block mb-1 font-semibold">
                01 / Engineering Challenge
              </span>
              <p className="text-text-secondary leading-relaxed font-sans">
                {currentProject.problem}
              </p>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block mb-1 font-semibold">
                02 / Architectural Solution
              </span>
              <p className="text-text-secondary leading-relaxed font-sans">
                {currentProject.solution}
              </p>
            </div>
          </div>

          {/* Verified Technical Signals */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block font-semibold">
              Verified Technical Signals
            </span>
            <div className="flex flex-wrap gap-2">
              {currentProject.technicalSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-surface-elevated border border-border-subtle font-mono text-xs text-text-primary shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" aria-hidden="true" />
                  <span>{signal}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Context Note */}
          <div className="p-3.5 rounded-sm border border-border-subtle bg-surface-elevated/70 font-mono text-xs text-text-tertiary space-y-1 shadow-2xs">
            <span className="text-text-secondary font-medium text-[11px] block">
              {currentProject.contextNote.badge}
            </span>
            <p className="text-[11px] leading-relaxed">
              {currentProject.contextNote.description}
            </p>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="sticky bottom-0 z-20 bg-surface/95 backdrop-blur-md border-t border-border-subtle p-3.5 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {currentProject.id === "manaksetu" ? (
              <Button
                variant="primary"
                size="md"
                href="/work/manaksetu"
                className="gap-2 text-xs"
              >
                <span>Read Full Case Study</span>
                <span aria-hidden="true">→</span>
              </Button>
            ) : null}

            {currentProject.externalLink && (
              <Button
                variant={currentProject.id === "manaksetu" ? "secondary" : "primary"}
                size="md"
                href={currentProject.externalLink}
                external
                className="gap-1.5 text-xs"
              >
                <span>Codebase Repository</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </Button>
            )}

            <Button
              variant="outline"
              size="md"
              href={siteConfig.links.resume}
              external
              className="gap-1.5 text-xs text-accent-warning border-accent-warning/60 hover:bg-accent-warning/10 hover:border-accent-warning"
            >
              <span>Résumé PDF</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-text-secondary hover:text-text-primary underline-offset-4 hover:underline transition-colors px-2 py-1 self-center sm:self-auto"
          >
            Back to Studio (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
