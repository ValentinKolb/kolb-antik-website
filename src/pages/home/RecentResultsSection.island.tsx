import { createSignal } from "solid-js";
import type { JSX } from "solid-js";
import homepageResults from "./homepage-results.json";
import type { Content } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

type ResultItem = {
  title: string;
  price: string;
  displayImage: string;
};

const resultItems = (homepageResults as ResultItem[]).filter(
  (item) => item.displayImage && item.price,
);

const resultWindowSize = 5;

const resultSetFor = (startIndex: number): ResultItem[] =>
  Array.from(
    { length: resultWindowSize },
    (_, offset) => resultItems[(startIndex + offset) % resultItems.length],
  );

const ResultTile = (props: {
  item: ResultItem;
  large?: boolean;
  soldFor: string;
}): JSX.Element => (
  <div
    class={
      props.large
        ? "col-span-2 row-span-1 lg:row-span-2 relative overflow-hidden rounded-lg bg-cover bg-center aspect-[4/3] lg:aspect-auto"
        : "relative overflow-hidden rounded-lg bg-cover bg-center aspect-square"
    }
    style={`background-image: url(${props.item.displayImage})`}
  >
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
    <div class={props.large ? "absolute bottom-0 left-0 p-4 lg:p-6" : "absolute bottom-0 left-0 p-3 lg:p-4"}>
      <span class={props.large ? "block text-white text-sm lg:text-base font-medium" : "block text-white text-xs lg:text-sm font-medium leading-tight"}>
        {props.item.title}
      </span>
      <span class={props.large ? "text-white/70 text-xs lg:text-sm" : "text-white/70 text-xs"}>
        {props.soldFor} {props.item.price}
      </span>
    </div>
  </div>
);

export default function RecentResultsSection(props: {
  content: Content["pages"]["home"]["results"];
}): JSX.Element {
  const [index, setIndex] = createSignal(0);
  const [iconRotation, setIconRotation] = createSignal(0);
  const activeSet = () => resultSetFor(index());
  const showNext = () => {
    setIndex((current) => (current + resultWindowSize) % resultItems.length);
    setIconRotation((current) => current - 180);
  };

  return (
    <section class={`${containerClass} w-full`}>
      <div class="flex items-center justify-between gap-4 mb-5">
        <div>
          <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-2">
            {props.content.eyebrow}
          </p>
          <h2 class="font-serif text-2xl font-normal tracking-tight">
            {props.content.title}
          </h2>
        </div>
        <button
          type="button"
          onClick={showNext}
          class="shrink-0 h-10 px-4 rounded bg-zinc-100 hover:bg-zinc-200 transition-colors text-xs font-semibold text-zinc-900 inline-flex items-center gap-2"
        >
          <i
            class="ti ti-refresh text-base transition-transform duration-300 ease-out"
            style={`transform: rotate(${iconRotation()}deg)`}
          />
          {props.content.next}
        </button>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-3 lg:grid-rows-2 gap-2">
        <ResultTile item={activeSet()[0]} soldFor={props.content.soldFor} large />
        {activeSet()
          .slice(1)
          .map((item) => (
            <ResultTile item={item} soldFor={props.content.soldFor} />
          ))}
      </div>
    </section>
  );
}
