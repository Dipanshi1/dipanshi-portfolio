export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  stage: string;
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
  headline: "Building full-stack web applications, surface-defect inspection agents, model-routing frameworks, and semantic search prototypes.",
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
    category: "Adaptive Surface Inspection",
    stage: "Feasibility Prototype",
    summary:
      "Adaptive surface-defect inspection agent developed for the OpenCV AI Competition 2026.",
    prototypeScope:
      "A local-first, test-driven feasibility project exploring measurement-driven OpenCV operations (denoising, speckle filtering, anomaly map rebuild) and auditable perception-to-action traces.",
    implementedFeatures: [
      "Local measurement-driven inspection loop assessing noise, contrast, and candidate defect geometry",
      "Adaptive operation selection testing denoising, speckle filtering, and anomaly map rebuilding",
      "Perception-to-action trace generation producing visual overlays and diagnostic logs",
      "Test-driven synthetic test fixture suite verifying algorithmic pipeline stages",
    ],
    limitations: [
      "Early feasibility and implementation phase; hardware edge deployment and live camera streaming remain unverified",
      "Synthetic fixture results reflect behavioral tests rather than benchmarked real-world accuracy",
      "Cloud and AWS synchronization components are currently undeployed and unverified",
    ],
    futurePlans: [
      "Evaluate algorithmic pipelines on standardized real-world surface defect datasets (e.g. VisA)",
      "Integrate and benchmark on target competition embedded hardware",
    ],
    technologies: ["Python", "OpenCV 5", "PyTest", "Computer Vision"],
    repoStatus: "Private Repository (In Active Development)",
    repoUrl: "https://github.com/Dipanshi1/SightLoop",
    featured: true,
  },
  {
    id: "arbiter",
    title: "Arbiter",
    category: "Model Routing & Evaluation",
    stage: "Experimental Research Prototype",
    summary:
      "Experimental model-routing and evaluation framework designed for adaptive compute allocation across LLMs.",
    prototypeScope:
      "A modular evaluation prototype implementing routing contracts, cost accounting, and deterministic replay to evaluate compute paths across language models.",
    implementedFeatures: [
      "Routing contracts and mock execution pipeline validating provider interfaces",
      "Model registry, telemetry logging, and cost accounting modules",
      "Policy isolation, deterministic replay engine, and bootstrap components",
      "Comprehensive suite of 141 passing unit and behavioral tests across milestone 3",
    ],
    limitations: [
      "Experimental prototype operating against mock provider interfaces and synthetic fixtures",
      "Does not perform dialectical debate, multi-agent consensus, or automated fact verification",
      "Contains active unresolved design and architecture audit items tracked in project documentation",
    ],
    futurePlans: [
      "Integrate live local model endpoints under strict latency and cost policy ceilings",
      "Address open architecture audit items identified during milestone reviews",
    ],
    technologies: ["Python", "AsyncIO", "PyTest", "JSON Schema", "Architecture Testing"],
    repoStatus: "Private Repository (In Active Development)",
    repoUrl: "https://github.com/Dipanshi1/arbiter",
    featured: true,
  },
  {
    id: "university-ai-chatbot",
    title: "University AI Chatbot",
    category: "Support Chatbot Machine Learning Experiment",
    stage: "Machine Learning Experiment",
    summary:
      "Early machine learning experiment evaluating multi-class intent classification on university support queries.",
    prototypeScope:
      "An exploratory machine learning prototype investigating classical text classification baselines and fallback routing for campus academic inquiries.",
    implementedFeatures: [
      "Exploratory Data Analysis (EDA) on a 200-row university student inquiry dataset",
      "TF-IDF text feature extraction and train/test evaluation splitting",
      "Supervised baseline classification experiments comparing Logistic Regression, Linear SVM, and Naive Bayes",
      "Recorded validation accuracy baselines: Logistic Regression 0.42, Linear SVM 0.50",
      "Defensive fallback rule routing low-confidence predictions to human escalation",
      "Prototype Streamlit web interface (app.py) for testing query intent matching",
    ],
    limitations: [
      "Exploratory baseline only; dataset restricted to 200 sample student queries",
      "Not a production-ready chat service; relies on classical TF-IDF rather than deep contextual semantics",
    ],
    futurePlans: [
      "Expand and balance sample query corpus across departmental domains",
      "Experiment with dense semantic embeddings and retrieval-augmented context",
    ],
    technologies: ["Python", "Scikit-learn", "Streamlit", "TF-IDF", "Jupyter Notebook"],
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
      { name: "HTML5 / Semantic Web", context: "Accessible DOM structure, contrast ratios, and semantic tags" },
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
    description: "Libraries and tools explored for computer vision, classical ML, and evaluation pipelines.",
    items: [
      { name: "OpenCV", context: "Measurement-driven image processing, noise filtering, and defect masking" },
      { name: "Scikit-learn", context: "Text feature extraction (TF-IDF), train/test splits, and baseline classification" },
      { name: "PyTorch", context: "Exploratory tensor operations and neural network model inference" },
      { name: "Vector Embeddings", context: "Semantic sentence similarity and nearest-neighbor retrieval" },
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
    period: "Selected Hackathon Projects",
    location: "National / Regional",
    type: "Hackathons & Sprints",
    summary:
      "Collaborated in multidisciplinary teams to rapidly prototype functional solutions addressing real-world problem statements.",
    highlights: [
      "Co-developed ManakSetu during a competitive hackathon sprint, delivering a functioning semantic standards search prototype.",
      "Contributed to rapid iterative prototyping, UI structuring, and technical demonstrations under sprint constraints.",
      "Practiced agile scoping, component modularity, and reproducible technical presentation workflows.",
    ],
    technologies: ["Next.js", "Python", "FastAPI", "Vector Embeddings", "Git"],
  },
  {
    role: "Independent Software Developer",
    organization: "Self-Directed Projects & Technical Learning",
    period: "Ongoing",
    location: "Remote",
    type: "Independent Development",
    summary:
      "Designing and implementing personal projects to practice modern web development, API integrations, and type-safe architectures.",
    highlights: [
      "Built and maintained personal project repositories with structured commits and documentation.",
      "Explored model routing and deterministic replay in Arbiter alongside intent classification baselines in University AI Chatbot.",
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
