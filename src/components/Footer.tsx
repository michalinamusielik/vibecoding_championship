const sources = [
  "Raport roczny 2025 (Fundacja Biedronki, Szlachetna Paczka)",
  "Przewodnik pracy z seniorem (Szlachetna Paczka)",
  "MBU — Zrozumieć starość",
  "MBU — Spotkania ze starszymi, 2021",
  "Materiały: jak nawiązać i utrzymać przyjacielską relację",
  "Wstępy do small talków",
  "Ćwiczenia usprawniające pamięć",
  "Łamigłówki i zagadki dla seniorów przez telefon",
  "Osamotnienie — raport infuture.institute 2023",
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__lede">
          Starość jest normą. Każdy z nas kiedyś tam dojdzie — albo już tam
          jest. Traktujmy ją z ciekawością, nie z lękiem.
        </p>
        <section aria-labelledby="sources-h" className="site-footer__sources">
          <h2 id="sources-h" className="site-footer__h">
            Źródła i inspiracje
          </h2>
          <ul className="site-footer__list">
            {sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="site-footer__note">
            Teksty na wyspach zostały sparafrazowane na potrzeby tego
            przewodnika — nie cytujemy materiałów źródłowych dosłownie.
          </p>
          <p className="site-footer__note">
            Zdjęcie w hero:{" "}
            <a
              href="https://unsplash.com/@margoevardson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Margo Evardson
            </a>{" "}
            na{" "}
            <a
              href="https://unsplash.com/photos/elderly-woman-in-red-coat-and-headscarf-in-garden-z7GDcDrjR34"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            .
          </p>
        </section>
      </div>
    </footer>
  );
}
