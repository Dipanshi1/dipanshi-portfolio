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
    <header className="sticky top-0 z-50 w-full border-b border-[#2C231C] bg-[#14110F]/95 backdrop-blur-md transition-colors duration-150">
      <div className="w-full max-w-7xl mx-auto flex h-10 sm:h-11 items-center justify-between px-3 sm:px-5">
        {/* Left: Identity & Availability Nameplate */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="/"
            className="group flex items-center gap-1.5 sm:gap-2 rounded-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
            aria-label={`${siteConfig.name} Studio Home`}
          >
            <span className="font-mono text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-xs border border-[#4D3A2A] bg-[#221B16] text-[#D89B52] group-hover:border-[#D89B52] transition-colors shadow-2xs">
              {siteConfig.monogram}
            </span>
            <span className="font-mono text-xs sm:text-[13px] font-semibold tracking-tight text-[#EDE6D9] group-hover:text-[#D89B52] transition-colors">
              {siteConfig.name}
            </span>
          </a>

          {/* Subtle Studio Status Indicator (Desktop) */}
          <div className="hidden lg:flex items-center pl-2 border-l border-[#2C231C]">
            <span className="inline-flex items-center gap-1.5 px-1.5 py-0.2 rounded-xs text-[10px] font-mono text-text-tertiary bg-[#1A1512] border border-[#2A211A] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse shrink-0" aria-hidden="true" />
              <span>{siteConfig.status}</span>
            </span>
          </div>
        </div>

        {/* Right: Unified Navigation & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-0.5 sm:gap-1 text-[11px] font-mono uppercase tracking-wider"
            aria-label="Main Navigation"
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-[#EDE6D9] hover:bg-[#221B16] px-1.5 sm:px-2 py-0.5 transition-colors duration-150 rounded-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Subtle Hairline Divider (Desktop) */}
          <span
            className="hidden md:block h-3 w-px bg-[#2C231C] shrink-0"
            aria-hidden="true"
          />

          {/* Actions: Resume, Theme Toggle, Mobile Trigger */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Button
              variant="brass"
              size="sm"
              href={siteConfig.links.resume}
              external
              className="hidden md:inline-flex text-[11px] h-6.5 px-2 font-mono"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="11"
                height="11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 ml-0.5"
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
              className="inline-flex md:hidden w-7 h-7 items-center justify-center rounded-xs border border-[#3D342C] bg-[#241E1A] text-text-secondary hover:text-text-primary hover:bg-[#2C221C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
            >
              {isOpen ? (
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
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
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        className={cn(
          "md:hidden fixed inset-x-0 top-10 sm:top-11 z-50 bg-[#181411] border-b border-[#2C231C] backdrop-blur-xl transition-all duration-200 ease-out-expo overflow-y-auto max-h-[calc(100vh-2.75rem)] shadow-2xl",
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        )}
      >
        <Container className="py-4 space-y-4">
          {/* Mobile Status Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#2C231C]">
            <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
              Studio Status
            </span>
            <StatusPill variant="available">
              {siteConfig.status}
            </StatusPill>
          </div>

          {/* Numbered Nav Links */}
          <nav className="flex flex-col space-y-1 font-mono text-xs" aria-label="Mobile Navigation">
            {siteConfig.nav.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between min-h-[40px] py-2 px-3 rounded-xs text-text-secondary hover:text-[#EDE6D9] hover:bg-[#221B16] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
              >
                <span className="font-mono font-medium text-sm text-[#EDE6D9]">
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
              className="flex items-center justify-between min-h-[40px] py-2 px-3 rounded-xs text-[#E0A35C] bg-[#A8763E]/10 border border-[#A8763E]/40 hover:bg-[#A8763E]/20 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
            >
              <span className="font-mono font-medium text-sm">
                View Resume PDF
              </span>
              <span className="text-xs">↗</span>
            </a>
          </nav>

          {/* Outbound & Contact Footer in Drawer */}
          <div className="pt-3 border-t border-[#2C231C] flex flex-col gap-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-text-tertiary uppercase tracking-wider text-[11px]">Direct Contact</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#EDE6D9] hover:text-[#D89B52] transition-colors duration-150 inline-flex items-center gap-1 font-mono text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D89B52]/70"
              >
                <span>{siteConfig.email}</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-text-secondary pt-1">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EDE6D9] transition-colors duration-150 flex items-center gap-1"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <span className="text-[#382C22]">·</span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EDE6D9] transition-colors duration-150 flex items-center gap-1"
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
