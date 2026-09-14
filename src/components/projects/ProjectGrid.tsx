"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { projects } from "@/content/projects";

export function ProjectGrid() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = projects.find((project) => project.slug === openSlug) ?? null;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenSlug(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="projects" className="scroll-mt-8 px-5 py-20">
      <h2 className="text-center font-display text-5xl font-bold tracking-[0.12em] uppercase">
        Projects
      </h2>
      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={() => setOpenSlug(project.slug)}
          />
        ))}
      </ul>
      <ProjectModal project={open} onClose={() => setOpenSlug(null)} />
    </section>
  );
}
