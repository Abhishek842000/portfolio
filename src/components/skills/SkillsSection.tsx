import { SkillCategoryColumn } from "@/components/skills/SkillCategoryColumn";
import { skillCategories } from "@/content/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-8 px-5 py-20">
      <h2 className="text-center font-display text-5xl font-bold tracking-[0.12em] uppercase">
        Technical Skills
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCategoryColumn key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
