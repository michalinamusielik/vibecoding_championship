import type { Section } from "../data/islands";

const SECTION_ICONS: Record<string, string> = {
  pigulka: "💡",
  praktyki: "🤲",
  unikaj: "⚠️",
  zapamietaj: "📌",
  cytat: "❝",
  tabela: "📊",
};

export function ModalSection({ section }: { section: Section }) {
  const icon = SECTION_ICONS[section.kind] ?? "•";
  if (section.kind === "cytat") {
    return (
      <section className="modal-section modal-section--quote">
        <h3 className="modal-section__h">
          <span aria-hidden="true" className="modal-section__icon">
            {icon}
          </span>
          {section.title}
        </h3>
        <blockquote className="modal-quote">
          <p>{section.quote}</p>
          <footer className="modal-quote__author">— {section.author}</footer>
        </blockquote>
      </section>
    );
  }
  if (section.kind === "tabela") {
    return (
      <section className="modal-section modal-section--table">
        <h3 className="modal-section__h">
          <span aria-hidden="true" className="modal-section__icon">
            {icon}
          </span>
          {section.title}
        </h3>
        <div className="modal-table-wrap">
          <table className="modal-table">
            <thead>
              <tr>
                <th scope="col">{section.columns[0]}</th>
                <th scope="col">{section.columns[1]}</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, idx) => (
                <tr key={idx}>
                  <td data-label={section.columns[0]}>{row[0]}</td>
                  <td data-label={section.columns[1]}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  return (
    <section className={`modal-section modal-section--${section.kind}`}>
      <h3 className="modal-section__h">
        <span aria-hidden="true" className="modal-section__icon">
          {icon}
        </span>
        {section.title}
      </h3>
      <ul className="modal-section__list">
        {section.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </section>
  );
}
