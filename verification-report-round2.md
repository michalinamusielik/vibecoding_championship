# Raport weryfikacji rundy 2

**Data:** 2026-04-18
**Zakres:** Fala 8 — Fix 404 + browser verify
**Metoda:** CDP (chrome-headless-shell, Playwright'a bundle) sterowany z Node v24 przez natywny WebSocket.

## Zmiana kodu

- `src/pages/IslandPage.tsx`: zamieniono `<Navigate to="/" replace />` na `<NotFoundPage />` dla brakującej wyspy. Import `NotFoundPage` dodany, `Navigate` usunięty z importów.

## Build / typecheck / lint

| Check | Status |
|-------|--------|
| `npm run build` (tsc -b && vite build) | ✅ zielone, bundle 262.82 kB |
| `npx tsc --noEmit` | ✅ zielone |
| `npm run lint` | ✅ zielone |

## Browser verify (http://127.0.0.1:5173)

| # | Test | Status | Szczegóły |
|---|------|--------|-----------|
| 1 | `/` — render desktop 1280×800 | ✅ | `shots/home-desktop.png` |
| 2 | `/` — render tablet 900×700 | ✅ | `shots/home-tablet.png` |
| 3 | `/` — render mobile 390×780 | ✅ | `shots/home-mobile.png` |
| 4 | Hero: `<img>.currentSrc` + Network | ✅ | `currentSrc = /images/hero.webp`; Network: `hero.webp` fetched (picture/source webp wybrany nad jpg fallback) |
| 5 | `/wyspa/rozmowa` — render + H1 "Rozmowa" | ✅ | `shots/wyspa-rozmowa.png`, `h1Text = "Rozmowa"` |
| 6 | `/wyspa/rozmowa` — `document.activeElement === H1` | ✅ | `activeIsH1: true`, `activeTag: "H1"`, `activeId: "island-rozmowa-title"` |
| 7 | `/wyspa/xxxxx` — 404 wyświetlony (nie redirect) | ✅ | `shots/wyspa-404.png`, `h1Text = "Nie znaleziono strony"`, `path = "/wyspa/xxxxx"` (bez redirectu na `/`) |
| 8 | Search: wpis "pamiec" (bez ogonka), 450ms debounce, <6 kart | ✅ | `aria-live` tekst: `"Znaleziono 2 z 6 wysp"`, fokus pozostaje na inputcie |
| 9 | Focus return: klik karty Rozmowa → Powrót → fokus wraca na kartę | ✅ | `document.activeElement` = `<a href="/wyspa/rozmowa">` (karta Rozmowa) po powrocie na `/` |

### Ścieżki screenów

```
/tmp/vcc-verify/shots/home-desktop.png
/tmp/vcc-verify/shots/home-tablet.png
/tmp/vcc-verify/shots/home-mobile.png
/tmp/vcc-verify/shots/wyspa-rozmowa.png
/tmp/vcc-verify/shots/wyspa-404.png
/tmp/vcc-verify/shots/search-pamiec.png
/tmp/vcc-verify/shots/focus-return.png
```

Skrypt weryfikacyjny: `/tmp/vcc-verify/cdp.mjs` (bez nowych zależności w repo).

## Werdykt

**SHIP** ✅

Wszystkie wymagane testy przechodzą. Fix 404 działa poprawnie — błędne URL-e typu `/wyspa/xxxxx` renderują `NotFoundPage` z sensownym feedbackiem zamiast cichego redirectu na `/`. Hero webp jest serwowany. Focus management (H1 na island page, powrót na kartę po back-linku) działa. Search filtruje i ogłasza wynik przez aria-live.

## Uwagi dla koordynatora

- Narzędzia `workspace-mcp` do tworzenia notatek (`create_note_workspace-mcp`) nie były wystawione jako funkcje w tym runtime agenta, dlatego raport zapisałam jako plik `verification-report-round2.md` w roocie repo jako najbliższy możliwy odpowiednik notatki. Treść można przenieść do notatki jeśli potrzeba.
- Raport czysto w tekście (bez diagramów/CLI bloków) — plik nie ma bogatej składni notatki.
