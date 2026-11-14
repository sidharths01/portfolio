import SectionWrapper from "../components/SectionWrapper";
import Card from "../components/Card";
import ClaudeCertBadge from "../components/ClaudeCertBadge";
import { education, certifications, awards } from "../data/portfolioData";

export default function Education() {
  const badgeCert = certifications.find((c) => c.badge);
  const primaryCerts = certifications.filter((c) => c.relevance !== "secondary" && !c.badge);
  const otherCerts = certifications.filter((c) => c.relevance === "secondary");

  return (
    <SectionWrapper
      id="education"
      index="05 — Credentials"
      title="Education & certifications"
      subtitle="Formal training and verified credentials"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="type-meta">Degree</h3>
          {education.map((edu) => (
            <Card key={edu.institution} className="mt-4">
              <h4 className="text-base font-semibold tracking-swiss text-ink">{edu.degree}</h4>
              {edu.institutionUrl ? (
                <a
                  href={edu.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tab-focus mt-2 inline-block text-sm text-accent underline decoration-accent/35 underline-offset-2 hover:decoration-accent"
                >
                  {edu.institution}
                </a>
              ) : (
                <p className="mt-2 text-sm text-ink-muted">{edu.institution}</p>
              )}
              <p className="mt-2 font-mono text-xs text-ink-faint">{edu.period}</p>
            </Card>
          ))}

          {awards.length > 0 && (
            <>
              <h3 className="mt-10 type-meta">
                Recognition
              </h3>
              <ul className="mt-4 space-y-3">
                {awards.map((award) => (
                  <li
                    key={award}
                    className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink-muted"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div>
          {badgeCert && (
            <div className="mb-8">
              <h3 className="type-meta">
                Featured credential
              </h3>
              <div className="mt-4">
                <ClaudeCertBadge
                  title={badgeCert.name}
                  issuer={badgeCert.issuer}
                  credentialUrl={badgeCert.credentialUrl}
                />
              </div>
            </div>
          )}

          <h3 className="type-meta">
            Frontend &amp; development
          </h3>
          <ul className="mt-4 space-y-2 border-l border-grid pl-4">
            {primaryCerts.map((cert) => (
              <li key={cert.name} className="text-sm text-ink">
                <span className="font-mono text-accent">+</span> {cert.name}
              </li>
            ))}
          </ul>

          {otherCerts.length > 0 && (
            <>
              <h3 className="mt-10 type-meta">
                Additional
              </h3>
              <ul className="mt-4 space-y-2 border-l border-grid pl-4">
                {otherCerts.map((cert) => (
                  <li key={cert.name} className="text-sm text-ink-muted">
                    <span className="font-mono text-ink-faint">+</span> {cert.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}