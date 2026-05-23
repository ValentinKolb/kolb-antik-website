import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const ConditionsSection = (props: {
  content: Content["pages"]["howItWorks"]["conditions"];
}): JSX.Element => (
  <section class={containerClass}>
    <div class="mb-10">
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        {props.content.title}
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {props.content.items.map((c) => (
        <div class="p-6 lg:p-8 bg-zinc-50 rounded-lg">
          <h3 class="text-lg font-medium text-zinc-900 mb-3">{c.title}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{c.text}</p>
        </div>
      ))}
    </div>
  </section>
);
