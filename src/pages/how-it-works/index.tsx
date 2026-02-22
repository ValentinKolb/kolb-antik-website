import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { ProcessDetailSection } from "./ProcessDetailSection";
import { CategoriesSection } from "./CategoriesSection";
import { ConditionsSection } from "./ConditionsSection";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  c.get("page").title =
    "So funktioniert's — Antiquitäten verkaufen bei Kolb Antik";
  c.get("page").description =
    "Antiquitäten verkaufen in 5 Schritten: Kontakt, Bewertung, Einlieferung, Fotografie, Verkauf. Kostenlos, unverbindlich, mit Auszahlung in 22 Werktagen.";

  return (
    <Layout>
      <>
        {/* Page Header */}
        <section class={`${containerClass} pt-12`}>
          <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
            So funktioniert's
          </p>
          <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
            Vom ersten Kontakt bis zur Auszahlung
          </h1>
          <p class="text-base leading-relaxed text-zinc-500">
            Unser Prozess ist transparent und unkompliziert. Wir kümmern uns um
            alles — Sie müssen sich nur einmal bei uns melden.
          </p>
        </section>

        <ProcessDetailSection />
        <CategoriesSection />
        <ConditionsSection />

        {/* CTA */}
        <section class={`${containerClass} text-center pb-4`}>
          <h2 class="font-serif text-3xl font-normal mb-4 tracking-tight">
            Bereit für den ersten Schritt?
          </h2>
          <p class="text-base text-zinc-500 mb-8 max-w-md mx-auto">
            Kontaktieren Sie uns für eine kostenlose und unverbindliche
            Ersteinschätzung Ihrer Objekte.
          </p>
          <a
            href="/contact"
            class="text-sm font-semibold text-white no-underline bg-zinc-900 px-8 py-4 inline-block rounded text-center hover:bg-zinc-800 transition-colors"
          >
            Jetzt anfragen
          </a>
        </section>
      </>
    </Layout>
  );
});
