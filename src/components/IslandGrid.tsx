import type { Island } from "../data/islands";
import { IslandCard } from "./IslandCard";

interface IslandGridProps {
  islands: Island[];
  activePersonaIslandIds: string[] | null;
  registerCardRef: (id: string, el: HTMLAnchorElement | null) => void;
}

export function IslandGrid({
  islands,
  activePersonaIslandIds,
  registerCardRef,
}: IslandGridProps) {
  const filterActive = activePersonaIslandIds !== null;

  return (
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
  );
}

