import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { personalInfo, socialLinks, contactDetails } from "../data/portfolioData";

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      index="06 — Contact"
      title="Get in touch"
      subtitle="Open to frontend roles and collaboration on React products"
      align="center"
    >
      <p className="mx-auto max-w-prose text-center text-sm text-ink-muted sm:text-base">
        Fastest path: email. Based in {personalInfo.location.split(",")[0]} — frontend, accessibility,
        education tech.
      </p>

      <div className="mt-10 flex justify-center">
        <Button href={`mailto:${personalInfo.email}`}>Email me</Button>
      </div>

      <dl className="mx-auto mt-12 w-full max-w-sm border-t border-grid pt-8 lg:max-w-3xl lg:grid lg:grid-cols-3 lg:gap-x-12">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;
          return (
            <div
              key={detail.label}
              className="grid gap-2 border-b border-grid py-6 last:border-b-0 lg:min-w-0 lg:border-b-0 lg:py-0 lg:pr-4 last:lg:pr-0"
            >
              <dt className="type-meta flex items-center gap-2">
                <Icon aria-hidden className="size-3.5 shrink-0 text-accent" />
                {detail.label}
              </dt>
              <dd className="text-sm leading-relaxed text-ink sm:text-base">
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="tab-focus break-words text-ink-muted transition-colors hover:text-accent"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="break-words text-ink-muted">{detail.value}</span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>

      <ul className="mt-10 flex justify-center gap-6 font-mono text-xs">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tab-focus text-xs font-medium text-ink-muted transition-colors hover:text-accent"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}