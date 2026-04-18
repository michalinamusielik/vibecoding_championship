import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { islands } from "../data/islands";
import { personas, type PersonaId } from "../data/personas";
import { Hero } from "../components/Hero";
import { IslandGrid } from "../components/IslandGrid";
import { SearchBox } from "../components/SearchBox";
import { searchIslands } from "../lib/searchIslands";

interface HomeLocationState {
  fromIslandId?: string;
}

export function HomePage() {
  const [activePersonaId, setActivePersonaId] = useState<PersonaId | null>(
    null,
  );
  const [query, setQuery] = useState("");
  const [announcement, setAnnouncement] = useState("");

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

  const activePersonaIslandIds = useMemo<string[] | null>(
    () =>
      activePersonaId === null
        ? null
        : (personas.find((p) => p.id === activePersonaId)?.islandIds ?? []),
    [activePersonaId],
  );

  const filteredByPersona = useMemo(
    () =>
      activePersonaIslandIds === null
        ? islands
        : islands.filter((island) =>
            activePersonaIslandIds.includes(island.id),
          ),
    [activePersonaIslandIds],
  );

  const filtered = useMemo(
    () => searchIslands(filteredByPersona, query),
    [filteredByPersona, query],
  );

  useEffect(() => {
    const handle = window.setTimeout(() => {
      setAnnouncement(
        `Znaleziono ${filtered.length} z ${islands.length} wysp`,
      );
    }, 200);
    return () => window.clearTimeout(handle);
  }, [filtered.length]);

  const trimmedQuery = query.trim();
  const showEmptyState = filtered.length === 0 && trimmedQuery !== "";

  return (
    <>
      <Hero
        personas={personas}
        activePersonaId={activePersonaId}
        onSelectPersona={handleSelectPersona}
      />
      <section className="search" aria-label="Wyszukiwarka wysp">
        <div className="container">
          <SearchBox
            value={query}
            onChange={setQuery}
            onClear={() => setQuery("")}
          />
          <div aria-live="polite" className="sr-only">
            {announcement}
          </div>
          {trimmedQuery !== "" && !showEmptyState && (
            <p className="search__count">
              Wyniki: {filtered.length} z {islands.length}
            </p>
          )}
        </div>
      </section>
      {showEmptyState ? (
        <section className="search-empty" aria-labelledby="search-empty-h">
          <div className="container search-empty__inner">
            <p className="search-empty__emoji" aria-hidden="true">
              🌿
            </p>
            <h2 id="search-empty-h" className="search-empty__title">
              Nie znaleźliśmy wysp pasujących do „{trimmedQuery}”.
            </h2>
            <p className="search-empty__lede">Spróbuj innego słowa.</p>
            <button
              type="button"
              className="search-empty__button"
              onClick={() => setQuery("")}
            >
              Wyczyść wyszukiwanie
            </button>
          </div>
        </section>
      ) : (
        <IslandGrid
          islands={filtered}
          activePersonaIslandIds={activePersonaIslandIds}
          registerCardRef={registerCardRef}
        />
      )}
    </>
  );
}
