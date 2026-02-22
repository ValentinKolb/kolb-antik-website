import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const items = [
  {
    title: "Eigenes Fotostudio",
    text: "Professionelle Produktfotografie mit kalibrierten Farben, mehreren Perspektiven und Detailaufnahmen — für optimale Präsentation auf eBay.",
    img: "VK011699",
  },
  {
    title: "Sichere Lagerhaltung",
    text: "Über 1.000 m² Lagerfläche mit Inventarverwaltung und sicherer Aufbewahrung Ihrer Objekte bis zum Verkauf.",
    img: "VK011743",
  },
  {
    title: "Täglicher Versand",
    text: "Fachgerechte Verpackung und täglicher Versand weltweit. Abholservice in ganz Deutschland und der EU für größere Sammlungen.",
    img: "VK011766",
  },
];

export const InfrastructureSection = (): JSX.Element => (
  <section class={containerClass}>
    <div class="mb-10">
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        INFRASTRUKTUR
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        Alles aus einer Hand
      </h2>
    </div>
    <div class="flex flex-col gap-8">
      {items.map((item, i) => (
        <div
          class={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
        >
          <div
            class={`aspect-[3/2] bg-cover bg-center rounded-lg ${i % 2 === 1 ? "lg:order-last" : ""}`}
            style={`background-image: url(/public/imgs/${item.img}.webp)`}
          />
          <div class={i % 2 === 1 ? "lg:order-first" : ""}>
            <h3 class="font-serif text-2xl font-normal mb-4">{item.title}</h3>
            <p class="text-base text-zinc-500 leading-relaxed">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
