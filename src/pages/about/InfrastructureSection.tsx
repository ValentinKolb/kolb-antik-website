import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const InfrastructureSection = (props: {
  content: Content["pages"]["about"]["infrastructure"];
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
    <div class="flex flex-col gap-8">
      {props.content.items.map((item, i) => (
        <div
          class={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
        >
          <div
            class={`aspect-[3/2] overflow-hidden rounded-lg bg-zinc-100 ${i % 2 === 1 ? "lg:order-last" : ""}`}
          >
            <img
              src={item.img}
              alt={item.alt}
              class="h-full w-full object-cover"
            />
          </div>
          <div class={i % 2 === 1 ? "lg:order-first" : ""}>
            <h3 class="font-serif text-2xl font-normal mb-4">{item.title}</h3>
            <p class="text-base text-zinc-500 leading-relaxed">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
