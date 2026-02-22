import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const navLinks = [
  { href: "/lets-start", label: "So funktioniert's" },
  { href: "/about", label: "Über uns" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Kontakt" },
  { href: "https://www.ebay.de/str/kurprinz?_sop=16", label: "eBay Shop", external: true },
];

const legalLinks = [
  { href: "/imprint", label: "Impressum" },
  { href: "/privacy", label: "Datenschutz" },
];

export const Footer = (): JSX.Element => (
  <footer class="py-10 bg-zinc-50">
    <div class={`${containerClass} flex flex-col gap-8`}>
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div class="flex items-center gap-3">
          <img src="/public/logo.svg" alt="Kolb Antik" class="h-7 w-7" />
          <span class="text-sm font-semibold tracking-widest text-zinc-900">
            KOLB ANTIK
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
        <span>&copy; {new Date().getFullYear()} Kolb Antik GmbH, Ulm</span>
        <div class="flex gap-6">
          {legalLinks.map((link) => (
            <a
              href={link.href}
              class="text-zinc-400 no-underline hover:text-zinc-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
