"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
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
        aria-labelledby="drawer-about-title"
        className="relative w-full max-w-xl h-full bg-surface border-l border-border-subtle shadow-2xl flex flex-col overflow-y-auto text-text-primary animate-in slide-in-from-right duration-250"
      >
        {/* Top Header */}
        <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md border-b border-border-subtle px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
              Engineer Profile · Studio Lead
            </span>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close profile drawer (Esc)"
            className="p-1.5 rounded-sm border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary focus-visible:outline-2 focus-visible:outline-border-focus transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Pixel Character Vignette */}
        <div className="px-5 py-4 bg-[#181411] border-b border-border-subtle flex items-center gap-4">
          <div className="w-20 h-20 rounded-sm bg-[#241E1A] border border-border-subtle flex items-center justify-center p-1 shrink-0 shadow-inner">
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

          <div className="p-3 rounded-sm bg-surface-elevated border border-border-subtle flex-1 shadow-2xs">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-primary font-semibold block mb-0.5">
              Personal Welcome
            </span>
            <p className="font-mono text-xs text-text-primary leading-relaxed font-medium">
              &ldquo;Hi, I&apos;m Dipanshi! I build software that bridges applied AI models with reliable, production user experiences.&rdquo;
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-5 sm:p-6 space-y-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" aria-hidden="true" />
              <Eyebrow className="text-text-tertiary font-semibold tracking-wider text-[11px]">
                About Dipanshi Gupta
              </Eyebrow>
            </div>
            <h2 id="drawer-about-title" className="text-2xl font-semibold tracking-tight text-text-primary">
              Engineering Candidate &amp; Student
            </h2>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-xs font-mono font-medium border border-accent-success/30 bg-accent-success/10 text-accent-success select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" aria-hidden="true" />
              <span>{siteConfig.status}</span>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
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

          {/* Recruiter Fast-Facts Ledger */}
          <div className="rounded-sm border border-border-subtle bg-surface-elevated/40 p-4 space-y-2.5 font-mono text-xs shadow-2xs">
            <span className="font-semibold text-text-primary uppercase tracking-wider text-[11px] block pb-1 border-b border-border-subtle">
              Recruiter Quick Facts
            </span>
            <div className="flex justify-between items-baseline gap-2 pt-1">
              <span className="text-text-tertiary">Degree &amp; Standing:</span>
              <span className="text-text-primary font-medium text-right">B.Tech CSE (3rd Year)</span>
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-text-tertiary">Target Roles:</span>
              <span className="text-text-primary font-medium text-right">SWE Intern · Applied AI · Backend</span>
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-text-tertiary">Hackathons:</span>
              <span className="text-text-primary font-medium text-right">Smart India Hackathon (SIH 26108)</span>
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-text-tertiary">Community:</span>
              <span className="text-text-primary font-medium text-right">GDG on Campus Contributor</span>
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-text-tertiary">Location:</span>
              <span className="text-text-primary font-medium text-right">India</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 bg-surface/95 backdrop-blur-md border-t border-border-subtle p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              variant="brass"
              size="md"
              href={siteConfig.links.resume}
              external
              className="gap-1.5 text-xs"
            >
              <span>View Résumé PDF</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={() => {
                onClose();
                onOpenProjects?.();
              }}
              className="gap-1.5 text-xs"
            >
              <span>Explore Projects</span>
              <span aria-hidden="true">→</span>
            </Button>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub ↗
            </a>
            <span className="text-border-subtle">·</span>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
