import { ssr } from "../../../config";
import { Layout } from "../../components/Layout";
import { HeroSection } from "./HeroSection";
import { ProcessSection } from "./ProcessSection";
import { WhyKolbSection } from "./WhyKolbSection";
import { StatsSection } from "./StatsSection";
import { RecentResultsSection } from "./RecentResultsSection";
import { CTASection } from "./CTASection";

export default ssr(async (c) => {
  c.get("page").title = "Kolb Antik GmbH";
  c.get("page").description =
    "Europas größter Antiquitätenhandel auf eBay. Seit 1984.";

  return (
    <Layout>
      <>
        <HeroSection />
        <ProcessSection />
        <WhyKolbSection />
        <StatsSection />
        <RecentResultsSection />
        <CTASection />
      </>
    </Layout>
  );
});
