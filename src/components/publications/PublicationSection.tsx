import { PublicationCard } from "@/components/publications/PublicationCard";
import { publications } from "@/content/publications";
import { siteConfig } from "@/content/site-config";

export function PublicationSection() {
  return (
    <section id="publication" className="scroll-mt-8 px-5 py-20">
      <h2 className="text-center font-display text-5xl font-bold tracking-[0.12em] uppercase">
        Publication
      </h2>
      {siteConfig.scholarUrl ? (
        <p className="mt-4 text-center">
          <a
            href={siteConfig.scholarUrl}
            className="font-mono text-sm text-muted underline decoration-ink/25 underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar profile →
          </a>
        </p>
      ) : null}
      <div className="mx-auto mt-12 max-w-4xl">
        {publications.length === 0 ? (
          <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_8px_30px_rgba(17,17,20,0.06)]">
            <div className="h-1.5 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink" />
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
          <ul className="space-y-6">
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
