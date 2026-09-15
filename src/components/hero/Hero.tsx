"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/hero/Avatar";
import { useResumeUi } from "@/components/layout/ResumeUi";
import { siteConfig } from "@/content/site-config";

export function Hero() {
  const { openResume } = useResumeUi();

  return (
    <section
      id="top"
      className="flex min-h-[100svh] flex-col items-center justify-center px-5 py-24 text-center"
    >
      <Avatar />
      <h1 className="mt-9 px-2 font-display text-[clamp(1.4rem,6vw,4.5rem)] font-bold leading-none tracking-[0.1em] text-ink uppercase whitespace-nowrap sm:mt-12 sm:tracking-[0.14em]">
        {siteConfig.fullName}
      </h1>
      <span
        aria-hidden="true"
        className="mt-6 block h-1 w-16 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink sm:mt-8 sm:w-20"
      />
      <p className="mt-5 max-w-[22rem] font-display text-[0.78rem] tracking-[0.2em] text-ink uppercase sm:mt-6 sm:max-w-none sm:text-base sm:tracking-[0.34em]">
        {siteConfig.roles.join("  |  ")}
      </p>
      <motion.button
        type="button"
        onClick={openResume}
        whileTap={{ scale: 0.98 }}
        aria-label="My resume →"
        className="resume-pill mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white uppercase shadow-[0_14px_32px_rgba(17,17,20,0.22)] sm:mt-10 sm:gap-3.5 sm:px-11 sm:py-5 sm:text-base sm:tracking-[0.22em]"
      >
        <span className="relative z-10 inline-flex items-center gap-3 sm:gap-3.5">
          <ResumeGlyph />
          My resume
          <span className="resume-pill-arrow" aria-hidden="true">
            →
          </span>
        </span>
      </motion.button>
    </section>
  );
}

function ResumeGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
    >
      <path
        d="M7 3.75h6.2L18.25 9v11.25H7A1.25 1.25 0 0 1 5.75 19V5A1.25 1.25 0 0 1 7 3.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M13.1 3.85V8.4h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 13h6.8M8.6 16.4h4.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
