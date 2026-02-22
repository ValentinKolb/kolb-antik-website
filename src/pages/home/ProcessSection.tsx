import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const steps = [
  {
    num: "01",
    title: "Kontakt aufnehmen",
    text: "Fotos senden per E-Mail, Telefon oder WhatsApp. Schnell und unkompliziert.",
  },
  {
    num: "02",
    title: "Bewertung & Beratung",
    text: "Kostenlose Einschätzung durch unsere Kunsthistoriker. Transparent und fair.",
  },
  {
    num: "03",
    title: "Verkauf & Auszahlung",
    text: "Professionelle Fotografie, Beschreibung und weltweite Vermarktung.",
  },
];

export const ProcessSection = (): JSX.Element => (
  <section
    id="prozess"
    class={`${containerClass} scroll-mt-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        PROZESS
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug mb-4">
        In drei Schritten zum Verkauf
      </h2>
      <a
        href="/lets-start"
        class="text-xs font-semibold text-zinc-900 no-underline bg-zinc-100 px-4 py-2 inline-block rounded text-center hover:bg-zinc-200 transition-colors leading-none"
      >
        Mehr Info's <i class="ti ti-arrow-right ml-1" />
      </a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
      {steps.map((step) => (
        <div class="p-6 lg:p-8 bg-zinc-50 rounded-lg">
          <h3 class="text-xl font-medium mb-4">
            <span class="text-zinc-300 mr-3">{step.num}</span>
            <span class="text-zinc-900">{step.title}</span>
          </h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{step.text}</p>
        </div>
      ))}
    </div>
  </section>
);
