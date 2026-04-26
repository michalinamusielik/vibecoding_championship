import type { PersonaId } from "../data/personas";

const PERSONA_EYEBROW: Record<PersonaId, string> = {
  caregiver: "BLISCY",
  curious: "CIEKAWI",
  senior: "SENIORZY",
};

const ORDER: PersonaId[] = ["caregiver", "curious", "senior"];

export function personaEyebrows(personas: readonly PersonaId[]): string[] {
  const set = new Set(personas);
  return ORDER.filter((p) => set.has(p)).map((p) => PERSONA_EYEBROW[p]);
}
