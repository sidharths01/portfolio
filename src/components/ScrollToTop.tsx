import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" })
          }
          className="tab-focus fixed right-4 bottom-4 z-40 flex h-10 w-10 items-center justify-center rounded-sm border border-grid bg-surface-raised font-mono text-xs text-accent transition-colors hover:border-accent/50 sm:right-6 sm:bottom-6"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="text-base" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}