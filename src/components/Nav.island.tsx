import { createSignal } from "solid-js";
import { localizedPath, type Content, type Locale } from "../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

type NavProps = {
  content: Content["common"];
  locale: Locale;
};

export default function Nav(props: NavProps) {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const links = () => [
    { href: localizedPath(props.locale, "howItWorks"), label: props.content.nav.howItWorks },
    { href: localizedPath(props.locale, "about"), label: props.content.nav.about },
  ];

  return (
    <nav
      id="main-nav"
      class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm transition-all duration-300"
    >
      <div
        class={`${containerClass} flex justify-between items-center h-16 transition-all duration-300`}
      >
        <a href={localizedPath(props.locale, "home")} class="flex items-center gap-3 no-underline">
          <img
            src="/public/logo.svg"
            alt="Kolb Antik"
            class="h-8 w-8 transition-all duration-300"
          />
          <span class="text-sm font-semibold tracking-widest text-zinc-900">
            {props.content.brand}
          </span>
        </a>
        {/* Desktop nav */}
        <div class="hidden md:flex gap-10 text-sm font-medium items-center">
          {links().map((link) => (
            <a
              href={link.href}
              class="text-zinc-500 no-underline hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={localizedPath(props.locale, "contact")}
            class="text-zinc-900 no-underline bg-zinc-100 px-5 py-2 rounded hover:bg-zinc-200 transition-colors"
          >
            {props.content.nav.contact}
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          class="md:hidden text-zinc-700"
          aria-label={menuOpen() ? props.content.nav.menuClose : props.content.nav.menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i class={`ti ${menuOpen() ? "ti-x" : "ti-menu-2"} text-2xl`} />
        </button>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen() && (
        <div class="md:hidden bg-white border-t border-zinc-100">
          <div class={`${containerClass} py-6 flex flex-col gap-4`}>
            {links().map((link) => (
              <a
                href={link.href}
                class="text-zinc-700 no-underline text-base font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={localizedPath(props.locale, "contact")}
              class="text-zinc-900 no-underline bg-zinc-100 px-5 py-3 rounded text-center font-semibold text-sm hover:bg-zinc-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {props.content.nav.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
