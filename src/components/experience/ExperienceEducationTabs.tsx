"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Timeline } from "@/components/experience/Timeline";
import { education } from "@/content/education";
import { experience } from "@/content/experience";

type Tab = "experience" | "education";

function tabFromHash(hash: string): Tab | null {
  if (hash === "#education") return "education";
  if (hash === "#experience") return "experience";
  return null;
}

export function ExperienceEducationTabs() {
  const [tab, setTab] = useState<Tab>("experience");

  useEffect(() => {
    const applyHash = () => {
      const next = tabFromHash(window.location.hash);
      if (next) setTab(next);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  function selectTab(next: Tab) {
    setTab(next);
    const hash = next === "education" ? "#education" : "#experience";
    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", hash);
    }
  }

  return (
    <section id="experience" className="scroll-mt-8">
      <div
        id="education"
        className="relative grid scroll-mt-8 grid-cols-2 overflow-hidden bg-zinc-100"
      >
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-ink"
          animate={{ x: tab === "experience" ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          aria-hidden="true"
        />
        <button
          type="button"
          aria-pressed={tab === "experience"}
          onClick={() => selectTab("experience")}
          className={`relative z-10 px-2 py-4 text-center font-display text-lg font-bold tracking-[0.12em] uppercase sm:py-6 sm:text-2xl sm:tracking-[0.18em] ${
            tab === "experience" ? "text-white" : "text-zinc-600"
          }`}
        >
          Experience
        </button>
        <button
          type="button"
          aria-pressed={tab === "education"}
          onClick={() => selectTab("education")}
          className={`relative z-10 px-2 py-4 text-center font-display text-lg font-bold tracking-[0.12em] uppercase sm:py-6 sm:text-2xl sm:tracking-[0.18em] ${
            tab === "education" ? "text-white" : "text-zinc-600"
          }`}
        >
          Education
        </button>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
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
