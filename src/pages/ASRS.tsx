import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Industries from "@/components/Industries";
import Customers from "@/components/Customers";
import TeamIntro from "@/components/TeamIntro";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const ASRS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Challenge />
      <Industries />
      <Customers />
      <TeamIntro />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default ASRS;