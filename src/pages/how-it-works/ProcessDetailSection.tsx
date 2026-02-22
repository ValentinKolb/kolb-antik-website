import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const steps = [
  {
    num: "01",
    title: "Kontakt aufnehmen",
    text: "Senden Sie uns Fotos und eine kurze Beschreibung Ihrer Objekte — per E-Mail, Telefon oder WhatsApp. Auch ein persönlicher Termin vor Ort ist möglich.",
    detail: "Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
  },
  {
    num: "02",
    title: "Bewertung & Beratung",
    text: "Unsere Kunsthistoriker bewerten Ihre Objekte und nennen Ihnen eine realistische Preisspanne. Die Bewertung ist kostenlos und unverbindlich.",
    detail: "Ehrlich, transparent und ohne Verpflichtung.",
  },
  {
    num: "03",
    title: "Einlieferung",
    text: "Bringen Sie Ihre Objekte vorbei oder nutzen Sie unseren kostenlosen Abholservice — deutschlandweit und innerhalb der EU.",
    detail:
      "Alle Objekte werden inventarisiert und sicher dokumentiert.",
  },
  {
    num: "04",
    title: "Professionelle Aufbereitung",
    text: "Jedes Stück wird in unserem Studio professionell fotografiert, kunsthistorisch beschrieben und auf eBay eingestellt — sichtbar für über 50.000 Follower.",
    detail: "Mehrere Perspektiven, Detailaufnahmen, kalibrierte Farben.",
  },
  {
    num: "05",
    title: "Verkauf & Auszahlung",
    text: "Wir übernehmen Verpackung, Versand und Kundenservice. Sie erhalten Ihren Erlös innerhalb von 22 Werktagen — mit detaillierter Abrechnung.",
    detail: "Transparente Konditionen, keine versteckten Kosten.",
  },
];

export const ProcessDetailSection = (): JSX.Element => (
  <section class={containerClass}>
    <div class="mb-10">
      <p class="text-xs font-semibold text-zinc-400 tracking-widest mb-4">
        DER PROZESS IM DETAIL
      </p>
      <h2 class="font-serif text-3xl font-normal leading-snug">
        Fünf Schritte zum erfolgreichen Verkauf
      </h2>
    </div>
    <div class="flex flex-col gap-6">
      {steps.map((step) => (
        <div class="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4 lg:gap-8 p-6 lg:p-8 bg-zinc-50 rounded-lg">
          <span class="font-serif text-4xl text-zinc-200 font-normal">
            {step.num}
          </span>
          <div>
            <h3 class="text-xl font-medium text-zinc-900 mb-3">
              {step.title}
            </h3>
            <p class="text-base text-zinc-500 leading-relaxed mb-2">
              {step.text}
            </p>
            <p class="text-sm text-zinc-400 leading-relaxed">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
