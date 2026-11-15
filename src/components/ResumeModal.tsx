"use client";

import React, { useEffect, useRef, useState } from "react";
import { FileText, Mail, Copy, Check, X } from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Focus management, trapping, and Escape handling
  useEffect(() => {
    if (isOpen) {
      // Save previously focused element to restore later
      previousActiveElementRef.current = document.activeElement as HTMLElement | null;

      // Disable body scrolling while modal is open
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Set initial focus to the close button
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      // Keydown listener for Escape and Tab trapping
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === "Tab" && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );

          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = originalOverflow;

        // Restore focus to previous element
        if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === "function") {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      aria-describedby="resume-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg p-6 sm:p-8 bg-white border border-stone-200 rounded-2xl shadow-2xl text-stone-900 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close resume notice"
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-800 transition-colors rounded-lg hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-violet-100 text-violet-700 rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Document Status</span>
            <h2 id="resume-modal-title" className="text-xl font-bold font-editorial text-stone-900">
              Resume Under Finalization
            </h2>
          </div>
        </div>

        <p id="resume-modal-desc" className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 font-light">
          Dipanshi&apos;s verified PDF resume is currently being updated with recent project work, hackathon submissions, and AWS coursework. 
          <br /><br />
          In the interim, you can directly request the verified credential package and comprehensive CV via email or connect on LinkedIn.
        </p>

        <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl mb-6">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>Direct Email for Inquiries</span>
            {copied && <span className="text-emerald-600 font-medium flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Copied</span>}
          </div>
          <div className="flex items-center justify-between font-mono text-sm font-semibold text-stone-800">
            <span className="truncate">{PERSONAL_INFO.email}</span>
            <button
              onClick={handleCopy}
              className="ml-2 inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-white border border-stone-300 hover:border-stone-400 rounded-md transition-colors text-stone-700 focus:outline-none focus:ring-2 focus:ring-violet-600"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Request%20%E2%80%94%20Dipanshi%20Gupta`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600"
          >
            <Mail className="w-4 h-4" />
            Request via Email
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-stone-800 border border-stone-300 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-600" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
