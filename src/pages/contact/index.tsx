import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { ContactMethodsSection } from "./ContactMethodsSection";
import { ContactFormSection } from "./ContactFormSection";
import { LocationSection } from "./LocationSection";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  c.get("page").title = "Kontakt — Kolb Antik · Antiquitäten verkaufen";
  c.get("page").description =
    "Kontaktieren Sie Kolb Antik für eine kostenlose Ersteinschätzung Ihrer Kunst und Antiquitäten. Per Telefon, E-Mail, WhatsApp oder persönlich in Ulm.";

  return (
    <Layout>
      <>
        {/* Page Header */}
        <section class={`${containerClass} pt-12`}>
          <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
            Kontakt
          </p>
          <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
            Sprechen Sie mit uns
          </h1>
          <p class="text-base leading-relaxed text-zinc-500">
            Ob Fragen, Bewertung oder Einlieferung — wir sind auf mehreren Wegen
            erreichbar und melden uns innerhalb von 48 Stunden.
          </p>
        </section>

        <ContactMethodsSection />
        <ContactFormSection />
        <LocationSection />
      </>
    </Layout>
  );
});
