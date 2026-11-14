import SectionWrapper from "../components/SectionWrapper";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      index="02 — Skills"
      title="Technical range"
      subtitle="Technologies I use in production frontend work"
      className="bg-surface-raised/50"
    >
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="type-meta text-center">
              {group.category}
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-2 sm:gap-2.5">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex flex-col items-center gap-2 border border-grid bg-surface px-2 py-3 transition-colors hover:border-accent/40 sm:py-4"
                >
                  <skill.icon className="text-xl text-accent sm:text-2xl" aria-hidden />
                  <span className="text-center text-xs font-medium leading-tight text-ink-muted">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}