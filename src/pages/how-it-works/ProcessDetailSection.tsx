import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const ProcessDetailSection = (props: {
  content: Content["pages"]["howItWorks"]["detail"];
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
    <div class="flex flex-col gap-6">
      {props.content.steps.map((step) => (
        <div class="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4 lg:gap-8 p-6 lg:p-8 bg-zinc-50 rounded-lg">
          <span class="font-serif text-4xl text-zinc-200 font-normal">
            {step.num}
          </span>
          <div>
            <h3 class="text-xl font-medium text-zinc-900 mb-3">
              {step.title}
            </h3>
            <p class="text-base text-zinc-500 leading-relaxed mb-2">
              {step.text}
            </p>
            <p class="text-sm text-zinc-400 leading-relaxed">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
