import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { localizedPath } from "../../i18n";
import { pageContext } from "../../pageContext";
import HeroSection, { randomHeroIndex } from "./HeroSection.island";
import { ProcessSection } from "./ProcessSection";
import { WhyKolbSection } from "./WhyKolbSection";
import { StatsSection } from "./StatsSection";
import RecentResultsSection from "./RecentResultsSection.island";
import { CTASection } from "./CTASection";
import { FloatingWhatsAppLink } from "./FloatingWhatsAppLink";

export default ssr(async (c) => {
  const { content, locale, route } = pageContext(c, "home");
  const home = content.pages.home;

  return (
    <Layout content={content} locale={locale} route={route}>
      <>
        <HeroSection
          initialIndex={randomHeroIndex()}
          content={home.hero}
          contactHref={localizedPath(locale, "contact")}
          howItWorksHref={localizedPath(locale, "howItWorks")}
        />
        <ProcessSection content={home.process} href={localizedPath(locale, "howItWorks")} />
        <WhyKolbSection content={home.why} />
        <StatsSection content={home.stats} />
        <RecentResultsSection content={home.results} />
        <CTASection content={home.cta} href={localizedPath(locale, "contact")} />
        <FloatingWhatsAppLink content={home.whatsapp} />
      </>
    </Layout>
  );
});
