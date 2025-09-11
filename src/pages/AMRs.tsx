import Navbar from "@/components/Navbar";
// import AMRHero from "@/components/AMRHero";
// import AMRChallenge from "@/components/AMRChallenge";
// import Industries from "@/components/Industries";
// import Customers from "@/components/Customers";
// import TeamIntro from "@/components/TeamIntro";
// import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const AMRs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Coming Soon Section */}
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gradient-to-br from-background to-muted/30">
        <div className="text-center space-y-8 px-4">
          <div className="animate-pulse">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Coming Soon
            </h1>
          </div>
          
          <div className="animate-fade-in animation-delay-300">
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
              We're working on something amazing for AMRs. Stay tuned!
            </p>
          </div>
          
          <div className="flex justify-center space-x-2 animate-fade-in animation-delay-500">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
      
      {/* Commented out components:
      <AMRHero />
      <AMRChallenge />
      <Industries />
      <Customers />
      <TeamIntro />
      <FinalCTA />
      */}
      
      <Footer />
    </div>
  );
};

export default AMRs;