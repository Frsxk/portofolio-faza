import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router";
import { useSmoothScroll } from "~/hooks/useSmoothScroll";
import Preloader from "./Preloader";
import Cursor from "./Cursor";
import ScrollProgress from "./ScrollProgress";
import BackgroundBlobs from "./BackgroundBlobs";
import PageTransition from "./PageTransition";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useSmoothScroll();

  const onPreloaderDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* Preloader */}
      {!loaded && <Preloader onComplete={onPreloaderDone} />}

      {/* Decorative layers */}
      <Cursor />
      <ScrollProgress />
      <BackgroundBlobs />
      <PageTransition />
      <div className="noise" aria-hidden="true" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <Link to="/" className="font-display text-lg tracking-tight text-paper hover:text-primary transition-colors duration-300">
            faza<span className="text-primary">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav-link font-mono text-xs tracking-wider uppercase transition-colors duration-300 ${
                    location.pathname === to ? "text-primary active" : "text-muted hover:text-paper"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile: simple hamburger-free compact links */}
          <ul className="flex md:hidden items-center gap-5">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-mono text-[0.6rem] tracking-wider uppercase ${
                    location.pathname === to ? "text-primary" : "text-muted"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Page content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-line py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            &copy; {new Date().getFullYear()} Muhammad Faza Al-Banna
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Frsxk" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper transition-colors text-xs font-mono">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/faza-al-banna" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper transition-colors text-xs font-mono">
              LinkedIn
            </a>
            <a href="https://instagram.com/faza_0810" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-paper transition-colors text-xs font-mono">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
