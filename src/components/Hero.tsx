import type { Persona, PersonaId } from "../data/personas";

interface HeroProps {
  personas: Persona[];
  activePersonaId: PersonaId | null;
  onSelectPersona: (id: PersonaId) => void;
}

export function Hero({ personas, activePersonaId, onSelectPersona }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Archipelag starości</p>
        <h1 id="hero-h" className="hero__title">
          Poznaj starość bez lęku
        </h1>
        <p className="hero__lede">
          Sześć wysp wiedzy o tym, jak rozmawiać, towarzyszyć i dbać o siebie
          oraz bliskich z każdą dekadą życia. Wybierz, skąd przychodzisz — a my
          podpowiemy, od czego zacząć.
        </p>

        <div className="hero__personas" role="group" aria-label="Wybierz perspektywę">
          {personas.map((p) => {
            const isActive = activePersonaId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                className={
                  "persona-button" + (isActive ? " persona-button--active" : "")
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
          <p className="hero__hint" role="status">
            Pokazujemy wyspy dopasowane do twojej perspektywy. Kliknij wybraną
            personę ponownie, aby zobaczyć wszystkie.
          </p>
        )}
      </div>
    </section>
  );
}
