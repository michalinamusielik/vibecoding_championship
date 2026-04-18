import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "accessibility.largeText";
const HTML_CLASS = "text-large";

function readInitial(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains(HTML_CLASS);
}

export function LargeTextToggle() {
  const [enabled, setEnabled] = useState<boolean>(readInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add(HTML_CLASS);
    } else {
      root.classList.remove(HTML_CLASS);
    }
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
    } catch {
      // ignore quota / privacy errors
    }
  }, [enabled]);

  const toggle = useCallback(() => setEnabled((v) => !v), []);

  return (
    <button
      type="button"
      className="large-text-toggle"
      aria-pressed={enabled}
      onClick={toggle}
      title={enabled ? "Wyłącz większy tekst" : "Włącz większy tekst"}
    >
      <span aria-hidden="true" className="large-text-toggle__icon">
        A+
      </span>
      <span className="large-text-toggle__label">
        {enabled ? "Większy tekst: wł." : "Większy tekst"}
      </span>
    </button>
  );
}
