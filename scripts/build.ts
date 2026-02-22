import { plugin } from "../config";
import { $ } from "bun";
import { readFileSync, mkdirSync, copyFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";

process.env.NODE_ENV = "production";

// 1. Build CSS with Tailwind
await $`tailwindcss -i src/styles/global.css -o public/global.css --minify`;

// 2. Copy font files referenced in the built CSS to public/
const css = readFileSync("public/global.css", "utf-8");
const urlRefs = [...css.matchAll(/url\(\.\/([^)?"]+)/g)].map((m) => m[1]);

for (const ref of urlRefs) {
  const dest = resolve("public", ref);
  if (existsSync(dest)) continue;

  // Find source in node_modules
  const sources = [
    `node_modules/@fontsource/inter/${ref}`,
    `node_modules/@fontsource/playfair-display/${ref}`,
    `node_modules/@tabler/icons-webfont/dist/${ref}`,
  ];

  const src = sources.find((s) => existsSync(s));
  if (src) {
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(src, dest);
  }
}

console.log(`Copied ${urlRefs.length} font files to public/`);

// 3. Compile server + island chunks
const result = await Bun.build({
  entrypoints: ["src/server.tsx"],
  outdir: "dist",
  target: "bun",
  minify: true,
  plugins: [plugin()],
});

if (!result.success) {
  console.error("Build failed:");
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

console.log("Built src/server.tsx -> dist/server.js");
