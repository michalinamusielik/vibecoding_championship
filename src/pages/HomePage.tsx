import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { islands } from "../data/islands";
import { personas, type PersonaId } from "../data/personas";
import { Hero } from "../components/Hero";
import { IslandGrid } from "../components/IslandGrid";

interface HomeLocationState {
  fromIslandId?: string;
}

export function HomePage() {
  const [activePersonaId, setActivePersonaId] = useState<PersonaId | null>(
    null,
  );

  const cardRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const location = useLocation();

  const registerCardRef = useCallback(
    (id: string, el: HTMLAnchorElement | null) => {
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

  useEffect(() => {
    const state = location.state as HomeLocationState | null;
    const fromIslandId = state?.fromIslandId;
    if (!fromIslandId) return;
    const el = cardRefs.current.get(fromIslandId);
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "center",
    });
    window.setTimeout(() => el.focus(), 0);
  }, [location.state]);

  const activePersonaIslandIds =
    activePersonaId === null
      ? null
      : (personas.find((p) => p.id === activePersonaId)?.islandIds ?? []);

  return (
    <>
      <Hero
        personas={personas}
        activePersonaId={activePersonaId}
        onSelectPersona={handleSelectPersona}
      />
      <IslandGrid
        islands={islands}
        activePersonaIslandIds={activePersonaIslandIds}
        registerCardRef={registerCardRef}
      />
    </>
  );
}
