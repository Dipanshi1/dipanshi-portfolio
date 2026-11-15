export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  stage: "Prototype / Hackathon" | "Research Prototype" | "Personal Project Prototype";
  implementedFeatures: string[];
  prototypeScope: string;
  limitations: string[];
  futurePlans: string[];
  technologies: string[];
  repoStatus: "Public Repository" | "Private Repository (In Active Development)" | "Local Project (Not Published)";
  repoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: { name: string; context: string }[];
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Campus Community" | "Hackathons & Sprints" | "Independent Development";
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: "Completed" | "In Preparation";
  detail: string;
  topics: string[];
}

export const PERSONAL_INFO = {
  name: "Dipanshi Gupta",
  role: "Software & AI Systems Developer",
  headline: "Building full-stack web applications, assistive computer vision experiments, and semantic search prototypes.",
  shortBio:
    "Developer and student engineer exploring applied machine learning, semantic retrieval, and full-stack web architectures. Experienced in community design leadership with GDG on Campus, rapid hackathon prototyping, and accessible interface design.",
  location: "India (IST)",
  email: "dipanshiigupta@gmail.com",
  github: "https://github.com/Dipanshi1",
  linkedin: "https://www.linkedin.com/in/dipanshi-gupta/",
  resumeStatus: "Resume PDF is currently being updated with recent project work and credentials. Available upon direct request.",
  availabilityStatus: "Open to opportunities",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "manaksetu",
    title: "ManakSetu",
    category: "Regulatory Standards Search",
    stage: "Prototype / Hackathon",
    summary: "Prototype search and cross-referencing interface for Bureau of Indian Standards (BIS) documents.",
    prototypeScope:
      "Developed as a hackathon prototype to explore semantic search and multilingual clause retrieval across sample Bureau of Indian Standards regulatory texts.",
    implementedFeatures: [
      "Search interface with query parsing across multilingual test queries",
      "Vector embedding-based document retrieval across sample regulatory corpus",
      "Clause card view showing matching sections with citation context",
    ],
    limitations: [
      "Operates on a curated sample dataset; not integrated with live official BIS database",
      "Search latency and index scaling unbenchmarked beyond local demonstration dataset",
    ],
    futurePlans: [
      "Evaluate hybrid sparse-dense retrieval for technical jargon",
      "Explore official API integration and automated document ingestion pipelines",
    ],
    technologies: ["Next.js", "Python", "FastAPI", "Vector Embeddings", "Tailwind CSS"],
    repoStatus: "Public Repository",
    repoUrl: "https://github.com/Dipanshi1/ManakSetu",
    featured: true,
  },
  {
    id: "sightloop",
    title: "SightLoop",
    category: "Assistive Computer Vision",
    stage: "Prototype / Hackathon",
    summary: "Experimental visual perception prototype providing auditory scene cues for visually impaired users.",
    prototypeScope:
      "A prototype assistive pipeline exploring real-time webcam object detection coupled with synthetic audio feedback to convey spatial surroundings.",
    implementedFeatures: [
      "Local camera stream inference using PyTorch object detection models",
      "Auditory notification trigger mapping detected object labels to audio prompts",
      "Experimental spatial volume scaling based on bounding box proportions",
    ],
    limitations: [
      "Tested only on local webcam feed; not deployed on wearable or edge-embedded hardware",
      "Depth estimation is approximated via 2D bounding box geometry, not dedicated depth sensors",
    ],
    futurePlans: [
      "Integrate lightweight edge models (e.g., MobileNet/YOLO-Nano) for mobile deployment",
      "Conduct user usability evaluations with accessibility practitioners",
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "Text-to-Speech API"],
    repoStatus: "Private Repository (In Active Development)",
    repoUrl: "https://github.com/Dipanshi1/SightLoop",
    featured: true,
  },
  {
    id: "arbiter",
    title: "Arbiter",
    category: "Multi-Agent Deliberation",
    stage: "Research Prototype",
    summary: "Experimental framework exploring multi-agent debate scripts for evaluating contentious prompts.",
    prototypeScope:
      "An exploratory Python prototype testing structured debate flows between simulated agents to observe consensus formation and contradiction detection.",
    implementedFeatures: [
      "Structured agent prompt execution pipeline for dialectical proposition evaluation",
      "Heuristic scoring pass to extract agreed consensus points and unresolved divergences",
      "Formatted JSON output schema tracing multi-turn argument steps",
    ],
    limitations: [
      "Evaluated only on controlled experimental prompt sets; unverified for open-domain fact checking",
      "Uses heuristic string matching and prompt constraints rather than fine-tuned verification models",
    ],
    futurePlans: [
      "Implement formal dialectical truth-maintenance algorithms",
      "Build a visual step-by-step trace interface for inspection",
    ],
    technologies: ["Python", "AsyncIO", "LLM Prompt Chaining", "JSON Schema Validation"],
    repoStatus: "Private Repository (In Active Development)",
    repoUrl: "https://github.com/Dipanshi1/arbiter",
    featured: true,
  },
  {
    id: "university-ai-chatbot",
    title: "University AI Chatbot",
    category: "Conversational Assistance",
    stage: "Personal Project Prototype",
    summary: "Conversational query interface for common university curriculum and campus inquiries.",
    prototypeScope:
      "A domain-adapted chatbot system built to test intent classification and FAQ matching for university academic schedules and course prerequisites.",
    implementedFeatures: [
      "Web chat interface with responsive conversation history and input controls",
      "Intent matching logic routing academic questions to pre-indexed responses",
      "Fallback handler providing guidance for unclassified student queries",
    ],
    limitations: [
      "Knowledge base limited to sample departmental syllabus information",
      "Manual intent tagging without continuous production learning loops",
    ],
    futurePlans: [
      "Connect with student portal authentication to provide personalized course tracking",
      "Migrate intent classification to semantic vector retrieval",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL"],
    repoStatus: "Public Repository",
    repoUrl: "https://github.com/Dipanshi1/ai_chatbot_system",
    featured: true,
  },
  {
    id: "interview-tracker-pro",
    title: "Interview Tracker Pro",
    stage: "Personal Project Prototype",
    category: "Workflow Application",
    summary: "Application pipeline management interface for organizing interview stages and feedback.",
    prototypeScope:
      "A prototype dashboard designed to help organize job applications across submission, interview rounds, and decision outcomes.",
    implementedFeatures: [
      "Kanban-style stage progression layout (Applied, Screening, Technical, Decision)",
      "Form inputs for recording interviewer notes, dates, and follow-up requirements",
      "Local state management and persistent browser data storage",
    ],
    limitations: [
      "Currently a standalone frontend prototype; backend synchronization in development",
      "No automated email parsing or calendar integration",
    ],
    futurePlans: [
      "Build authenticated REST backend with relational database persistence",
      "Add calendar event export and follow-up email notifications",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    repoStatus: "Local Project (Not Published)",
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Core",
    description: "Core programming and scripting languages used across projects and coursework.",
    items: [
      { name: "TypeScript / JavaScript", context: "Full-stack web applications, React components, and Node services" },
      { name: "Python", context: "Applied ML scripts, FastAPI prototypes, and data processing" },
      { name: "C / C++", context: "Data structures, algorithms, and academic computing coursework" },
      { name: "SQL", context: "Relational queries, schema design, and database interaction" },
    ],
  },
  {
    category: "Web & Frontend",
    description: "Frameworks and libraries for building accessible, responsive user interfaces.",
    items: [
      { name: "Next.js (App Router)", context: "Server and client components, routing, and static page generation" },
      { name: "React", context: "Component architectures, hooks, and client-side state" },
      { name: "Tailwind CSS", context: "Utility-first responsive layouts, design tokens, and fluid styling" },
      { name: "HTML5 / Semantic Web", context: "Accessible DOM structure, WCAG AA contrast, and screen reader labels" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Server frameworks, persistence tools, and developer tooling.",
    items: [
      { name: "FastAPI", context: "Python REST API endpoints and data validation with Pydantic" },
      { name: "Node.js & Express", context: "Backend routing, JSON APIs, and server middleware" },
      { name: "PostgreSQL & MongoDB", context: "Relational tables and document data storage for project backends" },
      { name: "Git & GitHub", context: "Branching workflows, pull request reviews, and version tracking" },
      { name: "Linux / WSL2", context: "Daily development environment, bash scripting, and package management" },
      { name: "Docker", context: "Basic containerization for reproducible local environments" },
    ],
  },
  {
    category: "AI & ML Libraries",
    description: "Libraries and tools explored for computer vision, NLP, and assistive prototypes.",
    items: [
      { name: "PyTorch", context: "Exploratory model inference and tensor manipulation" },
      { name: "OpenCV", context: "Image preprocessing, frame capture, and camera feeds" },
      { name: "Vector Embeddings", context: "Sentence embeddings and semantic similarity comparisons" },
    ],
  },
];

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    role: "Design Coordinator",
    organization: "Google Developer Groups on Campus (GDG on Campus)",
    period: "Ongoing",
    location: "Campus Community",
    type: "Campus Community",
    summary:
      "Leading visual design coordination and creative assets for student developer initiatives, workshops, and technical events.",
    highlights: [
      "Designed visual identity, banners, and presentation assets for student developer workshops and tech talks.",
      "Coordinated with technical leads to produce clear promotional graphics and digital workshop materials.",
      "Ensured brand alignment with global Google Developer Groups community guidelines.",
    ],
    technologies: ["Figma", "UI/UX Design", "Brand Guidelines", "Community Leadership"],
  },
  {
    role: "Hackathon Projects & Participation",
    organization: "Competitive Hackathons & Engineering Sprints",
    period: "2023 — 2024",
    location: "National / Regional",
    type: "Hackathons & Sprints",
    summary:
      "Collaborated in multidisciplinary teams to rapidly prototype functional solutions addressing real-world problem statements.",
    highlights: [
      "Co-developed ManakSetu during a competitive hackathon sprint, delivering a functioning semantic standards search prototype.",
      "Designed the initial SightLoop concept pipeline for real-time assistive perception and spatial auditory feedback.",
      "Collaborated under tight time constraints, practicing rapid scoping, component modularity, and technical presentations.",
    ],
    technologies: ["Next.js", "Python", "FastAPI", "OpenCV", "Git", "Rapid Prototyping"],
  },
  {
    role: "Independent Software Developer",
    organization: "Self-Directed Projects & Technical Learning",
    period: "2023 — Present",
    location: "Remote",
    type: "Independent Development",
    summary:
      "Designing and implementing personal projects to practice modern web development, API integrations, and type-safe architectures.",
    highlights: [
      "Built and maintained personal project repositories with structured commits and documentation.",
      "Explored multi-agent prompt chains in Arbiter and domain-specific query handling in University AI Chatbot.",
      "Applied strict linting, typechecking, and responsive accessibility practices across all personal web projects.",
    ],
    technologies: ["TypeScript", "Next.js", "React", "Python", "Tailwind CSS", "GitHub"],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    status: "Completed",
    detail: "20-Hour Coursework Completed",
    topics: [
      "Cloud Concepts & Security",
      "AWS Core Services (EC2, S3, RDS, VPC)",
      "Cloud Architecture & Pricing",
      "Shared Responsibility Model",
    ],
  },
  {
    title: "AWS Solutions Architect – Associate Exam Preparation",
    issuer: "Amazon Web Services (Self-Study Curriculum)",
    status: "In Preparation",
    detail: "Currently Preparing for Associate Certification Exam",
    topics: [
      "Resilient Architecture Design",
      "High-Performing Compute & Storage",
      "Secure Applications & IAM",
      "Cost-Optimized Architectures",
    ],
  },
];
