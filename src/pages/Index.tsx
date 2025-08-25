import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessImpact from "@/components/BusinessImpact";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import ValueProps from "@/components/ValueProps";
import ManualVsRobotic from "@/components/ManualVsRobotic";
import AutonomousSoftware from "@/components/AutonomousSoftware";
import Industries from "@/components/Industries";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BusinessImpact />
      <Challenge />
      <Solution />
      <ValueProps />
      <ManualVsRobotic />
      <AutonomousSoftware />
      <Industries />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
