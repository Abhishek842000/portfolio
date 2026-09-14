export interface Skill {
  name: string;
  logo: string;
  brandColor: string;
  inset?: "padded" | "flush";
  dark?: boolean;
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Data",
    items: [
      {
        name: "Python",
        logo: "/images/skills/python.svg",
        brandColor: "#3776AB",
      },
      {
        name: "TypeScript",
        logo: "/images/skills/typescript.svg",
        brandColor: "#3178C6",
        inset: "flush",
      },
      {
        name: "JavaScript",
        logo: "/images/skills/javascript.svg",
        brandColor: "#F7DF1E",
        inset: "flush",
      },
      {
        name: "SQL",
        logo: "/images/skills/sql.svg",
        brandColor: "#336791",
        inset: "flush",
      },
      {
        name: "Postgres",
        logo: "/images/skills/postgres.svg",
        brandColor: "#4169E1",
      },
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      {
        name: "LangGraph",
        logo: "/images/skills/langgraph.png",
        brandColor: "#1C3C3C",
        inset: "flush",
      },
      {
        name: "pgvector",
        logo: "/images/skills/pgvector-mark.svg",
        brandColor: "#336791",
        inset: "flush",
      },
      {
        name: "OpenAI",
        logo: "/images/skills/openai.svg",
        brandColor: "#10A37F",
      },
      {
        name: "Anthropic",
        logo: "/images/skills/anthropic.svg",
        brandColor: "#D4A27F",
      },
    ],
  },
  {
    title: "Backend & DevOps",
    items: [
      {
        name: "Solid.js",
        logo: "/images/skills/solidjs.svg",
        brandColor: "#2C4F7C",
      },
      {
        name: "Fastify",
        logo: "/images/skills/fastify.svg",
        brandColor: "#000000",
      },
      {
        name: "Node.js",
        logo: "/images/skills/nodejs.svg",
        brandColor: "#339933",
      },
      {
        name: "AWS",
        logo: "/images/skills/aws.svg",
        brandColor: "#FF9900",
      },
      {
        name: "Kubernetes",
        logo: "/images/skills/kubernetes.svg",
        brandColor: "#326CE5",
      },
      {
        name: "Docker",
        logo: "/images/skills/docker.svg",
        brandColor: "#2496ED",
      },
      {
        name: "GitHub Actions",
        logo: "/images/skills/githubactions.svg",
        brandColor: "#2088FF",
      },
      {
        name: "Datadog",
        logo: "/images/skills/datadog.svg",
        brandColor: "#632CA6",
      },
      {
        name: "Playwright",
        logo: "/images/skills/playwright.svg",
        brandColor: "#2EAD33",
      },
    ],
  },
];
