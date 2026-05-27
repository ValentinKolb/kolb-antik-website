import { createSignal, onCleanup, onMount } from "solid-js";
import type { JSX } from "solid-js";
import homepageResults from "./homepage-results.json";
import type { Content } from "../../i18n";
import { CatalogLink } from "./CatalogLink";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";
const rotationMs = 6000;
const tickMs = 50;

type HeroSectionProps = {
  initialIndex: number;
  content: Content["pages"]["home"]["hero"];
  contactHref: string;
  howItWorksHref: string;
};

type HomepageResult = {
  title: string;
  price: string;
  displayImage: string;
  heroImage?: string;
  heroCandidate: boolean;
};

type HeroItem = {
  title: string;
  price: string;
  image: string;
};

const heroItems: HeroItem[] = (homepageResults as HomepageResult[])
  .filter((item) => item.heroCandidate)
  .map((item) => ({
    title: item.title,
    price: item.price,
    image: item.heroImage ?? item.displayImage,
  }));

export const randomHeroIndex = (): number =>
  Math.floor(Math.random() * heroItems.length);

const normalizeIndex = (index: number): number =>
  heroItems.length === 0 ? 0 : index % heroItems.length;

export default function HeroSection(props: HeroSectionProps): JSX.Element {
  const [index, setIndex] = createSignal(normalizeIndex(props.initialIndex));
  const [progress, setProgress] = createSignal(0);
  const activeItem = () => heroItems[index()] ?? heroItems[0];

  onMount(() => {
    let startedAt = Date.now();

    const advance = () => {
      startedAt = Date.now();
      setProgress(0);
      setIndex((index() + 1) % heroItems.length);
    };

    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;

      if (elapsed >= rotationMs) {
        advance();
        return;
      }

      setProgress(elapsed / rotationMs);
    }, tickMs);

    onCleanup(() => {
      window.clearInterval(timer);
    });
  });

  return (
    <section class="min-h-[calc(100vh-4rem)] 2xl:min-h-0 2xl:h-[800px]" style="view-transition-name: hero">
      <div
        class={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 min-h-[calc(100vh-5rem)] 2xl:min-h-0 h-full`}
      >
        {/* Left — Text */}
        <div class="flex flex-col justify-center py-12 lg:py-0 lg:pr-16 order-2 lg:order-1">
          <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-8">
            {props.content.eyebrow}
          </p>
          <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
            {props.content.title}
          </h1>
          <p class="text-base leading-relaxed text-zinc-500 max-w-md mb-10">
            {props.content.text}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href={props.contactHref}
              class="inline-block rounded border border-zinc-900 bg-zinc-900 px-8 py-4 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-white hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
            >
              {props.content.primary}
            </a>
            <CatalogLink href={props.howItWorksHref} variant="button">
              {props.content.secondary}
            </CatalogLink>
          </div>

          {/* Scroll indicator — only on desktop */}
          <div class="hidden lg:flex justify-center mt-16">
            <a
              href="#prozess"
              class="text-zinc-400 hover:text-zinc-600 transition-colors animate-bounce"
            >
              <i class="ti ti-chevron-down text-2xl" />
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div class="relative overflow-hidden rounded-lg bg-zinc-100 min-h-[320px] lg:min-h-0 order-1 lg:order-2">
          <div
            class="absolute inset-0 bg-cover bg-center"
            style={`background-image: url(${activeItem().image})`}
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div class="absolute left-0 right-0 bottom-0 p-4 sm:p-5 lg:p-6">
            <p class="mb-2 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/65">
              <svg
                aria-hidden="true"
                class="h-[0.72rem] w-[0.72rem] -rotate-90 overflow-visible"
                viewBox="0 0 14 14"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  opacity="0.22"
                />
                <circle
                  cx="7"
                  cy="7"
                  r="5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  opacity="0.9"
                  pathLength="1"
                  stroke-dasharray="1"
                  style={`stroke-dashoffset: ${1 - progress()}`}
                />
              </svg>
              {props.content.priceLabel} {activeItem().price}
            </p>
            <h2 class="max-w-[24rem] font-serif text-2xl lg:text-3xl font-normal leading-tight text-white drop-shadow">
              {activeItem().title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
