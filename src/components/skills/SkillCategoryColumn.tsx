import { SkillIconCard } from "@/components/skills/SkillIconCard";
import type { SkillCategory } from "@/content/skills";

export function SkillCategoryColumn({ category }: { category: SkillCategory }) {
  return (
    <section className="rounded-2xl border border-line bg-card/70 p-8">
      <h3 className="text-center font-display text-sm font-bold tracking-[0.18em] text-ink uppercase">
        {category.title}
      </h3>
      <ul className="mt-8 grid grid-cols-3 gap-x-3 gap-y-6">
        {category.items.map((skill, index) => (
          <SkillIconCard key={skill.name} skill={skill} index={index} />
        ))}
      </ul>
    </section>
  );
}
