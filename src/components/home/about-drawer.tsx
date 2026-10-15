"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface AboutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjects?: () => void;
}

export function AboutDrawer({ isOpen, onClose, onOpenProjects }: AboutDrawerProps) {
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
        aria-labelledby="drawer-about-title"
        className="relative w-full sm:max-w-xl md:max-w-2xl min-w-0 h-full bg-[#16120E] border-l border-[#382C22] shadow-2xl flex flex-col overflow-y-auto overflow-x-hidden text-text-primary animate-in slide-in-from-right duration-250"
      >
        {/* 1. TOP ARCHITECTURAL HEADER BAR */}
        <div className="sticky top-0 z-20 bg-[#181310]/95 backdrop-blur-md border-b border-[#2A211A] px-4 sm:px-5 py-3 flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#221B16] border border-[#382C22] text-[#EDE6D9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89B52] animate-pulse shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                LEVEL 03 // STUDIO LEAD &amp; PROFILE
              </span>
            </span>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close profile drawer (Esc)"
            className="flex items-center gap-1.5 px-2 py-1 rounded-xs border border-[#382C22] bg-[#221B16] text-[#A69279] hover:text-[#EDE6D9] hover:border-[#D89B52] font-mono text-xs transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
          >
            <span>ESC</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 2. PIXEL CHARACTER VIGNETTE */}
        <div className="px-4 sm:px-5 py-3 bg-[#181310] border-b border-[#2A211A] flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xs bg-[#120F0D] border border-[#382C22] flex items-center justify-center p-1 shrink-0 shadow-inner">
            <svg viewBox="0 0 48 48" className="w-full h-full" style={{ shapeRendering: "crispEdges" }} aria-hidden="true">
              {/* Head & Neck */}
              <rect x="20" y="16" width="8" height="6" fill="#E5B899" />
              <rect x="16" y="8" width="16" height="14" fill="#F7D2B7" rx="3" />
              {/* Hair */}
              <rect x="14" y="4" width="20" height="8" fill="#2E231C" rx="3" />
              <rect x="14" y="8" width="4" height="12" fill="#2E231C" />
              <rect x="30" y="8" width="4" height="12" fill="#2E231C" />
              {/* Eyes & Smile */}
              <rect x="18" y="12" width="2" height="2" fill="#1C1917" />
              <rect x="28" y="12" width="2" height="2" fill="#1C1917" />
              <rect x="22" y="18" width="4" height="1" fill="#991B1B" />
              {/* Torso */}
              <rect x="14" y="22" width="20" height="20" fill="#0F766E" rx="2" />
              <rect x="20" y="22" width="8" height="8" fill="#F8FAFC" />
              {/* Waving Arm */}
              <rect x="34" y="18" width="4" height="10" fill="#0F766E" rx="1" />
              <rect x="33" y="14" width="5" height="5" fill="#F7D2B7" rx="1" />
            </svg>
          </div>

          <div className="relative flex-1 p-2.5 sm:p-3 rounded-xs bg-[#1E1713] border border-[#2E241D] shadow-2xs">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C85A32] font-semibold block mb-0.5">
              Personal Welcome // Studio Lead
            </span>
            <p className="font-mono text-xs text-[#EDE6D9] leading-relaxed font-medium">
              &ldquo;Hi, I&apos;m Dipanshi! I build software that bridges applied AI models with reliable, production user experiences.&rdquo;
            </p>
          </div>
        </div>

        {/* 3. CONTENT BODY */}
        <div className="flex-1 w-full max-w-full min-w-0 p-4 sm:p-5 space-y-4">
          {/* Title & Status */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" aria-hidden="true" />
              <span className="text-[#A69279] font-mono font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
                About Dipanshi Gupta
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <h2 id="drawer-about-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[#EDE6D9]">
                Engineering Candidate &amp; Student
              </h2>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs text-[10px] font-mono font-medium border border-[#3DA154]/40 bg-[#3DA154]/15 text-[#4ADE80]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DA154] animate-pulse" aria-hidden="true" />
                <span>{siteConfig.status}</span>
              </span>
            </div>
          </div>

          {/* Narrative Dossier Cards */}
          <div className="space-y-3 text-xs sm:text-[13px] text-[#C4B9A9] leading-relaxed font-sans">
            <div className="p-3 sm:p-3.5 rounded-xs bg-[#181310] border border-[#2E241D] space-y-2">
              <p>
                I am a 3rd-year Computer Science and Engineering student focused on building
                systems that bridge applied AI models with robust, production-ready interfaces.
                My work centers on turning complex algorithmic requirements into reliable,
                verifiable user experiences.
              </p>
              <p>
                My core technical strengths include designing hybrid retrieval pipelines
                (vector embeddings + BM25 lexical search), developing asynchronous FastAPI
                microservices with strict PostgreSQL relational schemas, and engineering responsive,
                token-driven interfaces in Next.js 14 and Tailwind CSS.
              </p>
              <p>
                Beyond individual projects, I actively contribute to Google Developer Groups
                (GDG) on Campus, collaborating with student engineers on web architecture and developer tooling.
              </p>
            </div>
          </div>

          {/* Recruiter Fast-Facts Ledger */}
          <div className="rounded-xs border border-[#2E241D] bg-[#181310] p-3 sm:p-3.5 space-y-2 font-mono text-xs shadow-2xs">
            <span className="font-semibold text-[#D89B52] uppercase tracking-wider text-[10px] sm:text-[11px] block pb-1.5 border-b border-[#2A211A]">
              Recruiter Quick Facts // Verification Ledger
            </span>
            <div className="flex justify-between items-baseline gap-2 pt-1">
              <span className="text-[#A69279]">Degree &amp; Standing:</span>
              <span className="text-[#EDE6D9] font-medium text-right">B.Tech CSE (3rd Year)</span>
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-[#A69279]">Target Roles:</span>
              <span className="text-[#EDE6D9] font-medium text-right">SWE Intern · Applied AI · Backend</span>
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-[#A69279]">Hackathons:</span>
              <span className="text-[#EDE6D9] font-medium text-right">Smart India Hackathon (SIH 26108)</span>
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-[#A69279]">Community:</span>
              <span className="text-[#EDE6D9] font-medium text-right">GDG on Campus Contributor</span>
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-[#A69279]">Location:</span>
              <span className="text-[#EDE6D9] font-medium text-right">India</span>
            </div>
          </div>
        </div>

        {/* 4. FOOTER ACTIONS */}
        <div className="sticky bottom-0 z-20 bg-[#181310]/95 backdrop-blur-md border-t border-[#2A211A] p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="brass"
              size="sm"
              href={siteConfig.links.resume}
              external
              className="gap-1.5 text-xs h-7.5 px-2.5"
            >
              <span>View Résumé PDF</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>

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
          </div>

          <div className="flex items-center gap-2.5 text-xs font-mono self-center sm:self-auto">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A69279] hover:text-[#EDE6D9] transition-colors"
            >
              GitHub ↗
            </a>
            <span className="text-[#382C22]">·</span>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A69279] hover:text-[#EDE6D9] transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
