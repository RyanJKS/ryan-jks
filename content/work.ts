export type WorkItem = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  problem: string;
  approach: string;
  technologies: string[];
  outcome: string;
  signals: string[];
};

export const work: WorkItem[] = [
  {
    slug: "pdap-portal",
    title: "PDAP Portal - Governed Data & AI Platform Experience",
    type: "Platform / Product Engineering",
    summary:
      "A governed portal concept for data discovery, access workflows, support, analytics, and future AI-assisted platform experiences.",
    problem:
      "Enterprise data users need a clearer, more governed way to discover, request, and understand platform capabilities without relying on scattered knowledge or informal support paths.",
    approach:
      "Designed a modular portal architecture with Next.js, FastAPI, Entra ID, OpenAPI contracts, role-based authorization, secure runtime configuration, and a path toward AI Search-backed support experiences.",
    technologies: ["Next.js", "FastAPI", "Azure", "Entra ID", "OpenAPI", "AI Search"],
    outcome:
      "A scalable foundation for governed self-service workflows and future AI-assisted platform interactions, designed as a platform surface rather than a single-purpose app.",
    signals: [
      "Frontend and backend contracts shaped around OpenAPI.",
      "Authentication and runtime configuration considered from the beginning.",
      "Support, discovery, analytics, and AI workflows designed as an extensible platform surface.",
    ],
  },
  {
    slug: "enterprise-authorization-model",
    title: "Governed Authorization for Platform Workflows",
    type: "Security / Platform Governance",
    summary:
      "A scalable authorization model combining users, runtime assignments, AAD group membership, centrally defined roles, permissions, and platform-owner governance.",
    problem:
      "Enterprise platform workflows need permissioning that is explainable, auditable, adaptable, and enforceable across user-facing and API surfaces.",
    approach:
      "Defined permission contracts in source control, runtime assignments for users and groups, a special governance model for platform-owner privileges, FastAPI dependency-based enforcement, and a /me endpoint for principal state.",
    technologies: ["FastAPI", "Entra ID", "JWT", "AAD Groups", "RBAC", "SQLAlchemy"],
    outcome:
      "A clearer path to least-privilege access, governed delegation, and authorization behaviour that can be inspected by both engineers and platform owners.",
    signals: [
      "Permission definitions treated as platform contracts.",
      "Runtime authorization state exposed to the frontend through a principal snapshot.",
      "Auditability and operational ownership included in the model.",
    ],
  },
  {
    slug: "documentation-knowledge-pipeline",
    title: "Repository Documentation to AI-Ready Knowledge Base",
    type: "AI Enablement / Data Product",
    summary:
      "An event-driven ingestion concept that treats repository documentation as source-of-truth and prepares it for search, support, and future AI assistant workflows.",
    problem:
      "Platform knowledge often lives in repositories, READMEs, and operational notes, but users need governed discovery and support experiences that can retrieve trusted information quickly.",
    approach:
      "Mapped an ingestion flow using Azure DevOps service hooks, service bus or serverless workers, Azure Storage, Azure AI Search, enrichment steps, multilingual support, and an agentic retrieval roadmap.",
    technologies: ["Azure DevOps", "Service Bus", "Azure Storage", "Azure AI Search", "RAG", "Workers"],
    outcome:
      "A path from static documentation to AI-ready knowledge assets, while preserving source-of-truth discipline and governed platform ownership.",
    signals: [
      "Documentation treated as operational product data.",
      "Event-driven updates reduce stale knowledge risk.",
      "Retrieval architecture planned before chatbot experience.",
    ],
  },
  {
    slug: "fastapi-clean-architecture",
    title: "FastAPI Platform Backend with Clean Architecture",
    type: "Backend Architecture",
    summary:
      "A modular backend foundation separating domain logic, application use cases, infrastructure integrations, and presentation/API routers.",
    problem:
      "Platform backends can become hard to test and evolve when framework code, data access, authorization, and business rules collapse into the same layer.",
    approach:
      "Structured the backend around domain entities, repository ports, SQLAlchemy repositories, Unit of Work, Alembic migrations, Pydantic settings, auth dependencies, API versioning, and testable use cases.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "Pydantic", "Clean Architecture"],
    outcome:
      "A backend foundation that keeps domain behaviour understandable, infrastructure replaceable, and production concerns visible without over-engineering the first version.",
    signals: [
      "Domain and infrastructure separated deliberately.",
      "Migration, configuration, and authorization paths included early.",
      "Designed for testability, maintainability, and long-term ownership.",
    ],
  },
];
