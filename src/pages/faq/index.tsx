import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { localizedPath } from "../../i18n";
import { pageContext } from "../../pageContext";
import type { JSX } from "solid-js";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

const faqAnswer = (faq: {
  a?: string;
  aBeforeLink?: string;
  linkText?: string;
  aAfterLink?: string;
}): JSX.Element =>
  faq.a ? (
    <>{faq.a}</>
  ) : (
      <>
        {faq.aBeforeLink}
        <a
          href="https://www.lot-tissimo.com/de-de/auction-catalogues/kolb"
          target="_blank"
          rel="noopener"
          class="text-zinc-700 underline hover:text-zinc-900"
        >
          {faq.linkText}
        </a>
        {faq.aAfterLink}
      </>
    );

export default ssr(async (c) => {
  const { content, locale, route, showLanguagePrompt } = pageContext(c, "faq");
  const page = content.pages.faq;

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

        {/* FAQ Items */}
        <section class={`${containerClass} flex flex-col gap-3`}>
          {page.items.map((faq) => (
            <details class="group bg-zinc-50 rounded-lg min-w-full">
              <summary class="flex items-center justify-between cursor-pointer p-6 text-base font-medium text-zinc-900 select-none list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <i class="ti ti-chevron-down text-lg text-zinc-400 transition-transform group-open:rotate-180 ml-4 shrink-0" />
              </summary>
              <div class="px-6 pb-6 -mt-2">
                <p class="text-sm text-zinc-500 leading-relaxed">
                  {faqAnswer(faq)}
                </p>
              </div>
            </details>
          ))}
        </section>

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
