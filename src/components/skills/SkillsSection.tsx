import { SkillCategoryColumn } from "@/components/skills/SkillCategoryColumn";
import { skillCategories } from "@/content/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-8 px-5 py-20">
      <h2 className="px-2 text-center font-display text-4xl font-bold tracking-[0.08em] uppercase sm:text-5xl sm:tracking-[0.12em]">
        Technical Skills
      </h2>
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
        {skillCategories.map((category, columnIndex) => (
          <SkillCategoryColumn
            key={category.title}
            category={category}
            columnIndex={columnIndex}
          />
        ))}
      </div>
    </section>
  );
}
