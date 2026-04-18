/**
 * Persony — trzy perspektywy, z których użytkownik/czka wchodzi
 * na archipelag. Wyspy są wspólne; persona zmienia tylko sugerowaną
 * trasę zwiedzania (islandIds).
 */

export type PersonaId = "caregiver" | "curious" | "senior";

export interface Persona {
  id: PersonaId;
  label: string;
  description: string;
  islandIds: string[];
}

export const personas: Persona[] = [
  {
    id: "caregiver",
    label: "Jestem blisko seniora",
    description:
      "Opiekujesz się kimś starszym — rodzicem, sąsiadem, podopiecznym. Szukasz konkretnych wskazówek na co dzień.",
    islandIds: [
      "rozmowa",
      "samotnosc-i-relacje",
      "umysl-i-pamiec",
      "kuchnia-i-dieta",
    ],
  },
  {
    id: "curious",
    label: "Chcę zrozumieć starzenie",
    description:
      "Interesuje cię temat, chcesz wiedzieć, z czym wiąże się starość, i być gotowy/a, zanim dotknie twoich bliskich lub ciebie.",
    islandIds: ["portret-seniora", "cialo-i-zdrowie", "umysl-i-pamiec"],
  },
  {
    id: "senior",
    label: "Jestem seniorem",
    description:
      "Chcesz zajrzeć do bazy wiedzy, która mówi o tobie językiem zwykłego człowieka — bez lekarskiego żargonu.",
    islandIds: [
      "cialo-i-zdrowie",
      "umysl-i-pamiec",
      "kuchnia-i-dieta",
      "samotnosc-i-relacje",
    ],
  },
];
