import type { Island, Section } from "../data/islands";

function normalize(value: string): string {
  return value
    .toLocaleLowerCase("pl")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");
}

function sectionHaystack(section: Section): string[] {
  const parts: string[] = [section.title];
  switch (section.kind) {
    case "pigulka":
    case "praktyki":
    case "unikaj":
    case "zapamietaj":
      parts.push(...section.bullets);
      break;
    case "cytat":
      parts.push(section.quote, section.author);
      break;
    case "tabela":
      parts.push(...section.columns);
      for (const row of section.rows) parts.push(...row);
      break;
  }
  return parts;
}

function islandHaystack(island: Island): string {
  const parts: string[] = [island.title, island.tagline, island.intro];
  for (const section of island.sections) {
    parts.push(...sectionHaystack(section));
  }
  return normalize(parts.join(" "));
}

export function searchIslands(islands: Island[], query: string): Island[] {
  const trimmed = query.trim();
  if (trimmed === "") return islands;
  const needle = normalize(trimmed);
  return islands.filter((island) => islandHaystack(island).includes(needle));
}
