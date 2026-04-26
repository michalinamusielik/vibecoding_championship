import type { MouseEvent } from "react";

interface Fact {
  stat: string;
  desc: string;
  source: string;
}

const facts: Fact[] = [
  {
    stat: "53%",
    desc: "Polaków doświadcza poczucia samotności, a 39% często lub czasami czuje się opuszczonych.",
    source: "Źródło: infuture.institute, 2023",
  },
  {
    stat: "+14%",
    desc: "O tyle chroniczna samotność zwiększa ryzyko wcześniejszej śmierci. Zaburza też sen i osłabia odporność.",
    source: "Źródło: badania nad samotnością w wieku senioralnym",
  },
  {
    stat: "+7,5 roku",
    desc: "O tyle dłużej żyją osoby z pozytywnym nastawieniem do własnego starzenia.",
    source: "Źródło: badania Becki Levy",
  },
  {
    stat: "150 min",
    desc: "Tyle umiarkowanej aktywności tygodniowo zaleca WHO osobom starszym, plus 2× w tygodniu ćwiczenia siłowe.",
    source: "Źródło: World Health Organization",
  },
];

export function Knowledge() {
  const handleScrollToWyspy = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("wyspy");
    if (!target) return;
    event.preventDefault();
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="knowledge" aria-labelledby="knowledge-h">
      <div className="container knowledge__inner">
        <header className="knowledge__heading">
          <h2 id="knowledge-h" className="knowledge__title">
            Wiedza, która zmienia spojrzenie
          </h2>
          <p className="knowledge__lede">
            Starość w liczbach — kilka faktów, które warto znać, zanim zaczniesz
            rozmawiać, towarzyszyć i działać.
          </p>
        </header>

        <ul className="knowledge__grid">
          {facts.map((fact) => (
            <li key={fact.stat} className="knowledge__card">
              <p className="knowledge__stat">{fact.stat}</p>
              <p className="knowledge__desc">{fact.desc}</p>
              <p className="knowledge__source">{fact.source}</p>
            </li>
          ))}
        </ul>

        <div className="knowledge__ctas">
          <a
            href="#wyspy"
            className="btn-primary"
            onClick={handleScrollToWyspy}
          >
            Dowiedz się więcej
          </a>
          <a
            href="https://www.malibracia.org.pl/wspieraj/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="Wesprzyj Małych Braci (otwiera się w nowej karcie)"
          >
            Wesprzyj nas <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
