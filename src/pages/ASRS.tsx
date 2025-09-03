import Navbar from "@/components/Navbar";
import ASRSHero from "@/components/ASRSHero";
import ASRSChallenge from "@/components/ASRSChallenge";
import Industries from "@/components/Industries";
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
      <Industries />
      <Customers />
      <TeamIntro />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default ASRS;