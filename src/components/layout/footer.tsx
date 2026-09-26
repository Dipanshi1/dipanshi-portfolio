import * as React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { CopyButton } from "@/components/ui/copy-button";
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
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-150 inline-flex items-center gap-1"
                >
                  <span>Resume</span>
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
              <li className="pt-2">
                <CopyButton
                  textToCopy={siteConfig.email}
                  variant="button"
                  label={siteConfig.email}
                  copiedLabel="Email Copied!"
                  className="w-full sm:w-auto"
                />
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
