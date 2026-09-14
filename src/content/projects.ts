export interface ProjectSection {
  heading: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  headline: string;
  tags: string[];
  summary: string;
  sections: ProjectSection[];
  githubUrl?: string;
  tryItUrl?: string;
  demoVideoSlug?: string;
  posterImage?: string;
}

export const projects: Project[] = [
  {
    slug: "claimguard",
    title: "ClaimGuard",
    headline: "Multi-agent insurance claims triage and fraud detection",
    tags: [
      "LangGraph",
      "FastAPI",
      "Celery",
      "Postgres + pgvector",
      "Next.js",
      "Langfuse",
    ],
    summary:
      "Multi-agent insurance claims triage and fraud detection — built like a production service, not a notebook demo.",
    sections: [
      {
        heading: "Key Features",
        items: [
          "Fraud precision 0.33 → 1.0 on the v0 holdout (18 cases).",
          "Groundedness 0.0 → 1.0; hallucination 1.0 → 0.0.",
          "80+ unit tests; low-confidence claims fail closed into human review.",
        ],
      },
      {
        heading: "Architecture",
        items: [
          "Claim intake through a Next.js dashboard and FastAPI, queued in Redis/Celery.",
          "LangGraph worker scores severity, fraud risk, missing documents, and coverage against Postgres/pgvector.",
          "Traces in Langfuse; structured verdicts instead of a single prompt.",
        ],
      },
    ],
    githubUrl: "https://github.com/Abhishek842000/claimguard",
    demoVideoSlug: "claimguard",
    posterImage: "/images/claimguard-architecture.svg",
  },
  {
    slug: "waypoint",
    title: "Waypoint",
    headline: "Multi-tenant incident response and public status pages",
    tags: ["NestJS", "Prisma", "BullMQ", "Next.js", "Postgres", "Redis"],
    summary:
      "Multi-tenant incident response and public status pages — a PagerDuty + Statuspage hybrid.",
    sections: [
      {
        heading: "Key Features",
        items: [
          "Cross-tenant reads return 404, not 200.",
          "Viewer mutations return 403.",
          "Escalation is BullMQ, not setTimeout; Playwright covers the core loop.",
        ],
      },
      {
        heading: "Architecture & Performance",
        items: [
          "Next.js dashboard and public status page in front of a NestJS API with JWT/API-key auth and RBAC.",
          "Every query is tenant-scoped at the Prisma data-access layer.",
          "BullMQ delayed jobs on Redis page responders and auto-escalate if nobody acknowledges.",
        ],
      },
    ],
    githubUrl: "https://github.com/Abhishek842000/waypoint",
    demoVideoSlug: "waypoint",
    posterImage: "/images/waypoint-architecture.svg",
  },
  {
    slug: "nflexon",
    title: "Nflexon",
    headline: "Field app for QR-scanning, certifying, and tracing LAN installs",
    tags: ["Expo", "React Native", "Express", "Postgres", "TypeScript"],
    summary:
      "Field app for NFLEXON installers to QR-scan I/O and patch panels, record location, certify cabling, and trace LAN connections.",
    sections: [
      {
        heading: "Key Features",
        items: [
          "Three installer flows: begin installation, cabling certification testing, and trace LAN connections.",
          "QR scanning of I/O and patch-panel apparatus, with location forms and cabling instructions.",
          "End-to-end trace from an I/O MAC through patch-panel ports to the switch, plus a connectivity map.",
        ],
      },
      {
        heading: "Architecture",
        items: [
          "Expo Router frontend (React Native, NativeWind, expo-camera / barcode scanner) for the field UI.",
          "Express API over Postgres: I/O and patch-panel location/connectivity, auto-connect, switch links, and full trace.",
          "Schema covers io_location, pp_location, connectivity tables, and switch connections used by the trace view.",
        ],
      },
    ],
    githubUrl: "https://github.com/Abhishek842000/nflexon",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
