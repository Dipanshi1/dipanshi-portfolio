import * as React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { StatusPill } from "@/components/ui/status-pill";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-subtle bg-canvas mt-auto transition-colors duration-150">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Identity & Stance */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold px-2 py-1 rounded border border-border-subtle bg-surface text-text-primary">
                {siteConfig.monogram}
              </span>
              <span className="text-base font-semibold tracking-tight text-text-primary">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Computer Science engineering student building at the intersection of
              applied AI systems, backend architectures, and thoughtful product design.
            </p>
            <div className="pt-1">
              <StatusPill variant="available">
                {siteConfig.status}
              </StatusPill>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.links.resume}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1"
                >
                  <span>Resume (On Request)</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Outbound & Contact Action */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-150 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md border border-border-subtle bg-surface hover:bg-surface-elevated hover:border-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                >
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
                    className="w-3.5 h-3.5 text-text-tertiary"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline Divider & System Copyright */}
        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-tertiary">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div>
            Next.js 14 · TypeScript · Tailwind CSS
          </div>
        </div>
      </Container>
    </footer>
  );
}
