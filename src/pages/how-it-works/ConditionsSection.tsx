import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const conditions = [
  {
    title: "Individuelle Provision",
    text: "Die Konditionen besprechen wir persönlich — angepasst an Ihre Situation und den Wert Ihrer Objekte.",
  },
  {
    title: "Keine Vorabkosten",
    text: "Bewertung, Fotografie, Lagerung und Einstellung sind kostenlos. Kosten entstehen erst bei erfolgreichem Verkauf.",
  },
  {
    title: "Keine Mindestmengen",
    text: "Ob ein einzelnes Stück oder eine ganze Sammlung — wir kümmern uns um jede Einlieferung.",
  },
  {
    title: "Kein Mindestverkaufspreis",
    text: "Limitlose Auktionen erzeugen mehr Bieter und führen erfahrungsgemäß zu besseren Endpreisen.",
  },
];

export const ConditionsSection = (): JSX.Element => (
  <section class={containerClass}>
    <div class="mb-10">
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        KONDITIONEN
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        Fair und transparent
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {conditions.map((c) => (
        <div class="p-6 lg:p-8 bg-zinc-50 rounded-lg">
          <h3 class="text-lg font-medium text-zinc-900 mb-3">{c.title}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{c.text}</p>
        </div>
      ))}
    </div>
  </section>
);
