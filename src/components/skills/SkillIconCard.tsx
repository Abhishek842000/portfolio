"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Skill } from "@/content/skills";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SkillIconCard({ skill }: { skill: Skill }) {
  return (
    <motion.li className="text-center" variants={itemVariants}>
      <motion.div
        data-skill={skill.name}
        tabIndex={0}
        className="skill-icon-card mx-auto flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-2xl bg-white shadow-[0_8px_22px_rgba(17,17,20,0.06)] sm:h-[4.5rem] sm:w-[4.5rem]"
        style={{ ["--brand" as string]: skill.brandColor }}
        whileHover={{ borderColor: skill.brandColor }}
        whileFocus={{ borderColor: skill.brandColor }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={skill.logo}
          alt=""
          width={40}
          height={40}
          className="h-8 w-8 object-contain sm:h-10 sm:w-10"
        />
      </motion.div>
      <span className="mt-2.5 block text-xs font-medium text-muted">
        {skill.name}
      </span>
    </motion.li>
  );
}
