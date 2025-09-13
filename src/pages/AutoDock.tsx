import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import AutoDockInAction from "@/components/AutoDockInAction";
import HowAutoDockFits from "@/components/HowAutoDockFits";
import AutoDockAdvantage from "@/components/AutoDockAdvantage";
import Industries from "@/components/Industries";
import Customers from "@/components/Customers";
import TeamIntro from "@/components/TeamIntro";
import AutoDockCTA from "@/components/AutoDockCTA";
import Footer from "@/components/Footer";

const AutoDock = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Challenge />
      <AutoDockInAction />
      <HowAutoDockFits />
      <AutoDockAdvantage />
      <Industries />
      <Customers />
      <TeamIntro />
      <AutoDockCTA />
      <Footer />
    </div>
  );
};

export default AutoDock;