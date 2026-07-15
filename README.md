# Kolb Antik Website

Website for Kolb Antik GmbH, an antiques dealer based in Ulm, Germany. Conversion-focused site guiding visitors to contact for valuations and consignment.

## Tech Stack

- **Runtime:** Bun
- **Server:** Hono
- **UI:** SolidJS (islands architecture via `@valentinkolb/ssr`)
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (sans), Playfair Display (serif) via @fontsource
- **Icons:** @tabler/icons-webfont

## Getting Started

```bash
bun install
bun run dev          # Development server on port 3000
bun run build        # Production build
bun run start        # Start production server
```

## Project Structure

```
src/
  server.tsx              Hono server, routes, middleware
  components/
    Layout.tsx            Shared page layout (nav + main + footer)
    Nav.island.tsx        Navigation bar (island, client-hydrated)
    Footer.tsx            Site footer
    BetaNotice.island.tsx Beta warning dialog (island, cookie-based)
  pages/
    home/                 Homepage (hero, process, stats, CTA, ...)
    about/                About page (history, expertise, awards, ...)
    how-it-works/         How it works (process detail, categories, ...)
    faq/                  FAQ page (accordion)
    contact/              Contact page (methods, form, location map)
    imprint/              Legal imprint
    privacy/              Privacy policy
  styles/
    global.css            Tailwind config, fonts, base styles
config.ts                 SSR config and HTML template
scripts/
  build.ts                Production build script
  preload.ts              Dev server preload
public/
  imgs/                   Product images (WebP)
  files/                  Font and icon files
  logo.svg                Site logo
Dockerfile                Multi-stage Docker build
```

## Pages and Routes

| Route          | Page            |
| -------------- | --------------- |
| `/`            | Home            |
| `/about`       | About           |
| `/lets-start`  | How it works    |
| `/faq`         | FAQ             |
| `/contact`     | Contact         |
| `/imprint`     | Legal imprint   |
| `/privacy`     | Privacy policy  |
| `/impressum`   | Redirect to /imprint |
| `/datenschutz` | Redirect to /privacy |
| `/r/:slug`     | Trackable 302 redirect |

## Tracking Redirects

Redirect targets are configured in `src/redirects.json` as `slug` and `url` pairs. The
route accepts an optional lowercase campaign source of up to 64 characters:

```text
https://kolb-antik.de/r/ebay?source=flyer-a5-2026-07
```

Every request writes one JSON event to stdout with its timestamp, slug, source, target,
and resulting status. The route reads targets only through `resolveRedirect()` so the
JSON lookup can later be replaced with a database query without changing printed URLs.

## Architecture

Pages export `default ssr(...)` handlers that are spread into Hono routes. Components with `.island.tsx` suffix are hydrated on the client (SolidJS islands). All other components are server-rendered only.

## Docker

```bash
docker build -t kolb-antik .
docker run -p 3000:3000 kolb-antik
```

Pushing a `v*` tag triggers the GitHub Actions workflow to build and push to GHCR.
