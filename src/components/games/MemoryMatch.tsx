import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { memoryEmojis, type MemoryEmoji } from "../../data/games";

interface Card {
  cardId: string;
  pairId: string;
  emoji: string;
  label: string;
}

function buildDeck(emojis: MemoryEmoji[]): Card[] {
  const deck: Card[] = [];
  for (const e of emojis) {
    deck.push({ cardId: `${e.id}-a`, pairId: e.id, emoji: e.emoji, label: e.label });
    deck.push({ cardId: `${e.id}-b`, pairId: e.id, emoji: e.emoji, label: e.label });
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function MemoryMatch() {
  const [deck, setDeck] = useState<Card[]>(() => buildDeck(memoryEmojis));
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const totalPairs = memoryEmojis.length;
  const isComplete = matched.size === totalPairs;

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleFlip = useCallback(
    (cardId: string, pairId: string) => {
      if (locked) return;
      if (matched.has(pairId)) return;
      if (flipped.includes(cardId)) return;
      if (flipped.length === 2) return;

      const next = [...flipped, cardId];
      setFlipped(next);
      if (next.length === 2) {
        setMoves((m) => m + 1);
        const [firstId, secondId] = next;
        const first = deck.find((c) => c.cardId === firstId);
        const second = deck.find((c) => c.cardId === secondId);
        if (first && second && first.pairId === second.pairId) {
          setMatched((prev) => {
            const updated = new Set(prev);
            updated.add(first.pairId);
            return updated;
          });
          setFlipped([]);
        } else {
          setLocked(true);
          timeoutRef.current = window.setTimeout(
            () => {
              setFlipped([]);
              setLocked(false);
            },
            prefersReducedMotion ? 300 : 800,
          );
        }
      }
    },
    [deck, flipped, locked, matched, prefersReducedMotion],
  );

  const handleReset = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDeck(buildDeck(memoryEmojis));
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setLocked(false);
  }, []);

  return (
    <div className="memory">
      <p className="memory__moves" aria-live="off">
        Ruchy: <strong>{moves}</strong>
      </p>
      <ul className="memory-grid" aria-label="Plansza pary pamięciowe">
        {deck.map((card, index) => {
          const isMatched = matched.has(card.pairId);
          const isFlipped = flipped.includes(card.cardId) || isMatched;
          const label = isFlipped
            ? `Karta ${index + 1}, ${card.label}`
            : `Karta ${index + 1}, zakryta`;
          return (
            <li key={card.cardId} className="memory-grid__item">
              <button
                type="button"
                className={
                  "memory-card" +
                  (isFlipped ? " memory-card--flipped" : "") +
                  (isMatched ? " memory-card--matched" : "")
                }
                onClick={() => handleFlip(card.cardId, card.pairId)}
                aria-label={label}
                aria-pressed={isFlipped}
                disabled={isMatched}
              >
                <span className="memory-card__face memory-card__face--back" aria-hidden="true">
                  ?
                </span>
                <span className="memory-card__face memory-card__face--front" aria-hidden="true">
                  {card.emoji}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="memory__footer">
        <p role="status" aria-live="polite" className="memory__status">
          {isComplete ? `Brawo! Skończyłaś w ${moves} ruchach.` : ""}
        </p>
        <button type="button" className="btn-secondary memory__reset" onClick={handleReset}>
          {isComplete ? "Zagraj jeszcze raz" : "Zacznij od nowa"}
        </button>
      </div>
    </div>
  );
}
