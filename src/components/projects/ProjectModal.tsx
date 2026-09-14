"use client";

import { AnimatePresence, motion } from "framer-motion";
import { DemoVideo } from "@/components/projects/DemoVideo";
import type { Project } from "@/content/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close project"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 flex max-h-[min(90vh,840px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-5 sm:px-8 sm:py-6">
              <div>
                <h2
                  id="project-modal-title"
                  className="font-display text-2xl font-bold sm:text-3xl"
                >
                  {project.title}
                </h2>
                <p className="mt-2 font-mono text-sm text-muted">
                  {project.tags.join(", ")}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-2xl leading-none text-muted"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
              <p className="leading-relaxed">{project.summary}</p>
              {project.demoVideoSlug ? (
                <div className="mt-6">
                  <DemoVideo
                    slug={project.demoVideoSlug}
                    title={project.title}
                    poster={project.posterImage}
                  />
                </div>
              ) : null}
              {project.sections.map((section) => (
                <section key={section.heading} className="mt-8">
                  <h3 className="font-display text-xl font-bold">
                    {section.heading}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
              {project.githubUrl || project.tryItUrl ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9] px-4 py-2 text-sm font-medium text-white"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/social/github.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 invert"
                      />
                      View on GitHub
                    </a>
                  ) : null}
                  {project.tryItUrl ? (
                    <a
                      href={project.tryItUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-sm font-medium text-ink"
                    >
                      <TryItIcon />
                      Try it out
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function TryItIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
