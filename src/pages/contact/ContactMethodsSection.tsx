import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const methods = [
  {
    icon: "ti-phone",
    title: "Telefon",
    value: "+49 731 850754",
    subtitle: "Mo–Fr, 8–12 & 13-16 Uhr",
    href: "tel:+49731850754",
  },
  {
    icon: "ti-mail",
    title: "E-Mail",
    value: "kurprinz@kolb-antik.de",
    subtitle: "Antwort innerhalb von 2 Werktagen",
    href: "mailto:kurprinz@kolb-antik.de",
  },
  {
    icon: "ti-brand-whatsapp",
    title: "WhatsApp",
    value: "+49 731 123 456 78",
    subtitle: "Ideal für Fotos",
    href: "https://wa.me/497311234567",
  },
  {
    icon: "ti-map-pin",
    title: "Vor Ort",
    value: "Finninger Str., Neu-Ulm",
    subtitle: "Nach Vereinbarung",
    href: "https://maps.google.com/?q=Finningerstraße+56+89073+Neu+Ulm",
  },
];

export const ContactMethodsSection = (): JSX.Element => (
  <section class={containerClass}>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {methods.map((m) => (
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
