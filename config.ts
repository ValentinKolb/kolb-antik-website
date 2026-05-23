import { createConfig } from "@valentinkolb/ssr";
import { createSSRHandler, routes } from "@valentinkolb/ssr/hono";

type PageOptions = {
  title?: string;
  description?: string;
  locale?: string;
};

export const { config, plugin, html } = createConfig<PageOptions>({
  dev: process.env.NODE_ENV === "development",
  verbose: false,
  rootDir: import.meta.dir,
  template: ({ body, scripts, title, description, locale }) => `<!DOCTYPE html>
<html lang="${locale ?? "de"}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="view-transition" content="same-origin">
    <title>${title ?? "Kolb Antik"}</title>
    <meta name="description" content="${description ?? "Kunst- und Antiquitätenhandel seit 1984."}">
    <link rel="icon" href="/public/favicon.ico">
    <link rel="stylesheet" href="/public/global.css">
  </head>
  <body class="bg-neutral-50 text-zinc-900 font-sans antialiased">
    ${body}
  </body>
  ${scripts}
</html>`,
});

export const ssr = createSSRHandler(html);
export { routes };
