import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const HeroSection = (): JSX.Element => (
  <section class="min-h-[calc(100vh-4rem)] 2xl:min-h-0 2xl:h-[800px]">
    <div
      class={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 min-h-[calc(100vh-5rem)] 2xl:min-h-0 h-full`}
    >
      {/* Left — Text */}
      <div class="flex flex-col justify-center py-12 lg:py-0 lg:pr-16 order-2 lg:order-1">
        <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-8">
          Seit 1984 · Europas größter Antiquitätenhandel
        </p>
        <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
          Wir verkaufen Ihre Kunst und Antiquitäten — an über 50.000 Sammler
          weltweit.
        </h1>
        <p class="text-base leading-relaxed text-zinc-500 max-w-md mb-10">
          Professionell fotografiert, kunsthistorisch bewertet und an eine
          internationale Käuferschaft vermittelt.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            class="text-sm font-semibold text-white no-underline bg-zinc-900 px-8 py-4 inline-block rounded text-center hover:bg-zinc-800 transition-colors"
          >
            Unverbindlich anfragen
          </a>
          <a
            href="/lets-start"
            class="text-sm font-semibold text-zinc-900 no-underline bg-zinc-100 px-8 py-4 inline-block rounded text-center hover:bg-zinc-200 transition-colors"
          >
            So funktioniert's
          </a>
        </div>

        {/* Scroll indicator — only on desktop */}
        <div class="hidden lg:flex justify-center mt-16">
          <a
            href="#prozess"
            class="text-zinc-400 hover:text-zinc-600 transition-colors animate-bounce"
          >
            <i class="ti ti-chevron-down text-2xl" />
          </a>
        </div>
      </div>

      {/* Right — Image */}
      <div
        class="bg-cover bg-center rounded-lg min-h-[280px] lg:min-h-0 order-1 lg:order-2"
        style="background-image: url(/public/imgs/VK011752.webp)"
      />
    </div>
  </section>
);
