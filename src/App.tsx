import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { SkipLink } from "./components/SkipLink";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { IslandPage } from "./pages/IslandPage";
import { NotFoundPage } from "./pages/NotFoundPage";

interface ScrollState {
  fromIslandId?: string;
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) return;
    const state = location.state as ScrollState | null;
    if (state?.fromIslandId) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, location.state]);
  return null;
}

function HashScroll() {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.requestAnimationFrame(() => {
      el.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      window.setTimeout(() => {
        el.focus({ preventScroll: true });
      }, 0);
    });
  }, [location.pathname, location.hash]);
  return null;
}

const NAV_LINKS: Array<{ hash: string; label: string }> = [
  { hash: "#wiedza", label: "Starość w liczbach" },
  { hash: "#wyspy", label: "Wiedza" },
  { hash: "#gry", label: "Gry" },
  { hash: "#wolontariat", label: "Wolontariat" },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HashScroll />
      <SkipLink />
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand">
            Archipelag starości
          </Link>
          <nav className="site-nav" aria-label="Sekcje strony">
            <ul className="site-nav__list">
              {NAV_LINKS.map((item) => (
                <li key={item.hash}>
                  <Link
                    to={{ pathname: "/", hash: item.hash }}
                    className="site-nav__link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wyspa/:id" element={<IslandPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
