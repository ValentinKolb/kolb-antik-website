import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { config, routes } from "../config";
import {
  detectLocale,
  isLocale,
  localeCookie,
  localizedPath,
  type Locale,
} from "./i18n";

// Pages
import home from "./pages/home/index";
import about from "./pages/about/index";
import howItWorks from "./pages/how-it-works/index";
import faq from "./pages/faq/index";
import contact from "./pages/contact/index";
import imprint from "./pages/imprint/index";
import privacy from "./pages/privacy/index";

const app = new Hono();

// Middleware
app.use(logger());

// SSR routes
app.route("/_ssr", routes(config));

// Static files
app.use("/public/*", serveStatic({ root: "./" }));

const setLocaleCookie = (locale: Locale) => async (c: any, next: () => Promise<void>) => {
  c.header("Set-Cookie", localeCookie(locale));
  await next();
};

app.use("/de", setLocaleCookie("de"));
app.use("/de/*", setLocaleCookie("de"));
app.use("/en", setLocaleCookie("en"));
app.use("/en/*", setLocaleCookie("en"));

app.get("/set-language/:locale", (c) => {
  const locale = c.req.param("locale");

  if (!isLocale(locale)) {
    return c.redirect(localizedPath(detectLocale(c.req.raw.headers), "home"), 302);
  }

  const next = c.req.query("next") ?? localizedPath(locale, "home");
  const target = next.startsWith(`/${locale}/`) || next === `/${locale}`
    ? next
    : localizedPath(locale, "home");

  c.header("Set-Cookie", localeCookie(locale));
  return c.redirect(target, 302);
});

const registerLocalizedPages = (locale: Locale) => {
  const prefix = `/${locale}`;

  app.get(prefix, ...home);
  app.get(`${prefix}/`, ...home);
  app.get(`${prefix}/about`, ...about);
  app.get(`${prefix}/lets-start`, ...howItWorks);
  app.get(`${prefix}/faq`, ...faq);
  app.get(`${prefix}/contact`, ...contact);
  app.get(`${prefix}/imprint`, ...imprint);
  app.get(`${prefix}/privacy`, ...privacy);
};

registerLocalizedPages("de");
registerLocalizedPages("en");

app.get("/", (c) => c.redirect(localizedPath(detectLocale(c.req.raw.headers), "home"), 302));

const redirectLegacy = (path: string) => (c: any) =>
  c.redirect(`/${detectLocale(c.req.raw.headers)}${path}`, 302);

app.get("/about", redirectLegacy("/about"));
app.get("/lets-start", redirectLegacy("/lets-start"));
app.get("/faq", redirectLegacy("/faq"));
app.get("/contact", redirectLegacy("/contact"));
app.get("/imprint", redirectLegacy("/imprint"));
app.get("/privacy", redirectLegacy("/privacy"));

// German redirects (legally required for /impressum)
app.get("/impressum", (c) => c.redirect(localizedPath("de", "imprint"), 301));
app.get("/datenschutz", (c) => c.redirect(localizedPath("de", "privacy"), 301));

export default {
  port: 3000,
  fetch: app.fetch,
};
