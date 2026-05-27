import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { pageContext } from "../../pageContext";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  const { content, locale, route, showLanguagePrompt } = pageContext(c, "privacy");
  const page = content.pages.privacy;

  return (
    <Layout content={content} locale={locale} route={route} showLanguagePrompt={showLanguagePrompt}>
      <section class={`${containerClass} pt-12 pb-8`} style="view-transition-name: page-header">
        <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
          {page.eyebrow}
        </p>
        <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-12">
          {page.title}
        </h1>

        <div class="flex flex-col gap-10 text-base text-zinc-700 leading-relaxed max-w-3xl">
          {page.sections.map((section) => (
            <div>
              <h2 class="font-serif text-xl font-normal mb-4">{section.title}</h2>
              {"paragraphs" in section &&
                section.paragraphs.map((paragraph, index) => (
                  <p class={index === section.paragraphs.length - 1 && !("list" in section) ? "" : "mb-4"}>
                    {paragraph}
                  </p>
                ))}
              {"lines" in section &&
                section.lines.map((line, index) => (
                  <p class={index === 0 ? "font-medium text-zinc-900" : ""}>{line}</p>
                ))}
              {"email" in section && (
                <p>
                  {content.common.labels.email}:{" "}
                  <a href="mailto:kurprinz@kolb-antik.de" class="text-zinc-900 underline">
                    kurprinz@kolb-antik.de
                  </a>
                </p>
              )}
              {"list" in section && (
                <ul class="list-disc pl-6 flex flex-col gap-1 mb-4 text-zinc-500">
                  {section.list.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              )}
              {"afterList" in section && <p>{section.afterList}</p>}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
});
