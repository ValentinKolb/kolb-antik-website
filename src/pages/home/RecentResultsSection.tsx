import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const items = [
  { img: "VK011675", title: "Jugendstil Vase", price: "€ 1.280" },
  { img: "VK011686", title: "Silbernes Teeservice", price: "€ 2.340" },
  { img: "VK011713", title: "Art-Déco Skulptur", price: "€ 1.750" },
  { img: "VK011745", title: "Barocke Kommode", price: "€ 3.200" },
];

export const RecentResultsSection = (): JSX.Element => (
  <section class={`${containerClass} w-full`}>
    <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-3 lg:grid-rows-2 gap-2">
      {/* Large left image — spans 2 cols + 2 rows on desktop */}
      <div
        class="col-span-2 row-span-1 lg:row-span-2 relative overflow-hidden rounded-lg bg-cover bg-center aspect-[4/3] lg:aspect-auto"
        style="background-image: url(/public/imgs/VK011742.webp)"
      >
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
        <div class="absolute bottom-0 left-0 p-4 lg:p-6">
          <span class="block text-white text-sm lg:text-base font-medium">
            Impressionistisches Gemälde
          </span>
          <span class="text-white/70 text-xs lg:text-sm">
            Verkauft für € 4.850
          </span>
        </div>
      </div>
      {/* 4 small images */}
      {items.map((item) => (
        <div
          class="relative overflow-hidden rounded-lg bg-cover bg-center aspect-square"
          style={`background-image: url(/public/imgs/${item.img}.webp)`}
        >
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
          <div class="absolute bottom-0 left-0 p-3 lg:p-4">
            <span class="block text-white text-xs lg:text-sm font-medium">
              {item.title}
            </span>
            <span class="text-white/70 text-xs">
              Verkauft für {item.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
