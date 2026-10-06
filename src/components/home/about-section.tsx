import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  const quickFacts = [
    { label: "Degree & Standing", value: "B.Tech in Computer Science (3rd Year)" },
    { label: "Target Roles", value: "Software Engineering Intern · Applied AI · Full-Stack" },
    { label: "Community", value: "Google Developer Groups (GDG) on Campus Contributor" },
    { label: "Primary Stack", value: "Next.js 14, TypeScript, FastAPI, PostgreSQL, Qdrant, Docker" },
    { label: "Availability", value: "Summer & Fall 2026 Internship Opportunities" },
    { label: "Direct Email", value: siteConfig.email },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
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
              Candidate Background &amp; Experience
            </Eyebrow>
          </div>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            About Me
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            Engineering background, community leadership, and internship availability.
          </p>
        </div>

        {/* 2-Column Asymmetric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
              <p>
                I am a 3rd-year Computer Science and Engineering student focused on building
                software that bridges applied AI models with robust, production-ready interfaces.
                My work centers on turning complex algorithmic requirements into reliable,
                verifiable user experiences.
              </p>
              <p>
                My core technical strengths include designing hybrid retrieval pipelines
                (vector embeddings + BM25 lexical search), developing asynchronous FastAPI
                microservices with strict PostgreSQL relational schemas, and engineering responsive,
                accessible Next.js applications in TypeScript.
              </p>
              <p>
                Beyond individual project engineering, I actively contribute to{" "}
                <strong className="text-text-primary font-medium">Google Developer Groups (GDG) on Campus</strong>,
                collaborating with fellow student developers and organizing technical sessions on
                modern web architecture and developer tooling.
              </p>
            </div>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="md"
                href={siteConfig.links.resume}
                className="gap-2 text-xs h-10 px-5"
              >
                <span>View Full Resume</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={`mailto:${siteConfig.email}`}
                className="gap-2 text-xs h-10 px-5"
              >
                <span>Get in Touch</span>
                <span className="text-xs" aria-hidden="true">✉</span>
              </Button>

              <Button
                variant="outline"
                size="md"
                href={siteConfig.links.github}
                external
                className="gap-1.5 text-xs h-10 px-4"
              >
                <span>GitHub Profile</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Quick Recruiter Fact Ledger (Level 2 Exhibit) */}
          <div className="lg:col-span-5 w-full">
            <div
              className="rounded-xl border border-border-subtle bg-surface/50 p-6 sm:p-7 space-y-5 select-none"
              aria-label="Recruiter quick facts"
            >
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs">
                <span className="text-text-primary uppercase tracking-wider font-semibold text-[11px]">
                  Recruiter Fast Facts
                </span>
                <span className="text-accent-primary text-[11px]">At a Glance</span>
              </div>

              <div className="divide-y divide-border-subtle/70 font-mono text-xs">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="py-2.5 space-y-1">
                    <span className="text-text-tertiary text-[10px] uppercase tracking-wider block">
                      {fact.label}
                    </span>
                    <span className="text-text-primary text-xs font-sans font-medium block">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-text-tertiary">
                <span className="text-[11px]">Status</span>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span>Open to Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
