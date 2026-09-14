import Image from "next/image";
import { siteConfig } from "@/content/site-config";

export function Avatar() {
  return (
    <div className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44">
      <div
        aria-hidden="true"
        className="absolute inset-0 -m-1 rounded-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-pink blur-[2px]"
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white">
        <Image
          src={siteConfig.photo}
          alt={`Portrait of ${siteConfig.fullName}`}
          fill
          sizes="176px"
          preload
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
