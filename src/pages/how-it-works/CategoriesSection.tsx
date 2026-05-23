import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const CategoriesSection = (props: {
  content: Content["pages"]["howItWorks"]["categories"];
}): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        {props.content.title}
      </h2>
      <p class="text-sm text-zinc-500 leading-relaxed mt-4">
        {props.content.text}
      </p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {props.content.items.map((cat) => (
        <div class="p-5 bg-zinc-50 rounded-lg text-center">
          <i class={`ti ${cat.icon} text-2xl text-zinc-400 mb-3 block`} />
          <span class="text-sm font-medium text-zinc-700">{cat.label}</span>
        </div>
      ))}
    </div>
  </section>
);
