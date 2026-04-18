import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    window.setTimeout(() => el.focus(), 0);
  }, []);

  return (
    <section className="not-found" aria-labelledby="not-found-h">
      <div className="container not-found__inner">
        <h1
          id="not-found-h"
          ref={headingRef}
          tabIndex={-1}
          className="not-found__title"
        >
          Nie znaleziono strony
        </h1>
        <p className="not-found__lede">
          Wygląda na to, że zgubiliśmy ten adres w archipelagu.
        </p>
        <Link to="/" className="not-found__link">
          ← Wróć na stronę główną
        </Link>
      </div>
    </section>
  );
}
