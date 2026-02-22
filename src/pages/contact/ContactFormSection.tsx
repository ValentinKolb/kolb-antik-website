import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export const ContactFormSection = (): JSX.Element => (
  <section class={`${containerClass} max-w-3xl`}>
    <div class="mb-8">
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        SCHREIBEN SIE UNS
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        Kontaktformular
      </h2>
    </div>
    <form class="flex flex-col gap-5" method="POST" action="/contact">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            for="name"
            class="text-sm font-medium text-zinc-700 block mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label
            for="email"
            class="text-sm font-medium text-zinc-700 block mb-2"
          >
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
            placeholder="ihre@email.de"
          />
        </div>
      </div>
      <div>
        <label
          for="phone"
          class="text-sm font-medium text-zinc-700 block mb-2"
        >
          Telefon{" "}
          <span class="text-zinc-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
          placeholder="Falls wir Sie zurückrufen sollen"
        />
      </div>
      <div>
        <label class="text-sm font-medium text-zinc-700 block mb-2">
          Ich bin{" "}
          <span class="text-zinc-400 font-normal">(optional)</span>
        </label>
        <div class="flex gap-6">
          <label class="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="private"
              class="accent-zinc-900"
            />
            Privatperson
          </label>
          <label class="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="dealer"
              class="accent-zinc-900"
            />
            Händler / Galerie
          </label>
        </div>
      </div>
      <div>
        <label
          for="message"
          class="text-sm font-medium text-zinc-700 block mb-2"
        >
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors resize-y"
          placeholder="Beschreiben Sie Ihre Objekte kurz oder stellen Sie Ihre Frage..."
        />
      </div>
      <div>
        <label class="flex items-start gap-3 text-sm text-zinc-500 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            required
            class="accent-zinc-900 mt-0.5"
          />
          <span>
            Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
            <a
              href="/privacy"
              class="text-zinc-700 underline hover:text-zinc-900"
            >
              Datenschutzerklärung
            </a>{" "}
            zu. *
          </span>
        </label>
      </div>
      <div>
        <button
          type="submit"
          class="text-sm font-semibold text-white bg-zinc-900 px-8 py-4 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          Nachricht senden
        </button>
      </div>
    </form>
  </section>
);
