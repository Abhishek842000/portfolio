"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";

export function EmailCopyField() {
  const [copied, setCopied] = useState(false);
  const email = siteConfig.email;

  if (!email) return null;
  const address = email;

  async function copyEmail() {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <p className="rounded-full border border-line bg-card px-5 py-2.5 font-mono text-sm">
        {address}
      </p>
      <button
        type="button"
        onClick={copyEmail}
        className="rounded-full bg-ink px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase"
      >
        {copied ? "Copied" : "Copy to clipboard"}
      </button>
    </div>
  );
}
