import {
  getContent,
  localizedPath,
  locales,
  routeKeys,
  type Locale,
  type RouteKey,
} from "./i18n";

export const siteUrl = (process.env.SITE_URL ?? "https://kolb-antik.de").replace(/\/$/, "");

export const siteImage = "/public/imgs/social-preview.jpg";

export const absoluteUrl = (path: string): string =>
  path.startsWith("http") ? path : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const routeUrl = (locale: Locale, route: RouteKey): string =>
  absoluteUrl(localizedPath(locale, route));

export const alternateUrls = (route: RouteKey): Record<string, string> => {
  const alternates = Object.fromEntries(
    locales.map((locale) => [locale, routeUrl(locale, route)]),
  ) as Record<Locale, string>;

  return {
    ...alternates,
    "x-default": routeUrl("de", route),
  };
};

const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "Kolb Antik GmbH",
  url: siteUrl,
  logo: absoluteUrl("/public/logo.svg"),
  image: absoluteUrl(siteImage),
  email: "kurprinz@kolb-antik.de",
  telephone: "+49 731 850754",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Finninger Straße 56",
    postalCode: "89231",
    addressLocality: "Neu-Ulm",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.ebay.de/str/kolbantikulm?_sop=16&_tab=shop",
    "https://www.ebay.de/ebaylive/sellers/z4h-QvKBQJO",
    "https://www.lot-tissimo.com/de-de/auction-catalogues/kolb",
    "https://www.instagram.com/kolb.antik.ulm/",
  ],
});

const websiteJsonLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Kolb Antik",
  inLanguage: locale,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
});

const breadcrumbJsonLd = (locale: Locale, route: RouteKey) => {
  const content = getContent(locale);
  const routeTitle = content.pages[route].meta.title.split("—")[0]?.trim() ?? content.common.brand;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Kolb Antik",
        item: routeUrl(locale, "home"),
      },
      ...(route === "home"
        ? []
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: routeTitle,
              item: routeUrl(locale, route),
            },
          ]),
    ],
  };
};

export const pageJsonLd = (locale: Locale, route: RouteKey): unknown[] => [
  organizationJsonLd(),
  websiteJsonLd(locale),
  breadcrumbJsonLd(locale, route),
];

const sitemapUrlEntry = (route: RouteKey, canonicalLocale: Locale): string => {
  const alternates = locales
    .map(
      (locale) =>
        `    <xhtml:link rel="alternate" hreflang="${locale}" href="${routeUrl(locale, route)}" />`,
    )
    .join("\n");

  return `  <url>
    <loc>${routeUrl(canonicalLocale, route)}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${routeUrl("de", route)}" />
  </url>`;
};

export const sitemapXml = (): string => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routeKeys.flatMap((route) => locales.map((locale) => sitemapUrlEntry(route, locale))).join("\n")}
</urlset>
`;

export const robotsTxt = (): string => `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;
