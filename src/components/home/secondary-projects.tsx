import * as React from "react";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { TechTag } from "@/components/ui/tech-tag";
import { siteConfig } from "@/config/site";

export function SecondaryProjects() {
  return (
    <section
      id="secondary-projects"
      aria-labelledby="secondary-projects-heading"
      className="relative w-full border-t border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl pb-16 sm:pb-20">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              aria-hidden="true"
            />
            <Eyebrow className="text-text-tertiary font-semibold tracking-wider">
              Production Systems · Selected Case Studies
            </Eyebrow>
          </div>
          <h2
            id="secondary-projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary"
          >
            Secondary Production Projects
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            Production-oriented systems spanning computer vision inference,
            relational backend services, and structured LLM applications engineered
            for deterministic execution.
          </p>
        </div>

        {/* Editorial Project Showcase Entries */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {/* ========================================================= */}
          {/* PROJECT 1: AgriVision AI (Computer Vision / Applied AI)   */}
          {/* ========================================================= */}
          <article
            aria-labelledby="agrivision-heading"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start"
          >
            {/* Narrative Column */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                  01 / Computer Vision · Applied AI
                </span>
                <h3
                  id="agrivision-heading"
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary"
                >
                  AgriVision AI
                </h3>
                <p className="font-mono text-xs sm:text-sm text-accent-primary font-medium tracking-tight">
                  &ldquo;Automated crop leaf disease detection via computer vision and containerized inference.&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Deep learning-powered computer vision pipeline developed to classify
                crop pathologies from agricultural leaf imagery. Integrates OpenCV
                image preprocessing, tensor normalization, and convolutional feature
                classification with a containerized FastAPI inference microservice
                designed for automated diagnostic workflows.
              </p>

              {/* Technical Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary block">
                  Engineering Architecture
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        OpenCV Preprocessing Pipeline:
                      </strong>{" "}
                      Standardizes raw leaf captures via CLAHE contrast enhancement,
                      resolution rescaling, and channel normalization to isolate
                      lesions across lighting variances.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        Softmax Anomaly Classification:
                      </strong>{" "}
                      Extracts convolutional feature tensors to evaluate pathological
                      anomalies across target crop classes with normalized confidence scoring.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        Containerized Inference Microservice:
                      </strong>{" "}
                      Serves inference payloads through asynchronous FastAPI endpoints,
                      packaged with Docker for reproducible deployment across edge environments.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Verified Technology Tags */}
              <div className="pt-2 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                  Verified Toolchain
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  <TechTag>Python</TechTag>
                  <TechTag>FastAPI</TechTag>
                  <TechTag>OpenCV</TechTag>
                  <TechTag>Docker</TechTag>
                  <TechTag>NumPy</TechTag>
                  <TechTag>Pillow</TechTag>
                </div>
              </div>

              {/* Action Link & Context */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  size="md"
                  href="https://github.com/Dipanshi1/agri-vision-ai"
                  external
                  className="gap-1.5 text-xs h-9 px-4"
                >
                  <span>Codebase Repository</span>
                  <span className="text-xs" aria-hidden="true">
                    ↗
                  </span>
                </Button>
                <span className="font-mono text-xs text-text-tertiary">
                  Status: <span className="text-text-secondary">Inference Microservice</span>
                </span>
              </div>
            </div>

            {/* Technical Inspection Artifact Frame */}
            <div className="lg:col-span-6 w-full">
              <div
                className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 shadow-sm space-y-5 select-none hover:border-border-focus/30 transition-colors duration-200"
                aria-label="AgriVision AI computer vision pipeline telemetry preview"
              >
                {/* Frame Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/40"
                      aria-hidden="true"
                    ></span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Vision Inference Pipeline
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    <span>Containerized API</span>
                  </div>
                </div>

                {/* Sub-panel 1: Image Preprocessing Pipeline */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-text-tertiary uppercase tracking-wider">
                      Input Tensor Matrix
                    </span>
                    <span className="text-text-secondary">
                      leaf_sample_RGB_042.jpg
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded bg-surface border border-border-subtle space-y-1">
                      <span className="text-[10px] text-text-tertiary uppercase block">
                        Dimensions
                      </span>
                      <span className="text-text-primary font-medium">
                        224 × 224 × 3 (RGB)
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface border border-border-subtle space-y-1">
                      <span className="text-[10px] text-text-tertiary uppercase block">
                        Normalization
                      </span>
                      <span className="text-text-primary font-medium">
                        CLAHE + Mean [0.485...]
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-panel 2: Classification Softmax Confidence Distribution */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated space-y-3">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-accent-primary uppercase tracking-wider font-semibold">
                      Diagnostic Prediction
                    </span>
                    <span className="font-mono text-xs font-semibold text-text-primary">
                      Alternaria solani
                    </span>
                  </div>

                  <div className="space-y-2">
                    {/* Primary class */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-text-primary font-medium">
                          Early Blight (Target Detection)
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          94.2%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden border border-border-subtle">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: "94.2%" }}
                        />
                      </div>
                    </div>

                    {/* Secondary class */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono text-text-tertiary">
                        <span>Late Blight Anomaly</span>
                        <span>3.8%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden border border-border-subtle">
                        <div
                          className="h-full bg-text-tertiary/40 rounded-full"
                          style={{ width: "3.8%" }}
                        />
                      </div>
                    </div>

                    {/* Healthy baseline */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono text-text-tertiary">
                        <span>Healthy Baseline</span>
                        <span>2.0%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden border border-border-subtle">
                        <div
                          className="h-full bg-text-tertiary/20 rounded-full"
                          style={{ width: "2.0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-panel 3: Telemetry Stat Boxes */}
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-text-tertiary text-center">
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      ~42ms
                    </div>
                    <div>Inference Latency</div>
                  </div>
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      FastAPI
                    </div>
                    <div>Async Runtime</div>
                  </div>
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      Docker
                    </div>
                    <div>Edge Packaging</div>
                  </div>
                </div>

                {/* Data Flow Strip */}
                <div className="pt-2 border-t border-border-subtle space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                    Execution Flow
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-text-secondary">
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      Leaf Capture
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      OpenCV CLAHE
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      Tensor Transform
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-accent-primary">
                      FastAPI Diagnostic JSON
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Hairline Divider Between Secondary Projects */}
          <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

          {/* ========================================================= */}
          {/* PROJECT 2: Interview Tracker Pro (Full-Stack / Backend)   */}
          {/* ========================================================= */}
          <article
            aria-labelledby="interview-tracker-heading"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start"
          >
            {/* Technical Inspection Artifact Frame (Ordered Left on Desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6 w-full">
              <div
                className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 shadow-sm space-y-5 select-none hover:border-border-focus/30 transition-colors duration-200"
                aria-label="Interview Tracker Pro relational schema and authorization inspector"
              >
                {/* Frame Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/40"
                      aria-hidden="true"
                    ></span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Relational Schema &amp; Auth Spec
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    <span>ACID Compliant</span>
                  </div>
                </div>

                {/* Sub-panel 1: Normalized Database Entity Model */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-text-tertiary uppercase tracking-wider">
                      SQLAlchemy Entity: applications
                    </span>
                    <span className="text-text-secondary">
                      PostgreSQL Engine
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface border border-border-subtle font-mono text-[11px] text-text-secondary space-y-1">
                    <div className="text-text-primary">
                      <span className="text-accent-primary font-semibold">PK</span> id: UUID = uuid4()
                    </div>
                    <div>
                      <span className="text-text-tertiary font-semibold">FK</span> user_id: UUID (Index, Non-Nullable)
                    </div>
                    <div>company: VARCHAR(120) · role: VARCHAR(100)</div>
                    <div>status: Enum(&apos;applied&apos;, &apos;screening&apos;, &apos;technical&apos;, &apos;offer&apos;)</div>
                    <div className="text-[10px] text-text-tertiary pt-0.5">
                      ↳ Relationship: interview_rounds (1:N, cascade=&quot;all, delete-orphan&quot;)
                    </div>
                  </div>
                </div>

                {/* Sub-panel 2: Row-Level Tenant Security Spec */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-accent-primary uppercase tracking-wider font-semibold">
                      Tenant Isolation &amp; Auth Guard
                    </span>
                    <span className="text-text-secondary text-[10px]">
                      Bearer JWT (RS256)
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-surface border border-border-subtle font-mono text-xs text-text-primary space-y-1">
                    <div className="text-text-tertiary text-[10px] uppercase">
                      Query Constraint Verification
                    </div>
                    <p className="text-text-secondary text-[11px] leading-relaxed">
                      SELECT * FROM applications WHERE id = :target_id AND user_id = :authenticated_user_id;
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-text-tertiary">
                    Strict isolation: cross-tenant data requests trigger immediate 404/403 aborts.
                  </div>
                </div>

                {/* Sub-panel 3: Telemetry Stat Boxes */}
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-text-tertiary text-center">
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      PostgreSQL
                    </div>
                    <div>Relational Engine</div>
                  </div>
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      Pydantic v2
                    </div>
                    <div>Contract Schemas</div>
                  </div>
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      JWT Auth
                    </div>
                    <div>Stateless Session</div>
                  </div>
                </div>

                {/* Data Flow Strip */}
                <div className="pt-2 border-t border-border-subtle space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                    Execution Flow
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-text-secondary">
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      Client Request
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      JWT Auth Guard
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      Pydantic Validator
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      SQLAlchemy ORM
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-accent-primary">
                      PostgreSQL Commit
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column (Ordered Right on Desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                  02 / Full-Stack · Backend &amp; Data
                </span>
                <h3
                  id="interview-tracker-heading"
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary"
                >
                  Interview Tracker Pro
                </h3>
                <p className="font-mono text-xs sm:text-sm text-accent-primary font-medium tracking-tight">
                  &ldquo;Relational interview lifecycle management with transactional integrity and JWT authentication.&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Production-grade job application tracking and candidate interview
                lifecycle management system built with FastAPI and PostgreSQL.
                Engineered with strict relational data modeling via SQLAlchemy,
                transactional status transition state machines, and stateless JWT
                security to prevent multi-tenant data leakage.
              </p>

              {/* Technical Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary block">
                  Engineering Architecture
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        Relational Schema Normalization:
                      </strong>{" "}
                      PostgreSQL database model enforcing cascading foreign-key
                      relationships between application records, structured interview
                      rounds, and technical debrief notes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        Stateless JWT Security &amp; Tenant Isolation:
                      </strong>{" "}
                      Cryptographic bearer tokens paired with row-level query scoping,
                      guaranteeing that session queries cannot access or modify external
                      user entities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        Pydantic Schema Serialization:
                      </strong>{" "}
                      Strict payload validation enforcing request constraints and
                      deterministic response serialization, preventing unvalidated
                      data from reaching persistent storage.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Verified Technology Tags */}
              <div className="pt-2 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                  Verified Toolchain
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  <TechTag>FastAPI</TechTag>
                  <TechTag>PostgreSQL</TechTag>
                  <TechTag>SQLAlchemy</TechTag>
                  <TechTag>Pydantic</TechTag>
                  <TechTag>JWT Auth</TechTag>
                  <TechTag>Docker</TechTag>
                </div>
              </div>

              {/* Action Link & Context */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  size="md"
                  href={siteConfig.links.github}
                  external
                  className="gap-1.5 text-xs h-9 px-4"
                >
                  <span>GitHub Repository</span>
                  <span className="text-xs" aria-hidden="true">
                    ↗
                  </span>
                </Button>
                <span className="font-mono text-xs text-text-tertiary">
                  Status: <span className="text-text-secondary">Relational Backend API</span>
                </span>
              </div>
            </div>
          </article>

          {/* Hairline Divider Between Secondary Projects */}
          <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

          {/* ========================================================= */}
          {/* PROJECT 3: Career Adviser (LLM App / Product Engineering) */}
          {/* ========================================================= */}
          <article
            aria-labelledby="career-adviser-heading"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start"
          >
            {/* Narrative Column */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                  03 / LLM Application · Product Engineering
                </span>
                <h3
                  id="career-adviser-heading"
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary"
                >
                  Career Adviser
                </h3>
                <p className="font-mono text-xs sm:text-sm text-accent-primary font-medium tracking-tight">
                  &ldquo;Schema-grounded LLM advisory engine delivering deterministic career progression roadmaps.&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                AI-assisted career advisory platform pairing generative LLM capabilities
                with rigorous schema validation and a responsive Next.js frontend.
                Utilizes Pydantic data contracts to enforce structured JSON output
                generation, eliminating malformed responses while generating actionable
                technical roadmaps and competency gap assessments.
              </p>

              {/* Technical Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary block">
                  Engineering Architecture
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        Structured Schema Guardrails:
                      </strong>{" "}
                      Enforces structured JSON output via Pydantic BaseModels and
                      constrained prompt schemas, eliminating schema drift and unparseable
                      LLM outputs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        Competency Gap Extraction:
                      </strong>{" "}
                      Analyzes current developer capability matrices against target
                      engineering specifications to synthesize prioritized milestones
                      and skill progression sequences.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>
                      <strong className="text-text-primary font-medium">
                        Production Next.js Interface:
                      </strong>{" "}
                      Engineered with Next.js App Router and Tailwind CSS, featuring
                      accessible keyboard navigation, fluid responsive layouts, and
                      zero layout shifts.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Verified Technology Tags */}
              <div className="pt-2 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                  Verified Toolchain
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  <TechTag>Next.js</TechTag>
                  <TechTag>TypeScript</TechTag>
                  <TechTag>Tailwind CSS</TechTag>
                  <TechTag>Gemini API</TechTag>
                  <TechTag>Pydantic</TechTag>
                  <TechTag>Python</TechTag>
                </div>
              </div>

              {/* Action Link & Context */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  size="md"
                  href={siteConfig.links.github}
                  external
                  className="gap-1.5 text-xs h-9 px-4"
                >
                  <span>GitHub Repository</span>
                  <span className="text-xs" aria-hidden="true">
                    ↗
                  </span>
                </Button>
                <span className="font-mono text-xs text-text-tertiary">
                  Status: <span className="text-text-secondary">Interactive LLM Application</span>
                </span>
              </div>
            </div>

            {/* Technical Inspection Artifact Frame */}
            <div className="lg:col-span-6 w-full">
              <div
                className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 shadow-sm space-y-5 select-none hover:border-border-focus/30 transition-colors duration-200"
                aria-label="Career Adviser structured schema contract and roadmap output preview"
              >
                {/* Frame Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/40"
                      aria-hidden="true"
                    ></span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Schema Guard &amp; Output Contract
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    <span>Schema Verified</span>
                  </div>
                </div>

                {/* Sub-panel 1: Input Profile Trajectory */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-text-tertiary uppercase tracking-wider">
                      Input Trajectory Profile
                    </span>
                    <span className="text-text-secondary">
                      Target: AI Systems Engineer
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded bg-surface border border-border-subtle space-y-1">
                      <span className="text-[10px] text-text-tertiary uppercase block">
                        Verified Baseline
                      </span>
                      <span className="text-text-primary font-medium text-[11px]">
                        TypeScript, PostgreSQL, React
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface border border-border-subtle space-y-1">
                      <span className="text-[10px] text-text-tertiary uppercase block">
                        Target Gap Identified
                      </span>
                      <span className="text-accent-primary font-medium text-[11px]">
                        Vector Search, LLM Schemas
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-panel 2: Enforced Pydantic Schema Output */}
                <div className="p-4 rounded-lg border border-border-subtle bg-surface-elevated space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-accent-primary uppercase tracking-wider font-semibold">
                      Validated Roadmap Contract
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                      Pydantic: 0% Parse Drift
                    </span>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-2.5 rounded bg-surface border border-border-subtle space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-text-primary font-semibold">
                          Phase 01: Hybrid Retrieval Systems
                        </span>
                        <span className="text-text-tertiary text-[10px]">4 Weeks</span>
                      </div>
                      <p className="text-text-secondary text-[11px] leading-relaxed">
                        Implement dense vector index (Qdrant) alongside BM25 lexical scorer with weighted rank fusion.
                      </p>
                    </div>

                    <div className="p-2.5 rounded bg-surface border border-border-subtle space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-text-primary font-semibold">
                          Phase 02: Output Guardrails &amp; Validation
                        </span>
                        <span className="text-text-tertiary text-[10px]">3 Weeks</span>
                      </div>
                      <p className="text-text-secondary text-[11px] leading-relaxed">
                        Structure LLM completions via Pydantic BaseModels and retry fallbacks for production resilience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-panel 3: Telemetry Stat Boxes */}
                <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-text-tertiary text-center">
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      JSON Mode
                    </div>
                    <div>Schema Contract</div>
                  </div>
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      Pydantic
                    </div>
                    <div>Type Validator</div>
                  </div>
                  <div className="p-2 rounded border border-border-subtle bg-surface-elevated space-y-0.5">
                    <div className="text-text-primary font-semibold text-xs">
                      Next.js 14
                    </div>
                    <div>Client Runtime</div>
                  </div>
                </div>

                {/* Data Flow Strip */}
                <div className="pt-2 border-t border-border-subtle space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                    Execution Flow
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-text-secondary">
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      Profile Input
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      Prompt Schema
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      Gemini API
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle">
                      Pydantic Guard
                    </span>
                    <span className="text-text-tertiary">→</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-accent-primary">
                      Next.js Roadmap
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
