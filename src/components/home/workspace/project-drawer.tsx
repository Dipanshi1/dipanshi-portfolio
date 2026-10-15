"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
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
      className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in overflow-hidden"
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
        className="relative w-full sm:max-w-xl md:max-w-2xl min-w-0 h-full bg-[#16120E] border-l border-[#382C22] shadow-2xl flex flex-col overflow-y-auto overflow-x-hidden text-text-primary animate-in slide-in-from-right duration-250"
      >
        {/* 1. TOP ARCHITECTURAL HEADER BAR */}
        <div className="sticky top-0 z-20 bg-[#181310]/95 backdrop-blur-md border-b border-[#2A211A] px-4 sm:px-5 py-3 flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#221B16] border border-[#382C22] text-[#EDE6D9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89B52] animate-pulse shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                LEVEL 02 // PROJECT LAB
              </span>
            </span>
            <span className="font-mono text-[11px] text-[#A69279] shrink-0">
              [{currentIndex + 1}/{allProjects.length}]
            </span>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close project directory (Esc)"
            className="flex items-center gap-1.5 px-2 py-1 rounded-xs border border-[#382C22] bg-[#221B16] text-[#A69279] hover:text-[#EDE6D9] hover:border-[#D89B52] font-mono text-xs transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
          >
            <span>ESC</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 2. WORKSTATION SWITCHER TRACK */}
        <div className="w-full min-w-0 px-3 sm:px-4 py-2 border-b border-[#2A211A] bg-[#13100E] flex items-center justify-between gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project workstation"
            className="p-1 px-1.5 rounded-xs border border-[#382C22] bg-[#1E1713] hover:bg-[#251D18] hover:border-[#4D3A2A] text-[#A69279] hover:text-[#EDE6D9] font-mono text-xs transition-colors shrink-0"
          >
            ◀
          </button>

          <div className="flex-1 min-w-0 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {allProjects.map((proj) => {
              const isSelected = proj.id === currentProject.id;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleSelectTab(proj.id)}
                  aria-pressed={isSelected}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xs font-mono text-xs font-medium whitespace-nowrap shrink-0 transition-all ${
                    isSelected
                      ? "bg-[#C85A32]/20 text-[#EDE6D9] border border-[#C85A32] shadow-2xs"
                      : "bg-[#1A1410] border border-[#2E241D] text-[#A69279] hover:text-[#EDE6D9] hover:bg-[#221B16] hover:border-[#382C22]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isSelected ? "bg-[#C85A32]" : "bg-[#4D3A2A]"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-bold opacity-75">{proj.number}</span>
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project workstation"
            className="p-1 px-1.5 rounded-xs border border-[#382C22] bg-[#1E1713] hover:bg-[#251D18] hover:border-[#4D3A2A] text-[#A69279] hover:text-[#EDE6D9] font-mono text-xs transition-colors shrink-0"
          >
            ▶
          </button>
        </div>

        {/* 3. WORKSTATION CONSOLE VIGNETTE */}
        <div className="px-4 sm:px-5 py-3 bg-[#181310] border-b border-[#2A211A] flex items-center gap-3 sm:gap-4 min-w-0">
          {/* Mini Pixel Rig SVG Monitor */}
          <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xs bg-[#120F0D] border border-[#382C22] flex items-center justify-center p-1.5 shadow-inner">
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

          {/* Stance Readout Terminal */}
          <div className="relative flex-1 p-2.5 sm:p-3 rounded-xs bg-[#1E1713] border border-[#2E241D] shadow-2xs">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C85A32] font-semibold block mb-0.5">
              Engineering Stance // Workstation Spec
            </span>
            <p className="font-mono text-xs text-[#EDE6D9] leading-relaxed font-medium">
              &ldquo;{currentProject.tagline}&rdquo;
            </p>
          </div>
        </div>

        {/* 4. DETAIL CONTENT BODY */}
        <div className="flex-1 w-full max-w-full min-w-0 p-4 sm:p-5 space-y-4">
          {/* Title & Domain Header */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-[#A69279] font-mono font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
                {currentProject.domain}
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <h2 id="drawer-project-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[#EDE6D9]">
                {currentProject.title}
              </h2>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs text-[10px] font-mono font-medium border border-[#3DA154]/40 bg-[#3DA154]/15 text-[#4ADE80]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DA154] animate-pulse" aria-hidden="true" />
                <span>{currentProject.status}</span>
              </span>
            </div>
          </div>

          {/* Structured Architectural Dossier Cards */}
          <div className="space-y-3 text-xs sm:text-[13px]">
            <div className="p-3 sm:p-3.5 rounded-xs bg-[#181310] border border-[#2E241D] space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#D89B52] block font-semibold">
                01 // Engineering Challenge
              </span>
              <p className="text-[#C4B9A9] leading-relaxed font-sans">
                {currentProject.problem}
              </p>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xs bg-[#181310] border border-[#2E241D] space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#D89B52] block font-semibold">
                02 // Architectural Solution
              </span>
              <p className="text-[#C4B9A9] leading-relaxed font-sans">
                {currentProject.solution}
              </p>
            </div>
          </div>

          {/* Verified Architectural Signals */}
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#A69279] block font-semibold">
              Verified Architectural Signals
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentProject.technicalSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#1E1713] border border-[#382C22] font-mono text-xs text-[#EDE6D9] shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" aria-hidden="true" />
                  <span>{signal}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Context Ledger */}
          <div className="border-l-2 border-[#D89B52] bg-[#181310] border-y border-r border-[#2E241D] rounded-r-xs p-3 space-y-1 font-mono shadow-2xs">
            <span className="text-[#D89B52] font-semibold text-[11px] block uppercase tracking-wider">
              {currentProject.contextNote.badge}
            </span>
            <p className="text-[#A69279] text-xs leading-relaxed font-sans">
              {currentProject.contextNote.description}
            </p>
          </div>
        </div>

        {/* 5. BOTTOM CONTROL BAR */}
        <div className="sticky bottom-0 z-20 bg-[#181310]/95 backdrop-blur-md border-t border-[#2A211A] p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {currentProject.id === "manaksetu" ? (
              <Button
                variant="primary"
                size="sm"
                href="/work/manaksetu"
                className="gap-1.5 text-xs h-7.5 px-3"
              >
                <span>Read Full Case Study</span>
                <span aria-hidden="true">→</span>
              </Button>
            ) : null}

            {currentProject.externalLink && (
              <Button
                variant={currentProject.id === "manaksetu" ? "secondary" : "primary"}
                size="sm"
                href={currentProject.externalLink}
                external
                className="gap-1.5 text-xs h-7.5 px-3"
              >
                <span>Codebase Repository</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </Button>
            )}

            <Button
              variant="brass"
              size="sm"
              href={siteConfig.links.resume}
              external
              className="gap-1.5 text-xs h-7.5 px-2.5"
            >
              <span>Résumé PDF</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-[#A69279] hover:text-[#EDE6D9] underline-offset-4 hover:underline transition-colors px-2 py-1 self-center sm:self-auto"
          >
            Back to Studio (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
