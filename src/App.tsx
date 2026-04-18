import { islands } from "./data/islands";
import "./App.css";

const paletteSwatches = [
  { name: "cream", value: "#FFF8F0" },
  { name: "sand", value: "#F3E3D0" },
  { name: "amber", value: "#E8A93C" },
  { name: "clay", value: "#B4583C" },
  { name: "brown", value: "#4A3428" },
  { name: "ink", value: "#2B1E17" },
];

function App() {
  const preview = islands.slice(0, 3);

  return (
    <div className="scaffold">
      <header className="scaffold__header container">
        <p className="scaffold__eyebrow">Fala 1 · scaffold + system designu</p>
        <h1>Archipelag Seniora</h1>
        <p className="scaffold__lede">
          Przyjacielski przewodnik dla wolontariuszy i wolontariuszek, którzy
          zaczynają pracę z osobami starszymi. Każda wyspa to jeden temat —
          krótko, po ludzku, na „ty”.
        </p>
      </header>

      <section className="container scaffold__section" aria-labelledby="palette-h">
        <h2 id="palette-h">Paleta</h2>
        <ul className="palette">
          {paletteSwatches.map((s) => (
            <li key={s.name} className="palette__item">
              <span className="palette__swatch" style={{ background: s.value }} />
              <span className="palette__meta">
                <strong>{s.name}</strong>
                <code>{s.value}</code>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container scaffold__section" aria-labelledby="cards-h">
        <h2 id="cards-h">Pierwsze trzy wyspy</h2>
        <p className="scaffold__hint">
          Placeholder — karty renderowane z <code>src/data/islands.ts</code>
          dowodzą, że dane i tokeny kolorystyczne już się spinają. Hero i pełną
          siatkę wysp zbudujemy w Fali 2.
        </p>
        <ul className="cards">
          {preview.map((island, idx) => (
            <li key={island.id} className="card">
              <span className="card__index">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="card__title">{island.title}</h3>
              <p className="card__tagline">{island.tagline}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="scaffold__footer container">
        <p>
          Treść sparafrazowana na podstawie „Przewodnika pracy z seniorami”
          (Fundacja Biedronki, Szlachetna Paczka, 2020) oraz materiałów
          pomocniczych.
        </p>
      </footer>
    </div>
  );
}

export default App;
