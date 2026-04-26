import { useCallback, useState } from "react";
import { proverbRounds } from "../../data/games";

interface PickedState {
  option: string;
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

export function Proverbs() {
  const [roundIndex, setRoundIndex] = useState(0);
  const [picked, setPicked] = useState<PickedState | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>(() =>
    shuffle(proverbRounds[0].options),
  );

  const currentRound = proverbRounds[roundIndex];
  const isLast = roundIndex === proverbRounds.length - 1;

  const handlePick = useCallback(
    (option: string) => {
      if (picked) return;
      const correct = option === currentRound.answer;
      setPicked({ option, correct });
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
      setShuffledOptions(shuffle(proverbRounds[nextIndex].options));
      setPicked(null);
    }
  }, [isLast, roundIndex]);

  const handleRestart = useCallback(() => {
    setRoundIndex(0);
    setShuffledOptions(shuffle(proverbRounds[0].options));
    setPicked(null);
    setScore(0);
    setFinished(false);
  }, []);

  if (finished) {
    return (
      <div className="proverbs">
        <p role="status" aria-live="polite" className="proverbs__final">
          Trafione: <strong>{score}</strong> / {proverbRounds.length}
        </p>
        <button type="button" className="btn-secondary" onClick={handleRestart}>
          Zagraj jeszcze raz
        </button>
      </div>
    );
  }

  return (
    <div className="proverbs">
      <p className="proverbs__progress">
        Runda {roundIndex + 1} z {proverbRounds.length}
      </p>
      <p className="proverbs__start">{currentRound.start}</p>
      <ul className="proverbs__options" aria-label="Możliwe zakończenia">
        {shuffledOptions.map((option) => {
          const isPicked = picked?.option === option;
          const isAnswer = option === currentRound.answer;
          let modifier = "";
          if (picked) {
            if (isAnswer) modifier = " proverb-option--correct";
            else if (isPicked) modifier = " proverb-option--wrong";
          }
          return (
            <li key={option}>
              <button
                type="button"
                className={"proverb-option" + modifier}
                onClick={() => handlePick(option)}
                disabled={picked !== null}
                aria-label={
                  picked && isAnswer
                    ? `${option}, poprawna odpowiedź`
                    : picked && isPicked
                      ? `${option}, niepoprawna odpowiedź`
                      : option
                }
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
      {picked && (
        <div className="proverbs__feedback" role="status" aria-live="polite">
          <p className="proverbs__feedback-line">
            <span className="proverbs__feedback-mark" aria-hidden="true">
              {picked.correct ? "✓" : "✗"}
            </span>
            <span>
              {currentRound.start} <strong>{currentRound.answer}</strong>.
            </span>
          </p>
          <button
            type="button"
            className="btn-primary proverbs__next"
            onClick={handleNext}
          >
            {isLast ? "Zobacz wynik" : "Następne"}
          </button>
        </div>
      )}
    </div>
  );
}
