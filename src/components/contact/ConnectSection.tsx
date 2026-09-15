import type { ReactNode } from "react";
import { EmailCopyField } from "@/components/contact/EmailCopyField";
import { siteConfig } from "@/content/site-config";

function EnvelopeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full shadow-[0_10px_24px_rgba(17,17,20,0.12)] transition-transform duration-200 hover:scale-110 ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function ConnectSection() {
  return (
    <section id="connect" className="scroll-mt-8 px-5 pt-24 pb-32">
      <h2 className="px-2 text-center font-display text-4xl font-bold tracking-[0.08em] uppercase sm:text-5xl sm:tracking-[0.12em]">
        Let&apos;s Connect
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
        I&apos;m a software engineer shipping TypeScript and Python for APIs, UI,
        Kubernetes, and RAG that has to hold up in production. Reach out if you
        want to talk roles, systems, or what we could build.
      </p>
      <EmailCopyField />
      <ul className="mt-8 flex justify-center gap-5">
        {siteConfig.linkedinUrl ? (
          <li>
            <SocialLink
              href={siteConfig.linkedinUrl}
              label="LinkedIn"
              className="bg-[#0A66C2]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/social/linkedin.svg"
                alt=""
                className="h-full w-full object-cover"
              />
            </SocialLink>
          </li>
        ) : null}
        <li>
          <SocialLink
            href={siteConfig.githubUrl}
            label="GitHub"
            className="bg-[#6E40C9]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/social/github.svg"
              alt=""
              className="h-8 w-8 invert"
            />
          </SocialLink>
        </li>
        {siteConfig.email ? (
          <li>
            <SocialLink
              href={`mailto:${siteConfig.email}`}
              label="Email"
              className="bg-[#2563eb]"
            >
              <EnvelopeIcon />
            </SocialLink>
          </li>
        ) : null}
      </ul>
      <p className="mt-16 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.fullName}
      </p>
    </section>
  );
}
