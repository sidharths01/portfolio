import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, personalInfo } from "../data/portfolioData";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  const isNavActive = (href: string) => activeSection === href;

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav
        aria-label="Primary"
        className={`transition-colors duration-300 ${
          scrolled || mobileOpen
            ? "border-b border-grid bg-surface/95"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="tab-focus font-mono text-sm font-medium tracking-tight text-ink"
          >
            <span className="text-accent">SS</span>
            <span className="text-ink-muted"> / </span>
            {personalInfo.name}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`tab-focus rounded-sm px-3 py-2 font-mono text-xs transition-colors ${
                    isNavActive(link.href)
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink"
                  }`}
                  aria-current={isNavActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumeUrl}
                download
                className="tab-focus ml-2 rounded-sm border border-grid px-3 py-2 font-mono text-xs text-ink-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="tab-focus rounded-sm p-2 text-ink-muted md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              ref={menuRef}
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0 }}
              className="border-b border-grid bg-surface md:hidden"
            >
              <ul className="flex flex-col gap-0.5 px-5 py-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.href);
                      }}
                      className={`tab-focus block rounded-sm px-3 py-2.5 font-mono text-xs ${
                        isNavActive(link.href)
                          ? "bg-accent-subtle text-accent"
                          : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="tab-focus block rounded-sm px-3 py-2.5 text-sm text-ink-muted hover:text-ink"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}