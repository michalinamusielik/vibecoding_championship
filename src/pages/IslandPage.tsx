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

  const related = islands.filter((i) => i.id !== island.id);

  return (
    <article
      className="island-page article"
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

        <header className="island-page__header article__header">
          <span className="island-page__emoji article__eyebrow" aria-hidden="true">
            {island.emoji}
          </span>
          <h1
            id={titleId}
            ref={headingRef}
            tabIndex={-1}
            className="island-page__title article__title"
          >
            {island.title}
          </h1>
          <p className="island-page__tagline article__dek">{island.tagline}</p>
        </header>

        <div className="island-page__body article__body">
          <p className="island-page__intro article__intro">{island.intro}</p>
          {island.sections.map((section, i) => (
            <ModalSection key={i} section={section} />
          ))}
        </div>

        <aside className="article__related" aria-label="Pozostałe wyspy">
          <h2 className="article__related-title">Pozostałe wyspy</h2>
          <ul className="article__related-list">
            {related.map((r) => (
              <li key={r.id} className="article__related-item">
                <Link to={"/wyspa/" + r.id} className="article__related-link">
                  <span className="article__related-emoji" aria-hidden="true">
                    {r.emoji}
                  </span>
                  <span className="article__related-name">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

      </div>
    </article>
  );
}
