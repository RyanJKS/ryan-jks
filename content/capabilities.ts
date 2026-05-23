import {
  BrainCircuit,
  Cloud,
  Code2,
  DatabaseZap,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

export type Capability = {
  title: string;
  description: string;
  icon: typeof Cloud;
  skills: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Cloud & Platform Engineering",
    description:
      "Cloud foundations with identity, resilience, visibility, and ownership baked in.",
    icon: Cloud,
    skills: [
      "Azure App Services",
      "Azure Storage",
      "Azure Key Vault",
      "Azure Monitor",
      "Application Insights",
      "Log Analytics",
      "Azure AI Search",
      "Azure ML / AI Foundry concepts",
      "Hub-and-spoke architecture",
      "Multi-region thinking",
      "Identity-first cloud design",
    ],
  },
  {
    title: "Data & AI Platforms",
    description:
      "Governed assets shaped into search, retrieval, analytics, and AI workflows.",
    icon: DatabaseZap,
    skills: [
      "Databricks",
      "Spark",
      "Kafka",
      "Airflow",
      "Data platform architecture",
      "Data mesh concepts",
      "AI search and retrieval systems",
      "Agentic retrieval / RAG patterns",
      "Governed data access workflows",
    ],
  },
  {
    title: "Backend Engineering",
    description:
      "API foundations with clean boundaries between domain, use case, and infrastructure.",
    icon: Code2,
    skills: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "Clean Architecture",
      "Ports and adapters",
      "Domain-driven modular structure",
      "OpenAPI-first API design",
      "AuthN/AuthZ patterns",
    ],
  },
  {
    title: "Frontend Engineering",
    description:
      "Enterprise UX that makes complex workflows feel legible and calm.",
    icon: BrainCircuit,
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
      "MSAL Browser",
      "Accessible enterprise UX",
    ],
  },
  {
    title: "DevOps & Delivery",
    description:
      "Pipelines and runtime patterns that make change safer and more observable.",
    icon: GitBranch,
    skills: [
      "Terraform / Terragrunt",
      "Azure DevOps Pipelines",
      "Docker / Docker Compose",
      "CI/CD design",
      "Vercel deployment",
      "Observability-first delivery",
      "Secure configuration",
      "Key Vault patterns",
    ],
  },
  {
    title: "Security, Identity & Governance",
    description:
      "Identity, permissions, auditability, and least privilege treated as product design.",
    icon: ShieldCheck,
    skills: [
      "Entra ID",
      "OAuth2 / OIDC",
      "Authorization Code Flow + PKCE",
      "JWT validation",
      "Role/permission modelling",
      "AAD group-based access",
      "Least privilege",
      "Auditability",
      "Governance",
    ],
  },
];
