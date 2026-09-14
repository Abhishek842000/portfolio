"use client";

import { motion } from "framer-motion";

type BrandMarkSize = "skill" | "org" | "orgWide" | "social";

const sizeClass: Record<BrandMarkSize, string> = {
  skill: "h-[4.75rem] w-[4.75rem] rounded-2xl",
  org: "h-16 w-16 rounded-2xl",
  orgWide: "h-16 w-44 rounded-2xl px-3",
  social: "h-16 w-16 rounded-[1.15rem]",
};

export function BrandMark({
  src,
  alt,
  color = "#111114",
  size = "skill",
  dark = false,
  inset = "padded",
  invert = false,
}: {
  src: string;
  alt: string;
  color?: string;
  size?: BrandMarkSize;
  dark?: boolean;
  inset?: "padded" | "flush";
  invert?: boolean;
}) {
  return (
    <motion.span
      className={`brand-mark relative inline-flex shrink-0 items-center justify-center overflow-hidden border shadow-[0_10px_24px_rgba(17,17,20,0.08)] select-none ${sizeClass[size]} ${
        dark ? "border-white/10 bg-[#161616]" : "border-line bg-white"
      }`}
      style={{ ["--brand" as string]: color }}
      whileHover={{
        y: -7,
        scale: 1.1,
        rotate: size === "orgWide" ? -2 : -6,
      }}
      whileTap={{ scale: 0.96, rotate: 0, y: -1 }}
      transition={{ type: "spring", stiffness: 420, damping: 16 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`${
          inset === "flush"
            ? "h-full w-full object-cover"
            : "h-[70%] w-[82%] object-contain"
        } ${invert ? "invert" : ""}`}
      />
    </motion.span>
  );
}
