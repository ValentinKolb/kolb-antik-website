import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { pageContext } from "../../pageContext";

const containerClass = "w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-12";

export default ssr(async (c) => {
  const { content, locale, route } = pageContext(c, "imprint");
  const page = content.pages.imprint;

  return (
    <Layout content={content} locale={locale} route={route}>
      <section class={`${containerClass} pt-12 pb-8`} style="view-transition-name: page-header">
        <p class="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-6">
          {page.eyebrow}
        </p>
        <h1 class="font-serif text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-12">
          {page.title}
        </h1>

        <div class="flex flex-col gap-10 text-base text-zinc-700 leading-relaxed max-w-3xl">
          {page.sections.map((section) =>
            section.kind === "box" ? (
              <div class="p-6 bg-zinc-50 rounded-lg">
                <p class="text-sm font-semibold text-zinc-400 tracking-widest mb-3">
                  {section.eyebrow}
                </p>
                {section.lines.map((line, index) => (
                  <p class={index === 1 ? "font-medium text-zinc-900" : index === 0 ? "mb-2" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            ) : (
              <div>
                <h2 class="font-serif text-xl font-normal mb-4">{section.title}</h2>
                {"contact" in section ? (
                  <>
                    <p>
                      {content.common.labels.phone}:{" "}
                      <a href="tel:+49731850754" class="text-zinc-900 underline">
                        +49 731 850 754
                      </a>
                    </p>
                    <p>
                      {content.common.labels.email}:{" "}
                      <a href="mailto:kurprinz@kolb-antik.de" class="text-zinc-900 underline">
                        kurprinz@kolb-antik.de
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    {"lines" in section &&
                      section.lines.map((line, index) => (
                        <p class={index === 0 ? "mb-2 font-medium text-zinc-900" : ""}>{line}</p>
                      ))}
                    {"paragraphs" in section &&
                      section.paragraphs.map((paragraph, index) => (
                        <p class={index === 0 ? "mb-4" : ""}>{paragraph}</p>
                      ))}
                  </>
                )}
              </div>
            ),
          )}
        </div>
      </section>
    </Layout>
  );
});
