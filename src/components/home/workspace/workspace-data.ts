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
  externalLink: "https://github.com/Dipanshi1",
  status: "Active Prototype",
};

export const agrivisionWorkstation: WorkstationData = {
  id: "agrivision",
  number: "02",
  title: "AgriVision AI",
  domain: "Computer Vision · Applied AI",
  tagline: "Automated crop disease classification via computer vision.",
  problem:
    "Manual visual identification of agricultural crop leaf pathologies is error-prone and slow, delaying intervention against virulent fungal and bacterial infections.",
  solution:
    "Deep learning vision pipeline classifying crop leaf pathologies. Uses OpenCV CLAHE contrast enhancement and channel normalization with a containerized FastAPI inference microservice.",
  technicalSignals: [
    "OpenCV CLAHE Preprocessing",
    "224 × 224 × 3 RGB Scaled Tensors",
    "FastAPI Inference Microservice",
    "Docker Containerization",
    "NumPy & Pillow",
  ],
  contextNote: {
    badge: "Computer Vision Inference Microservice",
    description:
      "OpenCV preprocessing pipeline paired with containerized FastAPI inference endpoint for automated agricultural disease classification.",
  },
  link: "https://github.com/Dipanshi1/agri-vision-ai",
  externalLink: "https://github.com/Dipanshi1/agri-vision-ai",
  status: "Production Codebase",
};

export const interviewTrackerWorkstation: WorkstationData = {
  id: "interview-tracker",
  number: "03",
  title: "Interview Tracker Pro",
  domain: "Full-Stack · Backend & Data",
  tagline: "Relational lifecycle management with JWT security.",
  problem:
    "Fragmented spreadsheets and unstructured tracking lose candidate feedback, lack audit logs, and fail multi-tenant data confidentiality requirements.",
  solution:
    "Production-grade recruitment workflow engine with strict PostgreSQL relational modeling via SQLAlchemy, status transition state machines, and stateless JWT authentication with row-level tenant isolation.",
  technicalSignals: [
    "PostgreSQL Normalized Schemas",
    "Cascading Foreign Keys",
    "Bearer JWT (RS256) Security",
    "Row-Level Query Scoping",
    "Pydantic v2 Serialization",
  ],
  contextNote: {
    badge: "Full-Stack Relational Architecture",
    description:
      "Engineered relational database schema, stateless authentication, and state transition logic for multi-stage hiring workflows.",
  },
  link: siteConfig.links.github,
  externalLink: siteConfig.links.github,
  status: "Repository Active",
};

export const careerAdviserWorkstation: WorkstationData = {
  id: "career-adviser",
  number: "04",
  title: "Career Adviser",
  domain: "LLM Application · Product Engineering",
  tagline: "Schema-grounded LLM advisory engine with zero parse drift.",
  problem:
    "Raw LLM outputs suffer from hallucinated fields, non-deterministic formatting, and schema breakage when parsing career trajectories into structured UI timelines.",
  solution:
    "AI-assisted career advisory platform pairing generative LLM capabilities with rigorous Pydantic schema validation over Gemini API, eliminating malformed responses while generating actionable technical roadmaps.",
  technicalSignals: [
    "Gemini API Integration",
    "Strict Pydantic BaseModels (0% Parse Drift)",
    "Competency Gap Analysis",
    "Next.js 14 App Router",
    "Tailwind CSS Tokens",
  ],
  contextNote: {
    badge: "Structured LLM Application",
    description:
      "Designed prompt contracts and Pydantic validation boundaries to ensure deterministic structured responses from large language models.",
  },
  link: siteConfig.links.github,
  externalLink: siteConfig.links.github,
  status: "Repository Active",
};

export const allProjects: WorkstationData[] = [
  manaksetuWorkstation,
  agrivisionWorkstation,
  interviewTrackerWorkstation,
  careerAdviserWorkstation,
];
