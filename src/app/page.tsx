import * as React from "react";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TechTag } from "@/components/ui/tech-tag";
import { MetadataLabel, MetricStat } from "@/components/ui/metadata-label";
import { CopyButton } from "@/components/ui/copy-button";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <Container className="space-y-16 py-12 sm:py-16">
      {/* Shell Preview Header */}
      <div className="space-y-4 max-w-3xl border-b border-border-subtle pb-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-border-subtle bg-surface text-text-secondary">
            MILESTONE 2
          </span>
          <StatusPill variant="available">Shell & Primitives Active</StatusPill>
        </div>
        <Eyebrow>Design System & Global Shell Baseline</Eyebrow>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
          Atomic UI Primitives & Editorial Shell
        </h1>
        <p className="text-text-secondary text-base leading-relaxed">
          This preview verifies the reusable visual language, layout containers,
          accessible button primitives, status indicators, and technical typography tokens.
          The portfolio homepage narrative will be implemented in subsequent milestones.
        </p>
      </div>

      {/* 1. Button Primitives Matrix */}
      <Section size="sm" className="space-y-6 border-b border-border-subtle pb-12">
        <div className="space-y-1">
          <Eyebrow>01 / Button Primitives</Eyebrow>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            Action States & Hierarchy
          </h2>
          <p className="text-text-secondary text-sm">
            High-contrast primary, subtle secondary, clean outline, ghost, and disabled treatments with visible focus rings.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Button variant="primary">
            <span>Primary Action</span>
          </Button>

          <Button variant="secondary">
            <span>Secondary Action</span>
          </Button>

          <Button variant="outline">
            <span>Outline Action</span>
          </Button>

          <Button variant="ghost">
            <span>Ghost Action</span>
          </Button>

          <Button variant="secondary" size="sm">
            <span>Small (32px)</span>
          </Button>

          <Button variant="primary" disabled>
            <span>Disabled State</span>
          </Button>

          <Button variant="outline" size="sm" href={siteConfig.links.github} external>
            <span>External ↗</span>
          </Button>
        </div>
      </Section>

      {/* 2. Status & Metadata Primitives */}
      <Section size="sm" className="space-y-6 border-b border-border-subtle pb-12">
        <div className="space-y-1">
          <Eyebrow>02 / Status & Metadata</Eyebrow>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            Status Indicators & Technical Data
          </h2>
          <p className="text-text-secondary text-sm">
            Monospace micro-treatments engineered for recruiter scanning and technical rigor.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <StatusPill variant="available">Available for Internships</StatusPill>
          <StatusPill variant="neutral" pulse={false}>Production Verified</StatusPill>
          <StatusPill variant="warning">Under Review</StatusPill>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <MetricStat
            stat="45 / 20 / 20"
            label="Hybrid Ranking Weights"
            context="Dense / BM25 / Domain"
          />
          <MetricStat
            stat="< 250ms"
            label="Motion Budget"
            context="Target micro-interaction latency"
          />
          <MetricStat
            stat="100% WCAG"
            label="Contrast Compliance"
            context="AA level across both themes"
          />
        </div>

        <div className="flex flex-wrap gap-6 pt-2">
          <MetadataLabel label="Engine" value="FastAPI + Qdrant" inline />
          <MetadataLabel label="Tokenizer" value="PyMuPDF / fitz" inline />
          <MetadataLabel label="Status" value="M2 Verified" inline />
        </div>
      </Section>

      {/* 3. Technology Tags */}
      <Section size="sm" className="space-y-6 border-b border-border-subtle pb-12">
        <div className="space-y-1">
          <Eyebrow>03 / Technology Tags</Eyebrow>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            Restrained Technical Taxonomy
          </h2>
          <p className="text-text-secondary text-sm">
            Monospace uppercase tags designed for project architecture cards and capability matrices.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <TechTag dot active>Next.js 14</TechTag>
          <TechTag dot>TypeScript</TechTag>
          <TechTag dot>Tailwind CSS</TechTag>
          <TechTag>FastAPI</TechTag>
          <TechTag>PostgreSQL</TechTag>
          <TechTag>Qdrant</TechTag>
          <TechTag>PyMuPDF</TechTag>
          <TechTag>Docker</TechTag>
          <TechTag interactive>Interactive Tag ↗</TechTag>
        </div>
      </Section>

      {/* 4. Contact & Interaction Primitives */}
      <Section size="sm" className="space-y-6">
        <div className="space-y-1">
          <Eyebrow>04 / Contact & Clipboard Action</Eyebrow>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            Direct Email Interaction
          </h2>
          <p className="text-text-secondary text-sm">
            One-click copy-to-clipboard action with visual confirmation and screen-reader accessibility.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <CopyButton
            textToCopy={siteConfig.email}
            variant="button"
            label={`Copy: ${siteConfig.email}`}
            copiedLabel="Email Address Copied!"
          />
          <CopyButton
            textToCopy={siteConfig.email}
            variant="badge"
            label={siteConfig.email}
            copiedLabel="Copied!"
          />
        </div>
      </Section>
    </Container>
  );
}
