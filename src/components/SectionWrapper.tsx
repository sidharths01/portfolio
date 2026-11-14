import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface SectionWrapperProps {
  id: string;
  index?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionWrapper({
  id,
  index,
  title,
  subtitle,
  children,
  className = "",
  align = "left",
}: SectionWrapperProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id={id}
      className={`border-t border-grid py-16 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <motion.div
        className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={reducedMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {title && (
          <header
            className={`mb-10 sm:mb-12 ${align === "center" ? "text-center" : "text-left"}`}
          >
            {index && (
              <p className="type-meta text-accent">
                {index}
              </p>
            )}
            <h2
              id={`${id}-heading`}
              className="mt-2 text-2xl font-semibold tracking-swiss text-ink sm:text-3xl"
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`mt-3 max-w-prose text-sm text-ink-muted sm:text-base ${align === "center" ? "mx-auto" : ""}`}
              >
                {subtitle}
              </p>
            )}
            <div
              className={`mt-5 h-px w-full max-w-[12rem] bg-grid ${align === "center" ? "mx-auto" : ""}`}
              aria-hidden
            />
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}