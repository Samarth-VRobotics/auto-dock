import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OurJourneySection = () => {
  return (
    <section id="our-journey" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
            Behind AutoDock is a team of dreamers and builders transforming bold ideas into real-world change
          </p>
          
          <Button 
            variant="outline" 
            className="group border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-3 text-lg font-semibold"
          >
            Read Our Journey
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;