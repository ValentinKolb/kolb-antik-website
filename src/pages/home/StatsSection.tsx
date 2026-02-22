import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const stats = [
  { value: "1984", label: "40+ Jahre Erfahrung" },
  { value: "50.000+", label: "Follower auf eBay" },
  { value: "99,9%", label: "Positive Bewertungen" },
  { value: "15.000+", label: "Monatlich verkaufte Artikel" },
];

export const StatsSection = (): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6`}
  >
    {stats.map((stat) => (
      <div class="py-8 px-6 bg-zinc-50 rounded-lg text-center">
        <span class="font-serif text-2xl lg:text-3xl font-normal tracking-tight block mb-1">
          {stat.value}
        </span>
        <span class="text-xs font-medium text-zinc-400 tracking-wide">
          {stat.label}
        </span>
      </div>
    ))}
  </section>
);
