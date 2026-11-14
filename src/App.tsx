import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-grid px-5 py-8 text-center font-mono text-xs font-medium text-ink-muted sm:py-10">
        <p>&copy; {new Date().getFullYear()} Sidharth S</p>
        <p className="mt-2">
          <a href="#education" className="tab-focus text-ink-muted hover:text-accent">
            Credentials
          </a>
        </p>
      </footer>

      <ScrollToTop />
    </>
  );
}