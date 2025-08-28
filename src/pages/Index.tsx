import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import HowAutoDockFits from "@/components/HowAutoDockFits";

import AutoDockAdvantage from "@/components/AutoDockAdvantage";
import Customers from "@/components/Customers";
import Industries from "@/components/Industries";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Challenge />
      <HowAutoDockFits />
      <AutoDockAdvantage />
      <Industries />
      <Customers />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
