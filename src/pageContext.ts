import type { Context } from "hono";
import {
  getContent,
  localeFromPath,
  type Content,
  type Locale,
  type RouteKey,
} from "./i18n";

export type PageContext = {
  content: Content;
  locale: Locale;
  route: RouteKey;
};

export const pageContext = (c: Context, route: RouteKey): PageContext => {
  const locale = localeFromPath(new URL(c.req.url).pathname) ?? "de";
  const content = getContent(locale);
  const meta = content.pages[route].meta;

  c.get("page").locale = locale;
  c.get("page").title = meta.title;
  c.get("page").description = meta.description;

  return { content, locale, route };
};
