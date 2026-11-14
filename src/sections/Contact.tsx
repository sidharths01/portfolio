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
        <Button href={`mailto:${personalInfo.email}`}>Email {personalInfo.email}</Button>
      </div>

      <dl className="mx-auto mt-12 grid max-w-lg gap-4 border border-grid p-6 text-center sm:grid-cols-3 sm:text-left">
        {contactDetails.map((detail) => (
          <div key={detail.label}>
            <dt className="type-meta">
              {detail.label}
            </dt>
            <dd className="mt-1 text-sm">
              {detail.href ? (
                <a href={detail.href} className="tab-focus text-ink-muted transition-colors hover:text-accent">
                  {detail.value}
                </a>
              ) : (
                <span className="text-ink-muted">{detail.value}</span>
              )}
            </dd>
          </div>
        ))}
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