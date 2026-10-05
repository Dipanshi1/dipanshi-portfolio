"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";

interface NavItem {
  id: string;
  num: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "problem", num: "01", label: "Problem" },
  { id: "architecture", num: "02", label: "Architecture" },
  { id: "ranking", num: "03", label: "Ranking" },
  { id: "extraction", num: "04", label: "Extraction" },
  { id: "verification", num: "05", label: "Verification" },
  { id: "tradeoffs", num: "06", label: "Tradeoffs" },
  { id: "ownership", num: "07", label: "Contribution" },
  { id: "outcome", num: "08", label: "Demonstration" },
];

export function CaseStudyNav() {
  const [activeId, setActiveId] = React.useState<string>("problem");

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Case Study Section Navigation"
      className="sticky top-14 sm:top-16 z-30 w-full border-b border-border-subtle bg-canvas/90 backdrop-blur-md transition-colors duration-150"
    >
      <Container>
        <div className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
          {/* Left Metadata / Brand Anchor */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-text-tertiary uppercase tracking-wider shrink-0 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" aria-hidden="true" />
            <span className="font-semibold text-text-secondary">ManakSetu</span>
            <span className="text-border-subtle">/</span>
            <span>Index</span>
          </div>

          {/* Horizontally Scrollable Section Bar */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 w-full lg:w-auto -mx-1 px-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-[11px] sm:text-xs transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focus ${
                    isActive
                      ? "bg-surface-elevated text-text-primary border border-border-subtle font-semibold shadow-xs"
                      : "text-text-tertiary hover:text-text-secondary hover:bg-surface/60 border border-transparent"
                  }`}
                >
                  <span
                    className={`text-[10px] transition-colors duration-150 ${
                      isActive ? "text-accent-primary font-bold" : "text-text-tertiary group-hover:text-text-secondary"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action / Top Anchor */}
          <div className="hidden xl:flex items-center gap-2 font-mono text-[11px] text-text-tertiary shrink-0">
            <a
              href="#case-study-hero"
              className="hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1 py-1"
            >
              <span>Top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}
