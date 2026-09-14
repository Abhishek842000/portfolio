"use client";

import { SkillIconCard } from "@/components/skills/SkillIconCard";
import type { SkillCategory } from "@/content/skills";
import { motion } from "framer-motion";

export function SkillCategoryColumn({
  category,
  columnIndex,
}: {
  category: SkillCategory;
  columnIndex: number;
}) {
  return (
    <motion.section
      className="px-2 py-4 sm:px-4"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: 0.5,
        delay: columnIndex * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <h3 className="text-center font-display text-[0.8rem] font-bold tracking-[0.2em] text-ink uppercase underline decoration-ink/30 decoration-1 underline-offset-[12px]">
        {category.title}
      </h3>
      <motion.ul
        className="mt-10 grid grid-cols-3 gap-x-3 gap-y-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.055,
              delayChildren: columnIndex * 0.14 + 0.12,
            },
          },
        }}
      >
        {category.items.map((skill) => (
          <SkillIconCard key={skill.name} skill={skill} />
        ))}
      </motion.ul>
    </motion.section>
  );
}
