import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import Button from "../components/Button";
import { personalInfo, socialLinks } from "../data/portfolioData";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import profileImg from "../assets/profile.png";

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  const fade = reducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, ease: "easeOut" as const },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[min(100vh,880px)] items-center border-b border-grid"
    >
      <div className="pointer-events-none absolute inset-0 bg-swiss-grid" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-28 sm:px-6 sm:py-32 lg:px-8">
        <motion.div {...fade} className="grid items-center gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="order-2 lg:order-none lg:col-span-7">
            <p className="type-meta">
              {personalInfo.subtitle}
            </p>

            <h1 className="mt-4 max-w-2xl text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold leading-[1.15] tracking-swiss text-ink">
              {personalInfo.title} building interfaces for{" "}
              <span className="text-accent">education products</span>.
            </h1>

            <p className="mt-6 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              {personalInfo.heroTagline}
            </p>

            <p className="mt-4 font-mono text-base text-ink sm:text-lg">
              <span className="text-accent">→</span> {personalInfo.name}
            </p>

            <ul
              className="mt-8 flex list-none flex-wrap items-center gap-2 p-0"
              aria-label="Primary actions"
            >
              <li>
                <Button href="#projects" variant="outline">
                  View work
                </Button>
              </li>
              <li>
                <Button href="#contact">Contact</Button>
              </li>
              <li>
                <Button variant="ghost" href={personalInfo.resumeUrl} download>
                  Resume
                </Button>
              </li>
            </ul>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-grid pt-8">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tab-focus inline-flex items-center gap-2 font-mono text-xs font-medium text-ink-muted transition-colors hover:text-accent"
                    aria-label={link.name}
                  >
                    <span className="text-accent">/</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 flex justify-center lg:order-none lg:col-span-5 lg:justify-end">
            <div className="w-full max-w-[260px] sm:max-w-[280px]">
              <p className="type-meta mb-2 text-right">
                Fig. 01
              </p>
              <motion.div
                {...(reducedMotion
                  ? {}
                  : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.08 } })}
                className="border border-grid bg-surface-raised p-1"
              >
                <img
                  src={profileImg}
                  alt={`Portrait of ${personalInfo.name}`}
                  width={280}
                  height={280}
                  className="aspect-square w-full object-cover contrast-[1.02]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <a
          href="#about"
          className="tab-focus type-meta mt-14 inline-flex items-center gap-2 transition-colors hover:text-accent"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({
              behavior: reducedMotion ? "auto" : "smooth",
            });
          }}
        >
          <HiArrowDown aria-hidden className="text-accent" />
          Scroll
        </a>
      </div>
    </section>
  );
}