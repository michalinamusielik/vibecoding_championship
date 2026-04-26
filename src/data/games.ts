/**
 * Dane do mini-gier: pary pamięciowe, "co tu nie pasuje" i szarady.
 * Treść zagadek pochodzi z materiałów z context/codzienność-kontakt z seniorem.
 */

export interface MemoryEmoji {
  id: string;
  emoji: string;
  label: string;
}

export const memoryEmojis: MemoryEmoji[] = [
  { id: "sun", emoji: "🌻", label: "słonecznik" },
  { id: "tree", emoji: "🌳", label: "drzewo" },
  { id: "bird", emoji: "🐦", label: "ptak" },
  { id: "cat", emoji: "🐱", label: "kot" },
  { id: "coffee", emoji: "☕", label: "kawa" },
  { id: "cake", emoji: "🎂", label: "tort" },
];

export interface OddRound {
  words: string[];
  answer: string;
  explanation: string;
}

export const oddRounds: OddRound[] = [
  {
    words: ["lodówka", "zlew", "nóż", "patelnia", "szklanka", "sanki", "kuchnia"],
    answer: "sanki",
    explanation: "Reszta to sprzęty i miejsca związane z kuchnią — sanki tu nie pasują.",
  },
  {
    words: ["lew", "żyrafa", "słoń", "tygrys", "krokodyl", "papuga", "dąb"],
    answer: "dąb",
    explanation: "Wszystkie inne to zwierzęta — dąb jest jedynym drzewem.",
  },
  {
    words: ["kierownica", "błotnik", "silnik", "koła", "klakson", "książka"],
    answer: "książka",
    explanation: "Pozostałe wyrazy to części samochodu — książka tu nie pasuje.",
  },
  {
    words: ["róża", "tulipan", "goździk", "żonkil", "stokrotka", "brzoza"],
    answer: "brzoza",
    explanation: "Wszystkie inne to kwiaty — brzoza jest drzewem.",
  },
  {
    words: ["talerz", "widelec", "szklanka", "nóż", "waza", "łyżka", "szkoła"],
    answer: "szkoła",
    explanation: "Reszta to naczynia i sztućce — szkoła tu nie pasuje.",
  },
];

export interface Riddle {
  id: string;
  text: string;
  answer: string;
}

export const riddles: Riddle[] = [
  {
    id: "grudzien",
    text: "Pierwsza trzyliterowa to gruszki prawie połowa, druga jest wokół od rana do zmroku, całość — miesiąc zimowy.",
    answer: "GRUDZIEŃ",
  },
  {
    id: "konik-polny",
    text: "Nie liść, a na łące zielony, nie zegar, a cyka jak szalony, nie w stajni, a skacze wolny. Już wiem, to…",
    answer: "KONIK POLNY",
  },
  {
    id: "muchomory",
    text: "Choć mają kropeczki, to nie biedroneczki, kropek tych bez liku na kapelusiku.",
    answer: "MUCHOMORY",
  },
  {
    id: "pajak",
    text: "Choć ma osiem nóg, zna niewiele dróg, choć ma własne sieci, ryba tam nie wleci.",
    answer: "PAJĄK",
  },
];

export interface ProverbRound {
  start: string;
  options: string[];
  answer: string;
}

export const proverbRounds: ProverbRound[] = [
  {
    start: "Kto rano wstaje…",
    options: ["temu Pan Bóg daje", "ten szybciej zasypia", "ten do południa pracuje"],
    answer: "temu Pan Bóg daje",
  },
  {
    start: "Bez pracy…",
    options: ["nie ma kołaczy", "nie ma chleba", "nie ma snu"],
    answer: "nie ma kołaczy",
  },
  {
    start: "Gdzie kucharek sześć…",
    options: ["tam nie ma co jeść", "tam obiad gotowy", "tam ciasto się piecze"],
    answer: "tam nie ma co jeść",
  },
  {
    start: "Mądry Polak…",
    options: ["po szkodzie", "przed obiadem", "w niedzielę"],
    answer: "po szkodzie",
  },
  {
    start: "Nie chwal dnia…",
    options: ["przed zachodem słońca", "przed śniadaniem", "zanim się rozpocznie"],
    answer: "przed zachodem słońca",
  },
];
