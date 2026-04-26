import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

interface GameModalProps {
  title: string;
  description: ReactNode;
  game: ReactNode;
  onClose: () => void;
}

type Tab = "opis" | "gra";

export function GameModal({
  title,
  description,
  game,
  onClose,
}: GameModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("opis");
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const opisTabRef = useRef<HTMLButtonElement | null>(null);
  const graTabRef = useRef<HTMLButtonElement | null>(null);
  const baseId = useId();
  const titleId = `${baseId}-title`;
  const opisTabId = `${baseId}-tab-opis`;
  const graTabId = `${baseId}-tab-gra`;
  const opisPanelId = `${baseId}-panel-opis`;
  const graPanelId = `${baseId}-panel-gra`;

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeBtnRef.current?.focus(), 0);

    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const handleTabKey = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const next: Tab = activeTab === "opis" ? "gra" : "opis";
        setActiveTab(next);
        window.setTimeout(() => {
          (next === "opis" ? opisTabRef : graTabRef).current?.focus();
        }, 0);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveTab("opis");
        window.setTimeout(() => opisTabRef.current?.focus(), 0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveTab("gra");
        window.setTimeout(() => graTabRef.current?.focus(), 0);
      }
    },
    [activeTab],
  );

  return (
    <div className="game-modal" role="presentation">
      <div
        className="game-modal__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="game-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="game-modal__header">
          <h2 id={titleId} className="game-modal__title">
            {title}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            className="game-modal__close"
            onClick={onClose}
            aria-label="Zamknij"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="game-modal__tabs" role="tablist" aria-label="Sekcje gry">
          <button
            ref={opisTabRef}
            type="button"
            role="tab"
            id={opisTabId}
            aria-controls={opisPanelId}
            aria-selected={activeTab === "opis"}
            tabIndex={activeTab === "opis" ? 0 : -1}
            className={
              "game-modal__tab" +
              (activeTab === "opis" ? " game-modal__tab--active" : "")
            }
            onClick={() => setActiveTab("opis")}
            onKeyDown={handleTabKey}
          >
            Opis
          </button>
          <button
            ref={graTabRef}
            type="button"
            role="tab"
            id={graTabId}
            aria-controls={graPanelId}
            aria-selected={activeTab === "gra"}
            tabIndex={activeTab === "gra" ? 0 : -1}
            className={
              "game-modal__tab" +
              (activeTab === "gra" ? " game-modal__tab--active" : "")
            }
            onClick={() => setActiveTab("gra")}
            onKeyDown={handleTabKey}
          >
            Gra
          </button>
        </div>

        <div
          role="tabpanel"
          id={opisPanelId}
          aria-labelledby={opisTabId}
          tabIndex={0}
          hidden={activeTab !== "opis"}
          className="game-modal__panel-body"
        >
          {description}
        </div>
        <div
          role="tabpanel"
          id={graPanelId}
          aria-labelledby={graTabId}
          tabIndex={0}
          hidden={activeTab !== "gra"}
          className="game-modal__panel-body"
        >
          {game}
        </div>
      </div>
    </div>
  );
}
