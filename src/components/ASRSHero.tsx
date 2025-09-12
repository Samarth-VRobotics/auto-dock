import { Button } from "@/components/ui/button";
import asrsImage from "@/assets/asrs-system.jpg";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";
const ASRSHero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster={asrsImage}>
          {/* Placeholder for actual video - replace src with your ASRS demo video */}
          <source src="/path-to-your-asrs-demo-video.mp4" type="video/mp4" />
          {/* Fallback to hero image if video fails to load */}
          <img src={asrsImage} alt="Automated Storage and Retrieval System" className="w-full h-full object-cover" />
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-up drop-shadow-lg leading-tight">
              The SampleRun: 
              <span className="text-primary block animate-slide-in-left text-2xl sm:text-3xl md:text-4xl">Intra-Facility Sample Transport</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-2xl animate-fade-in drop-shadow-md" style={{
            animationDelay: '0.3s',
            animationFillMode: 'both'
          }}>&quot;Revolutionize safe, traceable, and in-time sample movement across labs, floors, and buildings. Powered by advanced quadruped robots fully integrated into your MOM/MES.&quot;</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-4 animate-fade-in" style={{
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg"></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">Safe & Secure Delivery</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.2s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">Multi-Floor Navigation</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.4s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">24/7 Fleet Ready</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.6s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">Full MES/LIMS Integration</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '0.8s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">Indoor & Outdoor Operation</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle shadow-lg" style={{
                animationDelay: '1s'
              }}></div>
                <span className="text-foreground font-semibold text-sm sm:text-base drop-shadow-sm">Faster QA Cycles</span>
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

          {/* Right side content overlay - keeping for mobile/fallback */}
          <div className="relative animate-fade-in lg:hidden" style={{
          animationDelay: '0.4s',
          animationFillMode: 'both'
        }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-foreground/10">
              <img src={asrsImage} alt="Automated Storage and Retrieval System" className="w-full h-auto rounded-lg shadow-xl opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ASRSHero;