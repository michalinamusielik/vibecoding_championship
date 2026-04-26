export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Archipelag starości</p>
          <h1 id="hero-h" className="hero__title">
            Poznaj starość bez lęku
          </h1>
          <p className="hero__lede">
            Sześć wysp wiedzy o tym, jak rozmawiać, towarzyszyć i dbać o siebie
            oraz bliskich z każdą dekadą życia. Wybierz, skąd przychodzisz — a
            my podpowiemy, od czego zacząć.
          </p>
        </div>

        <figure className="hero__figure">
          <picture>
            <source srcSet="/images/hero.webp" type="image/webp" />
            <img
              src="/images/hero.jpg"
              alt="Starsze osoby rozmawiające na przystanku autobusowym — codzienne spotkanie i wspólny czas."
              width="1600"
              height="2000"
              loading="eager"
              fetchPriority="high"
              className="hero__image"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
}
