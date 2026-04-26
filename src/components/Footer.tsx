export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <section
          className="site-footer__column"
          aria-labelledby="footer-contact-h"
        >
          <h2 id="footer-contact-h" className="site-footer__org">
            Stowarzyszenie mali bracia Ubogich
          </h2>
          <p className="site-footer__sub">Organizacja Pożytku Publicznego</p>
          <p className="site-footer__addr">
            ul. Gen. Wł. Andersa 13, 00-159 Warszawa
          </p>
          <p>
            <a href="tel:+48600615110">+48 600 615 110</a>
            <span className="site-footer__sub"> · pn–pt, 12:00–14:00</span>
          </p>
          <p>
            <a href="mailto:kontakt@malibracia.org.pl">
              kontakt@malibracia.org.pl
            </a>
          </p>
          <p>
            <a
              href="https://www.malibracia.org.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              malibracia.org.pl
            </a>
          </p>
        </section>

        <section
          className="site-footer__column"
          aria-labelledby="footer-formal-h"
        >
          <h2 id="footer-formal-h" className="site-footer__org">
            Dane formalne
          </h2>
          <ul className="site-footer__list site-footer__list--plain">
            <li>KRS 0000160750</li>
            <li>NIP 8222092679</li>
            <li>REGON 015482875</li>
            <li>Konto: 13 1600 1462 1818 9539 9000 0001</li>
          </ul>
        </section>
      </div>
      <div className="container site-footer__bar">
        <span>© {year} mali bracia Ubogich</span>
        <span>
          Zdjęcie:{" "}
          <a
            href="https://unsplash.com/@andriklangfield"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrik Langfield
          </a>{" "}
          /{" "}
          <a
            href="https://unsplash.com/photos/bSXk1lOp8T0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </span>
      </div>
    </footer>
  );
}
