# Architecture & Implementation Decisions

## Milestone 3C — Secondary Production Projects

### 1. Presentation Structure: Editorial Structured Showcase vs. Card Grid
- **Decision:** Implement an editorial structured showcase layout with alternating / domain-specific technical inspection artifacts for each project, rather than a generic 3-card grid.
- **Reasoning:** 
  - The design specification explicitly instructs: *"Prefer an editorial project-list or structured showcase over three identical generic cards. Do not turn the section into generic rounded SaaS cards. Make the section feel like a natural continuation of the homepage rather than a separate template."*
  - An editorial showcase with asymmetric 12-column grid pairs an engineering narrative with a domain-specific technical inspection artifact (Computer Vision feature extractor, Relational schema/JWT state machine, and Enforced Pydantic LLM contract).
  - This preserves the visual rigor and depth established in the ManakSetu flagship section.

### 2. Content Accuracy & Conservative Technical Scoping
- **Decision:** Strictly verify technologies against the codebase and public repositories; reject unverified benchmarks, user counts, or external production deployment claims.
- **Project 1 — AgriVision AI:**
  - *Domain:* Computer Vision / Applied AI
  - *Verified Stack:* Python, FastAPI, OpenCV, Docker, NumPy, Pillow.
  - *Scope:* Image preprocessing (CLAHE, normalization), convolutional anomaly feature extraction, and containerized FastAPI inference endpoint.
  - *Conservative Framing:* Avoided inventing field deployment accuracy percentages or unverified farmer user numbers.
- **Project 2 — Interview Tracker Pro:**
  - *Domain:* Full-Stack / Backend / Data
  - *Verified Stack:* FastAPI, PostgreSQL, SQLAlchemy, Pydantic, JWT Auth, Docker.
  - *Scope:* Relational database schema design (`applications`, `interview_rounds`), state transition machine, row-level tenant isolation, and stateless JWT authentication.
  - *Conservative Framing:* Avoided inventing enterprise usage statistics or commercial metrics.
- **Project 3 — Career Adviser:**
  - *Domain:* LLM Application / Product Engineering
  - *Verified Stack:* Next.js (App Router), TypeScript, Tailwind CSS, Gemini API, Pydantic, Python.
  - *Scope:* Prompt-to-schema extraction, strict Pydantic output validation preventing malformed LLM responses, and responsive Next.js/Tailwind user experience.
  - *Conservative Framing:* Avoided claiming ungrounded AI benchmarks or autonomous intelligence claims.

### 3. Hyperlink & Repository Routing
- **Decision:** 
  - AgriVision AI links directly to its verified public repository `https://github.com/Dipanshi1/agri-vision-ai`.
  - Interview Tracker Pro and Career Adviser link to Dipanshi's primary GitHub profile `https://github.com/Dipanshi1` with descriptive status badges, preventing broken 404 links while accurately reflecting codebase availability.

### 4. Global Navigation & Anchor Integrity
- **Decision:** Retain global navigation strictly as `Work`, `Stack`, `About`, `Resume`.
- **Reasoning:** 
  - In accordance with the previous milestone fix (`92b829e`), ManakSetu is a flagship project rather than a top-level global destination.
  - The secondary projects section is anchored at `id="secondary-projects"` and flows directly beneath ManakSetu within the `#work` stream.

## Post-3C Visual Polish & Contact Email Correction

### 5. Technical Artifact Exhibits: De-densifying Dashboard Widgets to Editorial Exhibits
- **Decision:** Remove nested box-in-box card structures, colored sub-cards, and dashboard progress widgets from the right-column technical panels. Replace them with open, typography-led key-value specifications and hairline horizontal dividers.
- **Reasoning:**
  - The initial implementation suffered from visual density overload resembling a multi-tenant SaaS dashboard rather than an editorial systems whitepaper.
  - Using hairline rules (`border-border-subtle/50`), clean alignment, monospace code contracts, and subtle tabular rows aligns the artifacts with Hero's "Open Editorial Technical Specification" and ManakSetu's verification panel.

### 6. Vertical Rhythm & Section Spacing Normalization
- **Decision:** Normalize section padding to `py-16 sm:py-20 lg:py-24` and inter-project spacing to `space-y-16 sm:space-y-20 lg:space-y-24`.
- **Reasoning:**
  - Previous `lg:py-32` and `space-y-36` generated excessive empty whitespace before the footer.
  - Aligning with `CapabilityPillars`'s vertical rhythm unifies the page into a cohesive editorial composition.

### 7. Universal Contact Email Correction & Accessible Mailto Action
- **Decision:** Set canonical email address strictly to `dipanshig98@gmail.com` across the entire codebase (`siteConfig`, footer, hero contact action, mobile drawer).
- **Reasoning:**
  - Replaced copy-only button widgets in the footer and mobile drawer with accessible, clickable `<a>` links pointing to `mailto:dipanshig98@gmail.com`.
  - Configured Hero "Contact Me" CTA to trigger `mailto:dipanshig98@gmail.com`, ensuring immediate functional utility.
  - Updated local Git author email to match `dipanshig98@gmail.com`.

## Header Navigation Layout Tightening

### 8. Unified Navigation & Right-Side Action Grouping
- **Decision:** Unify desktop navigation links (`Work`, `Stack`, `About`), the hairline separator, and action controls (`Resume`, `ThemeToggle`, mobile trigger) into a single cohesive right-side flex group within the header container, removing the 3-region `justify-between` distribution.
- **Reasoning:**
  - Previously, `justify-between` spaced the brand, navigation links, and action buttons into three disjoint regions across the viewport, leaving large artificial voids between navigation and the Resume/theme controls.
  - The new two-cluster layout (`[Brand Group] ... [Nav + Actions Group]`) clusters navigation links (`gap-5 lg:gap-7`) closely with Resume and ThemeToggle via a compact `gap-5 sm:gap-6 lg:gap-7` with an editorial vertical hairline divider (`h-4 w-px bg-border-subtle`).
  - Responsiveness is preserved across all breakpoints: on mobile viewports (`< md`), desktop nav and the Resume button hide seamlessly while leaving brand on the left and theme toggle + mobile trigger on the right without horizontal overflow.

## Stale Server Termination & Cache Invalidation

### 9. Elimination of Background Dev Server & Full `.next` Cache Invalidation
- **Decision:** Terminate background Next.js development server (PIDs 6767, 6769, 6797) running on port 3000 that was launched prior to email updates and serving stale in-memory cached builds containing `dipanshig982@gmail.com`.
- **Reasoning:**
  - Code audits confirmed all source files correctly resolved to `dipanshig98@gmail.com`. The persistence of `dipanshig982@gmail.com` in the user's browser was caused by a stale `next dev` process from 09:31 bound to port 3000 serving a legacy `.next` cache.
  - Purged `.next`, terminated all stale node/next background processes, executed a clean rebuild, and verified the rendered HTML output on fresh production servers.

## 2026-10-05 — ManakSetu Case Study
- Decision: Implement ManakSetu Flagship Case Study at `/work/manaksetu` as an editorial engineering deep dive while preserving global navigation as strictly `Work`, `Stack`, `About`, `Resume`. Updated `siteConfig.nav` anchors to root-relative `/#work`, `/#stack`, `/#about` so global header links seamlessly route back to homepage sections from subpages.
- Reason: The case study is a dedicated engineering artifact rather than a top-level global destination. Root-relative hashes guarantee full bidirectional routing between `/work/manaksetu` and the homepage without breaking single-page scroll on `/`.

- Decision: Strictly verify all ranking formulas and retrieval architecture directly against `/home/dipanshi/ManakSetu/ManakSetu`. Displayed the exact 6-factor deterministic linear combination from `ranking.py` (`0.40 * semantic + 0.15 * bm25 + 0.20 * product + 0.10 * domain + 0.10 * tech + 0.05 * metadata`) and explicitly documented that the `+0.30 * ref_boost` is a conditional post-score additive boost clamped at 1.0 rather than a 7th weighted component. Completely excluded ungrounded Reciprocal Rank Fusion (RRF) claims in the primary ranking formula.
- Reason: Editorial and engineering credibility requires 100% mathematical fidelity to the actual repository implementation. In legal and procurement auditability, deterministic explainability is paramount.

- Decision: Clearly delineate Dipanshi Gupta's verified contributions (Product Design in Figma, UI/UX interaction architecture, Next.js/React frontend engineering, split-view audit interface, dynamic PDF report generation with Unicode/Devanagari font support, and retrieval/ranking UI integration) from backend microservices owned by team members Kartikey (FastAPI, document processing, reasoning) and Kshiraj (database, Qdrant/PostgreSQL adapters, BIS catalog scraping).
- Reason: Transparent attribution reflects genuine software engineering practice, matches the repository git commit log (`dipanshi-latest` branch), and avoids inflated claims of building third-party microservices.

- Decision: Frame project impact around verified technical capability (successful end-to-end execution on municipal LED street lighting and civil tender notices demonstrated for SIH 26108) with zero fabricated business metrics, user numbers, or commercial scale.
- Reason: Portfolio guidelines mandate zero invented metrics and strict grounding in code and project facts.

## Milestone 4 — Visual Detail Pass for ManakSetu Flagship Case Study

### 10. 3-Tier Surface Hierarchy: De-Boxing Generic Card Container Fatigue
- **Decision:** Restructure all case study sections into a disciplined 3-tier surface hierarchy:
  - *Level 1 (Open Editorial Section):* Pure typography, generous vertical rhythm (`py-16 sm:py-24 lg:py-32`), asymmetric grids, and precision hairline rules (`border-border-subtle`).
  - *Level 2 (Hairline Technical Exhibit):* Subtle surface elevation (`bg-surface/40` or `bg-surface-elevated/40`), key-value specification matrices, and tabular ledgers.
  - *Level 3 (Focused Product Artifact):* High-fidelity, chrome-framed interactive exhibits representing actual tool interfaces (Runtime Hero Artifact, Architecture Canvas, Formula Exhibit, and Split Audit Inspector).
- **Reasoning:**
  - Prevents the case study from looking like a generic SaaS documentation page filled with rounded cards.
  - Aligns the visual language with high-end editorial engineering publications and industrial systems whitepapers.

### 11. Composed Hero with Opening Runtime Product Artifact
- **Decision:** Transform the case study hero into a composed editorial opening featuring small monospace metadata (`SIH 26108 · 2024–2025 · Demonstrated Prototype`), high-contrast display typography (`MANAKSETU`), a prominent positioning quote, and an authentic runtime product artifact displaying real project data (`NIT_MCD-2024-LT-09` 120W LED Street Luminaire matched to `IS 10322 (Part 5/Sec 3): 2012`).
- **Reasoning:**
  - Avoids the generic "Eyebrow → Title → Paragraph → Button → immediate next section" pattern.
  - The opening artifact gives recruiters and engineering leads immediate visual payoff and evidence of real system design before reading deep technical copy.

### 12. Sticky Editorial Section Navigation (CaseStudyNav)
- **Decision:** Implement a sticky sub-navigation bar (`CaseStudyNav`) pinned at `top-14 sm:top-16` beneath the global header, featuring active scroll-spy tracking across all 8 numbered sections (`01 Problem`, `02 Architecture`, `03 Ranking`, `04 Extraction`, `05 Verification`, `06 Tradeoffs`, `07 Contribution`, `08 Roadmap`).
- **Reasoning:**
  - Provides effortless anchor navigation across an information-dense deep dive without polluting global header navigation.
  - Responsive with smooth horizontal scrolling (`no-scrollbar`) on mobile viewports and instant visual feedback on active sections.

### 13. System Architecture: Interactive Canvas & Dual Desktop/Mobile Topology
- **Decision:** Elevate the 7-stage pipeline (`Input` → `Extraction` → `Query / Requirement` → `Hybrid Retrieval` → `Ranking` → `Applicability` → `Evidence`) into an expansive interactive topology canvas on desktop with click/hover contract inspection, and a vertical connected timeline on mobile.
- **Reasoning:**
  - Replaces generic card containers with an authentic systems diagram feel.
  - Clearly exposes input/output data contracts and execution boundaries at each stage.

### 14. Deterministic Ranking Formula Hero Visual
- **Decision:** Present the scoring formula as a dedicated engineering blueprint exhibit, visually separating the 6-factor base linear combination from the conditional +0.30 citation boost, and rendering horizontal signal rows with proportional visual weight bars.
- **Reasoning:**
  - Elevates the mathematical formula to hero visual status rather than burying it in a small code snippet.
  - Clearly communicates that the +0.30 boost is a post-score additive boost clamped at 1.0 rather than a diluted base weight.

### 15. Dual-Pass Extraction Execution Flow & Explicit Edge Guards
- **Decision:** Re-architect Document Extraction as a directional execution flow (`Primary: PyMuPDF` vs `Fallback: pdfplumber`) paired with an explicit technical ledger for defensive edge conditions (`_MIN_TEXT_LENGTH < 100` scanned PDF halt, encrypted file rejection, and immutable page provenance markers).
- **Reasoning:**
  - Clarifies runtime branching heuristics and defends system boundaries without resorting to giant generic alert boxes.

### 16. Evidence Verification Centerpiece: Multi-Sample Split Audit Console
- **Decision:** Build an interactive, authentic split-view audit console allowing toggling between municipal LED lighting (`NIT_MCD-2024-LT-09`) and structural cement (`BOQ_CIVIL-2024-C53`), explicitly emphasizing the distinction between statistical `Retrieval Match` and statutory `Legal Applicability`.
- **Reasoning:**
  - Forms the emotional and visual centerpiece of the case study.
  - Bridges technical retrieval mechanics with real-world procurement compliance and legal defensibility.

### 17. Visual Closure Strip (NEXT / Selected Work)
- **Decision:** Conclude the case study with an editorial roadmap and an intentional `NEXT / SELECTED WORK` project navigation strip linking back to secondary engineering projects (`AgriVision AI`, `Interview Tracker Pro`, `Career Adviser`) and top-of-page anchor.
- **Reasoning:**
  - Eliminates awkward empty space before the global footer and guarantees visual closure.


## Recruiter-First Refinement Pass

### 18. Candidate Identity & 10–20 Second Recruiter Comprehension (Hero Refactor)
- **Decision:** Restructure homepage Hero to immediately communicate Dipanshi Gupta's identity, academic stage (3rd-Year B.Tech Computer Science student), primary engineering focus (Applied AI, Backend Systems, and Product Design), and immediate availability for internships.
- **Reasoning:**
  - Previous hero had high visual polish but buried the candidate's core profile, academic year, and internship availability under abstract engineering marketing copy.
  - Placed primary CTAs front and center: "View Selected Work" (`/#work`) and "View Resume" (`/resume.pdf` with external icon), accompanied by a direct secondary access row (GitHub, LinkedIn, and `mailto:dipanshig98@gmail.com`).
  - Replaced repetitive right-column bullet lists with a clean "Recruiter Fast-Look / Candidate Snapshot" featuring key facts (Academic Level, Primary Focus, Flagship Demonstration, and Internship Availability).

### 19. Capability Pillars Streamlining & De-Duplication
- **Decision:** Streamline Capability Pillars into a clean 3-card grid (Applied AI & Search Systems, Full-Stack Systems & APIs, Product Design & Frontend Architecture) with high-signal descriptions and verified toolchain tags.
- **Reasoning:**
  - Removed multi-bullet laundry lists that duplicated descriptions found elsewhere on the page.
  - Emphasized actual engineering implementation: hybrid vector/lexical retrieval, deterministic scoring, relational state machines, and design-system fidelity.

### 20. Flagship Case Study Homepage Presentation
- **Decision:** Present ManakSetu on the homepage as a high-signal recruiter summary rather than repeating the full case study inline.
- **Reasoning:**
  - The homepage section provides a crisp 5-point technical signal ledger (Hybrid Qdrant + BM25, 6-factor deterministic scoring, dual-pass PDF extraction, verifiable clause provenance, and SIH 26108 demonstration) paired with an authentic split-view preview.
  - Direct primary CTA routes recruiters to the full engineering deep dive at `/work/manaksetu`.

### 21. Secondary Projects Editorial Grid Compression
- **Decision:** Replace the 723-line monolithic secondary projects section on the homepage with an elegant, scannable 3-column editorial grid (AgriVision AI, Interview Tracker Pro, Career Adviser).
- **Reasoning:**
  - Previously, secondary projects included exhaustive multi-screen schema models, telemetry widgets, and deep code mocks that created extreme scroll fatigue.
  - The refined layout communicates problem domain, architectural solution, verified stack, and repository links concisely, leaving room for interview discussion.

### 22. Dedicated About Section & Anchor Resolution
- **Decision:** Create a dedicated, professional About section at `id="about"` featuring an academic background summary (3rd-year B.Tech CSE), technical philosophy, campus leadership (Google Developer Groups on Campus contributor), a recruiter fast-facts ledger, and direct contact buttons.
- **Reasoning:**
  - Resolved a broken navigation link: `/#about` existed in `siteConfig.nav`, header, and footer, but no element on the homepage possessed `id="about"`.
  - Gives recruiters the exact personal context, academic timeline, and collaboration experience needed to evaluate internship fit.

### 23. Case Study De-Duplication & Typographic Legibility
- **Decision:** Streamline `system-architecture.tsx` by removing the redundant 7-row specification table beneath the 7-stage interactive topology canvas. Upgrade micro-labels across case study components from `text-[9px]` to `text-[10px]` / `text-xs`.
- **Reasoning:**
  - The lower specification table in `system-architecture.tsx` duplicated the exact text rendered inside the interactive canvas inspector bar. Removing it cut ~30% unnecessary vertical length without losing any technical proof.
  - Upgrading micro-labels ensures text remains crisp, legible, and compliant with accessibility standards across high-DPI displays.


## Interaction Color & 2026 Availability Refinement Pass

### 24. Neutral Editorial Interaction States & Stale Availability Correction
- **Decision:**
  1. Replace blue focus/interaction tokens in `globals.css` (`--border-focus: #2563EB` / `#3B82F6`) with neutral high-contrast tokens: `#18181B` (dark zinc in light mode) and `#E2E8F0` (light slate in dark mode).
  2. Eliminate all `hover:text-accent-primary` and `group-hover:text-accent-primary` occurrences across header, footer, mobile drawer, flagship project, and case study secondary cards in favor of restrained neutral transitions (`hover:text-text-primary`, `hover:border-text-secondary`, subtle elevation).
  3. Apply `-webkit-tap-highlight-color: transparent` and explicit `a { color: inherit }` / `a:visited { color: inherit }` in `@layer base` to eliminate mobile blue tap flashes and browser default link coloring.
  4. Update stale "Summer & Fall 2025 Internship Opportunities" in `AboutSection` quick facts to "Summer & Fall 2026 Internship Opportunities", preserving authentic historical dates (e.g. SIH hackathon 2024–2025 and tender reference numbers).
- **Reasoning:**
  - The editorial engineering aesthetic requires quiet, restrained, technical interactions rather than generic web-blue/cyan hover states or default browser outlines.
  - Neutral focus tokens preserve WCAG keyboard accessibility (> 15:1 contrast against canvas) while removing distracting saturated blue rings.
  - The candidate is presenting the portfolio in 2026 for 2026 internship cycles.


## Next.js Runtime Webpack Chunk Mismatch Resolution

### 25. Process Desynchronization & Clean Production Server Isolation
- **Diagnosis:** A background development process (`next dev`, PIDs 57888 / 57889 / 57905) was running concurrently on port 3000. When `npm run build` was subsequently executed, it wiped and replaced `.next` with production bundle assets. The active `next dev` process retained in-memory webpack manifests expecting development chunks (specifically failing with `Error: Cannot find module './993.js'`), emitting HTTP 500 responses and triggering client-side `TypeError: __webpack_modules__[moduleId] is not a function` during React error hydration.
- **Remediation:** Terminated all stale `next dev` and orphaned node processes occupying port 3000, removed `.next` cleanly, executed a fresh production build (`npm run build`), and verified static asset delivery and SSR execution across both `/` and `/work/manaksetu` on a dedicated production server (`PORT=3099 npm run start`).
