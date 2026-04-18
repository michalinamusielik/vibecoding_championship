import type { Persona, PersonaId } from "../data/personas";

interface PersonaPickerProps {
  personas: Persona[];
  activePersonaId: PersonaId | null;
  onSelectPersona: (id: PersonaId) => void;
}

export function PersonaPicker({
  personas,
  activePersonaId,
  onSelectPersona,
}: PersonaPickerProps) {
  return (
    <section className="persona-picker" aria-labelledby="persona-picker-h">
      <div className="container persona-picker__inner">
        <p id="persona-picker-h" className="persona-picker__eyebrow">
          Skąd przychodzisz?
        </p>
        <div
          className="persona-picker__grid"
          role="group"
          aria-label="Wybierz perspektywę"
        >
          {personas.map((p) => {
            const isActive = activePersonaId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                className={
                  "persona-button" +
                  (isActive ? " persona-button--active" : "")
                }
                aria-pressed={isActive}
                onClick={() => onSelectPersona(p.id)}
              >
                <span className="persona-button__label">{p.label}</span>
                <span className="persona-button__description">
                  {p.description}
                </span>
              </button>
            );
          })}
        </div>
        {activePersonaId !== null && (
          <p className="persona-picker__hint" role="status">
            Pokazujemy wyspy dopasowane do twojej perspektywy. Kliknij wybraną
            personę ponownie, aby zobaczyć wszystkie.
          </p>
        )}
      </div>
    </section>
  );
}
