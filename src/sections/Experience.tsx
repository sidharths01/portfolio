import SectionWrapper from "../components/SectionWrapper";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      index="04 — Experience"
      title="Professional experience"
      subtitle="Where I've been shipping frontend work"
    >
      <div className="max-w-3xl">
        {experience.map((exp) => (
          <article key={exp.company} className="border-l-2 border-accent/50 pl-6 sm:pl-8">
            <header>
              <p className="font-mono text-xs text-accent">{exp.period}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-swiss text-ink">
                {exp.role}
                <span className="font-normal text-ink-muted"> — {exp.company}</span>
              </h3>
              <p className="mt-1 font-mono text-xs font-medium text-ink-muted">{exp.location}</p>
              {exp.intro && (
                <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{exp.intro}</p>
              )}
            </header>

            <div className="mt-10 space-y-8">
              {exp.groups.map((group) => (
                <div key={group.title}>
                  <h4 className="type-meta">
                    {group.title}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-2 h-px w-3 shrink-0 bg-grid" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}