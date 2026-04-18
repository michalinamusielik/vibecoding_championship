import { mkdir, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const source = process.env.HERO_SOURCE ?? "/tmp/hero-src.jpg";
const outDir = resolve(projectRoot, "public", "images");
const outWebp = resolve(outDir, "hero.webp");
const outJpg = resolve(projectRoot, "public", "images", "hero.jpg");

const TARGET_WIDTH = 1600;

async function run() {
  await mkdir(outDir, { recursive: true });

  const base = sharp(source).resize({ width: TARGET_WIDTH, withoutEnlargement: true });

  await base.clone().webp({ quality: 60, effort: 6 }).toFile(outWebp);
  await base.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(outJpg);

  const webpSize = (await stat(outWebp)).size;
  const jpgSize = (await stat(outJpg)).size;

  const fmt = (bytes) => `${(bytes / 1024).toFixed(1)} kB`;
  console.log(`hero.webp  ${fmt(webpSize)}  (${outWebp})`);
  console.log(`hero.jpg   ${fmt(jpgSize)}  (${outJpg})`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
