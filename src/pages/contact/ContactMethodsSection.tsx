import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const ContactMethodsSection = (props: {
  content: Content["pages"]["contact"]["methods"];
}): JSX.Element => (
  <section class={containerClass}>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {props.content.map((m) => (
        <a
          href={m.href}
          class="p-6 bg-zinc-50 rounded-lg no-underline hover:bg-zinc-100 transition-colors group"
          {...(m.href.startsWith("http")
            ? { target: "_blank", rel: "noopener" }
            : {})}
        >
          <i
            class={`ti ${m.icon} text-2xl text-zinc-400 group-hover:text-zinc-600 transition-colors mb-4 block`}
          />
          <span class="text-xs font-semibold text-zinc-400 tracking-widest block mb-2">
            {m.title.toUpperCase()}
          </span>
          <span class="text-base font-medium text-zinc-900 block mb-1">
            {m.value}
          </span>
          <span class="text-xs text-zinc-500">{m.subtitle}</span>
        </a>
      ))}
    </div>
  </section>
);
