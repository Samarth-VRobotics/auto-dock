import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dock-autonomy.jpg";
const Hero = () => {
  return <section className="min-h-screen flex items-center bg-background py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-[1.1] animate-fade-in-up">
              Beyond Automation: 
              <span className="text-primary block animate-slide-in-left">True Dock Autonomy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-2xl animate-fade-in" style={{
            animationDelay: '0.3s',
            animationFillMode: 'both'
          }}>Seamlessly automate the first and last 20 meters of logistics powered by Vegam’s 20-year legacy in manufacturing and digital factory solutions.</p>

            <div className="grid grid-cols-2 gap-8 pt-4 animate-fade-in" style={{
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle"></div>
                <span className="text-foreground font-semibold text-lg">Handles any trailer in mins</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle" style={{
                animationDelay: '0.2s'
              }}></div>
                <span className="text-foreground font-semibold text-lg">600+ boxes/hour</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle" style={{
                animationDelay: '0.4s'
              }}></div>
                <span className="text-foreground font-semibold text-lg">Layout Friendly
              </span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle" style={{
                animationDelay: '0.6s'
              }}></div>
                <span className="text-foreground font-semibold text-lg">ROI &lt; 24 months</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle" style={{
                animationDelay: '0.8s'
              }}></div>
                <span className="text-foreground font-semibold text-lg">24/7 peak season ready</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce-subtle" style={{
                animationDelay: '1s'
              }}></div>
                <span className="text-foreground font-semibold text-lg">Unified with our WMS suite</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fade-in" style={{
            animationDelay: '0.9s',
            animationFillMode: 'both'
          }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-xl font-bold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-10 py-5 text-xl font-bold hover:scale-105 transition-all duration-200">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{
          animationDelay: '0.4s',
          animationFillMode: 'both'
        }}>
            <img src={heroImage} alt="Autonomous robotic arm unloading truck with flexible conveyor system" className="w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;