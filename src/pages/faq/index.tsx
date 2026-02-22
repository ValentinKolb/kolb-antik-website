import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const faqs = [
  {
    q: "Wie lange dauert der gesamte Prozess?",
    a: "Von der Einlieferung bis zum Verkauf vergehen in der Regel etwa 14 Tage. Bei größeren Sammlungen kann es etwas länger dauern — wir informieren Sie transparent über den Zeitplan.",
  },
  {
    q: "Wann erhalte ich mein Geld?",
    a: "Die Auszahlung erfolgt innerhalb von 22 Werktagen nach Auktionsende. Sie erhalten eine detaillierte Abrechnung über alle verkauften Objekte.",
  },
  {
    q: "Was passiert, wenn ein Objekt nicht verkauft wird?",
    a: "Nicht verkaufte Objekte werden erneut eingestellt oder — in Absprache mit Ihnen — an Sie zurückgegeben. Für nicht verkaufte Objekte entstehen keine Kosten.",
  },
  {
    q: "Warum arbeiten Sie ohne Mindestverkaufspreis?",
    a: "Limitlose Auktionen erzeugen erfahrungsgemäß mehr Bieter und damit mehr Wettbewerb. Das führt in der Regel zu besseren Endpreisen als Auktionen mit Startpreis.",
  },
  {
    q: "Gibt es besondere Konditionen für Händler und Galerien?",
    a: "Ja, für regelmäßige Einlieferer bieten wir individuell angepasste Konditionen. Sprechen Sie uns einfach an — wir finden eine Lösung, die für beide Seiten funktioniert.",
  },
  {
    q: "Bieten Sie einen Abholservice an?",
    a: "Ja, für größere Sammlungen oder sperrige Objekte bieten wir einen kostenlosen Abholservice innerhalb Deutschlands und der EU an.",
  },
  {
    q: "Welche Objekte nehmen Sie an?",
    a: "Wir nehmen Kunst, Antiquitäten, Sammlerstücke, Schmuck, Silber, Porzellan, Möbel und vieles mehr an. Bei Unsicherheit kontaktieren Sie uns gerne — wir geben eine ehrliche Einschätzung.",
  },
  {
    q: "Ist die Erstbewertung wirklich kostenlos?",
    a: "Ja, die Erstbewertung ist vollkommen kostenlos und unverbindlich. Sie können sich danach in Ruhe entscheiden, ob Sie mit uns arbeiten möchten.",
  },
];

export default ssr(async (c) => {
  c.get("page").title = "FAQ — Häufig gestellte Fragen · Kolb Antik";
  c.get("page").description =
    "Antworten auf die häufigsten Fragen zum Verkauf von Antiquitäten bei Kolb Antik: Ablauf, Kosten, Auszahlung und mehr.";

  return (
    <Layout>
      <>
        {/* Page Header */}
        <section class={`${containerClass} pt-12`} style="view-transition-name: page-header">
          <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
            FAQ
          </p>
          <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
            Häufig gestellte Fragen
          </h1>
          <p class="text-base leading-relaxed text-zinc-500">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um den
            Verkauf Ihrer Kunst und Antiquitäten bei Kolb Antik.
          </p>
        </section>

        {/* FAQ Items */}
        <section class={`${containerClass} flex flex-col gap-3`}>
          {faqs.map((faq) => (
            <details class="group bg-zinc-50 rounded-lg min-w-full">
              <summary class="flex items-center justify-between cursor-pointer p-6 text-base font-medium text-zinc-900 select-none list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <i class="ti ti-chevron-down text-lg text-zinc-400 transition-transform group-open:rotate-180 ml-4 shrink-0" />
              </summary>
              <div class="px-6 pb-6 -mt-2">
                <p class="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section class={`${containerClass} text-center pb-4`} style="view-transition-name: cta">
          <h2 class="font-serif text-3xl font-normal mb-4 tracking-tight">
            Noch Fragen?
          </h2>
          <p class="text-base text-zinc-500 mb-8 max-w-md mx-auto">
            Wir beraten Sie gerne persönlich. Kontaktieren Sie uns für eine
            kostenlose Ersteinschätzung.
          </p>
          <a
            href="/contact"
            class="text-sm font-semibold text-white no-underline bg-zinc-900 px-8 py-4 inline-block rounded text-center hover:bg-zinc-800 transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </section>
      </>
    </Layout>
  );
});
