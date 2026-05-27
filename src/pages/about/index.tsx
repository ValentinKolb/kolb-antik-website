import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { localizedPath } from "../../i18n";
import { pageContext } from "../../pageContext";
import { HistorySection } from "./HistorySection";
import { ExpertiseSection } from "./ExpertiseSection";
import { InfrastructureSection } from "./InfrastructureSection";
import { AwardsSection } from "./AwardsSection";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  const { content, locale, route, showLanguagePrompt } = pageContext(c, "about");
  const about = content.pages.about;

  return (
    <Layout content={content} locale={locale} route={route} showLanguagePrompt={showLanguagePrompt}>
      <>
        {/* Page Header */}
        <section class={`${containerClass} pt-12`} style="view-transition-name: page-header">
          <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
            {about.header.eyebrow}
          </p>
          <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6">
            {about.header.title}
          </h1>
          <p class="text-base leading-relaxed text-zinc-500">
            {about.header.text}
          </p>
        </section>

        <HistorySection content={about.history} />
        <ExpertiseSection content={about.expertise} />
        <InfrastructureSection content={about.infrastructure} />
        <AwardsSection content={about.awards} />

        {/* CTA */}
        <section class={`${containerClass} text-center pb-4`} style="view-transition-name: cta">
          <h2 class="font-serif text-3xl font-normal mb-4 tracking-tight">
            {about.cta.title}
          </h2>
          <p class="text-base text-zinc-500 mb-8 max-w-md mx-auto">
            {about.cta.text}
          </p>
          <a
            href={localizedPath(locale, "contact")}
            class="inline-block rounded border border-zinc-900 bg-zinc-900 px-8 py-4 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-white hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            {about.cta.button}
          </a>
        </section>
      </>
    </Layout>
  );
});
