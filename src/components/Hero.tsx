import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dock-autonomy.jpg";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster={heroImage}>
          {/* Placeholder for actual video - replace src with your AMR conveyor demo video */}
          <source src="/path-to-your-amr-demo-video.mp4" type="video/mp4" />
          {/* Fallback to hero image if video fails to load */}
          <img src={heroImage} alt="AutoDock AMR System" className="w-full h-full object-cover" />
        </video>
        
        {/* Video Fade-in Animation Overlay */}
        <div className="absolute inset-0 bg-background/20 animate-fade-in" style={{
        animationDuration: '2s'
      }}></div>
        
        {/* Professional Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-6">
            <h1 className="heading-hero text-foreground animate-fade-in-up drop-shadow-lg">
              The AutoDock: 
              <span className="text-primary block animate-slide-in-left text-4xl">Smart Docks. Smarter Factories.</span>
            </h1>
            
            <p className="body-xl text-foreground/90 max-w-2xl animate-fade-in drop-shadow-md" style={{
            animationDelay: '0.3s',
            animationFillMode: 'both'
          }}>"Automating the first and last 20 meters of logistics powered by Vegam's 20-year legacy in manufacturing and digital factory innovation."</p>

            <div className="grid grid-cols-2 gap-8 pt-4 animate-fade-in" style={{
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg"></div>
                <span className="text-foreground font-semibold body-base drop-shadow-sm">Loads/Unloads 30 tons within 100 Mins</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.2s'
              }}></div>
                <span className="text-foreground font-semibold body-base drop-shadow-sm">Adapts to Any Trailer &amp; Material</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.4s'
              }}></div>
                <span className="text-foreground font-semibold body-base drop-shadow-sm">Fits into your existing layout</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.6s'
              }}></div>
                <span className="text-foreground font-semibold body-base drop-shadow-sm">ROI &lt; 24 Months</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.8s'
              }}></div>
                <span className="text-foreground font-semibold body-base drop-shadow-sm">24/7 peak-season ready</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '1s'
              }}></div>
                <span className="text-foreground font-semibold body-base drop-shadow-sm">ERP &amp; WMS integration ready</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fade-in" style={{
            animationDelay: '0.9s',
            animationFillMode: 'both'
          }}>
              <ContactDialog>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 body-lg font-bold hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
                  Contact Us
                </Button>
              </ContactDialog>
              <DemoDialog>
                <Button variant="outline" size="lg" className="border-2 border-foreground/80 bg-background/20 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background px-10 py-5 body-lg font-bold hover:scale-105 transition-all duration-200 shadow-lg">
                  Watch Demo
                </Button>
              </DemoDialog>
            </div>
          </div>

          {/* Right side content overlay - keeping for mobile/fallback */}
          <div className="relative animate-fade-in lg:hidden" style={{
          animationDelay: '0.4s',
          animationFillMode: 'both'
        }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-foreground/10">
              <img src={heroImage} alt="Autonomous robotic arm unloading truck with flexible conveyor system" className="w-full h-auto rounded-lg shadow-xl opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;