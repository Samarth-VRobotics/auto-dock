import Navbar from "@/components/Navbar";
import ASRSHero from "@/components/ASRSHero";
import ASRSChallenge from "@/components/ASRSChallenge";

import InteractiveSampleRun from "@/components/InteractiveSampleRun";
import WhyQuadrupeds from "@/components/WhyQuadrupeds";
import SampleRunIndustries from "@/components/SampleRunIndustries";
import WhyVegam from "@/components/WhyVegam";
import Customers from "@/components/Customers";
import TeamIntro from "@/components/TeamIntro";
import SampleRunCTA from "@/components/SampleRunCTA";
import Footer from "@/components/Footer";

const ASRS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ASRSHero />
      <ASRSChallenge />
      
      <InteractiveSampleRun />
      <WhyQuadrupeds />
      <SampleRunIndustries />
      <WhyVegam />
      <Customers />
      <TeamIntro />
      <SampleRunCTA />
      <Footer />
    </div>
  );
};

export default ASRS;