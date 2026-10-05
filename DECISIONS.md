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
