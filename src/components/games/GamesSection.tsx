import { MemoryMatch } from "./MemoryMatch";
import { OddOneOut } from "./OddOneOut";
import { Riddles } from "./Riddles";

export function GamesSection() {
  return (
    <section id="gry" className="games" aria-labelledby="games-h">
      <div className="container">
        <header className="games__heading">
          <h2 id="games-h" className="games__title">
            Zagraj z bliskim
          </h2>
          <p className="games__lede">
            Trzy krótkie ćwiczenia, które rozkręcą rozmowę i potrenują pamięć.
            Najlepiej gra się we dwoje.
          </p>
        </header>
        <div className="games__grid">
          <article className="games__card" aria-labelledby="game-memory-h">
            <h3 id="game-memory-h" className="game-card__title">
              Pamięciowe pary
            </h3>
            <p className="game-card__desc">
              Odsłaniaj karty po dwie i znajdź wszystkie sześć par. Liczymy ruchy.
            </p>
            <div className="game-card__body">
              <MemoryMatch />
            </div>
          </article>
          <article className="games__card" aria-labelledby="game-odd-h">
            <h3 id="game-odd-h" className="game-card__title">
              Co tu nie pasuje?
            </h3>
            <p className="game-card__desc">
              Pięć rund, w każdej jedno słowo wybija się z grupy. Wskaż intruza.
            </p>
            <div className="game-card__body">
              <OddOneOut />
            </div>
          </article>
          <article className="games__card" aria-labelledby="game-riddles-h">
            <h3 id="game-riddles-h" className="game-card__title">
              Szarady
            </h3>
            <p className="game-card__desc">
              Cztery zagadki na rozgrzanie umysłu. Odpowiedź odsłania się jednym kliknięciem.
            </p>
            <div className="game-card__body">
              <Riddles />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
