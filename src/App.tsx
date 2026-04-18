import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { SkipLink } from "./components/SkipLink";
import { LargeTextToggle } from "./components/LargeTextToggle";
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
    const state = location.state as ScrollState | null;
    if (state?.fromIslandId) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.state]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SkipLink />
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand">
            Archipelag starości
          </Link>
          <LargeTextToggle />
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
