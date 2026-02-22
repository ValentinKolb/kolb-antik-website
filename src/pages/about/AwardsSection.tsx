import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const awards = [
  {
    icon: "ti-trophy",
    title: "eBay Award 2023",
    text: "Ausgezeichnet als einer der besten Verkäufer auf eBay Deutschland.",
  },
  {
    icon: "ti-news",
    title: "FAZ Bericht",
    text: "Porträt in der Frankfurter Allgemeinen Zeitung über unsere Erfolgsgeschichte.",
  },
  {
    icon: "ti-microphone",
    title: "eBay Podcast",
    text: "Zu Gast im offiziellen eBay Podcast über die Zukunft des Antiquitätenhandels.",
  },
];

export const AwardsSection = (): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6`}
  >
    {awards.map((award) => (
      <div class="py-8 px-6 bg-zinc-50 rounded-lg text-center">
        <i class={`ti ${award.icon} text-3xl text-zinc-300 mb-3 block`} />
        <span class="font-medium text-zinc-900 block mb-2">{award.title}</span>
        <span class="text-xs text-zinc-500 leading-relaxed block">
          {award.text}
        </span>
      </div>
    ))}
  </section>
);
