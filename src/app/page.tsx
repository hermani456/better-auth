import ContentSection from "@/components/content-2";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <div className="bg-secondary">
        <StatsSection />
      </div>
      <ContentSection />
      <Pricing />
      <FooterSection />
    </>
  );
}
