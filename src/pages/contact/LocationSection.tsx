import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const LocationSection = (props: {
  content: Content["pages"]["contact"]["location"];
}): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-center`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-2xl font-normal leading-snug mb-6">
        {props.content.title}
      </h2>
      <div class="flex flex-col gap-3 text-base text-zinc-500 mb-6">
        <p>Finninger Straße 56</p>
        <p>89231 Neu-Ulm</p>
        <p>{props.content.country}</p>
      </div>
      <div class="flex flex-col gap-2 text-sm text-zinc-500 mb-8">
        <p>
          <span class="font-medium text-zinc-700">{props.content.hoursLabel}</span>{" "}
          {props.content.hours}
        </p>
        <p>
          <span class="font-medium text-zinc-700">{props.content.visitsLabel}</span>{" "}
          {props.content.visits}
        </p>
      </div>
      <a
        href="https://maps.google.com/?q=Finningerstraße+56+89231+Neu+Ulm"
        target="_blank"
        rel="noopener"
        class="text-sm font-semibold text-zinc-900 no-underline bg-zinc-100 px-6 py-3 inline-block rounded hover:bg-zinc-200 transition-colors"
      >
        {props.content.route}
      </a>
    </div>
    {/* Map */}
    <div class="aspect-[4/3] rounded-lg overflow-hidden">
      <img
        src="/public/imgs/map.webp"
        alt={props.content.mapAlt}
        class="w-full h-full object-cover"
      />
    </div>
  </section>
);
