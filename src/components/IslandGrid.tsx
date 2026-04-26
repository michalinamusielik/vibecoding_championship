import type { ReactNode } from "react";
import type { Island } from "../data/islands";
import { IslandCard } from "./IslandCard";

interface IslandGridProps {
  islands: Island[];
  activePersonaIslandIds: string[] | null;
  registerCardRef: (id: string, el: HTMLAnchorElement | null) => void;
  search?: ReactNode;
}

export function IslandGrid({
  islands,
  activePersonaIslandIds,
  registerCardRef,
  search,
}: IslandGridProps) {
  const filterActive = activePersonaIslandIds !== null;

  return (
    <section id="wyspy" className="islands" aria-labelledby="wyspy-heading">
      <div className="container">
        <div className="islands__header">
          <h2 id="wyspy-heading" className="islands__title">
            Wiedza
          </h2>
          {search ? <div className="islands__search">{search}</div> : null}
        </div>
        <ul className="islands__grid">
          {islands.map((island) => {
            const highlighted =
              filterActive && activePersonaIslandIds.includes(island.id);
            const dimmed =
              filterActive && !activePersonaIslandIds.includes(island.id);
            return (
              <li key={island.id}>
                <IslandCard
                  island={island}
                  dimmed={dimmed}
                  highlighted={highlighted}
                  linkRef={(el) => registerCardRef(island.id, el)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

