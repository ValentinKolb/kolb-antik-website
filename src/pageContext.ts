import type { Context } from "hono";
import {
  getContent,
  localeFromPath,
  shouldShowLanguagePrompt,
  type Content,
  type Locale,
  type RouteKey,
} from "./i18n";
import { absoluteUrl, alternateUrls, pageJsonLd, routeUrl, siteImage } from "./seo";

export type PageContext = {
  content: Content;
  locale: Locale;
  route: RouteKey;
  showLanguagePrompt: boolean;
};

export const pageContext = (c: Context, route: RouteKey): PageContext => {
  const locale = localeFromPath(new URL(c.req.url).pathname) ?? "de";
  const content = getContent(locale);
  const meta = content.pages[route].meta;

  c.get("page").locale = locale;
  c.get("page").title = meta.title;
  c.get("page").description = meta.description;
  c.get("page").canonicalUrl = routeUrl(locale, route);
  c.get("page").alternateUrls = alternateUrls(route);
  c.get("page").ogTitle = meta.title;
  c.get("page").ogDescription = meta.description;
  c.get("page").ogImage = absoluteUrl(siteImage);
  c.get("page").ogImageAlt = "Kolb Antik";
  c.get("page").ogImageWidth = "1200";
  c.get("page").ogImageHeight = "630";
  c.get("page").ogLocale = locale === "de" ? "de_DE" : "en_US";
  c.get("page").ogLocaleAlternate = locale === "de" ? "en_US" : "de_DE";
  c.get("page").robots = "index,follow";
  c.get("page").jsonLd = pageJsonLd(locale, route);

  return {
    content,
    locale,
    route,
    showLanguagePrompt: shouldShowLanguagePrompt(c.req.raw.headers),
  };
};
