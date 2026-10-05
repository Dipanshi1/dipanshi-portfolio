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
      className="relative w-full border-t border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl pb-12 sm:pb-16">
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
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* ========================================================= */}
          {/* PROJECT 1: AgriVision AI (Computer Vision / Applied AI)   */}
          {/* ========================================================= */}
          <article
            aria-labelledby="agrivision-heading"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start"
          >
            {/* Narrative Column */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                  01 / Computer Vision · Applied AI
                </span>
                <h3
                  id="agrivision-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
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

              {/* Technical Architecture Highlights */}
              <div className="space-y-2.5 pt-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary block">
                  Engineering Architecture
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
              <div className="pt-1 space-y-2">
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
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  href="https://github.com/Dipanshi1/agri-vision-ai"
                  external
                  className="gap-1.5 text-xs h-9 px-3.5"
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

            {/* Technical Exhibit Panel (Restrained Engineering Artifact) */}
            <div className="lg:col-span-6 w-full">
              <div
                className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 shadow-sm space-y-5 select-none hover:border-border-focus/30 transition-colors duration-200"
                aria-label="AgriVision AI computer vision pipeline telemetry preview"
              >
                {/* Exhibit Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/40"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Exhibit 01 · Vision Inference Pipeline
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-accent-primary">
                    Docker / FastAPI
                  </span>
                </div>

                {/* Section 1: Preprocessing & Input Tensor Specs */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                    Input Tensor Transformation
                  </span>
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-border-subtle/50">
                      <span className="text-text-tertiary">Source Capture</span>
                      <span className="text-text-primary">leaf_sample_RGB_042.jpg</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border-subtle/50">
                      <span className="text-text-tertiary">Resolution &amp; Channels</span>
                      <span className="text-text-primary">224 × 224 × 3 (RGB)</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-text-tertiary">Preprocessing Filter</span>
                      <span className="text-text-primary">CLAHE Contrast + Mean/Std Scaled</span>
                    </div>
                  </div>
                </div>

                {/* Section 2: Pathological Classification Output */}
                <div className="space-y-2 pt-2 border-t border-border-subtle">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-text-tertiary">
                    <span>Classification Diagnostic</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      Target Positive
                    </span>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between py-1.5 px-3 rounded bg-surface-elevated/70 border border-border-subtle">
                      <div className="space-y-0.5">
                        <span className="text-text-primary font-semibold block">
                          Early Blight (Alternaria solani)
                        </span>
                        <span className="text-[11px] text-text-tertiary block">
                          Confidence Threshold: &gt; 0.90
                        </span>
                      </div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                        0.942
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-3 py-1 text-[11px] text-text-tertiary">
                      <span>Late Blight (Phytophthora infestans)</span>
                      <span>0.038</span>
                    </div>

                    <div className="flex items-center justify-between px-3 py-1 text-[11px] text-text-tertiary">
                      <span>Healthy Baseline</span>
                      <span>0.020</span>
                    </div>
                  </div>
                </div>

                {/* Section 3: Telemetry & Execution Chain */}
                <div className="pt-3 border-t border-border-subtle space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-text-tertiary">
                      Latency: <strong className="text-text-primary font-medium">~42ms</strong>
                    </span>
                    <span className="text-text-tertiary">
                      Runtime: <strong className="text-text-primary font-medium">FastAPI / Uvicorn</strong>
                    </span>
                  </div>

                  <div className="font-mono text-[10px] text-text-tertiary pt-1">
                    <span className="text-text-tertiary uppercase tracking-wider block pb-1">
                      Execution Chain:
                    </span>
                    <p className="text-text-secondary leading-relaxed">
                      Leaf Frame → OpenCV CLAHE → Tensor Normalization → CNN Inference → JSON Diagnostic
                    </p>
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start"
          >
            {/* Technical Exhibit Panel (Ordered Left on Desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6 w-full">
              <div
                className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 shadow-sm space-y-5 select-none hover:border-border-focus/30 transition-colors duration-200"
                aria-label="Interview Tracker Pro relational schema and authorization inspector"
              >
                {/* Exhibit Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/40"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Exhibit 02 · Relational Architecture &amp; Auth
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-accent-primary">
                    PostgreSQL / SQLAlchemy
                  </span>
                </div>

                {/* Section 1: Relational Schema Contract */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                    Entity Data Contract (SQLAlchemy)
                  </span>
                  <div className="p-3 rounded bg-surface-elevated/70 border border-border-subtle font-mono text-[11px] text-text-secondary space-y-1">
                    <div className="text-text-primary font-semibold">
                      TABLE applications &#123;
                    </div>
                    <div className="pl-3 space-y-0.5 text-[11px]">
                      <div>
                        <span className="text-accent-primary font-semibold">PK</span> id: UUID = uuid4()
                      </div>
                      <div>
                        <span className="text-text-tertiary font-semibold">FK</span> user_id: UUID (Indexed, Non-Nullable)
                      </div>
                      <div>company: VARCHAR(120) · role: VARCHAR(100)</div>
                      <div>status: Enum(&apos;applied&apos;, &apos;screening&apos;, &apos;technical&apos;, &apos;offer&apos;)</div>
                      <div className="text-[10px] text-text-tertiary pt-0.5">
                        ↳ Rel: interview_rounds (1:N, cascade=&quot;all, delete-orphan&quot;)
                      </div>
                    </div>
                    <div className="text-text-primary font-semibold">&#125;;</div>
                  </div>
                </div>

                {/* Section 2: Authorization Boundary & Tenant Scoping */}
                <div className="space-y-2 pt-2 border-t border-border-subtle">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-text-tertiary">
                    <span>Authorization Boundary</span>
                    <span className="text-text-secondary">Bearer JWT (RS256)</span>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-border-subtle/50">
                      <span className="text-text-tertiary">Endpoint Route</span>
                      <span className="text-text-primary">POST /api/v1/applications/&#123;id&#125;/transition</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border-subtle/50">
                      <span className="text-text-tertiary">Tenant Query Scoping</span>
                      <span className="text-text-primary">WHERE id = :id AND user_id = :current_user</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-text-tertiary">Integrity Model</span>
                      <span className="text-text-primary">ACID Session · Auto-Rollback on Error</span>
                    </div>
                  </div>
                </div>

                {/* Section 3: Telemetry & Execution Chain */}
                <div className="pt-3 border-t border-border-subtle space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-text-tertiary">
                      Validation: <strong className="text-text-primary font-medium">Pydantic v2</strong>
                    </span>
                    <span className="text-text-tertiary">
                      ORM: <strong className="text-text-primary font-medium">SQLAlchemy Async</strong>
                    </span>
                  </div>

                  <div className="font-mono text-[10px] text-text-tertiary pt-1">
                    <span className="text-text-tertiary uppercase tracking-wider block pb-1">
                      Execution Chain:
                    </span>
                    <p className="text-text-secondary leading-relaxed">
                      Client Request → JWT Bearer Auth Guard → Pydantic Validation → SQLAlchemy ORM → PostgreSQL Commit
                    </p>
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
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
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

              {/* Technical Architecture Highlights */}
              <div className="space-y-2.5 pt-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary block">
                  Engineering Architecture
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
              <div className="pt-1 space-y-2">
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
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  href={siteConfig.links.github}
                  external
                  className="gap-1.5 text-xs h-9 px-3.5"
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start"
          >
            {/* Narrative Column */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
                  03 / LLM Application · Product Engineering
                </span>
                <h3
                  id="career-adviser-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
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

              {/* Technical Architecture Highlights */}
              <div className="space-y-2.5 pt-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary block">
                  Engineering Architecture
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
                      className="text-accent-primary font-mono text-xs pt-0.5 select-none shrink-0"
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
              <div className="pt-1 space-y-2">
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
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  href={siteConfig.links.github}
                  external
                  className="gap-1.5 text-xs h-9 px-3.5"
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

            {/* Technical Exhibit Panel (Restrained Engineering Artifact) */}
            <div className="lg:col-span-6 w-full">
              <div
                className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 shadow-sm space-y-5 select-none hover:border-border-focus/30 transition-colors duration-200"
                aria-label="Career Adviser structured schema contract and roadmap output preview"
              >
                {/* Exhibit Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-sm bg-accent-primary/20 border border-accent-primary/40"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      Exhibit 03 · Structured Output Contract
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-accent-primary">
                    Gemini API / Pydantic
                  </span>
                </div>

                {/* Section 1: Trajectory Mapping & Profile Extraction */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary block">
                    Profile Trajectory Mapping
                  </span>
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-border-subtle/50">
                      <span className="text-text-tertiary">Candidate Target</span>
                      <span className="text-text-primary">Full-Stack → AI Systems Engineer</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border-subtle/50">
                      <span className="text-text-tertiary">Baseline Capability</span>
                      <span className="text-text-primary">TypeScript, PostgreSQL, React</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-text-tertiary">Synthesized Competency Gaps</span>
                      <span className="text-accent-primary font-medium">Vector Search, LLM Guardrails</span>
                    </div>
                  </div>
                </div>

                {/* Section 2: Enforced Pydantic Schema Output */}
                <div className="space-y-2 pt-2 border-t border-border-subtle">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-text-tertiary">
                    <span>Enforced Roadmap Output Contract</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">
                      Pydantic Validated
                    </span>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 rounded bg-surface-elevated/70 border border-border-subtle space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-text-primary font-semibold">
                          01 / Hybrid Retrieval Architectures
                        </span>
                        <span className="text-text-tertiary text-[10px]">Phase 1</span>
                      </div>
                      <p className="text-text-secondary text-[11px] leading-relaxed">
                        Dense vector index (Qdrant) alongside BM25 lexical scorer with weighted rank fusion.
                      </p>
                    </div>

                    <div className="p-3 rounded bg-surface-elevated/70 border border-border-subtle space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-text-primary font-semibold">
                          02 / Schema Guardrails &amp; Structured Output
                        </span>
                        <span className="text-text-tertiary text-[10px]">Phase 2</span>
                      </div>
                      <p className="text-text-secondary text-[11px] leading-relaxed">
                        Structure LLM completions via Pydantic BaseModels and retry fallbacks for production resilience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Telemetry & Execution Chain */}
                <div className="pt-3 border-t border-border-subtle space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-text-tertiary">
                      Validation: <strong className="text-text-primary font-medium">0% Parse Drift</strong>
                    </span>
                    <span className="text-text-tertiary">
                      Client: <strong className="text-text-primary font-medium">Next.js 14 App Router</strong>
                    </span>
                  </div>

                  <div className="font-mono text-[10px] text-text-tertiary pt-1">
                    <span className="text-text-tertiary uppercase tracking-wider block pb-1">
                      Execution Chain:
                    </span>
                    <p className="text-text-secondary leading-relaxed">
                      Profile Input → Prompt Schema Template → Gemini API → Pydantic Validator → Next.js Roadmap View
                    </p>
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
