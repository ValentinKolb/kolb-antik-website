import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const CTASection = (): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-center`}
  >
    {/* Content */}
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        KONTAKT
      </p>
      <h2 class="font-serif text-3xl font-normal mb-4 tracking-tight">
        Haben Sie Objekte, die Sie verkaufen möchten?
      </h2>
      <p class="text-base text-zinc-500 mb-8 max-w-md">
        Kontaktieren Sie uns für eine kostenlose und unverbindliche
        Einschätzung. Wir melden uns innerhalb von 48 Stunden.
      </p>
      <a
        href="/contact"
        class="text-sm font-semibold text-white no-underline bg-zinc-900 px-8 py-4 inline-block rounded text-center hover:bg-zinc-800 transition-colors"
      >
        Jetzt Kontakt aufnehmen
      </a>
    </div>

    {/* Image */}
    <div
      class="aspect-square bg-cover bg-center rounded-lg"
      style="background-image: url(/public/imgs/VK011744.webp)"
    />
  </section>
);
