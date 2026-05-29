import { createConfig } from "@valentinkolb/ssr";
import { createSSRHandler, routes } from "@valentinkolb/ssr/hono";

type PageOptions = {
  title?: string;
  description?: string;
  locale?: string;
  canonicalUrl?: string;
  alternateUrls?: Record<string, string>;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogLocale?: string;
  ogLocaleAlternate?: string;
  robots?: string;
  jsonLd?: unknown[];
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const jsonScript = (value: unknown): string =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const { config, plugin, html } = createConfig<PageOptions>({
  dev: process.env.NODE_ENV === "development",
  verbose: false,
  rootDir: import.meta.dir,
  template: ({
    body,
    scripts,
    title,
    description,
    locale,
    canonicalUrl,
    alternateUrls,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageAlt,
    ogImageWidth,
    ogImageHeight,
    ogLocale,
    ogLocaleAlternate,
    robots,
    jsonLd,
  }) => {
    const pageTitle = title ?? "Kolb Antik";
    const pageDescription = description ?? "Kunst- und Antiquitätenhandel seit 1984.";
    const safeTitle = escapeHtml(pageTitle);
    const safeDescription = escapeHtml(pageDescription);
    const alternateLinks = Object.entries(alternateUrls ?? {})
      .map(
        ([hrefLang, href]) =>
          `    <link rel="alternate" hreflang="${escapeHtml(hrefLang)}" href="${escapeHtml(href)}">`,
      )
      .join("\n");
    const jsonLdScripts = (jsonLd ?? [])
      .map((item) => `    <script type="application/ld+json">${jsonScript(item)}</script>`)
      .join("\n");

    return `<!DOCTYPE html>
<html lang="${locale ?? "de"}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="view-transition" content="same-origin">
    <title>${safeTitle}</title>
    <meta name="description" content="${safeDescription}">
    <meta name="robots" content="${escapeHtml(robots ?? "index,follow")}">
    ${canonicalUrl ? `<link rel="canonical" href="${escapeHtml(canonicalUrl)}">` : ""}
${alternateLinks}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Kolb Antik">
    <meta property="og:title" content="${escapeHtml(ogTitle ?? pageTitle)}">
    <meta property="og:description" content="${escapeHtml(ogDescription ?? pageDescription)}">
    ${canonicalUrl ? `<meta property="og:url" content="${escapeHtml(canonicalUrl)}">` : ""}
    ${ogLocale ? `<meta property="og:locale" content="${escapeHtml(ogLocale)}">` : ""}
    ${ogLocaleAlternate ? `<meta property="og:locale:alternate" content="${escapeHtml(ogLocaleAlternate)}">` : ""}
    ${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}">` : ""}
    ${ogImageAlt ? `<meta property="og:image:alt" content="${escapeHtml(ogImageAlt)}">` : ""}
    ${ogImageWidth ? `<meta property="og:image:width" content="${escapeHtml(ogImageWidth)}">` : ""}
    ${ogImageHeight ? `<meta property="og:image:height" content="${escapeHtml(ogImageHeight)}">` : ""}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(ogTitle ?? pageTitle)}">
    <meta name="twitter:description" content="${escapeHtml(ogDescription ?? pageDescription)}">
    ${ogImage ? `<meta name="twitter:image" content="${escapeHtml(ogImage)}">` : ""}
    ${ogImageAlt ? `<meta name="twitter:image:alt" content="${escapeHtml(ogImageAlt)}">` : ""}
    <link rel="icon" href="/public/favicon.ico">
    <link rel="stylesheet" href="/public/global.css">
${jsonLdScripts}
  </head>
  <body class="bg-neutral-50 text-zinc-900 font-sans antialiased">
    ${body}
  </body>
  ${scripts}
</html>`;
  },
});

export const ssr = createSSRHandler(html);
export { routes };
