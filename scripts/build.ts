import { plugin } from "../config";

process.env.NODE_ENV = "production";

// Compile server + island chunks
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
