import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import MarqueeSection from "@/components/MarqueeSection";
import ArsenalSection from "@/components/ArsenalSection";
import InnerCircleSection from "@/components/InnerCircleSection";
import FooterSection from "@/components/FooterSection";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      <ManifestoSection />
      <ArsenalSection />
      <InnerCircleSection />
      <FooterSection />
    </div>
  );
};

export default Index;
