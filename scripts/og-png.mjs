import sharp from 'sharp'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const svgPath = join(root, 'public', 'og-image.svg')
const outPath = join(root, 'public', 'og-image.png')

const buf = readFileSync(svgPath)
await sharp(buf).png().toFile(outPath)
console.log('Wrote', outPath)
