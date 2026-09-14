"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site-config";

function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5 9.5 17 19 7" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function displayEmail(email: string) {
  return email.replaceAll(".", " . ").toUpperCase();
}

export function EmailCopyField() {
  const [copied, setCopied] = useState(false);
  const email = siteConfig.email ?? "";
  if (!email) return null;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={copyEmail}
        className="rounded-full bg-ink px-6 py-2.5 text-xs font-semibold tracking-[0.16em] text-white uppercase"
      >
        {copied ? "Copied" : "Copy to clipboard"}
      </button>
      <div className="flex max-w-full items-center gap-2 rounded-full border border-line bg-card px-3 py-2.5 shadow-[0_8px_24px_rgba(17,17,20,0.05)] sm:gap-3 sm:px-5">
        <p className="font-mono text-[11px] tracking-wide text-ink uppercase whitespace-nowrap sm:text-sm sm:tracking-[0.08em]">
          {displayEmail(email)}
        </p>
        <button
          type="button"
          onClick={copyEmail}
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
          aria-label={copied ? "Email copied" : "Copy email"}
        >
          <CopyIcon copied={copied} />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? "Email copied to clipboard" : ""}
      </p>
    </div>
  );
}
