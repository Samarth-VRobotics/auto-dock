import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import DownloadDeckDialog from "@/components/DownloadDeckDialog";
const FinalCTA = () => {
  return <section className="section-padding relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/90 to-accent"></div>
      
      {/* Background pattern with enhanced visibility */}
      <div className="absolute inset-0 bg-grid-white/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Dynamic animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/15 rounded-full blur-2xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            
            
            <h2 className="heading-xl text-white mb-8">
              Ready to Redefine
              <span className="block">Sample Transport?</span>
            </h2>
            
            
          </div>
          
          {/* Key Impact Points */}
          
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{
          animationDelay: '0.4s',
          animationFillMode: 'both'
        }}>
            <ContactDialog isBookCallDialog={true}>
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 px-10 py-5 body-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group">
                Book a Call
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ContactDialog>
            <DownloadDeckDialog>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary px-10 py-5 body-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group">
                Download Case Study
                <Download className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </Button>
            </DownloadDeckDialog>
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