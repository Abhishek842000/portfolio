"use client";

import { useEffect, useRef, useState } from "react";

type DemoVideoProps = {
  slug: string;
  title: string;
  poster?: string;
};

export function DemoVideo({ slug, title, poster }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          node.pause();
        }
      },
      { rootMargin: "80px 0px", threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !inView) return;
    node.load();
    void node.play().catch(() => {
      /* Autoplay can still be blocked; muted + playsinline covers modern browsers. */
    });
  }, [inView]);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-ink/5">
      <video
        ref={videoRef}
        className="aspect-video w-full bg-ink/10"
        muted
        loop
        playsInline
        controls={false}
        preload="none"
        poster={poster}
        aria-label={`${title} demo video`}
      >
        {inView ? (
          <>
            <source src={`/demos/${slug}.webm`} type="video/webm" />
            <source src={`/demos/${slug}.mp4`} type="video/mp4" />
          </>
        ) : null}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
