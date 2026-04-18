import type { Island } from "../data/islands";

interface IslandCardProps {
  island: Island;
  dimmed: boolean;
  highlighted: boolean;
  onOpen: (island: Island) => void;
  buttonRef?: (el: HTMLButtonElement | null) => void;
}

export function IslandCard({
  island,
  dimmed,
  highlighted,
  onOpen,
  buttonRef,
}: IslandCardProps) {
  const className =
    "island-card" +
    (dimmed ? " island-card--dimmed" : "") +
    (highlighted ? " island-card--highlighted" : "");

  return (
    <button
      ref={buttonRef}
      type="button"
      className={className}
      style={{
        ["--card-accent" as string]: `var(--color-${island.accentColor})`,
      }}
      onClick={() => onOpen(island)}
      aria-label={`Otwórz wyspę: ${island.title}. ${island.tagline}`}
    >
      <span className="island-card__emoji" aria-hidden="true">
        {island.emoji}
      </span>
      <span className="island-card__title">{island.title}</span>
      <span className="island-card__tagline">{island.tagline}</span>
    </button>
  );
}
