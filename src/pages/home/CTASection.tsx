import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const CTASection = (props: {
  content: Content["pages"]["home"]["cta"];
  href: string;
}): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-center`}
    style="view-transition-name: cta"
  >
    {/* Content */}
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-3xl font-normal mb-4 tracking-tight">
        {props.content.title}
      </h2>
      <p class="text-base text-zinc-500 mb-8 max-w-md">
        {props.content.text}
      </p>
      <a
        href={props.href}
        class="text-sm font-semibold text-white no-underline bg-zinc-900 px-8 py-4 inline-block rounded text-center hover:bg-zinc-800 transition-colors"
      >
        {props.content.button}
      </a>
    </div>

    {/* Image */}
    <div
      class="aspect-square bg-cover bg-center rounded-lg"
      style="background-image: url(/public/imgs/homepage-selected/barockkommode-5630.webp)"
    />
  </section>
);
