import SectionWrapper from "../components/SectionWrapper";
import Card from "../components/Card";
import { projects } from "../data/portfolioData";

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-sm border border-grid px-2 py-0.5 font-mono text-xs font-medium text-ink-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-ink-muted">
          <span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card as="article" className="border-accent/25 lg:p-8">
      <p className="font-mono text-[11px] text-accent">{project.context}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-swiss text-ink sm:text-2xl">
        {project.title}
      </h3>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h4 className="font-mono text-[10px] tracking-widest text-ink-faint uppercase">
              Problem
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-widest text-ink-faint uppercase">
              My contribution
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.contribution}</p>
          </div>
        </div>

        <div className="space-y-6">
          {project.challenges && (
            <div>
              <h4 className="font-mono text-[10px] tracking-widest text-ink-faint uppercase">
                Technical notes
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.challenges}</p>
            </div>
          )}
          <ProjectList items={project.highlights} />
        </div>
      </div>

      <ProjectTags tags={project.tags} />
    </Card>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper
      id="projects"
      index="03 — Work"
      title="Selected work"
      subtitle="Production projects at Hurix Digital and supporting tooling"
    >
      {featured && (
        <div className="mb-8 sm:mb-10">
          <FeaturedProject project={featured} />
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {others.map((project) => (
          <Card key={project.title} as="article" className="flex h-full flex-col">
            <p className="font-mono text-[11px] text-accent">{project.context}</p>
            <h3 className="mt-2 text-lg font-semibold tracking-swiss text-ink">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.contribution}</p>
            <ProjectList items={project.highlights.slice(0, 3)} />
            <ProjectTags tags={project.tags} />
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}