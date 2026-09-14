"use client";

import { Avatar } from "@/components/hero/Avatar";
import { useResumeUi } from "@/components/layout/ResumeUi";
import { siteConfig } from "@/content/site-config";

export function Hero() {
  const { openResume } = useResumeUi();

  return (
    <section
      id="top"
      className="flex min-h-screen flex-col items-center justify-center px-5 py-24 text-center"
    >
      <Avatar />
      <h1 className="mt-10 px-3 font-pixel text-[clamp(1.35rem,5vw,3.5rem)] tracking-[0.08em] text-ink uppercase whitespace-nowrap">
        {siteConfig.fullName}
      </h1>
      <p className="mt-6 font-display text-sm tracking-[0.32em] text-ink uppercase">
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
