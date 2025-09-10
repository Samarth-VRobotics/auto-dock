import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dock-autonomy.jpg";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
          <source src="https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/final%20V1%20video.mp4" type="video/mp4" />
          {/* Fallback to hero image if video fails to load */}
          <img src={heroImage} alt="AutoDock AMR System" className="w-full h-full object-cover" />
        </video>
        
        {/* Professional Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-up drop-shadow-lg leading-tight">
              The AutoDock: 
              <span className="text-primary block animate-slide-in-left text-2xl sm:text-3xl md:text-4xl">Smart Docks. Smarter Factory.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-2xl animate-fade-in drop-shadow-md" style={{
            animationDelay: '0.3s',
            animationFillMode: 'both'
          }}>"Transforming Dock-to-Stock Operations, Powered by Vegam's 20-Year Legacy in Manufacturing and Digital Factory Innovation."</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-4 animate-fade-in" style={{
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg"></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">Loads/Unloads 25 Tons within 100 Min</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.2s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">Adapts to Any Trailer &amp; Material</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.4s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">Fits into your existing layout</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.6s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">ROI &lt; 24 Months</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.8s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">24/7 peak-season ready</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '1s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">ERP &amp; WMS integration ready</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 animate-fade-in" style={{
            animationDelay: '0.9s',
            animationFillMode: 'both'
          }}>
              <ContactDialog>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
                  Contact Us
                </Button>
              </ContactDialog>
              <DemoDialog>
                <Button variant="outline" size="lg" className="border-2 border-foreground/80 bg-background/20 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold hover:scale-105 transition-all duration-200 shadow-lg">
                  Watch Demo
                </Button>
              </DemoDialog>
            </div>
          </div>

          {/* Mobile/tablet content is now handled by the full-screen video background */}
        </div>
      </div>
    </section>;
};
export default Hero;
