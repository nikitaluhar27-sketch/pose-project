// scripts/generate-favicons.js
// Usage:
// 1) Put your source logo (the image you uploaded here) at: public/source_logo.png
//    Recommended: a square PNG at 512x512 or larger, white background (you selected "keep white").
// 2) Install dependencies: npm install sharp png-to-ico
// 3) Run: npm run generate:favicons
//
// This script writes:
// - public/favicon.ico (contains 16,32,48,64 sizes)
// - public/favicon-32x32.png
// - public/apple-touch-icon.png (180x180)

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

(async () => {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const src = path.join(publicDir, 'source_logo.png');

    if (!fs.existsSync(src)) {
      console.error('Source image not found: public/source_logo.png');
      console.error('Please add your logo (the one you uploaded here) to public/source_logo.png and run the script again.');
      process.exit(1);
    }

    // Generate PNG sizes
    const png32 = path.join(publicDir, 'favicon-32x32.png');
    const apple = path.join(publicDir, 'apple-touch-icon.png');
    const sizes = [
      { size: 32, out: png32 },
      { size: 180, out: apple },
    ];

    for (const s of sizes) {
      await sharp(src)
        .resize(s.size, s.size, { fit: 'contain', background: { r:255,g:255,b:255,alpha:1 } })
        .png()
        .toFile(s.out);
      console.log('Wrote', s.out);
    }

    // For ICO: create multiple PNGs and convert to ICO
    const icoSizes = [16, 32, 48, 64];
    const tmpFiles = [];
    for (const s of icoSizes) {
      const tmp = path.join(publicDir, `._tmp_favicon_${s}.png`);
      await sharp(src)
        .resize(s, s, { fit: 'contain', background: { r:255,g:255,b:255,alpha:1 } })
        .png()
        .toFile(tmp);
      tmpFiles.push(tmp);
    }

    // Handle packages that export default vs. direct function
    const toIco = pngToIco.default || pngToIco;
    const icoBuf = await toIco(tmpFiles);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
    console.log('Wrote', path.join(publicDir, 'favicon.ico'));

    // Cleanup temp files
    for (const t of tmpFiles) fs.unlinkSync(t);

    console.log('Favicons generated successfully!');
  } catch (err) {
    console.error('Error generating favicons:', err);
    process.exit(1);
  }
})();