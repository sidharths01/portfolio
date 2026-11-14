import type { ReactNode } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  download?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-surface border border-accent hover:bg-accent-dim hover:border-accent-dim font-semibold tab-focus-inverted",
  outline:
    "border border-grid text-ink hover:border-accent/60 hover:text-accent tab-focus",
  ghost: "text-ink-muted hover:text-accent border border-transparent tab-focus",
};

export default function Button({
  children,
  variant = "primary",
  href,
  download,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium transition-colors duration-200";
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
      href,
      download,
      className: classes,
      target: href.startsWith("http") ? "_blank" : undefined,
      rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
    };
    return <a {...anchorProps}>{children}</a>;
  }

  const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: "button",
    className: classes,
  };
  return <button {...buttonProps}>{children}</button>;
}