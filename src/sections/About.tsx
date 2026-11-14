import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/portfolioData";

const highlights = [
  { label: "Focus", value: "React, design systems, accessible UI" },
  { label: "Current", value: "Hurix Digital — Software Engineer" },
  { label: "Base", value: personalInfo.location },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      index="01 — About"
      title="Background"
      subtitle="Who I am and how I work"
      className="border-t-0"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-sm leading-relaxed text-ink sm:text-base">{personalInfo.summary}</p>
          <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
            {personalInfo.aboutDetail}
          </p>
          <p className="mt-6 font-mono text-xs">
            <a
              href="#skills"
              className="tab-focus text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              Skills
            </a>
            <span className="text-grid"> · </span>
            <a
              href="#education"
              className="tab-focus text-ink-muted underline decoration-grid underline-offset-4 hover:text-accent"
            >
              Credentials
            </a>
          </p>
        </div>

        <dl className="grid gap-5 border-t border-grid pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:border-grid lg:pl-10 lg:pt-0">
          {highlights.map((item) => (
            <div key={item.label} className="grid gap-1">
              <dt className="type-meta">
                {item.label}
              </dt>
              <dd className="text-sm text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  );
}