"use client";

import { BrandMark } from "@/components/ui/BrandMark";
import { motion } from "framer-motion";
import type { Skill } from "@/content/skills";

export function SkillIconCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.li
      className="text-center"
      initial={{ opacity: 1, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
    >
      <BrandMark
        src={skill.logo}
        alt=""
        color={skill.brandColor}
        size="skill"
        dark={skill.dark}
        inset={skill.inset ?? "padded"}
      />
      <span className="mt-3 block text-xs font-medium text-muted">{skill.name}</span>
    </motion.li>
  );
}
