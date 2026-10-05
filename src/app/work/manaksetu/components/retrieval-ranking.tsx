import * as React from "react";
import { Container } from "@/components/layout/container";

export function RetrievalRanking() {
  const rankingFactors = [
    {
      weight: "0.40",
      signal: "Semantic Distance",
      variable: "semantic_score",
      description:
        "Cosine similarity between Gemini query embedding and indexed BIS standards catalog embeddings in Qdrant Cloud. Captures conceptual domain proximity even across differing terminology.",
      range: "[0.0, 1.0]",
    },
    {
      weight: "0.15",
      signal: "BM25 Lexical Score",
      variable: "bm25_score",
      description:
        "Rank-BM25 score over standard titles, scopes, and keywords. Normalized as min(raw_score / 20.0, 1.0). Guarantees exact technical keywords and abbreviations are rewarded.",
      range: "[0.0, 1.0]",
    },
    {
      weight: "0.20",
      signal: "Product Keyword Match",
      variable: "product_rel",
      description:
        "Evaluates whether the extracted product category appears in standard title or keywords. 1.0 for exact phrase match; 0.6 for partial token overlap.",
      range: "0.0, 0.6, or 1.0",
    },
    {
      weight: "0.10",
      signal: "Application / Domain Match",
      variable: "app_rel",
      description:
        "Evaluates whether the tender operational domain matches the standard's scope text. 1.0 for exact application match; 0.7 for broader domain category match.",
      range: "0.0, 0.7, or 1.0",
    },
    {
      weight: "0.10",
      signal: "Technical Parameter Coverage",
      variable: "tech_rel",
      description:
        "Fraction of extracted tender parameters (such as 'compressive strength = 53 MPa' or 'THD < 10%') explicitly located within the standard's scope and test method clauses.",
      range: "[0.0, 1.0]",
    },
    {
      weight: "0.05",
      signal: "Catalog Metadata Confidence",
      variable: "meta_conf",
      description:
        "Authenticity verification from the BIS catalog. 1.0 if the standard version and verification status are officially confirmed; 0.5 for unverified or legacy catalog entries.",
      range: "0.5 or 1.0",
    },
  ];

  return (
    <section
      id="ranking"
      aria-labelledby="ranking-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl pb-12 sm:pb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
            03 / Retrieval &amp; Deterministic Ranking
          </span>
          <h2
            id="ranking-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
          >
            Hybrid Retrieval &amp; The Deterministic Scoring Engine
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            To satisfy regulatory auditability in public procurement, relevance scoring cannot be
            delegated to an opaque neural network. The recommendation engine implements a
            hybrid retrieval architecture paired with a deterministic, mathematically verifiable
            multi-signal formula.
          </p>
        </div>

        {/* Why Hybrid Retrieval: Semantic vs Lexical */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
              <span className="text-accent-primary uppercase tracking-wider font-semibold">
                Dense Vector Retrieval (Qdrant)
              </span>
              <span className="text-text-tertiary">Cosine Metric</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Handles conceptual vocabulary mismatches between tender phrasing and formal BIS titles.
              For example, tenders referring to &ldquo;road street lighting fixtures&rdquo; correctly
              match standards titled &ldquo;Luminaires for Road and Street Lighting&rdquo; even when
              the words &ldquo;fixture&rdquo; and &ldquo;street light&rdquo; differ lexicographically.
            </p>
            <div className="pt-2 text-[11px] text-text-tertiary">
              Vector dimension: Gemini text-embedding-004 · Metric: Cosine Distance
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border-subtle bg-surface space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
              <span className="text-accent-primary uppercase tracking-wider font-semibold">
                Lexical Search (BM25)
              </span>
              <span className="text-text-tertiary">Term Frequency / IDF</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Preserves exact alphanumeric standard numbers (e.g., &ldquo;IS 12269&rdquo;,
              &ldquo;IS 10322&rdquo;) and rigid technical acronyms (&ldquo;OPC&rdquo;,
              &ldquo;THD&rdquo;, &ldquo;IP66&rdquo;). Dense embeddings frequently dilute exact
              alphanumeric codes into generic domain clusters; BM25 ensures exact code mentions
              are never lost.
            </p>
            <div className="pt-2 text-[11px] text-text-tertiary">
              Index: Rank-BM25 over BIS catalog titles, scopes, and keywords
            </div>
          </div>
        </div>

        {/* Exact Mathematical Formula Block */}
        <div className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-surface-elevated/80 shadow-sm space-y-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border-subtle">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
              Deterministic Scoring Formula (ai-engine/src/ranking.py)
            </span>
            <span className="font-mono text-[11px] text-text-tertiary">
              Bounded Range [0.0, 1.0] · Auditable
            </span>
          </div>

          {/* Formula Display */}
          <div className="space-y-4 font-mono">
            <div className="p-4 sm:p-6 rounded-lg border border-border-subtle bg-canvas text-xs sm:text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
              <span className="text-text-tertiary block text-[11px] mb-2 uppercase">1. Six-Component Base Score:</span>
              {`Base Score = (
    0.40 × Semantic Score
  + 0.15 × BM25 Lexical Score
  + 0.20 × Product Match
  + 0.10 × Application / Domain Match
  + 0.10 × Technical Requirement Coverage
  + 0.05 × Metadata Confidence
)`}

              <div className="h-px w-full bg-border-subtle my-4" />

              <span className="text-text-tertiary block text-[11px] mb-2 uppercase">2. Conditional Additive Citation Boost:</span>
              {`Final Relevance Score = min(1.0, Base Score + (0.30 × Explicit Citation Match))`}
            </div>

            {/* Critical Engineering Note on +0.30 Boost */}
            <div className="p-3.5 rounded-lg border border-amber-500/20 bg-amber-500/5 text-xs text-text-secondary leading-relaxed font-sans">
              <strong className="text-amber-600 dark:text-amber-400 font-mono font-medium block mb-1">
                Engineering Decision Note: The +0.30 Additive Citation Boost
              </strong>
              The +0.30 citation boost is a conditional additive boost applied strictly after the
              base linear combination and clamped at 1.0. It is{" "}
              <strong>NOT a seventh weighted component</strong> in the base score. This deliberate
              architectural choice ensures that when a government tender explicitly mandates a
              particular Indian Standard by name, that standard receives immediate priority over
              un-cited alternatives without being mathematically diluted by the other five weights.
            </div>
          </div>
        </div>

        {/* Breakdown of Signals */}
        <div className="space-y-4 mb-12">
          <h3 className="text-lg font-semibold tracking-tight text-text-primary">
            Base Ranking Signal Specifications
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border border-border-subtle rounded-lg bg-surface divide-y divide-border-subtle">
              <thead>
                <tr className="bg-surface-elevated text-text-tertiary uppercase tracking-wider text-[10px]">
                  <th className="p-3.5 font-medium">Weight</th>
                  <th className="p-3.5 font-medium">Signal Name</th>
                  <th className="p-3.5 font-medium">Internal Key</th>
                  <th className="p-3.5 font-medium">Range</th>
                  <th className="p-3.5 font-medium font-sans">Verification Logic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {rankingFactors.map((factor) => (
                  <tr key={factor.signal} className="hover:bg-surface-elevated/40 transition-colors">
                    <td className="p-3.5 font-bold text-accent-primary">{factor.weight}</td>
                    <td className="p-3.5 font-semibold text-text-primary">{factor.signal}</td>
                    <td className="p-3.5 text-text-secondary text-[11px]">{factor.variable}</td>
                    <td className="p-3.5 text-text-tertiary">{factor.range}</td>
                    <td className="p-3.5 font-sans text-text-secondary text-xs leading-relaxed max-w-md">
                      {factor.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Confidence Calibration & Human Review */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 space-y-2">
            <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>HIGH CONFIDENCE</span>
              <span>&gt; 0.72</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Standard demonstrates strong semantic alignment, exact product category match, or
              an explicit tender citation with verified BIS catalog status.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-amber-500/20 bg-amber-500/5 space-y-2">
            <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 font-semibold">
              <span>MEDIUM CONFIDENCE</span>
              <span>0.45 – 0.72</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Moderate semantic match or partial parameter coverage. Suitable for broader advisory
              recommendations where domain alignment is present.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-subtle bg-surface space-y-2">
            <div className="flex items-center justify-between text-text-tertiary font-semibold">
              <span>LOW CONFIDENCE / FLAG</span>
              <span>&le; 0.45</span>
            </div>
            <p className="text-text-secondary font-sans text-xs leading-relaxed">
              Fails technical threshold or relies on unverified legacy metadata. The platform
              automatically emits a human-review flag requiring officer verification.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
