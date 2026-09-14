import { siteConfig } from "@/content/site-config";

export function Avatar() {
  return (
    <div className="relative mx-auto h-44 w-44">
      <div
        aria-hidden="true"
        className="absolute inset-0 -m-1 rounded-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-pink blur-[2px]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteConfig.photo}
        alt={`Portrait of ${siteConfig.fullName}`}
        width={176}
        height={176}
        className="relative h-44 w-44 rounded-full border-4 border-white object-cover object-center"
      />
    </div>
  );
}
