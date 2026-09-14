import type { Publication } from "@/content/publications";
import { siteConfig } from "@/content/site-config";

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M18 14v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function Authors({ names }: { names: string[] }) {
  const self = siteConfig.fullName.toLowerCase();

  return (
    <ul className="mt-1 space-y-1">
      {names.map((name) => (
        <li
          key={name}
          className={
            name.toLowerCase() === self
              ? "font-semibold text-ink"
              : "font-medium text-ink"
          }
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export function PublicationCard({ paper }: { paper: Publication }) {
  const title = (
    <h3 className="mt-4 font-display text-[1.65rem] leading-snug font-bold text-balance sm:text-[1.85rem]">
      {paper.externalUrl ? (
        <a
          href={paper.externalUrl}
          className="text-[#2563eb] underline-offset-4 transition-colors hover:text-[#1d4ed8] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {paper.title}
        </a>
      ) : (
        <span>{paper.title}</span>
      )}
    </h3>
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_10px_36px_rgba(17,17,20,0.07)]">
      <div className="publication-accent" aria-hidden="true" />
      <div className="grid gap-8 px-5 pt-6 pb-6 sm:gap-10 sm:px-10 sm:pt-9 sm:pb-9 md:grid-cols-[minmax(0,1.55fr)_minmax(11rem,0.7fr)] md:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#e8eefc] px-3 py-1 font-mono text-[0.65rem] tracking-[0.14em] text-[#3b5bdb] uppercase">
              {paper.type}
            </span>
            <span className="font-mono text-xs tracking-wider text-muted">
              {paper.year}
            </span>
          </div>
          {title}
          <p className="mt-4 text-[0.98rem] leading-relaxed font-semibold text-ink">
            {paper.lead}
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
            {paper.description}
          </p>
          {paper.externalUrl ? (
            <a
              href={paper.externalUrl}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.16em] text-white uppercase"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on {paper.publisher}
              <ExternalLinkIcon />
            </a>
          ) : null}
        </div>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
              Published in
            </dt>
            <dd className="mt-1.5 font-display text-[0.98rem] leading-relaxed font-medium italic">
              {paper.publishedIn}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
              Publisher
            </dt>
            <dd className="mt-1.5 font-semibold">{paper.publisher}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
              Authors
            </dt>
            <dd>
              <Authors names={paper.authors} />
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
