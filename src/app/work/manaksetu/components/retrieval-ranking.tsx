import * as React from "react";
import { Container } from "@/components/layout/container";

interface RankingSignal {
  weight: string;
  weightPercent: number;
  signal: string;
  variable: string;
  range: string;
  role: string;
}

const SIGNALS: RankingSignal[] = [
  {
    weight: "0.40",
    weightPercent: 40,
    signal: "Semantic Distance",
    variable: "semantic_score",
    range: "[0.0, 1.0]",
    role: "Cosine similarity between Gemini query embedding and indexed BIS catalog vectors in Qdrant Cloud. Captures high-level conceptual proximity.",
  },
  {
    weight: "0.20",
    weightPercent: 20,
    signal: "Product Keyword Match",
    variable: "product_rel",
    range: "0.0, 0.6, 1.0",
    role: "Evaluates whether the extracted product category appears in standard title or keywords. 1.0 for exact phrase match; 0.6 for partial token overlap.",
  },
  {
    weight: "0.15",
    weightPercent: 15,
    signal: "BM25 Lexical Score",
    variable: "bm25_score",
    range: "[0.0, 1.0]",
    role: "Rank-BM25 over BIS catalog titles, scopes, and keywords normalized as min(raw / 20.0, 1.0). Guarantees exact technical keywords and codes are rewarded.",
  },
  {
    weight: "0.10",
    weightPercent: 10,
    signal: "Application / Domain Match",
    variable: "app_rel",
    range: "0.0, 0.7, 1.0",
    role: "Evaluates whether the operational domain (e.g. municipal street lighting, structural RCC) matches the standard's scope text.",
  },
  {
    weight: "0.10",
    weightPercent: 10,
    signal: "Technical Parameter Coverage",
    variable: "tech_rel",
    range: "[0.0, 1.0]",
    role: "Fraction of extracted tender parameters (such as 'compressive strength = 53 MPa' or 'THD < 10%') explicitly located within the standard's scope clauses.",
  },
  {
    weight: "0.05",
    weightPercent: 5,
    signal: "Catalog Metadata Confidence",
    variable: "meta_conf",
    range: "0.5 or 1.0",
    role: "Authenticity verification from the BIS catalog. 1.0 if standard version and gazetted status are officially verified; 0.5 for unverified entries.",
  },
];

export function RetrievalRanking() {
  return (
    <section
      id="ranking"
      aria-labelledby="ranking-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-8 sm:pb-12 border-b border-border-subtle font-mono text-xs text-text-tertiary">
          <span className="text-accent-primary font-bold text-sm sm:text-base">03</span>
          <span className="text-border-subtle">/</span>
          <span className="uppercase tracking-widest text-text-secondary font-semibold">
            Retrieval &amp; Deterministic Ranking
          </span>
          <span className="text-border-subtle hidden sm:inline">/</span>
          <span className="hidden sm:inline text-text-tertiary">Formula &amp; Signal Allocation</span>
        </div>

        {/* Section Lead */}
        <div className="mt-12 sm:mt-16 max-w-3xl space-y-5">
          <h2
            id="ranking-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]"
          >
            Hybrid Retrieval &amp; The Deterministic Scoring Engine
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            To satisfy statutory auditability in public procurement, relevance scoring cannot be
            delegated to an opaque neural network. The recommendation engine implements a hybrid
            retrieval architecture paired with a deterministic, mathematically verifiable multi-signal
            formula.
          </p>
        </div>

        {/* Dense vs Lexical Comparison (Level 2 Hairline Exhibit) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono text-xs">
          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-3">
            <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle">
              <span className="text-accent-primary uppercase tracking-wider font-semibold">
                Dense Vector Retrieval (Qdrant Cloud)
              </span>
              <span className="text-text-tertiary text-[11px]">Cosine Distance</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Handles conceptual vocabulary mismatches between colloquial tender phrasing and formal
              BIS titles. For example, tenders referring to &ldquo;road street lighting fixtures&rdquo;
              correctly match standards titled &ldquo;Luminaires for Road and Street Lighting&rdquo; even
              when the words &ldquo;fixture&rdquo; and &ldquo;street light&rdquo; differ lexicographically.
            </p>
            <div className="pt-2 text-[10px] text-text-tertiary border-t border-border-subtle/50">
              Embedding model: Gemini text-embedding-004 · Metric: Cosine Similarity
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-3">
            <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle">
              <span className="text-accent-primary uppercase tracking-wider font-semibold">
                Lexical Search (Rank-BM25)
              </span>
              <span className="text-text-tertiary text-[11px]">Term Frequency / Inverse Doc Frequency</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Preserves exact alphanumeric standard numbers (e.g., &ldquo;IS 12269&rdquo;,
              &ldquo;IS 10322&rdquo;) and rigid technical acronyms (&ldquo;OPC&rdquo;,
              &ldquo;THD&rdquo;, &ldquo;IP66&rdquo;). Dense embeddings frequently dilute exact
              alphanumeric codes into generic domain clusters; BM25 ensures exact code mentions
              are never lost.
            </p>
            <div className="pt-2 text-[10px] text-text-tertiary border-t border-border-subtle/50">
              Index: Rank-BM25 over BIS catalog titles, scopes, and keywords
            </div>
          </div>
        </div>

        {/* HERO VISUAL: Ranking Formula Artifact (Level 3 Focused Product Artifact) */}
        <div className="mt-12 rounded-xl border border-border-subtle bg-surface shadow-xs overflow-hidden">
          {/* Header Chrome */}
          <div className="px-5 sm:px-8 py-3.5 border-b border-border-subtle bg-surface-elevated/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-primary/20 border border-accent-primary/50" aria-hidden="true" />
              <span className="font-semibold uppercase tracking-wider text-text-primary text-[11px]">
                Deterministic Ranking Formula Exhibit
              </span>
              <span className="text-border-subtle">/</span>
              <span className="text-text-tertiary text-[11px]">ai-engine/src/ranking.py</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-accent-primary font-medium">
                Bounded Output: [0.0, 1.0]
              </span>
              <span className="text-text-tertiary hidden sm:inline">·</span>
              <span className="text-text-secondary hidden sm:inline">100% Mathematically Auditable</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Visual Formula Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Base Score Equation */}
              <div className="lg:col-span-7 space-y-3 font-mono">
                <div className="flex items-center justify-between text-[11px] text-text-tertiary uppercase tracking-wider">
                  <span>Part 1: Six-Component Base Linear Combination</span>
                  <span className="text-text-secondary">Weight Sum = 1.00</span>
                </div>

                <div className="p-5 sm:p-6 rounded-lg border border-border-subtle bg-canvas text-xs sm:text-sm text-text-primary leading-relaxed whitespace-pre font-mono overflow-x-auto">
{`Base Score =
    0.40 × Semantic Score
  + 0.15 × BM25 Lexical Score
  + 0.20 × Product Match
  + 0.10 × Application / Domain Match
  + 0.10 × Technical Requirement Coverage
  + 0.05 × Metadata Confidence`}
                </div>
              </div>

              {/* Right: Conditional Post-Score Boost */}
              <div className="lg:col-span-5 space-y-3 font-mono">
                <div className="flex items-center justify-between text-[11px] text-accent-primary uppercase tracking-wider font-semibold">
                  <span>Part 2: Conditional Post-Score Boost</span>
                  <span>Clamped at 1.0</span>
                </div>

                <div className="p-5 sm:p-6 rounded-lg border border-accent-primary/30 bg-accent-primary/5 text-xs sm:text-sm text-text-primary leading-relaxed whitespace-pre font-mono overflow-x-auto">
{`Final Relevance Score =
  min(
    1.0,
    Base Score +
    0.30 × Explicit Citation Match
  )`}
                </div>

                <div className="text-[11px] text-text-tertiary font-sans leading-relaxed pt-1">
                  Applied strictly when a government tender explicitly cites a standard by name.
                </div>
              </div>
            </div>

            {/* Architectural Callout: Why +0.30 is NOT a 7th Weight */}
            <div className="p-4 sm:p-5 rounded-lg border border-amber-500/25 bg-amber-500/5 text-xs text-text-secondary leading-relaxed font-sans space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                <span>Engineering Decision: The +0.30 Additive Citation Boost</span>
              </div>
              <p>
                The +0.30 citation boost is a conditional additive boost applied strictly after the base
                linear combination and clamped at 1.0. It is <strong>NOT a seventh weighted component</strong>{" "}
                in the base score. This deliberate architectural choice ensures that when a government
                tender explicitly mandates an Indian Standard by code, that standard receives immediate
                priority over un-cited alternatives without being mathematically diluted by the other five weights.
              </p>
            </div>

            {/* Horizontal Signal Weight Rows */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-border-subtle">
                <span className="text-text-tertiary uppercase tracking-wider text-[11px]">
                  Signal Attribution Ledger &amp; Proportional Weights
                </span>
                <span className="text-text-tertiary text-[11px]">6 Base Factors</span>
              </div>

              <div className="space-y-3">
                {SIGNALS.map((s) => (
                  <div
                    key={s.signal}
                    className="p-3.5 sm:p-4 rounded-lg border border-border-subtle bg-surface-elevated/30 hover:bg-surface-elevated/60 transition-colors duration-150 space-y-2.5 font-mono text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-surface border border-border-subtle text-accent-primary font-bold text-xs">
                          {s.weight}
                        </span>
                        <span className="font-semibold text-text-primary text-sm font-sans">
                          {s.signal}
                        </span>
                        <span className="text-[11px] text-text-tertiary hidden sm:inline">
                          ({s.variable})
                        </span>
                      </div>
                      <div className="text-[11px] text-text-tertiary">
                        Valid Range: <span className="text-text-secondary">{s.range}</span>
                      </div>
                    </div>

                    {/* Proportional visual gauge meter */}
                    <div className="w-full h-1.5 rounded-full bg-border-subtle/50 overflow-hidden" aria-hidden="true">
                      <div
                        className="h-full bg-accent-primary/70 rounded-full"
                        style={{ width: `${s.weightPercent * 2}%` }}
                      />
                    </div>

                    <p className="font-sans text-xs text-text-secondary leading-relaxed">
                      {s.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Confidence Calibration & Review Boundaries (Level 2 Hairline Exhibit) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 space-y-2.5">
            <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="uppercase tracking-wider text-[11px]">High Confidence</span>
              <span className="text-xs">&gt; 0.72</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Standard demonstrates strong semantic alignment, exact product category match, or an
              explicit tender citation with verified BIS catalog status.
            </p>
            <div className="pt-2 border-t border-emerald-500/20 text-[10px] text-emerald-600 dark:text-emerald-400">
              Immediate regulatory recommendation
            </div>
          </div>

          <div className="p-5 rounded-lg border border-amber-500/20 bg-amber-500/5 space-y-2.5">
            <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 font-semibold">
              <span className="uppercase tracking-wider text-[11px]">Medium Confidence</span>
              <span className="text-xs">0.45 – 0.72</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Moderate semantic match or partial parameter coverage. Suitable for broader advisory
              recommendations where domain alignment is present.
            </p>
            <div className="pt-2 border-t border-amber-500/20 text-[10px] text-amber-600 dark:text-amber-400">
              Secondary advisory consideration
            </div>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-2.5">
            <div className="flex items-center justify-between text-text-tertiary font-semibold">
              <span className="uppercase tracking-wider text-[11px]">Low Confidence / Review</span>
              <span className="text-xs">&le; 0.45</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Fails technical threshold or relies on unverified legacy metadata. The platform
              automatically emits a human-review flag requiring officer verification.
            </p>
            <div className="pt-2 border-t border-border-subtle/60 text-[10px] text-text-tertiary">
              Human-in-the-loop review required
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
