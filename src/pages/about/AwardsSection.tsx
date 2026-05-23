import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const AwardsSection = (props: {
  content: Content["pages"]["about"]["awards"];
}): JSX.Element => (
  <section
    class={`${containerClass} grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start`}
  >
    <div>
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug mb-6">
        {props.content.title}
      </h2>
      <p class="text-base text-zinc-500 leading-relaxed mb-8">
        {props.content.text}
      </p>
      <figure class="bg-zinc-50 rounded-lg overflow-hidden">
        <img
          src="/public/imgs/press-ebay-award-2023.webp"
          alt={props.content.awardAlt}
          class="w-full aspect-[3/2] object-cover"
          loading="lazy"
        />
        <figcaption class="p-5 text-xs text-zinc-500 leading-relaxed">
          {props.content.awardCaption}
        </figcaption>
      </figure>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {props.content.pressItems.map((item) => (
        <div
          class={`group min-h-[240px] p-6 bg-zinc-50 rounded-lg flex flex-col ${"href" in item ? "hover:bg-zinc-100 transition-colors" : ""}`}
        >
          <span class="text-xs font-semibold text-zinc-400 tracking-widest uppercase mb-4">
            {item.source}
          </span>
          <h3 class="font-serif text-xl font-normal text-zinc-900 leading-snug mb-3">
            {item.title}
          </h3>
          <p class="text-sm text-zinc-500 leading-relaxed mb-6">
            {item.text}
          </p>
          {"href" in item ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener"
              class="mt-auto text-xs font-semibold text-zinc-900 no-underline inline-flex items-center gap-2"
            >
              {item.action}
              <i class="ti ti-arrow-up-right text-base text-zinc-400 group-hover:text-zinc-900 transition-colors" />
            </a>
          ) : (
            <span class="mt-auto text-xs font-semibold text-zinc-400">
            {item.date} · {props.content.archiveNotice}
            </span>
          )}
        </div>
      ))}
      <div class="p-6 border border-zinc-200 rounded-lg flex flex-col justify-between min-h-[240px]">
        <div>
          <span class="text-xs font-semibold text-zinc-400 tracking-widest uppercase mb-4 block">
            {props.content.archive}
          </span>
          <h3 class="font-serif text-xl font-normal text-zinc-900 leading-snug mb-3">
            {props.content.archiveTitle}
          </h3>
          <p class="text-sm text-zinc-500 leading-relaxed">
            {props.content.archiveText}
          </p>
        </div>
        <span class="text-xs font-semibold text-zinc-400 mt-6">
          {props.content.archiveNotice}
        </span>
      </div>
    </div>
  </section>
);
