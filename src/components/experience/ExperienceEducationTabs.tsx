"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Timeline } from "@/components/experience/Timeline";
import { education } from "@/content/education";
import { experience } from "@/content/experience";

export function ExperienceEducationTabs() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" className="scroll-mt-8">
        <div className="relative grid grid-cols-2 overflow-hidden bg-zinc-100">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-ink"
          animate={{ x: tab === "experience" ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          aria-hidden="true"
        />
        <button
          type="button"
          onClick={() => setTab("experience")}
          className={`relative z-10 py-6 text-center font-display text-2xl font-bold tracking-[0.18em] uppercase ${
            tab === "experience" ? "text-white" : "text-zinc-400"
          }`}
        >
          Experience
        </button>
        <button
          type="button"
          onClick={() => setTab("education")}
          className={`relative z-10 py-6 text-center font-display text-2xl font-bold tracking-[0.18em] uppercase ${
            tab === "education" ? "text-white" : "text-zinc-400"
          }`}
        >
          Education
        </button>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-14">
        {tab === "experience" ? (
          <Timeline
            items={experience.map((item) => ({
              id: item.id,
              yearLabel: item.yearLabel,
              title: item.role,
              dates: item.dates,
              subtitle: `${item.company} · ${item.location}`,
              logo: item.logo,
              brandColor: item.brandColor,
              logoWide: item.logoWide,
              logoDark: item.logoDark,
              isPresent: item.isPresent,
            }))}
          />
        ) : (
          <Timeline
            items={education.map((item) => ({
              id: item.id,
              yearLabel: item.yearLabel,
              title: item.degree,
              dates: item.dates,
              subtitle: `${item.institution} · ${item.location}`,
              logo: item.logo,
              brandColor: item.brandColor,
              logoWide: item.logoWide,
            }))}
          />
        )}
      </div>
    </section>
  );
}
