"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  variant?: "inline" | "badge" | "button";
}

export function CopyButton({
  textToCopy,
  label = "Copy Email",
  copiedLabel = "Copied!",
  variant = "button",
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const variantStyles = {
    button:
      "inline-flex items-center justify-center gap-2 h-9 px-3.5 rounded-md border border-border-subtle bg-surface text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-elevated hover:border-text-secondary active:scale-[0.98] transition-all duration-150",
    badge:
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border-subtle bg-surface font-mono text-xs text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors duration-150",
    inline:
      "inline-flex items-center gap-1.5 text-xs text-accent-primary hover:underline underline-offset-4 font-mono",
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard" : `Copy ${textToCopy} to clipboard`}
      className={cn(
        variantStyles[variant],
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas select-none",
        copied && "text-accent-success border-accent-success/40",
        className
      )}
      {...props}
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 shrink-0 text-accent-success"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 shrink-0"
          aria-hidden="true"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )}
      <span>{copied ? copiedLabel : label}</span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied text to clipboard" : ""}
      </span>
    </button>
  );
}
