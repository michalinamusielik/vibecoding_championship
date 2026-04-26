import { useState } from "react";
import { riddles } from "../../data/games";

export function Riddles() {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <ul className="riddles" aria-label="Lista zagadek">
      {riddles.map((riddle, index) => {
        const isOpen = open.has(riddle.id);
        const answerId = `riddle-answer-${riddle.id}`;
        return (
          <li key={riddle.id} className="riddle">
            <p className="riddle__number">Zagadka {index + 1}</p>
            <p className="riddle__text">{riddle.text}</p>
            <button
              type="button"
              className="btn-secondary riddle__toggle"
              onClick={() => toggle(riddle.id)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              {isOpen ? "Ukryj odpowiedź" : "Pokaż odpowiedź"}
            </button>
            {isOpen && (
              <p id={answerId} className="riddle__answer" role="status" aria-live="polite">
                {riddle.answer}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
