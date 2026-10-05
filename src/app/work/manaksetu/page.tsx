import type { Metadata } from "next";
import { CaseStudyHero } from "./components/case-study-hero";
import { ProblemStatement } from "./components/problem-statement";
import { SystemArchitecture } from "./components/system-architecture";
import { RetrievalRanking } from "./components/retrieval-ranking";
import { DocumentExtraction } from "./components/document-extraction";
import { EvidenceVerification } from "./components/evidence-verification";
import { EngineeringTradeoffs } from "./components/engineering-tradeoffs";
import { ContributionBoundary } from "./components/contribution-boundary";
import { ProjectOutcome } from "./components/project-outcome";

export const metadata: Metadata = {
  title: "ManakSetu Flagship Case Study — Dipanshi Gupta",
  description:
    "Engineering case study on ManakSetu (SIH 26108): AI-powered regulatory procurement intelligence, hybrid Qdrant/BM25 retrieval, deterministic multi-signal ranking, and evidence-grounded verification interface.",
};

export default function ManakSetuCaseStudyPage() {
  return (
    <article className="flex flex-col w-full selection:bg-accent-primary/20 selection:text-text-primary">
      <CaseStudyHero />
      <ProblemStatement />
      <SystemArchitecture />
      <RetrievalRanking />
      <DocumentExtraction />
      <EvidenceVerification />
      <EngineeringTradeoffs />
      <ContributionBoundary />
      <ProjectOutcome />
    </article>
  );
}
