import { Link } from "react-router-dom";
import type { Island } from "../data/islands";

interface IslandCardProps {
  island: Island;
  dimmed: boolean;
  highlighted: boolean;
  linkRef?: (el: HTMLAnchorElement | null) => void;
}

export function IslandCard({
  island,
  dimmed,
  highlighted,
  linkRef,
}: IslandCardProps) {
  const className =
    "island-card" +
    (dimmed ? " island-card--dimmed" : "") +
    (highlighted ? " island-card--highlighted" : "");

  return (
    <Link
      ref={linkRef}
      to={`/wyspa/${island.id}`}
      className={className}
      style={{
        ["--card-accent" as string]: `var(--color-${island.accentColor})`,
      }}
      aria-label={`Wyspa: ${island.title}. ${island.tagline}`}
    >
      <span className="island-card__emoji" aria-hidden="true">
        {island.emoji}
      </span>
      <span className="island-card__title">{island.title}</span>
      <span className="island-card__tagline">{island.tagline}</span>
      <span className="island-card__cta" aria-hidden="true">
        Czytaj <span className="island-card__cta-arrow">→</span>
      </span>
    </Link>
  );
}
