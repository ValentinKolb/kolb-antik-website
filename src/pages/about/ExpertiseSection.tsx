import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const ExpertiseSection = (props: {
  content: Content["pages"]["about"]["expertise"];
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
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
      {props.content.departments.map((dept) => (
        <div class="p-6 lg:p-8 bg-zinc-50 rounded-lg">
          <i class={`ti ${dept.icon} text-2xl text-zinc-400 mb-4 block`} />
          <h3 class="text-lg font-medium text-zinc-900 mb-3">{dept.title}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{dept.text}</p>
        </div>
      ))}
    </div>
  </section>
);
