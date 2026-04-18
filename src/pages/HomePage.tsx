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
      <Hero />
      <section className="personas" aria-label="Wybierz perspektywę">
        <div className="container personas__inner">
          <div className="personas__grid" role="group" aria-label="Wybierz perspektywę">
            {personas.map((p) => {
              const isActive = activePersonaId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  className={
                    "persona-button" +
                    (isActive ? " persona-button--active" : "")
                  }
                  aria-pressed={isActive}
                  onClick={() => handleSelectPersona(p.id)}
                >
                  <span className="persona-button__label">{p.label}</span>
                  <span className="persona-button__description">
                    {p.description}
                  </span>
                </button>
              );
            })}
          </div>
          {activePersonaId !== null && (
            <p className="personas__hint" role="status">
              Pokazujemy wyspy dopasowane do twojej perspektywy. Kliknij wybraną
              personę ponownie, aby zobaczyć wszystkie.
            </p>
          )}
        </div>
      </section>
      <section id="wyspy" className="islands" aria-labelledby="islands-h">
        <div className="container">
          <div className="islands__header">
            <div className="islands__heading">
              <h2 id="islands-h" className="islands__title">
                Sześć wysp wiedzy
              </h2>
              <p className="islands__lede">
                Każda wyspa to jeden temat. Kliknij, żeby wejść głębiej.
              </p>
            </div>
            <div className="islands__search">
              <SearchBox
                value={query}
                onChange={setQuery}
                onClear={() => setQuery("")}
              />
            </div>
          </div>
          <div aria-live="polite" className="sr-only">
            {announcement}
          </div>
          {trimmedQuery !== "" && !showEmptyState && (
            <p className="search__count">
              Wyniki: {filtered.length} z {islands.length}
            </p>
          )}
          {showEmptyState ? (
            <div className="search-empty__inner" aria-labelledby="search-empty-h">
              <p className="search-empty__emoji" aria-hidden="true">
                🌿
              </p>
              <h3 id="search-empty-h" className="search-empty__title">
                Nie znaleźliśmy wysp pasujących do „{trimmedQuery}”.
              </h3>
              <p className="search-empty__lede">Spróbuj innego słowa.</p>
              <button
                type="button"
                className="search-empty__button"
                onClick={() => setQuery("")}
              >
                Wyczyść wyszukiwanie
              </button>
            </div>
          ) : (
            <IslandGrid
              islands={filtered}
              activePersonaIslandIds={activePersonaIslandIds}
              registerCardRef={registerCardRef}
            />
          )}
        </div>
      </section>
    </>
  );
}
