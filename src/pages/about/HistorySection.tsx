import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const HistorySection = (): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        UNSERE GESCHICHTE
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug mb-6">
        Von der Werkstatt zum größten Antiquitätenhandel auf eBay
      </h2>
      <p class="text-base text-zinc-500 leading-relaxed mb-6">
        1984 begann Wolfgang Kolb mit dem Antiquitätenhandel. Was als
        Ein-Mann-Betrieb begann, entwickelte sich über vier Jahrzehnte zu
        Europas größtem Antiquitätenhandel auf eBay.
      </p>
      <p class="text-base text-zinc-500 leading-relaxed mb-6">
        Der Wendepunkt kam Anfang der 2000er Jahre: Als einer der ersten
        Antiquitätenhändler in Deutschland erkannten wir das Potenzial von eBay.
        Unter dem Nutzernamen „Kurprinz" bauten wir eine internationale
        Käuferschaft auf — heute mit über 50.000 Followern.
      </p>
      <p class="text-base text-zinc-500 leading-relaxed">
        Heute arbeitet ein Team aus Kunsthistorikern, Fotografen und
        Logistikexperten daran, jeden Tag bis zu 15.000 Objekte professionell zu
        vermarkten — von Ulm aus in die ganze Welt.
      </p>
    </div>
    <div
      class="aspect-[4/3] bg-cover bg-center rounded-lg order-first lg:order-last"
      style="background-image: url(/public/imgs/VK011747.webp)"
    />
  </section>
);
