import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "Yenifotovideolar";
const OUT = "public/images/gallery";

fs.mkdirSync(OUT, { recursive: true });

// Kullanılabilir dosyalar (HEIC ve MP4 hariç), sıralı
const files = fs
  .readdirSync(SRC)
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort();

const manifest = [];
let i = 0;
for (const f of files) {
  i += 1;
  const num = String(i).padStart(2, "0");
  const outName = `g${num}.jpg`;
  const meta = await sharp(path.join(SRC, f))
    .rotate() // EXIF yönünü uygula
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OUT, outName))
    .then((info) => info);
  const orientation = meta.width >= meta.height ? "landscape" : "portrait";
  manifest.push({ index: i, out: outName, src: f, w: meta.width, h: meta.height, orientation });
  console.log(`${num}  ${f}  ->  ${outName}  (${meta.width}x${meta.height} ${orientation})`);
}

fs.writeFileSync(
  path.join(OUT, "manifest.json"),
  JSON.stringify(manifest, null, 2)
);
console.log(`\nToplam ${manifest.length} görsel işlendi.`);
