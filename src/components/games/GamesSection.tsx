import { useCallback, useState, type ReactNode } from "react";
import { MemoryMatch } from "./MemoryMatch";
import { OddOneOut } from "./OddOneOut";
import { Riddles } from "./Riddles";
import { Proverbs } from "./Proverbs";
import { GameModal } from "./GameModal";

interface GameDef {
  id: string;
  emoji: string;
  title: string;
  short: string;
  description: ReactNode;
  game: ReactNode;
}

const GAMES: GameDef[] = [
  {
    id: "memory",
    emoji: "🧩",
    title: "Pamięciowe pary",
    short: "Znajdź sześć par odsłaniając karty.",
    description: (
      <>
        <p>
          Klasyczna gra w pary. Na planszy 4 × 3 ukrytych jest sześć par codziennych
          rzeczy — ptak, kawa, słonecznik, kot, drzewo i tort. Klikasz dwie karty;
          jeśli pasują, zostają odsłonięte. Jeśli nie — zakrywają się po chwili.
        </p>
        <p>
          Cel: sparować wszystkie pary w jak najmniejszej liczbie ruchów. Najlepiej
          gra się we dwoje — jedna osoba zapamiętuje, druga sprawdza.
        </p>
      </>
    ),
    game: <MemoryMatch />,
  },
  {
    id: "odd",
    emoji: "🎯",
    title: "Co tu nie pasuje?",
    short: "Pięć rund — wskaż jedno słowo, które nie pasuje do reszty.",
    description: (
      <>
        <p>
          W każdej rundzie zobaczysz krótką listę słów. Pięć z nich łączy wspólny
          temat — kuchnia, zwierzęta, części samochodu, kwiaty, naczynia. Jedno
          jest intruzem. Twoim zadaniem jest go znaleźć.
        </p>
        <p>
          Po kliknięciu otrzymasz natychmiastową informację zwrotną i krótkie
          wyjaśnienie. Po pięciu rundach zobaczysz wynik.
        </p>
      </>
    ),
    game: <OddOneOut />,
  },
  {
    id: "riddles",
    emoji: "🧠",
    title: "Szarady",
    short: "Cztery zagadki — odpowiedź odsłania się jednym kliknięciem.",
    description: (
      <>
        <p>
          Cztery klasyczne zagadki słowne. Przeczytaj wiersz, zastanów się chwilę,
          a potem kliknij „Pokaż odpowiedź”, aby ją odsłonić.
        </p>
        <p>
          To dobre ćwiczenie skojarzeń i pamięci. Można rozwiązywać razem na głos —
          rozkręca rozmowę i wywołuje wspomnienia.
        </p>
      </>
    ),
    game: <Riddles />,
  },
  {
    id: "proverbs",
    emoji: "💬",
    title: "Dokończ przysłowie",
    short: "Pięć rund — wybierz właściwe zakończenie polskiego przysłowia.",
    description: (
      <>
        <p>
          Pięć znanych polskich przysłów, z których pokażemy tylko początek.
          Twoim zadaniem jest wybrać poprawne zakończenie spośród trzech opcji.
        </p>
        <p>
          Gra trafia do pamięci kulturowej i często wywołuje ciepłe wspomnienia
          z dzieciństwa. Świetnie sprawdza się we wspólnej rozmowie z bliskim.
        </p>
      </>
    ),
    game: <Proverbs />,
  },
];

export function GamesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleOpen = useCallback((id: string) => setOpenId(id), []);
  const handleClose = useCallback(() => setOpenId(null), []);

  const activeGame = GAMES.find((g) => g.id === openId) ?? null;

  return (
    <section id="gry" className="games" aria-labelledby="games-h">
      <div className="container">
        <header className="games__heading">
          <h2 id="games-h" className="games__title">
            Zagraj z bliskim
          </h2>
          <p className="games__lede">
            Cztery krótkie ćwiczenia, które rozkręcą rozmowę i potrenują pamięć.
            Najlepiej gra się we dwoje. Kliknij kartę, by przeczytać opis i zagrać.
          </p>
        </header>
        <ul className="games__grid">
          {GAMES.map((g) => (
            <li key={g.id}>
              <button
                type="button"
                className="games__card"
                onClick={() => handleOpen(g.id)}
                aria-haspopup="dialog"
              >
                <span className="games__card-emoji" aria-hidden="true">
                  {g.emoji}
                </span>
                <span className="games__card-title">{g.title}</span>
                <span className="games__card-desc">{g.short}</span>
                <span className="games__card-cta" aria-hidden="true">
                  Otwórz grę <span className="games__card-cta-arrow">→</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {activeGame && (
        <GameModal
          key={activeGame.id}
          title={activeGame.title}
          description={activeGame.description}
          game={activeGame.game}
          onClose={handleClose}
        />
      )}
    </section>
  );
}
