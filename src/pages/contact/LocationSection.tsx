import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const LocationSection = (): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-center`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        STANDORT
      </p>
      <h2 class="font-serif text-2xl font-normal leading-snug mb-6">
        Kolb Antik GmbH
      </h2>
      <div class="flex flex-col gap-3 text-base text-zinc-500 mb-6">
        <p>Finninger Straße 56</p>
        <p>89231 Neu-Ulm</p>
        <p>Deutschland</p>
      </div>
      <div class="flex flex-col gap-2 text-sm text-zinc-500 mb-8">
        <p>
          <span class="font-medium text-zinc-700">Öffnungszeiten:</span> Mo–Fr,
          9–17 Uhr
        </p>
        <p>
          <span class="font-medium text-zinc-700">Besuche:</span> Nach
          Vereinbarung
        </p>
      </div>
      <a
        href="https://maps.google.com/?q=Finningerstraße+56+89231+Neu+Ulm"
        target="_blank"
        rel="noopener"
        class="text-sm font-semibold text-zinc-900 no-underline bg-zinc-100 px-6 py-3 inline-block rounded hover:bg-zinc-200 transition-colors"
      >
        Route planen
      </a>
    </div>
    {/* Map */}
    <div class="aspect-[4/3] rounded-lg overflow-hidden">
      <img
        src="/public/map.webp"
        alt="Standort Kolb Antik GmbH, Neu-Ulm"
        class="w-full h-full object-cover"
      />
    </div>
  </section>
);
