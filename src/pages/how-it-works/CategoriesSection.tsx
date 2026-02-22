import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const categories = [
  { icon: "ti-palette", label: "Gemälde & Grafiken" },
  { icon: "ti-cup", label: "Porzellan & Keramik" },
  { icon: "ti-diamond", label: "Silber & Metalle" },
  { icon: "ti-armchair", label: "Möbel" },
  { icon: "ti-rings", label: "Schmuck & Uhren" },
  { icon: "ti-yin-yang", label: "Asiatische Kunst" },
  { icon: "ti-book", label: "Bücher & Autographen" },
  { icon: "ti-puzzle", label: "Sammlerstücke" },
];

export const CategoriesSection = (): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        WAS WIR VERKAUFEN
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        Von der Alltagsantiquität bis zum Meisterwerk
      </h2>
      <p class="text-sm text-zinc-500 leading-relaxed mt-4">
        Nicht sicher, ob Ihr Stück geeignet ist? Kontaktieren Sie uns — wir
        geben eine ehrliche Einschätzung.
      </p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <div class="p-5 bg-zinc-50 rounded-lg text-center">
          <i class={`ti ${cat.icon} text-2xl text-zinc-400 mb-3 block`} />
          <span class="text-sm font-medium text-zinc-700">{cat.label}</span>
        </div>
      ))}
    </div>
  </section>
);
