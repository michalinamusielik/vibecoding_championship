import { useCallback, useEffect, useRef } from "react";
import type { Island } from "../data/islands";
import { ModalSection } from "./ModalSection";

interface IslandModalProps {
  island: Island;
  onClose: () => void;
}

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function IslandModal({ island, onClose }: IslandModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = `island-${island.id}-title`;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const container = dialogRef.current;
      if (!container) return;
      const focusables = container.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !container.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    // Focus initial
    const t = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(t);
    };
  }, [handleKeyDown]);

  const onBackdropMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onMouseDown={onBackdropMouseDown}
      aria-hidden={false}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="modal"
        style={{
          ["--card-accent" as string]: `var(--color-${island.accentColor})`,
        }}
      >
        <header className="modal__header">
          <div className="modal__title-wrap">
            <span className="modal__emoji" aria-hidden="true">
              {island.emoji}
            </span>
            <h2 id={titleId} className="modal__title">
              {island.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="modal__close"
            aria-label="Zamknij"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <div className="modal__body">
          <p className="modal__intro">{island.intro}</p>
          {island.sections.map((section, i) => (
            <ModalSection key={i} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}


