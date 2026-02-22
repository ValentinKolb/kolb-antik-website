import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { HistorySection } from "./HistorySection";
import { ExpertiseSection } from "./ExpertiseSection";
import { InfrastructureSection } from "./InfrastructureSection";
import { AwardsSection } from "./AwardsSection";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  c.get("page").title = "Über uns — Kolb Antik · Seit 1984 in Ulm";
  c.get("page").description =
    "Lernen Sie Kolb Antik kennen: Seit 1984 in Ulm, über 40 Mitarbeiter, Kunsthistoriker, eigene Fotografie und Logistik.";

  return (
    <Layout>
      <>
        {/* Page Header */}
        <section class={`${containerClass} pt-12`} style="view-transition-name: page-header">
          <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
            Über Kolb Antik
          </p>
          <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
            Seit 1984 verbinden wir Sammler mit den Dingen, die sie suchen.
          </h1>
          <p class="text-base leading-relaxed text-zinc-500">
            Europas größter Antiquitätenhandel auf eBay — aus Ulm, für die ganze
            Welt. Über 40 Mitarbeiter, eigene Fotografie, kunsthistorische
            Bewertung und täglicher Versand.
          </p>
        </section>

        <HistorySection />
        <ExpertiseSection />
        <InfrastructureSection />
        <AwardsSection />

        {/* CTA */}
        <section class={`${containerClass} text-center pb-4`} style="view-transition-name: cta">
          <h2 class="font-serif text-3xl font-normal mb-4 tracking-tight">
            Lernen Sie uns kennen
          </h2>
          <p class="text-base text-zinc-500 mb-8 max-w-md mx-auto">
            Wir freuen uns auf Ihre Anfrage — ob für einzelne Objekte oder eine
            ganze Sammlung.
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
