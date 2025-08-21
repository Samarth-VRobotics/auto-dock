import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Redefine Your Dock Operations?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Transform your logistics with autonomous technology. See how our solution can revolutionize your warehouse efficiency.
        </p>
        
        <Button 
          size="lg" 
          className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold"
        >
          Book a Demo
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;