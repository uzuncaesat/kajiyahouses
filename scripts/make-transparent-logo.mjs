import sharp from "sharp";

/**
 * Beyaz zeminli altın logodan (logo-light.jpeg) arka planı silip
 * şeffaf PNG üretir. Notr (beyaz/gri) ve parlak pikseller şeffaflaştırılır;
 * sıcak altın tonları korunur.
 */
async function run() {
  const src = "public/images/logo-light.jpeg";
  const out = "public/images/logo-mark.png";

  const img = sharp(src).ensureAlpha();
  const { data, info } = await img
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info; // channels = 4
  const px = Buffer.from(data);

  for (let i = 0; i < px.length; i += channels) {
    const r = px[i];
    const g = px[i + 1];
    const b = px[i + 2];

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max - min; // renk doygunluğu
    const warm = r - b; // altın = sıcak (r > b)

    // Notr (gri/beyaz) ve sıcak olmayan pikseller arka plan kabul edilir
    const isNeutral = sat < 32 && warm < 24;

    let alpha = 255;
    if (isNeutral) {
      if (max >= 246) alpha = 0; // tam beyaz → şeffaf
      else if (max >= 205) alpha = Math.round((246 - max) * (255 / 41)); // kenar yumuşatma
      else alpha = 255; // koyu notr (varsa) opak kalsın
    }
    px[i + 3] = alpha;
  }

  await sharp(px, { raw: { width, height, channels } })
    .png()
    .toFile(out);

  console.log(`OK → ${out} (${width}x${height})`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
