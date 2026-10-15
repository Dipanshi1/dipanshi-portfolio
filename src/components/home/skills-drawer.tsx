"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface SkillsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjects?: () => void;
}

const skillsData = [
  {
    number: "01",
    discipline: "Applied AI & Retrieval",
    summary: "Hybrid Search · LLM Extraction · Computer Vision",
    description:
      "Hybrid vector search (Qdrant) and lexical retrieval (BM25), deterministic 6-signal ranking formulas, structured Pydantic schema validation over Gemini API, and OpenCV image preprocessing.",
    tech: ["Qdrant", "Gemini API", "PyMuPDF", "BM25", "OpenCV", "Python"],
  },
  {
    number: "02",
    discipline: "Systems & Backend",
    summary: "FastAPI · PostgreSQL · Relational Schemas · Docker",
    description:
      "Asynchronous backend services with FastAPI, relational schema modeling with PostgreSQL and SQLAlchemy, row-level tenant security, stateless JWT authentication, and Docker containerization.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "JWT Auth", "Pydantic"],
  },
  {
    number: "03",
    discipline: "Product Design & UI",
    summary: "Next.js 14 · TypeScript · Design Systems · WCAG AA",
    description:
      "Design systems created in Figma with token-driven components, production Next.js 14 App Router engineering, keyboard-accessible flows, high-contrast states, and responsive layouts.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Figma", "WCAG 2.1 AA"],
  },
];

export function SkillsDrawer({ isOpen, onClose, onOpenProjects }: SkillsDrawerProps) {
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

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
        aria-labelledby="drawer-skills-title"
        className="relative w-full sm:max-w-xl md:max-w-2xl min-w-0 h-full bg-[#16120E] border-l border-[#382C22] shadow-2xl flex flex-col overflow-y-auto overflow-x-hidden text-text-primary animate-in slide-in-from-right duration-250"
      >
        {/* 1. TOP ARCHITECTURAL HEADER BAR */}
        <div className="sticky top-0 z-20 bg-[#181310]/95 backdrop-blur-md border-b border-[#2A211A] px-4 sm:px-5 py-3 flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#221B16] border border-[#382C22] text-[#EDE6D9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89B52] animate-pulse shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                LEVEL 04 // TECHNICAL STACK &amp; BENCHES
              </span>
            </span>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close skills directory (Esc)"
            className="flex items-center gap-1.5 px-2 py-1 rounded-xs border border-[#382C22] bg-[#221B16] text-[#A69279] hover:text-[#EDE6D9] hover:border-[#D89B52] font-mono text-xs transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
          >
            <span>ESC</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 2. DIRECTORY MAP VIGNETTE */}
        <div className="px-4 sm:px-5 py-3 bg-[#181310] border-b border-[#2A211A] flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xs bg-[#120F0D] border border-[#382C22] flex items-center justify-center p-1.5 shrink-0 shadow-inner">
            <svg viewBox="0 0 48 48" className="w-full h-full" style={{ shapeRendering: "crispEdges" }} aria-hidden="true">
              {/* Directory frame */}
              <rect x="6" y="6" width="36" height="36" fill="#1C1815" rx="2" stroke="#4B2C14" strokeWidth="2" />
              <rect x="10" y="10" width="28" height="6" fill="#12100E" />
              <rect x="12" y="20" width="4" height="4" fill="#3DA154" />
              <rect x="18" y="21" width="16" height="2" fill="#E2D9CA" />
              <rect x="12" y="28" width="4" height="4" fill="#C85A32" />
              <rect x="18" y="29" width="16" height="2" fill="#E2D9CA" />
              <rect x="12" y="36" width="4" height="4" fill="#D89B52" />
              <rect x="18" y="37" width="16" height="2" fill="#E2D9CA" />
            </svg>
          </div>

          <div className="relative flex-1 p-2.5 sm:p-3 rounded-xs bg-[#1E1713] border border-[#2E241D] shadow-2xs">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C85A32] font-semibold block mb-0.5">
              Capabilities Overview // Studio Benches
            </span>
            <p className="font-mono text-xs text-[#EDE6D9] leading-relaxed font-medium">
              Verified technical proficiencies spanning applied AI retrieval, relational database engineering, and modern web interfaces.
            </p>
          </div>
        </div>

        {/* 3. SKILLS LIST BODY */}
        <div className="flex-1 w-full max-w-full min-w-0 p-4 sm:p-5 space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-[#A69279] font-mono font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
                Engineering Toolchains &amp; Stack
              </span>
            </div>
            <h2 id="drawer-skills-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[#EDE6D9]">
              Core Competencies
            </h2>
          </div>

          <div className="space-y-3">
            {skillsData.map((item) => (
              <div
                key={item.number}
                className="p-3 sm:p-3.5 rounded-xs border border-[#2E241D] bg-[#181310] space-y-2.5 shadow-2xs"
              >
                <div className="flex items-center justify-between font-mono text-xs pb-1.5 border-b border-[#2A211A]">
                  <span className="font-bold text-[#C85A32]">{item.number}</span>
                  <span className="font-semibold text-[#EDE6D9] uppercase tracking-wider text-[11px]">
                    {item.discipline}
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-[#C4B9A9] leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-xs border border-[#382C22] bg-[#1E1713] font-mono text-[11px] text-[#EDE6D9] shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOOTER ACTIONS */}
        <div className="sticky bottom-0 z-20 bg-[#181310]/95 backdrop-blur-md border-t border-[#2A211A] p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onOpenProjects?.();
              }}
              className="gap-1.5 text-xs h-7.5 px-3"
            >
              <span>Explore Projects in Lab</span>
              <span aria-hidden="true">→</span>
            </Button>

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
