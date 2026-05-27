import type { JSX } from "solid-js";
import { localizedPath, type Content, type Locale } from "../../i18n";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const ContactFormSection = (props: {
  content: Content["pages"]["contact"]["form"];
  locale: Locale;
}): JSX.Element => {
  const fields = props.content.fields;

  return (
  <section class={`${containerClass} max-w-3xl`}>
    <div class="mb-8">
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        {props.content.eyebrow}
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        {props.content.title}
      </h2>
    </div>
    <form
      class="flex flex-col gap-5"
      method="POST"
      action={`mailto:kurprinz@kolb-antik.de?subject=${encodeURIComponent(props.content.subject)}`}
      enctype="text/plain"
      accept-charset="UTF-8"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            for="name"
            class="text-sm font-medium text-zinc-700 block mb-2"
          >
            {fields.name}
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            required
            class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
            placeholder={fields.namePlaceholder}
          />
        </div>
        <div>
          <label
            for="email"
            class="text-sm font-medium text-zinc-700 block mb-2"
          >
            {fields.email}
          </label>
          <input
            type="email"
            id="email"
            name="E-Mail"
            required
            class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
            placeholder={fields.emailPlaceholder}
          />
        </div>
      </div>
      <div>
        <label
          for="phone"
          class="text-sm font-medium text-zinc-700 block mb-2"
        >
          {fields.phone}{" "}
          <span class="text-zinc-400 font-normal">{fields.optional}</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="Telefon"
          class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
          placeholder={fields.phonePlaceholder}
        />
      </div>
      <div>
        <label class="text-sm font-medium text-zinc-700 block mb-2">
          {fields.customerType}{" "}
          <span class="text-zinc-400 font-normal">{fields.optional}</span>
        </label>
        <div class="flex gap-6">
          <label class="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
            <input
              type="radio"
              name="Kundentyp"
              value="Privatperson"
              class="accent-zinc-900"
            />
            {fields.private}
          </label>
          <label class="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
            <input
              type="radio"
              name="Kundentyp"
              value="Händler / Galerie"
              class="accent-zinc-900"
            />
            {fields.dealer}
          </label>
        </div>
      </div>
      <div>
        <label
          for="message"
          class="text-sm font-medium text-zinc-700 block mb-2"
        >
          {fields.message}
        </label>
        <textarea
          id="message"
          name="Nachricht"
          required
          rows={5}
          class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors resize-y"
          placeholder={fields.messagePlaceholder}
        />
      </div>
      <div>
        <label class="flex items-start gap-3 text-sm text-zinc-500 cursor-pointer">
          <input
            type="checkbox"
            name="Datenschutz"
            value="zugestimmt"
            required
            class="accent-zinc-900 mt-0.5"
          />
          <span>
            {fields.privacyBefore}
            <a
              href={localizedPath(props.locale, "privacy")}
              class="text-zinc-700 underline hover:text-zinc-900"
            >
              {fields.privacyLink}
            </a>{" "}
            {fields.privacyAfter}
          </span>
        </label>
      </div>
      <div>
        <button
          type="submit"
          class="cursor-pointer rounded border border-zinc-900 bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
        >
          {fields.submit}
        </button>
      </div>
    </form>
  </section>
  );
};
