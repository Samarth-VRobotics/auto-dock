import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import ValueProps from "@/components/ValueProps";
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
      <Industries />
      <FinalCTA />
    </div>
  );
};

export default Index;
