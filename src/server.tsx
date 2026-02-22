import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { config, routes } from "../config";

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

// Pages
app.get("/", ...home);
app.get("/about", ...about);
app.get("/lets-start", ...howItWorks);
app.get("/faq", ...faq);
app.get("/contact", ...contact);
app.get("/imprint", ...imprint);
app.get("/privacy", ...privacy);

// German redirects (legally required for /impressum)
app.get("/impressum", (c) => c.redirect("/imprint", 301));
app.get("/datenschutz", (c) => c.redirect("/privacy", 301));

export default {
  port: 3000,
  fetch: app.fetch,
};
