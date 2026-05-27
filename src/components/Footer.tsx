import type { JSX } from "solid-js";
import {
  languagePreferencePath,
  localizedPath,
  type Content,
  type Locale,
  type RouteKey,
} from "../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

type FooterProps = {
  content: Content["common"];
  locale: Locale;
  route: RouteKey;
};

export const Footer = (props: FooterProps): JSX.Element => {
  const navLinks = [
    { href: localizedPath(props.locale, "howItWorks"), label: props.content.nav.howItWorks },
    { href: localizedPath(props.locale, "about"), label: props.content.nav.about },
    { href: localizedPath(props.locale, "faq"), label: props.content.footer.faq },
    { href: localizedPath(props.locale, "contact"), label: props.content.nav.contact },
    {
      href: "https://www.ebay.de/str/kolbantikulm?_sop=16&_tab=shop",
      label: "eBay",
      external: true,
    },
    {
      href: "https://www.lot-tissimo.com/de-de/auction-catalogues/kolb",
      label: "lot-tissimo",
      external: true,
    },
    {
      href: "https://www.instagram.com/kolb.antik.ulm/",
      label: "Instagram",
      external: true,
    },
  ];
  const legalLinks = [
    { href: localizedPath(props.locale, "imprint"), label: props.content.footer.imprint },
    { href: localizedPath(props.locale, "privacy"), label: props.content.footer.privacy },
  ];

  return (
  <footer class="py-10 bg-zinc-50">
    <div class={`${containerClass} flex flex-col gap-8`}>
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div class="flex items-center gap-3">
          <img src="/public/logo.svg" alt="Kolb Antik" class="h-7 w-7" />
          <span class="text-sm font-semibold tracking-widest text-zinc-900">
            {props.content.brand}
          </span>
        </div>
        <div class="flex flex-wrap gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              href={link.href}
              class="text-zinc-500 no-underline hover:text-zinc-900 transition-colors"
              {...("external" in link ? { target: "_blank", rel: "noopener" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div class="border-t border-zinc-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
        <span>&copy; {new Date().getFullYear()} {props.content.footer.copyright}</span>
        <div class="flex flex-wrap justify-center gap-6">
          {legalLinks.map((link) => (
            <a
              href={link.href}
              class="text-zinc-400 no-underline hover:text-zinc-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <span class="text-zinc-300" aria-hidden="true">|</span>
          <i class="ti ti-world text-sm text-zinc-400" aria-hidden="true" />
          <a
            href={languagePreferencePath("de", props.route)}
            class={`no-underline transition-colors ${props.locale === "de" ? "text-zinc-700" : "text-zinc-400 hover:text-zinc-700"}`}
          >
            {props.content.footer.german}
          </a>
          <a
            href={languagePreferencePath("en", props.route)}
            class={`no-underline transition-colors ${props.locale === "en" ? "text-zinc-700" : "text-zinc-400 hover:text-zinc-700"}`}
          >
            {props.content.footer.english}
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
};
