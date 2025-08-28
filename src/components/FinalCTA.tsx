import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const FinalCTA = () => {
  return <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-white mb-8 leading-tight">
              Ready to Redefine Your 
              <span className="block">Dock Operations?</span>
            </h2>
            
            
          </div>
          
          {/* Key Impact Points */}
          
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{
          animationDelay: '0.4s',
          animationFillMode: 'both'
        }}>
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90 px-10 py-5 text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group">
              Book a Demo
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="glass-effect border-2 border-white/30 text-black hover:bg-white/10 hover:border-white/50 px-10 py-5 text-xl font-bold hover-lift backdrop-blur-md shadow-glow-secondary group">
              Download Brochure
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in" style={{
          animationDelay: '0.6s',
          animationFillMode: 'both'
        }}>
            
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;