import { islands } from "./data/islands";
import { personas } from "./data/personas";
import "./App.css";

const paletteSwatches = [
  { name: "cream", value: "#FFF8F0" },
  { name: "sand", value: "#F3E3D0" },
  { name: "honey", value: "#D9B382" },
  { name: "amber", value: "#E8A93C" },
  { name: "clay", value: "#B4583C" },
  { name: "rust", value: "#8F3E20" },
  { name: "brown", value: "#4A3428" },
  { name: "ink", value: "#2B1E17" },
];

function App() {
  const preview = islands.slice(0, 3);

  return (
    <div className="scaffold">
      <header className="scaffold__header container">
        <p className="scaffold__eyebrow">Fala 1 · scaffold + system designu</p>
        <h1>Archipelag starości</h1>
        <p className="scaffold__lede">
          Baza wiedzy o starzeniu dla trzech odbiorców: bliskich osób
          starszych, ciekawych tematu i samych seniorów. Sześć wysp, każda
          jeden temat — krótko, po ludzku, na „ty”.
        </p>
        <p className="scaffold__hint">
          Wysp: <strong>{islands.length}</strong> · Person:{" "}
          <strong>{personas.length}</strong> · Dane spięte z tokenami
          kolorystycznymi.
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
          Placeholder — karty renderowane z <code>src/data/islands.ts</code>.
          Hero, pełną siatkę wysp, wybór persony i modal dodamy w Fali 2.
        </p>
        <ul className="cards">
          {preview.map((island, idx) => (
            <li
              key={island.id}
              className="card"
              style={{
                ["--card-accent" as string]: `var(--color-${island.accentColor})`,
              }}
            >
              <span className="card__index">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="card__emoji" aria-hidden="true">
                {island.emoji}
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
          (Fundacja Biedronki, Szlachetna Paczka, 2020), raportu „Osamotnienie”
          (infuture.institute 2023) i materiałów towarzyszących.
        </p>
      </footer>
    </div>
  );
}

export default App;
