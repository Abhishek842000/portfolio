"use client";

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
      <h1 className="mt-8 px-2 font-pixel text-[clamp(1.15rem,6.4vw,3.5rem)] leading-tight tracking-[0.06em] text-ink uppercase sm:mt-10 sm:px-3 sm:tracking-[0.08em] sm:whitespace-nowrap">
        {siteConfig.fullName}
      </h1>
      <p className="mt-5 max-w-[22rem] font-display text-[0.7rem] tracking-[0.18em] text-ink uppercase sm:mt-6 sm:max-w-none sm:text-sm sm:tracking-[0.32em]">
        {siteConfig.roles.join("  |  ")}
      </p>
      <button
        type="button"
        onClick={openResume}
        className="mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase"
      >
        My resume →
      </button>
    </section>
  );
}
