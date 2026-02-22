import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const WhyKolbSection = (): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
  >
    <div
      class="aspect-[4/3] bg-cover bg-center rounded-lg"
      style="background-image: url(/public/imgs/VK011711.webp)"
    />
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        WARUM KOLB ANTIK
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug mb-6">
        Die größte Bühne für Ihre Objekte
      </h2>
      <p class="text-base text-zinc-500 leading-relaxed mb-6">
        Mit über 50.000 Followern und bis zu 15.000 aktiven Angeboten
        monatlich bieten wir eine Reichweite, die kein einzelner Händler
        alleine erreicht. Ihre Objekte werden international sichtbar — von
        Ulm bis Tokio.
      </p>
      <p class="text-base text-zinc-500 leading-relaxed">
        Kunsthistorische Bewertung, professionelle Fotografie, sichere
        Lagerung und täglicher Versand — alles unter einem Dach.
      </p>
    </div>
  </section>
);
