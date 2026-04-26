import { useCallback, useState } from "react";
import { oddRounds } from "../../data/games";

interface PickedState {
  word: string;
  correct: boolean;
}

function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function OddOneOut() {
  const [roundIndex, setRoundIndex] = useState(0);
  const [picked, setPicked] = useState<PickedState | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [shuffledWords, setShuffledWords] = useState<string[]>(() =>
    shuffle(oddRounds[0].words),
  );

  const currentRound = oddRounds[roundIndex];
  const isLast = roundIndex === oddRounds.length - 1;

  const handlePick = useCallback(
    (word: string) => {
      if (picked) return;
      const correct = word === currentRound.answer;
      setPicked({ word, correct });
      if (correct) setScore((s) => s + 1);
    },
    [currentRound.answer, picked],
  );

  const handleNext = useCallback(() => {
    if (isLast) {
      setFinished(true);
    } else {
      const nextIndex = roundIndex + 1;
      setRoundIndex(nextIndex);
      setShuffledWords(shuffle(oddRounds[nextIndex].words));
      setPicked(null);
    }
  }, [isLast, roundIndex]);

  const handleRestart = useCallback(() => {
    setRoundIndex(0);
    setShuffledWords(shuffle(oddRounds[0].words));
    setPicked(null);
    setScore(0);
    setFinished(false);
  }, []);

  if (finished) {
    return (
      <div className="odd">
        <p role="status" aria-live="polite" className="odd__final">
          Trafione: <strong>{score}</strong> / {oddRounds.length}
        </p>
        <button type="button" className="btn-secondary" onClick={handleRestart}>
          Zagraj jeszcze raz
        </button>
      </div>
    );
  }

  return (
    <div className="odd">
      <p className="odd__progress">
        Runda {roundIndex + 1} z {oddRounds.length}
      </p>
      <p className="odd__prompt">Które słowo nie pasuje do reszty?</p>
      <ul className="odd-options" aria-label="Lista słów">
        {shuffledWords.map((word) => {
          const isPicked = picked?.word === word;
          const isAnswer = word === currentRound.answer;
          let modifier = "";
          if (picked) {
            if (isAnswer) modifier = " odd-word--correct";
            else if (isPicked) modifier = " odd-word--wrong";
          }
          return (
            <li key={word}>
              <button
                type="button"
                className={"odd-word" + modifier}
                onClick={() => handlePick(word)}
                disabled={picked !== null}
                aria-label={
                  picked && isAnswer
                    ? `${word}, poprawna odpowiedź`
                    : picked && isPicked
                    ? `${word}, niepoprawna odpowiedź`
                    : word
                }
              >
                {word}
              </button>
            </li>
          );
        })}
      </ul>
      {picked && (
        <div className="odd__feedback" role="status" aria-live="polite">
          <p className="odd__feedback-line">
            {picked.correct ? (
              <span className="odd__feedback-mark" aria-hidden="true">
                ✓
              </span>
            ) : (
              <span className="odd__feedback-mark" aria-hidden="true">
                ✗
              </span>
            )}
            <span>{currentRound.explanation}</span>
          </p>
          <button type="button" className="btn-primary odd__next" onClick={handleNext}>
            {isLast ? "Zobacz wynik" : "Następne"}
          </button>
        </div>
      )}
    </div>
  );
}
