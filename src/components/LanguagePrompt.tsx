import type { JSX } from "solid-js";
import {
  languagePreferencePath,
  type Content,
  type Locale,
  type RouteKey,
} from "../i18n";

type LanguagePromptProps = {
  content: Content["common"];
  locale: Locale;
  route: RouteKey;
};

export const LanguagePrompt = (props: LanguagePromptProps): JSX.Element => (
  <aside
    aria-label={props.content.languagePrompt.title}
    class="fixed bottom-5 left-5 right-5 z-[80] mx-auto max-w-sm rounded-lg border border-zinc-200 bg-white p-4 shadow-[0_18px_48px_rgba(24,24,27,0.16)] sm:left-auto sm:right-5 sm:mx-0"
  >
    <div class="flex flex-col gap-3">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
          {props.content.languagePrompt.title}
        </p>
        <p class="mt-1 text-sm leading-relaxed text-zinc-500">
          {props.content.languagePrompt.text}
        </p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <a
          href={languagePreferencePath("de", props.route)}
          class={`rounded px-4 py-2 text-center text-sm font-semibold no-underline transition-colors ${props.locale === "de" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"}`}
        >
          {props.content.footer.german}
        </a>
        <a
          href={languagePreferencePath("en", props.route)}
          class={`rounded px-4 py-2 text-center text-sm font-semibold no-underline transition-colors ${props.locale === "en" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"}`}
        >
          {props.content.footer.english}
        </a>
      </div>
    </div>
  </aside>
);
