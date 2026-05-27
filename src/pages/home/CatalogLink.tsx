import type { JSX } from "solid-js";

type CatalogLinkProps = {
  href: string;
  children: JSX.Element;
  size?: "default" | "compact";
  variant?: "inline" | "button";
};

const sizeClasses = {
  default: {
    icon: "size-10",
    text: "text-sm",
  },
  compact: {
    icon: "size-8",
    text: "text-xs",
  },
} as const;

export const CatalogLink = (props: CatalogLinkProps): JSX.Element => {
  const size = () => sizeClasses[props.size ?? "default"];

  if (props.variant === "button") {
    return (
      <a
        href={props.href}
        class="group inline-flex min-h-[58px] w-fit items-center gap-4 rounded bg-white px-5 text-sm font-semibold text-zinc-900 no-underline shadow-[inset_0_0_0_1px_rgba(228,228,231,1)] transition-[background-color,box-shadow] hover:bg-zinc-50 hover:shadow-[inset_0_0_0_1px_rgba(161,161,170,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
      >
        <span class="grid shrink-0 place-items-center text-brand-600">
          <i class="ti ti-arrow-right text-sm transition-transform group-hover:translate-x-0.5" />
        </span>
        <span class="leading-tight">{props.children}</span>
      </a>
    );
  }

  return (
    <a
      href={props.href}
      class={`group inline-flex w-fit items-center gap-3 font-semibold text-zinc-900 no-underline ${size().text}`}
    >
      <span
        class={`grid shrink-0 place-items-center rounded bg-zinc-900 text-white transition-colors group-hover:bg-brand-600 ${size().icon}`}
      >
        <i class="ti ti-arrow-right text-base transition-transform group-hover:translate-x-0.5" />
      </span>
      <span class="leading-tight transition-colors group-hover:text-brand-600">
        {props.children}
      </span>
    </a>
  );
};
