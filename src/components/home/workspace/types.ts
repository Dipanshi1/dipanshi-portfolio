export type WorkspaceView = "studio" | "list";

export interface TechnicalProof {
  label: string;
  value: string;
}

export interface WorkstationData {
  id: string;
  number: string;
  title: string;
  domain: string;
  tagline: string;
  problem: string;
  solution: string;
  technicalSignals: string[];
  contextNote: {
    badge: string;
    description: string;
  };
  link: string;
  externalLink?: string;
  status: string;
}
