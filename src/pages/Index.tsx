import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import ValueProps from "@/components/ValueProps";
import ManualVsRobotic from "@/components/ManualVsRobotic";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import AutonomousSoftware from "@/components/AutonomousSoftware";
import Industries from "@/components/Industries";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Challenge />
      <Solution />
      <ValueProps />
      <ManualVsRobotic />
      <PerformanceMetrics />
      <AutonomousSoftware />
      <Industries />
      <FinalCTA />
    </div>
  );
};

export default Index;
