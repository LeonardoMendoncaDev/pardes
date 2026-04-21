// Gera og-image.png a partir de og-image.svg usando sharp.
// Corre com: node scripts/gen-og.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, '../public/og-image.svg');
const pngPath = resolve(__dirname, '../public/og-image.png');

const svg = readFileSync(svgPath);
await sharp(svg, { density: 300 })
	.resize(1200, 630)
	.png({ quality: 90, compressionLevel: 9 })
	.toFile(pngPath);

console.log(`Gerado: ${pngPath}`);
