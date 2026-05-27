import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const MarketplaceLinksSection = (props: {
  content: Content["pages"]["home"]["marketplaces"];
}): JSX.Element => (
  <section class={`${containerClass} grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 items-end`}>
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug mb-4">
        {props.content.title}
      </h2>
      <p class="text-base text-zinc-500 leading-relaxed">
        {props.content.text}
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {props.content.links.map((link) => (
        <a
          href={link.href}
          target="_blank"
          rel="noopener"
          class="group flex min-h-16 items-center justify-between gap-4 rounded border border-zinc-200 bg-white px-5 py-4 text-sm font-semibold text-zinc-900 no-underline transition-colors hover:border-zinc-400"
        >
          <span class="inline-flex min-w-0 items-center gap-3">
            {"logo" in link ? (
              <img
                src={link.logo}
                alt={link.label}
                class="max-h-7 max-w-[9rem] object-contain"
                loading="lazy"
              />
            ) : (
              <>
                <i class={`ti ${link.icon} text-xl text-brand-600`} />
                <span>{link.label}</span>
              </>
            )}
          </span>
          <i class="ti ti-external-link text-base text-zinc-400 transition-colors group-hover:text-zinc-900" />
        </a>
      ))}
    </div>
  </section>
);
