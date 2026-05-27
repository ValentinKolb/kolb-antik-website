import type { JSX } from "solid-js";
import type { Content } from "../../i18n";
import { CatalogLink } from "./CatalogLink";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

type ProcessSectionProps = {
  content: Content["pages"]["home"]["process"];
  href: string;
};

export const ProcessSection = (props: ProcessSectionProps): JSX.Element => (
  <section
    id="prozess"
    class={`${containerClass} scroll-mt-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug mb-4">
        {props.content.title}
      </h2>
      <CatalogLink href={props.href} size="compact">
        {props.content.link}
      </CatalogLink>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
      {props.content.steps.map((step) => (
        <div class="p-6 lg:p-8 bg-zinc-50 rounded-lg">
          <h3 class="text-xl font-medium mb-4">
            <span class="text-zinc-300 mr-3">{step.num}</span>
            <span class="text-zinc-900">{step.title}</span>
          </h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{step.text}</p>
        </div>
      ))}
    </div>
  </section>
);
