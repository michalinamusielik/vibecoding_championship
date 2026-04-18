import { useCallback, useEffect, useRef, useState } from "react";
import { islands } from "./data/islands";
import { personas, type PersonaId } from "./data/personas";
import type { Island } from "./data/islands";
import { SkipLink } from "./components/SkipLink";
import { Hero } from "./components/Hero";
import { IslandGrid } from "./components/IslandGrid";
import { IslandModal } from "./components/IslandModal";
import { LargeTextToggle } from "./components/LargeTextToggle";
import { Footer } from "./components/Footer";

function App() {
  const [activePersonaId, setActivePersonaId] = useState<PersonaId | null>(
    null,
  );
  const [openIsland, setOpenIsland] = useState<Island | null>(null);

  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const registerCardRef = useCallback(
    (id: string, el: HTMLButtonElement | null) => {
      const map = cardRefs.current;
      if (el) map.set(id, el);
      else map.delete(id);
    },
    [],
  );

  const handleSelectPersona = useCallback((id: PersonaId) => {
    setActivePersonaId((current) => (current === id ? null : id));
    window.setTimeout(() => {
      const target = document.getElementById("wyspy");
      if (!target) return;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    }, 0);
  }, []);

  const handleOpenIsland = useCallback((island: Island) => {
    lastTriggerRef.current = cardRefs.current.get(island.id) ?? null;
    setOpenIsland(island);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenIsland(null);
  }, []);

  useEffect(() => {
    if (openIsland === null && lastTriggerRef.current) {
      const el = lastTriggerRef.current;
      window.setTimeout(() => el.focus(), 0);
      lastTriggerRef.current = null;
    }
  }, [openIsland]);

  const activePersonaIslandIds =
    activePersonaId === null
      ? null
      : (personas.find((p) => p.id === activePersonaId)?.islandIds ?? []);

  return (
    <>
      <SkipLink />
      <header className="site-header">
        <div className="container site-header__inner">
          <span className="site-header__brand">Archipelag starości</span>
          <LargeTextToggle />
        </div>
      </header>
      <main id="main">
        <Hero
          personas={personas}
          activePersonaId={activePersonaId}
          onSelectPersona={handleSelectPersona}
        />
        <IslandGrid
          islands={islands}
          activePersonaIslandIds={activePersonaIslandIds}
          onOpenIsland={handleOpenIsland}
          registerCardRef={registerCardRef}
        />
      </main>
      <Footer />
      {openIsland !== null && (
        <IslandModal island={openIsland} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
