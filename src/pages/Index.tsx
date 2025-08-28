import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Impacts from "@/components/Impacts";
import HowAutoDockFits from "@/components/HowAutoDockFits";

import ValueProps from "@/components/ValueProps";


import AutonomousSoftware from "@/components/AutonomousSoftware";
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
      <Impacts />
      <HowAutoDockFits />
      
      <ValueProps />
      
      
      <AutonomousSoftware />
      <Customers />
      <Industries />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
