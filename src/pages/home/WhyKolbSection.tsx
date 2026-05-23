import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const WhyKolbSection = (props: {
  content: Content["pages"]["home"]["why"];
}): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
  >
    <div
      class="aspect-[4/3] bg-cover bg-center rounded-lg"
      style="background-image: url(/public/imgs/homepage-selected/silber-service-9051.webp)"
    />
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug mb-6">
        {props.content.title}
      </h2>
      <p class="text-base text-zinc-500 leading-relaxed mb-6">
        {props.content.paragraphs[0]}
      </p>
      <p class="text-base text-zinc-500 leading-relaxed">
        {props.content.paragraphs[1]}
      </p>
    </div>
  </section>
);
