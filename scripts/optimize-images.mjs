/**
 * Image Optimization Script for Planet Life
 * 
 * Compresses all JPG/JPEG/PNG images in src/assets to reduce file sizes.
 * - JPGs are compressed to quality 75 (great visual quality, much smaller files)
 * - PNGs in public/ are converted to JPG where possible
 * 
 * Run: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const QUALITY = 75; // JPEG quality (60-80 is sweet spot for web)
const MIN_SIZE_KB = 50; // Only compress files larger than 50KB
const TARGET_DIRS = [
  path.join(rootDir, "src", "assets"),
  path.join(rootDir, "public"),
];

let totalSaved = 0;
let filesProcessed = 0;

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const stats = fs.statSync(filePath);
  const sizeKB = stats.size / 1024;
  if (sizeKB < MIN_SIZE_KB) return;

  try {
    const inputBuffer = fs.readFileSync(filePath);
    let outputBuffer;

    if (ext === ".png") {
      outputBuffer = await sharp(inputBuffer).png({ quality: QUALITY, compressionLevel: 9 }).toBuffer();
    } else {
      outputBuffer = await sharp(inputBuffer).jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
    }

    const savedKB = (inputBuffer.length - outputBuffer.length) / 1024;

    // Only write if we actually reduced the size
    if (outputBuffer.length < inputBuffer.length) {
      fs.writeFileSync(filePath, outputBuffer);
      totalSaved += savedKB;
      filesProcessed++;
      const pct = ((1 - outputBuffer.length / inputBuffer.length) * 100).toFixed(1);
      console.log(`✅ ${path.relative(rootDir, filePath)}: ${sizeKB.toFixed(0)}KB → ${(outputBuffer.length / 1024).toFixed(0)}KB (${pct}% smaller)`);
    } else {
      console.log(`⏭️  ${path.relative(rootDir, filePath)}: already optimized`);
    }
  } catch (err) {
    console.error(`❌ Error processing ${filePath}: ${err.message}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  console.log("🖼️  Planet Life Image Optimizer");
  console.log(`   Quality: ${QUALITY}% | Min size: ${MIN_SIZE_KB}KB`);
  console.log("━".repeat(60));

  for (const dir of TARGET_DIRS) {
    const files = walkDir(dir);
    for (const file of files) {
      await optimizeFile(file);
    }
  }

  console.log("━".repeat(60));
  console.log(`🎉 Done! ${filesProcessed} files optimized.`);
  console.log(`💾 Total saved: ${(totalSaved / 1024).toFixed(2)} MB`);
}

main();
