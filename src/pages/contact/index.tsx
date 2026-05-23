import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { pageContext } from "../../pageContext";
import { ContactMethodsSection } from "./ContactMethodsSection";
import { ContactFormSection } from "./ContactFormSection";
import { LocationSection } from "./LocationSection";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  const { content, locale, route } = pageContext(c, "contact");
  const page = content.pages.contact;

  return (
    <Layout content={content} locale={locale} route={route}>
      <>
        {/* Page Header */}
        <section class={`${containerClass} pt-12`} style="view-transition-name: page-header">
          <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
            {page.header.eyebrow}
          </p>
          <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
            {page.header.title}
          </h1>
          <p class="text-base leading-relaxed text-zinc-500">
            {page.header.text}
          </p>
        </section>

        <ContactMethodsSection content={page.methods} />
        <ContactFormSection content={page.form} locale={locale} />
        <LocationSection content={page.location} />
      </>
    </Layout>
  );
});
