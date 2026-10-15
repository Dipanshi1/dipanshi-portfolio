"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { StatusPill } from "@/components/ui/status-pill";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  // Close mobile drawer on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-canvas/92 backdrop-blur-md transition-colors duration-150">
      <Container className="flex h-16 items-center justify-between">
        {/* Left: Identity & Availability */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
            aria-label={`${siteConfig.name} Home`}
          >
            <span className="font-mono text-xs font-bold px-2 py-1 rounded-sm border border-border-subtle bg-surface-elevated text-text-primary group-hover:border-accent-warning/60 group-hover:text-accent-warning transition-colors duration-150 shadow-2xs">
              {siteConfig.monogram}
            </span>
            <span className="text-sm font-semibold tracking-tight text-text-primary group-hover:text-accent-warning transition-colors duration-150">
              {siteConfig.name}
            </span>
          </a>

          {/* Subtle Availability Indicator (Desktop) */}
          <div className="hidden lg:flex items-center pl-3 border-l border-border-subtle">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-mono text-text-secondary bg-surface border border-border-subtle select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse shrink-0" aria-hidden="true" />
              <span>{siteConfig.status}</span>
            </span>
          </div>
        </div>

        {/* Right: Unified Navigation & Actions */}
        <div className="flex items-center gap-5 sm:gap-6 lg:gap-7">
          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-mono uppercase tracking-wider"
            aria-label="Main Navigation"
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-text-primary px-1 py-0.5 transition-colors duration-150 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Subtle Hairline Divider between Nav Links and Actions (Desktop) */}
          <span
            className="hidden md:block h-4 w-px bg-border-subtle shrink-0"
            aria-hidden="true"
          />

          {/* Actions: Resume, Theme Toggle, Mobile Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              href={siteConfig.links.resume}
              external
              className="hidden md:inline-flex text-xs h-9 px-3.5 border-accent-warning/60 bg-accent-warning/10 text-accent-warning hover:bg-accent-warning/20 hover:border-accent-warning font-mono rounded-sm transition-colors"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger / Close Trigger */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex md:hidden w-9 h-9 items-center justify-center rounded-sm border border-border-subtle bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Accessible Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-canvas/98 border-b border-border-subtle backdrop-blur-xl transition-all duration-200 ease-out-expo overflow-y-auto max-h-[calc(100vh-4rem)]",
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        )}
      >
        <Container className="py-6 space-y-6">
          {/* Mobile Status Header */}
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
            <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
              Status
            </span>
            <StatusPill variant="available">
              {siteConfig.status}
            </StatusPill>
          </div>

          {/* Numbered Nav Links */}
          <nav className="flex flex-col space-y-2 font-mono text-sm" aria-label="Mobile Navigation">
            {siteConfig.nav.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between min-h-[44px] py-2.5 px-3 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              >
                <span className="font-sans font-medium text-base text-text-primary">
                  {item.label}
                </span>
                <span className="text-text-tertiary text-xs">
                  {`0${index + 1}`}
                </span>
              </a>
            ))}

            {/* Resume Link in Drawer */}
            <a
              href={siteConfig.links.resume}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between min-h-[44px] py-2.5 px-3 rounded-md text-text-primary hover:text-text-primary hover:bg-surface-elevated transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            >
              <span className="font-sans font-medium text-base">
                View Resume
              </span>
              <span className="text-xs">↗</span>
            </a>
          </nav>

          {/* Outbound & Contact Footer in Drawer */}
          <div className="pt-4 border-t border-border-subtle flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-text-tertiary uppercase tracking-wider">Direct Contact</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-text-primary hover:underline hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1 font-mono text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              >
                <span>{siteConfig.email}</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-text-secondary pt-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors duration-150 flex items-center gap-1"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <span className="text-border-subtle">·</span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors duration-150 flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
