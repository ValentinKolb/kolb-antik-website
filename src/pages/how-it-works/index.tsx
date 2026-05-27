import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { localizedPath } from "../../i18n";
import { pageContext } from "../../pageContext";
import { ProcessDetailSection } from "./ProcessDetailSection";
import { CategoriesSection } from "./CategoriesSection";
import { ConditionsSection } from "./ConditionsSection";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  const { content, locale, route, showLanguagePrompt } = pageContext(c, "howItWorks");
  const page = content.pages.howItWorks;

  return (
    <Layout content={content} locale={locale} route={route} showLanguagePrompt={showLanguagePrompt}>
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

        <ProcessDetailSection content={page.detail} />
        <CategoriesSection content={page.categories} />
        <ConditionsSection content={page.conditions} />

        {/* CTA */}
        <section class={`${containerClass} text-center pb-4`} style="view-transition-name: cta">
          <h2 class="font-serif text-3xl font-normal mb-4 tracking-tight">
            {page.cta.title}
          </h2>
          <p class="text-base text-zinc-500 mb-8 max-w-md mx-auto">
            {page.cta.text}
          </p>
          <a
            href={localizedPath(locale, "contact")}
            class="inline-block rounded border border-zinc-900 bg-zinc-900 px-8 py-4 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-white hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            {page.cta.button}
          </a>
        </section>
      </>
    </Layout>
  );
});
