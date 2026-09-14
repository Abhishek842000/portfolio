import { PublicationCard } from "@/components/publications/PublicationCard";
import { publications } from "@/content/publications";
import { siteConfig } from "@/content/site-config";

export function PublicationSection() {
  return (
    <section id="publication" className="scroll-mt-8 px-5 py-20">
      <h2 className="px-2 text-center font-display text-4xl font-bold tracking-[0.08em] uppercase sm:text-5xl sm:tracking-[0.12em]">
        Publication
      </h2>
      {siteConfig.scholarUrl ? (
        <p className="mt-4 text-center">
          <a
            href={siteConfig.scholarUrl}
            className="font-mono text-sm text-muted underline decoration-ink/25 underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar profile →
          </a>
        </p>
      ) : null}
      <div className="mx-auto mt-12 max-w-5xl">
        {publications.length === 0 ? (
          <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_10px_36px_rgba(17,17,20,0.07)]">
            <div className="publication-accent" aria-hidden="true" />
            <div className="p-8 sm:p-10">
              <p className="font-mono text-xs tracking-wider text-muted uppercase">
                Journal paper
              </p>
              <p className="mt-4 text-muted">
                Papers will appear here when they are added. Until then, the rest
                of the site is the best picture of my work.
              </p>
            </div>
          </div>
        ) : (
          <ul className="space-y-8">
            {publications.map((paper) => (
              <li key={`${paper.title}-${paper.year}`}>
                <PublicationCard paper={paper} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
