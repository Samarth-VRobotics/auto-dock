import Navbar from "@/components/Navbar";
import ASRSHero from "@/components/ASRSHero";
import ASRSChallenge from "@/components/ASRSChallenge";

import HowItWorks from "@/components/HowItWorks";
import WhyQuadrupeds from "@/components/WhyQuadrupeds";
import SampleRunIndustries from "@/components/SampleRunIndustries";
import WhyVegam from "@/components/WhyVegam";
import Customers from "@/components/Customers";
import TeamIntro from "@/components/TeamIntro";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const ASRS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ASRSHero />
      <ASRSChallenge />
      
      <HowItWorks />
      <WhyQuadrupeds />
      <SampleRunIndustries />
      <WhyVegam />
      <Customers />
      <TeamIntro />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default ASRS;