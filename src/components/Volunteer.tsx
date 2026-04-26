export function Volunteer() {
  return (
    <section
      id="wolontariat"
      className="volunteer"
      aria-labelledby="volunteer-h"
    >
      <div className="container volunteer__inner">
        <h2 id="volunteer-h" className="volunteer__title">
          Zostań wolontariuszem
        </h2>
        <p className="volunteer__lede">
          Małe Bracia od ponad 20 lat towarzyszą starszym osobom w samotności.
          Jeśli masz godzinę w tygodniu i chęć być przy drugim człowieku — możesz
          dołączyć. Wolontariat polega głównie na regularnych, przyjacielskich
          wizytach lub rozmowach telefonicznych z konkretnym seniorem.
        </p>
        <a
          className="btn-on-dark volunteer__cta"
          href="https://www.malibracia.org.pl/jak-pomoc/zaangazuj-sie/wyslij-zgloszenie/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Wyślij zgłoszenie wolontariusza (otwiera się w nowej karcie)"
        >
          Wyślij zgłoszenie <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
