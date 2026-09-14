import type { Publication } from "@/content/publications";

export function PublicationCard({ paper }: { paper: Publication }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_8px_30px_rgba(17,17,20,0.06)]">
      <div className="h-1.5 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink" />
      <div className="grid gap-8 p-8 sm:grid-cols-[1.4fr_0.8fr] sm:p-10">
        <div>
          <p className="font-mono text-xs tracking-wider text-muted uppercase">
            {paper.type} · {paper.year}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-blue-600">
            {paper.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{paper.description}</p>
          {paper.externalUrl ? (
            <a
              href={paper.externalUrl}
              className="mt-6 inline-flex rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase"
              target="_blank"
              rel="noreferrer"
            >
              Read on {paper.publisher} →
            </a>
          ) : null}
        </div>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-mono tracking-wider text-muted uppercase">
              Published in
            </dt>
            <dd className="mt-1 font-medium">{paper.publishedIn}</dd>
          </div>
          <div>
            <dt className="font-mono tracking-wider text-muted uppercase">
              Publisher
            </dt>
            <dd className="mt-1 font-medium">{paper.publisher}</dd>
          </div>
          <div>
            <dt className="font-mono tracking-wider text-muted uppercase">
              Authors
            </dt>
            <dd className="mt-1 font-medium">{paper.authors.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
