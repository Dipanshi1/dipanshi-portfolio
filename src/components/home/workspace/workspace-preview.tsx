"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WorkstationData } from "./types";

interface WorkspacePreviewProps {
  station: WorkstationData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WorkspacePreview({
  station,
  isOpen,
  onClose,
}: WorkspacePreviewProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  // Focus trap & Escape key listener
  React.useEffect(() => {
    if (!isOpen) return;

    // Set initial focus to the close button for instant keyboard control
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
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

  if (!isOpen || !station) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity duration-150 animate-in fade-in"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-heading"
        aria-describedby="preview-description"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-border-subtle bg-surface p-6 sm:p-8 shadow-xl transition-all duration-150 text-text-primary"
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-border-subtle">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent-primary"
                aria-hidden="true"
              />
              <Eyebrow className="text-text-tertiary font-semibold tracking-wider text-[11px]">
                {station.domain}
              </Eyebrow>
            </div>
            <div className="flex items-center gap-3">
              <h3
                id="preview-heading"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary"
              >
                {station.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 motion-reduce:animate-none animate-pulse"
                  aria-hidden="true"
                />
                <span>{station.status}</span>
              </span>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close workstation preview (Esc)"
            className="flex-shrink-0 p-2 rounded-lg border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary focus-visible:outline-2 focus-visible:outline-border-focus transition-colors duration-150"
          >
            <span className="sr-only">Close preview</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 pt-4">
          {/* Tagline */}
          <p className="font-mono text-xs sm:text-sm text-accent-primary font-medium">
            &ldquo;{station.tagline}&rdquo;
          </p>

          {/* Problem & Solution narrative */}
          <div id="preview-description" className="space-y-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block mb-1">
                Engineering Challenge
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                {station.problem}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block mb-1">
                Architectural Solution
              </span>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                {station.solution}
              </p>
            </div>
          </div>

          {/* Technical Signals */}
          <div className="space-y-2 pt-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
              Verified Technical Signals
            </span>
            <div className="flex flex-wrap gap-2">
              {station.technicalSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-elevated border border-border-subtle font-mono text-xs text-text-primary"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent-primary"
                    aria-hidden="true"
                  />
                  <span>{signal}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Contribution & Context */}
          <div className="p-3.5 rounded-lg border border-border-subtle bg-surface-elevated/60 font-mono text-xs text-text-tertiary space-y-1">
            <span className="text-text-secondary font-medium text-[11px] block">
              {station.contextNote.badge}
            </span>
            <p className="text-[11px] leading-relaxed">
              {station.contextNote.description}
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              href={station.link}
              className="gap-2 text-xs h-10 px-5"
            >
              <span>View Full Case Study</span>
              <span className="text-xs" aria-hidden="true">
                →
              </span>
            </Button>

            {station.externalLink && (
              <Button
                variant="outline"
                size="md"
                href={station.externalLink}
                external
                className="gap-1.5 text-xs h-10 px-4"
              >
                <span>Codebase Repository</span>
                <span className="text-xs" aria-hidden="true">
                  ↗
                </span>
              </Button>
            )}
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
