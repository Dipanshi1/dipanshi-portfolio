"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
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
      className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
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
        className="relative w-full max-w-xl h-full bg-surface border-l border-border-subtle shadow-2xl flex flex-col overflow-y-auto text-text-primary animate-in slide-in-from-right duration-250"
      >
        {/* Top Header */}
        <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md border-b border-border-subtle px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
              Studio Directory · Technical Stack
            </span>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close skills drawer (Esc)"
            className="p-1.5 rounded-sm border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary focus-visible:outline-2 focus-visible:outline-border-focus transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Directory Map Vignette */}
        <div className="px-5 py-4 bg-[#181411] border-b border-border-subtle flex items-center gap-4">
          <div className="w-20 h-20 rounded-sm bg-[#241E1A] border border-border-subtle flex items-center justify-center p-2 shrink-0 shadow-inner">
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

          <div className="p-3 rounded-sm bg-surface-elevated border border-border-subtle flex-1 shadow-2xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-primary font-semibold block mb-0.5">
              Capabilities Overview
            </span>
            <p className="font-mono text-xs text-text-primary leading-relaxed font-medium">
              Verified technical proficiencies spanning applied AI retrieval, relational database engineering, and modern web interfaces.
            </p>
          </div>
        </div>

        {/* Skills List */}
        <div className="flex-1 p-5 sm:p-6 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" aria-hidden="true" />
              <Eyebrow className="text-text-tertiary font-semibold tracking-wider text-[11px]">
                Engineering Toolchains
              </Eyebrow>
            </div>
            <h2 id="drawer-skills-title" className="text-2xl font-semibold tracking-tight text-text-primary">
              Core Competencies
            </h2>
          </div>

          <div className="space-y-4">
            {skillsData.map((item) => (
              <div
                key={item.number}
                className="p-4 rounded-sm border border-border-subtle bg-surface-elevated/40 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
                  <span className="font-bold text-accent-primary">{item.number}</span>
                  <span className="font-semibold text-text-primary uppercase tracking-wider">
                    {item.discipline}
                  </span>
                </div>

                <p className="font-mono text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-sm border border-border-subtle bg-surface font-mono text-[11px] text-text-primary shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 bg-surface/95 backdrop-blur-md border-t border-border-subtle p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                onClose();
                onOpenProjects?.();
              }}
              className="gap-1.5 text-xs"
            >
              <span>Explore Projects in Lab</span>
              <span aria-hidden="true">→</span>
            </Button>

            <Button
              variant="brass"
              size="md"
              href={siteConfig.links.resume}
              external
              className="gap-1.5 text-xs"
            >
              <span>Résumé PDF</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-text-secondary hover:text-text-primary underline-offset-4 hover:underline transition-colors px-2 py-1"
          >
            Back to Studio (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
