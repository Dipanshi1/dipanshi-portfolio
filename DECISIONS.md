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
