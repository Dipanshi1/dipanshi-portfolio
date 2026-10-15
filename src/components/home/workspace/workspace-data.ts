import { siteConfig } from "@/config/site";
import { WorkstationData } from "./types";

export const manaksetuWorkstation: WorkstationData = {
  id: "manaksetu",
  number: "01",
  title: "ManakSetu",
  domain: "Flagship Project · Applied AI & Regulatory Systems",
  tagline: "AI-powered procurement intelligence for applicable Indian Standards.",
  problem:
    "Indian government procurement tenders arrive as dense, unstandardized PDFs. In benchmark testing, pure vector search failed by blurring numerical tolerances (e.g., 53 Grade vs 43 Grade cement) and diluting exact standard codes.",
  solution:
    "ManakSetu automates parameter extraction and executes hybrid vector and lexical retrieval across 10,000+ Bureau of Indian Standards (BIS) records, delivering mathematically defensible compliance audits for public sector procurement officers.",
  technicalSignals: [
    "Hybrid Retrieval (Qdrant + BM25)",
    "Deterministic 6-Signal Ranking",
    "Evidence-Grounded Verification",
    "Dual-Pass Parser (PyMuPDF)",
    "FastAPI & Next.js 14",
  ],
  contextNote: {
    badge: "Smart India Hackathon (SIH 26108) Prototype",
    description:
      "Dipanshi led product design in Figma, frontend systems in Next.js 14, and retrieval/ranking UI integration. Backend microservices built collaboratively with team contributors.",
  },
  link: "/work/manaksetu",
  externalLink: siteConfig.links.github,
  status: "Active Prototype",
};
