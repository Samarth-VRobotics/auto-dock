import Navbar from "@/components/Navbar";
import AMRHero from "@/components/AMRHero";
import AMRChallenge from "@/components/AMRChallenge";
import Industries from "@/components/Industries";
import Customers from "@/components/Customers";
import TeamIntro from "@/components/TeamIntro";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const AMRs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AMRHero />
      <AMRChallenge />
      <Industries />
      <Customers />
      <TeamIntro />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default AMRs;