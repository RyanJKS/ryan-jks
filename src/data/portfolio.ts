export const portfolio = {
  name: "Jhelan",
  fullName: "Jhelan Suggun",
  role: "Data Platform Engineer",
  roleSubtitle: "Platforms · Data · Cloud · AI",
  siteUrl: "https://jhelan.dev",

  seo: {
    title: "Jhelan — Data Platform Engineer",
    description:
      "Jhelan Suggun — engineer who thinks from first principles, connects ideas into systems, and builds with AI-assisted speed and craft.",
  },

  links: {
    github: "https://github.com/RyanJKS",
    githubRepos: "https://github.com/RyanJKS?tab=repositories",
    linkedin: "https://www.linkedin.com/in/jsuggun",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Code", href: "#code" },
    { label: "Stack", href: "#stack" },
    { label: "Connect", href: "#contact" },
  ],

  hero: {
    intro: "Hi, I'm Jhelan.",
    title: "I turn system chaos into platform clarity.",
    kinetic: {
      prefix: "I connect",
      words: ["data", "cloud", "AI", "identity", "automation"],
      suffix: "until ideas become products.",
    },
    supportingLine:
      "Mechanical engineer by training. Builder by instinct. I like figuring out how things work — then making them work better.",
    ctas: {
      primary: { label: "Browse my code", href: "#code" },
      secondary: { label: "See my process", href: "#process" },
    },
  },

  about: {
    eyebrow: "About",
    title: "Engineering, in every form.",
    memorableLine:
      "For me, engineering is sense-making: understanding the world deeply enough to build better systems inside it.",
    description:
      "I started in mechanical engineering — mechanisms, forces, constraints, and things you could sketch, test, break down, and reason about from first principles.",
    paragraphs: [
      "That way of thinking pulled me beyond one discipline. Machines led to software. Software led to cloud, data platforms, AI, and product systems. Different materials, same instinct: understand the primitive pieces, then connect them into something better.",
      "I try not to rush toward the obvious fix. I prefer solution-neutral problem framing: understand the real problem first, separate symptoms from causes, map the constraints, then decide whether to reuse, adapt, or build from scratch.",
      "I enjoy the messy middle — blank canvases, unclear requirements, half-formed ideas, and problems where the answer has to be discovered rather than copied. That is where engineering feels most alive to me.",
      "Today, that shows up as platform engineering, data systems, full-stack product work, and AI tooling. But underneath it all, I still think like someone looking for the mechanism — whether it is physical, logical, operational, or organizational.",
    ],
  },

  workflow: {
    eyebrow: "Process",
    title: "How an idea becomes a system.",
    description:
      "This is roughly how I move from a fuzzy problem to something that ships. Click a step to walk through it.",
    memorableLine:
      "Think slow. Build fast — especially with AI in the loop once the model is clear.",
    steps: [
      {
        id: "messy",
        title: "Start with the mess",
        tag: "Input",
        description:
          "A vague problem, conflicting symptoms, half-formed requirements, or a tool that somehow became critical. I sit with the ambiguity before touching a stack.",
      },
      {
        id: "principles",
        title: "Strip to first principles",
        tag: "Decompose",
        description:
          "What are the primitive pieces? Constraints, users, data flows, failure modes, ownership. I take the idea apart until the real problem is visible.",
      },
      {
        id: "graph",
        title: "Connect the graph",
        tag: "Link",
        description:
          "Each piece links to something I already know — a pattern, a trade-off, a lesson from another layer of the stack. The mental map gets richer; the path forward gets clearer.",
      },
      {
        id: "path",
        title: "Pick the path",
        tag: "Decide",
        description:
          "Solution-neutral: reuse what exists, adapt a pattern, or build from scratch. The goal is the simplest thing that fits — not the most impressive architecture slide.",
      },
      {
        id: "build",
        title: "Build with AI + craft",
        tag: "Ship",
        description:
          "Once the model is clear, I use AI aggressively to move fast — scaffolding, boilerplate, refactors, tests, docs. My job is the thinking, boundaries, and taste. AI handles a lot of the typing.",
      },
      {
        id: "boring",
        title: "Make it boring in prod",
        tag: "Finish",
        description:
          "Observable, secure, understandable, hard to accidentally break. Interesting to design. Uneventful to run. That is the finish line.",
      },
    ],
  },

  principles: {
    eyebrow: "Rules of thumb",
    title: "Short list. Long memory.",
    memorableLine: "These are the ones I actually come back to.",
    items: [
      {
        title: "AI for speed, not for skipping thought",
        description:
          "I use AI to implement fast once the architecture and boundaries are clear — not to avoid understanding the problem.",
      },
      {
        title: "The map matters more than the stack",
        description:
          "Tools change. Knowing how the pieces connect — and where they break — does not.",
      },
      {
        title: "Clever in design, boring in production",
        description: "If a system needs heroics to operate, the design was probably showing off.",
      },
      {
        title: "Name things properly",
        description:
          "Bad naming is a tax you pay forever. Services, permissions, env vars, docs — all of it.",
      },
    ],
  },

  code: {
    eyebrow: "Code",
    title: "Things I build to think out loud.",
    memorableLine: "Most of my repos started as a question I could not stop turning over.",
    description:
      "Experiments, tools, and side projects where I try ideas before they become anything bigger. If you want to see how I think in practice, GitHub is the place.",
    reposUrl: "https://github.com/RyanJKS?tab=repositories",
    highlights: [
      "Platform and backend experiments",
      "Data tooling and automation",
      "AI and retrieval prototypes",
      "Full-stack ideas worth exploring",
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Tools I reach for.",
    memorableLine: "Different layers, same game — boundaries, contracts, state, and failure modes.",
    categories: [
      {
        name: "Frontend",
        items: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "TanStack Query",
          "Zustand",
          "MSAL Browser",
        ],
      },
      {
        name: "Backend",
        items: [
          "Python",
          "FastAPI",
          "Pydantic",
          "SQLAlchemy",
          "Alembic",
          "Clean Architecture",
          "OpenAPI",
          "Django",
        ],
      },
      {
        name: "Cloud & Platform",
        items: [
          "Azure",
          "App Services",
          "Storage",
          "Key Vault",
          "Entra ID",
          "Service Bus",
          "Event Grid",
          "Functions",
          "App Insights",
          "Terraform",
          "Docker",
          "Kubernetes",
          "Datadog",
        ],
      },
      {
        name: "Data & AI",
        items: [
          "Databricks",
          "Unity Catalog",
          "Spark",
          "Kafka",
          "Airflow",
          "Azure AI Search",
          "Azure ML",
          "AI Foundry",
          "RAG",
        ],
      },
      {
        name: "How I work",
        items: [
          "First principles",
          "AI-assisted development",
          "Systems thinking",
          "Clean architecture",
          "Observability",
          "Automation",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Connect",
    title: "Always happy to talk about interesting builds.",
    memorableLine:
      "A messy idea, a half-formed tool, a problem you keep circling — those are my kind of conversations.",
    description:
      "If you are working on something you care about and want to compare notes, swap ideas, or just geek out about how something should work, say hi on LinkedIn.",
  },

  footer: {
    tagline: "Sense-making, then building.",
  },
} as const;

export type Portfolio = typeof portfolio;
