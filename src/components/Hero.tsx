import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dock-autonomy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src={heroImage} 
            alt="AutoDock system in action" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
              The AutoDock: 
              <span className="text-primary block mt-2 animate-slide-in-left">True Dock Autonomy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed animate-fade-in" style={{
              animationDelay: '0.3s',
              animationFillMode: 'both'
            }}>
              "Automating the first and last 20 meters of logistics powered by Vegam's 20-year legacy in manufacturing and digital factory innovation."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 animate-fade-in" style={{
              animationDelay: '0.6s',
              animationFillMode: 'both'
            }}>
              {[
                "Loads & unloads any trailer in minutes",
                "600+ boxes per hour", 
                "Fits into your existing layout",
                "ROI < 24 Months",
                "24/7 peak-season ready",
                "ERP & WMS integration ready"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 hover:bg-white/15">
                  <div 
                    className="w-3 h-3 bg-primary rounded-full animate-pulse" 
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                  <span className="text-white font-semibold text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in" style={{
              animationDelay: '0.9s',
              animationFillMode: 'both'
            }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/25"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-background px-12 py-6 text-xl font-bold hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right side - Video showcase overlay */}
          <div className="relative animate-fade-in" style={{
            animationDelay: '0.4s',
            animationFillMode: 'both'
          }}>
            <div className="relative">
              {/* Video frame overlay */}
              <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <img 
                  src={heroImage} 
                  alt="Autonomous robotic arm unloading truck with flexible conveyor system" 
                  className="w-full h-auto rounded-xl shadow-2xl" 
                />
                
                {/* Product callouts */}
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold animate-pulse">
                  AMR Head Unit
                </div>
                <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold animate-pulse" style={{ animationDelay: '1s' }}>
                  Flexible Conveyor
                </div>
                <div className="absolute top-1/2 left-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold animate-pulse" style={{ animationDelay: '2s' }}>
                  AMR Tail Unit
                </div>
              </div>
              
              {/* Floating metrics */}
              <div className="absolute -top-4 -right-4 bg-green-500/90 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg animate-bounce">
                600+ boxes/hr
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500/90 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                ROI &lt; 24 months
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle fade animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
    </section>
  );
};

export default Hero;