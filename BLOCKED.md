# Blocked Items

## Milestone 3C — Secondary Production Projects

**Status:** No blockers.

- No external API keys, authentications, or external service dependencies required for Milestone 3C.
- Verified repository details for `agri-vision-ai` and profile endpoints for `Interview Tracker Pro` and `Career Adviser` via available repository data.
- Build, typecheck, and lint run locally in clean isolated environment without issues.

## Header Navigation Spacing & Responsive Polish
- **Browser Automation:** Headless browser automation tooling (Chromium/Puppeteer/Playwright) is not installed in the execution environment. Visual validation was conducted via production SSR build analysis, HTML inspection across mobile and desktop DOM hierarchies, and curl HTTP verification.

## 2026-10-05 — ManakSetu Case Study
- Blocker: None
- Impact: None
- Temporary handling: Full source-of-truth verification conducted against local repository `/home/dipanshi/ManakSetu/ManakSetu`. Production build, TypeScript typecheck, ESLint, and SSR HTTP endpoints verified with zero errors.


## Recruiter-First Refinement Pass
- **Status:** No blockers.
- All dependencies, scripts, and content are local and fully verified.
- Validation succeeded across typecheck, lint, build, and SSR response inspection.

## Resume PDF Asset
- **Status:** Blocked / Pending Asset Delivery.
- **Missing Asset:** Production resume PDF document (e.g., `public/resume.pdf` or equivalent candidate CV artifact) is not present in the repository or local filesystem.
- **Impact & Handling:** To prevent 404 errors and avoid fabricating placeholder or mock PDF downloads, all Resume CTAs route to the `/resume` overview page. The route gracefully communicates that the resume PDF is available upon request for Summer & Fall 2026 internship recruiting and provides direct email contact (`dipanshig98@gmail.com`).
- **Resolution Plan:** When the finalized candidate resume PDF is provided, place it in `public/` and configure direct download or link destination accordingly.

