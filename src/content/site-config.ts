export interface SiteConfig {
  name: string;
  fullName: string;
  tagline: string;
  roles: string[];
  positioning: string;
  availability: string;
  location: string;
  photo: string;
  email?: string;
  phone?: string;
  githubUrl: string;
  linkedinUrl?: string;
  scholarUrl?: string;
  resumePath: string;
  siteUrl: string;
}

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3012";
  }
  return "https://abhishekdeshpande.dev";
}

export const siteConfig: SiteConfig = {
  name: "Abhishek",
  fullName: "Abhishek Deshpande",
  tagline: "Software engineer building production AI systems.",
  roles: ["Software Engineer", "AI Engineering"],
  positioning:
    "Software engineer at WWC / AiBi in Dallas. I ship TypeScript and Python services — APIs, UI, RAG on Postgres/pgvector, and Kubernetes — that are meant to be reviewed like a PR, not a notebook demo.",
  availability: "Open to AI engineering roles",
  location: "Dallas, TX",
  photo: "/images/avatar.jpg",
  email: "abhishekdeshpande222@gmail.com",
  phone: "945-233-4239",
  githubUrl: "https://github.com/Abhishek842000",
  linkedinUrl: "https://www.linkedin.com/in/sfc-abhi/",
  scholarUrl:
    "https://scholar.google.com/citations?view_op=list_works&hl=en&user=3Pmg6YgAAAAJ",
  resumePath: "/resume.pdf",
  siteUrl: getSiteUrl(),
};

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#publication", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#connect", label: "Contact" },
] as const;
