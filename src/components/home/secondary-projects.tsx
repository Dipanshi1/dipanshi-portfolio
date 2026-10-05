import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface SecondaryProject {
  number: string;
  title: string;
  domain: string;
  tagline: string;
  description: string;
  proof: { label: string; value: string }[];
  tech: string[];
  link: string;
  linkText: string;
  external: boolean;
}

const projects: SecondaryProject[] = [
  {
    number: "02",
    title: "AgriVision AI",
    domain: "Computer Vision · Applied AI",
    tagline: "Automated crop disease classification via computer vision.",
    description:
      "Deep learning vision pipeline classifying crop leaf pathologies. Uses OpenCV CLAHE contrast enhancement and channel normalization with a containerized FastAPI inference microservice.",
    proof: [
      { label: "Pipeline", value: "OpenCV CLAHE → ResNet Features → Softmax" },
      { label: "Input Tensor", value: "224 × 224 × 3 RGB Scaled" },
      { label: "Deployment", value: "Containerized Docker Inference Microservice" },
    ],
    tech: ["OpenCV", "FastAPI", "Docker", "Python", "NumPy"],
    link: "https://github.com/Dipanshi1/agri-vision-ai",
    linkText: "Codebase Repository",
    external: true,
  },
  {
    number: "03",
    title: "Interview Tracker Pro",
    domain: "Full-Stack · Backend & Data",
    tagline: "Relational lifecycle management with JWT security.",
    description:
      "Production-grade recruitment workflow engine with strict PostgreSQL relational modeling via SQLAlchemy, status transition state machines, and stateless JWT authentication with row-level tenant isolation.",
    proof: [
      { label: "Data Model", value: "PostgreSQL Normalized Schemas + Cascading FKs" },
      { label: "Security", value: "Bearer JWT (RS256) with Row-Level Query Scoping" },
      { label: "Validation", value: "Pydantic v2 Request/Response Serialization" },
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT Auth", "Docker"],
    link: siteConfig.links.github,
    linkText: "GitHub Repository",
    external: true,
  },
  {
    number: "04",
    title: "Career Adviser",
    domain: "LLM Application · Product Engineering",
    tagline: "Schema-grounded LLM advisory engine with zero parse drift.",
    description:
      "AI-assisted career advisory platform pairing generative LLM capabilities with rigorous Pydantic schema validation over Gemini API, eliminating malformed responses while generating actionable technical roadmaps.",
    proof: [
      { label: "Guardrails", value: "Strict Pydantic BaseModels (0% Parse Drift)" },
      { label: "Synthesis", value: "Competency Gap Analysis & Sequenced Milestones" },
      { label: "Interface", value: "Next.js 14 App Router with Tailwind CSS" },
    ],
    tech: ["Next.js 14", "TypeScript", "Gemini API", "Pydantic", "Tailwind CSS"],
    link: siteConfig.links.github,
    linkText: "GitHub Repository",
    external: true,
  },
];

export function SecondaryProjects() {
  return (
    <section
      id="secondary-projects"
      aria-labelledby="secondary-projects-heading"
      className="relative w-full border-t border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150 scroll-mt-16"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl pb-10 sm:pb-14">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              aria-hidden="true"
            />
            <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
              Selected Engineering Projects · 03 Systems
            </Eyebrow>
          </div>
          <h2
            id="secondary-projects-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            Supporting Production Projects
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            Targeted systems demonstrating computer vision inference, relational backend services,
            and structured LLM application architectures.
          </p>
        </div>

        {/* 3-Project Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="flex flex-col justify-between space-y-6 p-6 sm:p-7 rounded-xl border border-border-subtle bg-surface/50 hover:border-border-focus/40 hover:bg-surface transition-all duration-150"
            >
              <div className="space-y-4">
                {/* Number & Domain */}
                <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
                  <span className="text-accent-primary font-bold text-base">
                    {project.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-text-tertiary">
                    {project.domain}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-xl text-text-primary font-sans">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-accent-primary font-medium">
                    &ldquo;{project.tagline}&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Compact Technical Proof Specs */}
                <div className="p-3.5 rounded-lg border border-border-subtle bg-surface-elevated/50 font-mono text-xs space-y-1.5">
                  <span className="text-[10px] text-text-tertiary uppercase tracking-wider block">
                    Technical Specifications
                  </span>
                  {project.proof.map((item, idx) => (
                    <div key={idx} className="flex items-baseline justify-between text-[11px] gap-2">
                      <span className="text-text-tertiary">{item.label}:</span>
                      <span className="text-text-primary text-right font-medium truncate">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-1">
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded border border-border-subtle bg-surface text-text-secondary text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-border-subtle">
                <Button
                  variant="outline"
                  size="sm"
                  href={project.link}
                  external={project.external}
                  className="w-full justify-center gap-1.5 text-xs h-9"
                >
                  <span>{project.linkText}</span>
                  <span className="text-xs" aria-hidden="true">↗</span>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
