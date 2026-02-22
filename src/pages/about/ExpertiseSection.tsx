import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const departments = [
  {
    icon: "ti-book",
    title: "Kunsthistorik",
    text: "Unsere Kunsthistoriker bewerten und beschreiben jedes Objekt fachkundig — von der Epoche bis zur Provenienz.",
  },
  {
    icon: "ti-camera",
    title: "Fotografie",
    text: "Professionelle Produktfotografie im eigenen Studio. Jedes Stück wird optimal in Szene gesetzt.",
  },
  {
    icon: "ti-truck",
    title: "Logistik",
    text: "Sichere Lagerung, fachgerechte Verpackung und täglicher Versand weltweit — alles unter einem Dach.",
  },
];

export const ExpertiseSection = (): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        UNSER TEAM
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        Über 40 Spezialisten unter einem Dach
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
      {departments.map((dept) => (
        <div class="p-6 lg:p-8 bg-zinc-50 rounded-lg">
          <i class={`ti ${dept.icon} text-2xl text-zinc-400 mb-4 block`} />
          <h3 class="text-lg font-medium text-zinc-900 mb-3">{dept.title}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{dept.text}</p>
        </div>
      ))}
    </div>
  </section>
);
