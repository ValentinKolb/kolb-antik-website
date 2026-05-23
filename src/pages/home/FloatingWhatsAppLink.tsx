import type { JSX } from "solid-js";
import type { Content } from "../../i18n";

const WHATSAPP_URL = "https://wa.me/491707216630";

export const FloatingWhatsAppLink = (props: {
  content: Content["pages"]["home"]["whatsapp"];
}): JSX.Element => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={props.content.ariaLabel}
    class="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[90] h-14 w-14 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-full bg-zinc-900 text-white shadow-[0_14px_40px_rgba(0,0,0,0.24)] transition-[width,background-color,box-shadow] duration-300 ease-out hover:w-[20rem] hover:bg-white hover:text-zinc-900 hover:shadow-[0_18px_48px_rgba(24,24,27,0.22)] focus-visible:w-[20rem] focus-visible:bg-white focus-visible:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
  >
    <span class="absolute inset-y-0 left-5 right-16 flex translate-x-3 items-center whitespace-nowrap text-sm font-semibold opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
      {props.content.text}
    </span>
    <span class="absolute right-0 top-0 grid size-14 place-items-center rounded-full bg-zinc-900 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
      <i class="ti ti-brand-whatsapp text-3xl leading-none" aria-hidden="true" />
    </span>
  </a>
);
