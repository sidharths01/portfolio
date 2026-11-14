interface ClaudeCertBadgeProps {
  title: string;
  issuer?: string;
  credentialUrl?: string;
}

export default function ClaudeCertBadge({ title, issuer = "Anthropic", credentialUrl }: ClaudeCertBadgeProps) {
  const subtitle = title.includes("—") ? title.split("—").pop()?.trim() : "Foundations";
  const headline = title.includes("—") ? title.split("—")[0].trim() : title;

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <p className="type-meta">{issuer}</p>
        <img
          src="/certifications/claude-certified-developer-foundations.png"
          alt=""
          width={48}
          height={48}
          className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          aria-hidden
        />
      </div>

      <p className="type-meta text-claude-label">Certified</p>
      <p className="mt-2 text-base font-semibold tracking-swiss text-ink sm:text-lg">{headline}</p>
      <p className="mt-1 font-mono text-xs text-ink-muted">{subtitle}</p>

      <div className="mt-5 flex items-center gap-2 border-t border-grid pt-4">
        <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
        <span className="font-mono text-[10px] text-ink-faint uppercase">Verified credential</span>
      </div>
    </>
  );

  const shellClass =
    "block rounded-sm border border-grid border-l-4 border-l-claude-border bg-surface-raised p-5 sm:p-6";

  if (credentialUrl) {
    return (
      <a
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`tab-focus ${shellClass}`}
        aria-label={`${title}, issued by ${issuer}. Opens credential link.`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={shellClass} role="group" aria-label={`${title}, issued by ${issuer}`}>
      {content}
    </div>
  );
}