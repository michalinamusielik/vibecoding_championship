import { useId } from "react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export function SearchBox({ value, onChange, onClear }: SearchBoxProps) {
  const id = useId();
  const hasValue = value.length > 0;

  return (
    <div className="search-box">
      <label htmlFor={id} className="search-box__label">
        Szukaj w bazie wiedzy
      </label>
      <div className="search-box__field">
        <span className="search-box__icon" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9"
              cy="9"
              r="5.5"
              stroke="currentColor"
              strokeWidth="1.75"
            />
            <path
              d="M13.5 13.5L17 17"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <input
          id={id}
          type="search"
          className="search-box__input"
          placeholder="Szukaj: np. pamięć, rozmowa, sen…"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
        />
        {hasValue && (
          <button
            type="button"
            className="search-box__clear"
            aria-label="Wyczyść wyszukiwanie"
            onClick={onClear}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
