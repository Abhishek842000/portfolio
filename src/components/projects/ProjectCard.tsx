"use client";

import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

const cardVariants = {
  rest: { backgroundColor: "#ffffff" },
  hover: { backgroundColor: "#F5F0DE" },
};

const labelVariants = {
  rest: { opacity: 0, y: 8 },
  hover: { opacity: 1, y: 0 },
};

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.li
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <motion.button
        type="button"
        onClick={onOpen}
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        variants={cardVariants}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-full min-h-[300px] w-full flex-col items-center justify-center rounded-2xl border border-line px-8 py-16 text-center shadow-[0_8px_30px_rgba(17,17,20,0.05)]"
      >
        <h3 className="max-w-[12ch] font-display text-3xl leading-tight font-bold text-balance">
          {project.title}
        </h3>
        <span
          aria-hidden="true"
          className="mt-6 mb-6 block h-px w-16 bg-line"
        />
        <p className="max-w-sm font-mono text-xs leading-relaxed text-muted">
          {project.tags.join(", ")}
        </p>
        <motion.span
          variants={labelVariants}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-8 left-0 right-0 text-xs font-semibold tracking-[0.2em] text-ink uppercase underline decoration-ink/40 underline-offset-4"
        >
          View project
        </motion.span>
      </motion.button>
    </motion.li>
  );
}
