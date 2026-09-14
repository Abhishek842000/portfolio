import { EmailCopyField } from "@/components/contact/EmailCopyField";
import { BrandMark } from "@/components/ui/BrandMark";
import { siteConfig } from "@/content/site-config";

export function ConnectSection() {
  return (
    <section id="connect" className="scroll-mt-8 px-5 py-24">
      <h2 className="text-center font-display text-5xl font-bold tracking-[0.12em] uppercase">
        Let&apos;s Connect
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-muted">
        {`I'm a software engineer at WWC / AiBi in ${siteConfig.location}. Open to conversations about production AI systems, eval, and applied ML.`}
      </p>
      <EmailCopyField />
      <ul className="mt-8 flex justify-center gap-5">
        {siteConfig.linkedinUrl ? (
          <li>
            <a
              href={siteConfig.linkedinUrl}
              className="inline-flex rounded-[1.15rem] focus-visible:outline-2"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BrandMark
                src="/images/social/linkedin.svg"
                alt=""
                color="#0A66C2"
                size="social"
                inset="flush"
              />
            </a>
          </li>
        ) : null}
        <li>
          <a
            href={siteConfig.githubUrl}
            className="inline-flex rounded-[1.15rem] focus-visible:outline-2"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <BrandMark
              src="/images/social/github.svg"
              alt=""
              color="#181717"
              size="social"
              dark
              invert
            />
          </a>
        </li>
      </ul>
      <p className="mt-16 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.fullName}
      </p>
    </section>
  );
}
