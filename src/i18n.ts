import de from "./content/de.json";
import en from "./content/en.json";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export type RouteKey =
  | "home"
  | "howItWorks"
  | "about"
  | "faq"
  | "contact"
  | "imprint"
  | "privacy";

export const routePaths: Record<RouteKey, string> = {
  home: "/",
  howItWorks: "/lets-start",
  about: "/about",
  faq: "/faq",
  contact: "/contact",
  imprint: "/imprint",
  privacy: "/privacy",
};

const contentByLocale = { de, en } as const;

export type Content = typeof de;

export const isLocale = (value: string | undefined): value is Locale =>
  value === "de" || value === "en";

export const getContent = (locale: Locale): Content => contentByLocale[locale];

export const localizedPath = (locale: Locale, route: RouteKey): string => {
  const path = routePaths[route];
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
};

export const languagePreferencePath = (
  locale: Locale,
  route: RouteKey,
): string =>
  `/set-language/${locale}?next=${encodeURIComponent(localizedPath(locale, route))}`;

export const stripLocaleFromPath = (pathname: string): string => {
  const [, maybeLocale, ...rest] = pathname.split("/");

  if (!isLocale(maybeLocale)) {
    return pathname || "/";
  }

  const stripped = `/${rest.join("/")}`;
  return stripped === "/" ? "/" : stripped.replace(/\/$/, "");
};

export const switchLocalePath = (
  targetLocale: Locale,
  currentPathname: string,
): string => {
  const path = stripLocaleFromPath(currentPathname);
  return path === "/" ? `/${targetLocale}` : `/${targetLocale}${path}`;
};

export const localeFromPath = (pathname: string): Locale | undefined => {
  const [, maybeLocale] = pathname.split("/");
  return isLocale(maybeLocale) ? maybeLocale : undefined;
};

export const localeFromCookie = (headers: Headers): Locale | undefined => {
  const cookieLocale = headers
    .get("cookie")
    ?.split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("locale="))
    ?.split("=")[1];

  return isLocale(cookieLocale) ? cookieLocale : undefined;
};

const primaryBrowserLanguage = (headers: Headers): string | undefined =>
  headers
    .get("accept-language")
    ?.split(",")[0]
    ?.trim()
    .split(";")[0]
    ?.toLowerCase();

export const shouldShowLanguagePrompt = (headers: Headers): boolean => {
  if (localeFromCookie(headers)) {
    return false;
  }

  const primaryLanguage = primaryBrowserLanguage(headers);
  return Boolean(primaryLanguage && !primaryLanguage.startsWith("de"));
};

export const localeCookie = (locale: Locale): string =>
  `locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;

export const detectLocale = (headers: Headers): Locale => {
  const cookieLocale = localeFromCookie(headers);

  if (cookieLocale) {
    return cookieLocale;
  }

  return defaultLocale;
};

export const routeForPath = (pathname: string): RouteKey => {
  const path = stripLocaleFromPath(pathname);
  const route = Object.entries(routePaths).find(([, routePath]) => routePath === path);
  return (route?.[0] as RouteKey | undefined) ?? "home";
};
