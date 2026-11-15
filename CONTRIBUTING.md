# Git & Contribution Workflow

This document establishes the official Git branching, commit discipline, code review, and reporting standards for the Dipanshi Gupta Portfolio repository.

---

## 1. Branch Strategy

- **`main`**: Production-ready code only. Directly corresponds to the latest stable release.
- **`develop`**: Central integration branch for completed, reviewed features.
- **`feat/*`**: Isolated feature branches branched directly from `develop` (e.g., `feat/mvp-editorial-portfolio`).
- **Strict Rule**: Never commit directly to `main` or `develop`. All work must be conducted on dedicated feature branches and landed through formal Pull Requests.

---

## 2. Commit Strategy

- **Atomic & Meaningful**: Make small, cohesive commits representing a single logical unit of work.
- **Immediate Commitment**: Commit immediately upon completing each logically independent task or correction.
- **No Feature Bloat**: Do not accumulate multiple unrelated features or corrections into a single giant commit.
- **No Noise**: Do not create meaningless commits for half-formed, temporary, or broken states.
- **Conventional Commits**: Every commit message must follow the Conventional Commits specification:
  - `feat:` Introduces a new user-facing or architectural capability.
  - `fix:` Patches a bug, corrects a factual inaccuracy, or fixes layout defects.
  - `style:` Formatting, whitespace, or cosmetic adjustments with no code logic change.
  - `refactor:` Code restructuring that neither fixes a bug nor adds a feature.
  - `test:` Adding or correcting automated tests.
  - `docs:` Documentation changes only (e.g., `README.md`, `CONTRIBUTING.md`).
  - `chore:` Maintenance tasks, tooling configuration, dependencies.
- **Staged Diff Inspection**: Inspect `git diff --cached` before committing to verify that only intended files and lines are staged.
- **Pre-Commit Quality Gate**: Run relevant checks (`pnpm lint`, typecheck, `pnpm build`) prior to committing.
- **Regular Push**: Push completed atomic commits to the remote feature branch regularly to keep the remote and pull request up to date.

---

## 3. Review & Merge Protocol

- **PR Lifecycle**: Keep Pull Request #1 open until the MVP feature is comprehensively reviewed and approved.
- **Safety First**: Never merge PRs, merge into `main`, force-push (`--force`), or rewrite Git history without explicit approval from Dipanshi.
- **Release Flow**: Once PR #1 is approved and merged into `develop`, create a separate Pull Request from `develop` into `main` when the integrated version is release-ready.

---

## 4. Reporting Protocol

After completing each meaningful unit of work, report:
1. **What changed**: Plain-language description of the logical adjustment.
2. **Files affected**: Explicit list of modified, added, or deleted files.
3. **Commit message and short SHA**: E.g., `docs(workflow): document Git workflow rules and commit standards (abc1234)`.
4. **Checks performed and results**: Explicit status of linting, typechecking, and builds.
5. **Push status**: Confirmation of push to the remote branch.
