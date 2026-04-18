import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { islands } from "../data/islands";
import { ModalSection } from "../components/ModalSection";
import { NotFoundPage } from "./NotFoundPage";

export function IslandPage() {
  const { id } = useParams<{ id: string }>();
  const island = islands.find((i) => i.id === id);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!island) return;
    const el = headingRef.current;
    if (!el) return;
    window.setTimeout(() => el.focus(), 0);
  }, [island]);

  if (!island) {
    return <NotFoundPage />;
  }

  const titleId = `island-${island.id}-title`;

  return (
    <article
      className="island-page"
      aria-labelledby={titleId}
      style={{
        ["--card-accent" as string]: `var(--color-${island.accentColor})`,
      }}
    >
      <div className="container island-page__inner">
        <nav aria-label="Ścieżka" className="island-page__breadcrumb">
          <ol>
            <li>
              <Link
                to="/"
                state={{ fromIslandId: island.id }}
              >
                Start
              </Link>
            </li>
            <li aria-current="page">{island.title}</li>
          </ol>
        </nav>

        <Link
          to="/"
          state={{ fromIslandId: island.id }}
          className="island-page__back"
        >
          <span aria-hidden="true">←</span> Powrót do wszystkich wysp
        </Link>

        <header className="island-page__header">
          <span className="island-page__emoji" aria-hidden="true">
            {island.emoji}
          </span>
          <h1
            id={titleId}
            ref={headingRef}
            tabIndex={-1}
            className="island-page__title"
          >
            {island.title}
          </h1>
          <p className="island-page__tagline">{island.tagline}</p>
        </header>

        <div className="island-page__body">
          <p className="island-page__intro">{island.intro}</p>
          {island.sections.map((section, i) => (
            <ModalSection key={i} section={section} />
          ))}
        </div>
      </div>
    </article>
  );
}
