export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  keyHighlights: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface SkillGroup {
  domain: string;
  description: string;
  skills: { name: string; level: "Proficient" | "Advanced" | "Core"; focus: string }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skillsCovered: string[];
}

export const PERSONAL_INFO = {
  name: "Dipanshi Gupta",
  role: "Software Engineer & AI Systems Developer",
  headline: "Architecting resilient full-stack systems, intelligent machine learning pipelines, and accessible digital products.",
  shortBio:
    "Software engineer with an emphasis on applied machine learning, distributed backend systems, and high-craft user interfaces. Focused on evidence-based engineering, robust software architectures, and assistive technology.",
  location: "India (IST)",
  email: "dipanshiigupta@gmail.com",
  github: "https://github.com/Dipanshi1",
  linkedin: "https://www.linkedin.com/in/dipanshi-gupta/",
  resumeStatus: "Resume PDF is currently being updated for recent 2025/2026 milestones. Available upon direct request.",
  availableForHire: true,
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "manaksetu",
    title: "ManakSetu",
    category: "Regulatory AI & Search",
    summary: "Intelligent search & compliance assistant for Bureau of Indian Standards (BIS) documents.",
    description:
      "Engineered a regulatory search platform that streamlines access to Bureau of Indian Standards documentation. Features multilingual query processing, semantic document indexing, and instant cross-reference retrieval to accelerate standards verification for engineers and manufacturers.",
    technologies: ["Next.js", "Python", "FastAPI", "Vector Search", "Multilingual NLP", "Tailwind CSS"],
    keyHighlights: [
      "Multilingual semantic query parsing across complex regulatory texts",
      "Domain-specific vector search pipeline for rapid clause cross-referencing",
      "Clean editorial interface optimized for standards compliance auditing",
    ],
    githubUrl: "https://github.com/Dipanshi1",
    featured: true,
  },
  {
    id: "sightloop",
    title: "SightLoop",
    category: "Computer Vision & Assistive Tech",
    summary: "Closed-loop visual perception and auditory feedback system for the visually impaired.",
    description:
      "A real-time assistive perception architecture designed to translate dynamic physical environments into descriptive audio signals. Built with latency-optimized object localization, spatial depth estimation, and prioritized cue synthesis to support user autonomy.",
    technologies: ["PyTorch", "OpenCV", "Computer Vision", "Python", "Spatial Audio API"],
    keyHighlights: [
      "Low-latency real-time inference pipeline for continuous scene parsing",
      "Spatial depth estimation coupled with prioritized auditory notifications",
      "Designed with human-centered accessibility and reduced cognitive load principles",
    ],
    githubUrl: "https://github.com/Dipanshi1",
    featured: true,
  },
  {
    id: "arbiter",
    title: "Arbiter",
    category: "Multi-Agent Deliberation",
    summary: "Autonomous multi-agent framework for algorithmic debate and prompt reconciliation.",
    description:
      "A structured deliberation architecture using multi-agent debate protocols to critique complex inputs, uncover logical biases, and reconcile contradictory evidence into verified, weighted syntheses.",
    technologies: ["Python", "AsyncIO", "Multi-Agent Protocols", "LLM Prompt Chains", "Structured Verification"],
    keyHighlights: [
      "Multi-agent debate protocols for dialectical evaluation and error reduction",
      "Automated argument scoring and consensus distillation algorithms",
      "Reproducible prompt execution tracing with structured JSON output schemas",
    ],
    githubUrl: "https://github.com/Dipanshi1",
    featured: true,
  },
  {
    id: "university-ai-chatbot",
    title: "University AI Chatbot",
    category: "Conversational Systems",
    summary: "Domain-adapted conversational assistant for academic and institutional navigation.",
    description:
      "An automated conversational assistant engineered to address university curriculum inquiries, prerequisites, administrative deadlines, and campus services through semantic intent classification and verified knowledge base retrieval.",
    technologies: ["TypeScript", "React", "Node.js", "NLP Intent Engine", "PostgreSQL"],
    keyHighlights: [
      "Intent classification engine with graceful fallback to human escalation",
      "Campus knowledge base integration with verified academic policy citations",
      "Responsive, accessible web widget integrated into institutional portals",
    ],
    githubUrl: "https://github.com/Dipanshi1",
    featured: true,
  },
  {
    id: "interview-tracker-pro",
    title: "Interview Tracker Pro",
    category: "Full-Stack Application",
    summary: "End-to-end recruitment lifecycle and candidate pipeline tracking platform.",
    description:
      "A full-stack workflow management application enabling job seekers and recruiting teams to track application stages, schedule interviews, record detailed technical feedback rounds, and monitor outcome metrics.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    keyHighlights: [
      "Kanban-style stage progression board with real-time state synchronization",
      "Structured feedback logging across multiple technical evaluation rounds",
      "Data export and pipeline analytics dashboard for progression tracking",
    ],
    githubUrl: "https://github.com/Dipanshi1",
    featured: true,
  },
];

export const EXPERTISE_DOMAINS: SkillGroup[] = [
  {
    domain: "Artificial Intelligence & ML",
    description: "Designing, evaluating, and deploying neural models and intelligent agent architectures.",
    skills: [
      { name: "PyTorch", level: "Proficient", focus: "Model training, inference pipelines & tensor ops" },
      { name: "Computer Vision", level: "Proficient", focus: "Object detection, OpenCV, spatial perception" },
      { name: "Natural Language Processing", level: "Proficient", focus: "Semantic search, tokenization, embeddings" },
      { name: "Agent Architectures", level: "Proficient", focus: "Multi-agent coordination & prompt chaining" },
      { name: "Model Evaluation", level: "Advanced", focus: "Benchmarking, error analysis & calibration" },
    ],
  },
  {
    domain: "Full-Stack Engineering",
    description: "Developing scalable, type-safe web applications with responsive design and clean architectures.",
    skills: [
      { name: "Next.js & React", level: "Proficient", focus: "App Router, SSR, Server Components & Hooks" },
      { name: "TypeScript / JavaScript", level: "Advanced", focus: "Strict typing, async architecture & modern ES" },
      { name: "Python", level: "Advanced", focus: "FastAPI, script automation, data structures" },
      { name: "Node.js & Express", level: "Proficient", focus: "RESTful APIs, middleware & authentication" },
      { name: "Tailwind CSS", level: "Advanced", focus: "Responsive design, design systems & fluid layouts" },
      { name: "PostgreSQL & MongoDB", level: "Proficient", focus: "Schema design, relational indexing & aggregation" },
    ],
  },
  {
    domain: "Systems, Tooling & Practices",
    description: "Upholding rigorous engineering hygiene, automated verification, and reproducible environments.",
    skills: [
      { name: "Git & GitHub Workflows", level: "Advanced", focus: "Trunk-based & GitFlow, PR reviews, hooks" },
      { name: "Linux / WSL2", level: "Proficient", focus: "Shell scripting, process management, POSIX" },
      { name: "Docker", level: "Core", focus: "Containerization & reproducible local setups" },
      { name: "Agile / Scrum Methodologies", level: "Advanced", focus: "Sprint planning, user stories, retrospectives" },
      { name: "Web Accessibility (WCAG)", level: "Advanced", focus: "Semantic HTML, keyboard navigation, a11y" },
    ],
  },
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    role: "Full-Stack & Systems Project Engineer",
    organization: "Independent & Academic Engineering Projects",
    period: "2023 — Present",
    location: "Remote / Hybrid",
    summary:
      "Spearheading the architecture, prototyping, and iterative development of full-stack AI and workflow tools.",
    contributions: [
      "Architected and deployed high-performance Next.js and TypeScript applications with modular component systems.",
      "Engineered RESTful API backends with FastAPI and Express, ensuring robust validation and predictable error handling.",
      "Maintained strict version control hygiene, branch isolation, and automated linting/type-checking quality gates.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "Git"],
  },
  {
    role: "Machine Learning & Perception Researcher",
    organization: "AI & Assistive Computing Initiatives",
    period: "2024 — 2025",
    location: "India",
    summary:
      "Conducted exploratory development and evaluation on computer vision pipelines and multi-agent consensus protocols.",
    contributions: [
      "Prototyped SightLoop's real-time object detection and spatial sound translation pipeline for visually impaired users.",
      "Designed Arbiter's algorithmic debate rules, assessing convergence speed and output consistency across LLM agents.",
      "Authored clean technical documentation and reproducible benchmark scripts for experimental validation.",
    ],
    technologies: ["PyTorch", "Python", "OpenCV", "Multi-Agent Systems", "Vector Embeddings"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Machine Learning & Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "2024",
    skillsCovered: ["Supervised Learning", "Neural Networks", "TensorFlow/PyTorch", "Model Evaluation"],
  },
  {
    title: "Full-Stack Web Development with React & Node.js",
    issuer: "Technical Learning Certification",
    date: "2024",
    skillsCovered: ["React.js", "Node.js", "RESTful APIs", "State Management", "Database Integration"],
  },
  {
    title: "Version Control, Git & Open Source Collaboration",
    issuer: "GitHub & Linux Foundation Foundations",
    date: "2023",
    skillsCovered: ["Git Internals", "Branching Strategies", "Continuous Integration", "Code Review Standards"],
  },
];
