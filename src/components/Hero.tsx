import { Button } from "@/components/ui/button";
import { Truck, Zap, Clock, Target, TrendingUp, Settings } from "lucide-react";
import heroImage from "@/assets/hero-robotic-loading.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-background/80 py-10 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
                <Zap className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-semibold text-primary">Next-Gen Automation</span>
              </div>
              
              <h1 className="text-5xl lg:text-8xl font-black leading-[0.9] animate-fade-in-up">
                <span className="text-foreground drop-shadow-sm">The</span>{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent drop-shadow-lg block lg:inline">
                  AutoDock
                </span>
                <span className="text-foreground/90 text-4xl lg:text-6xl block mt-2 font-bold animate-slide-in-left">
                  True Dock Autonomy
                </span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-2xl font-medium animate-fade-in shadow-sm" style={{
              animationDelay: '0.3s',
              animationFillMode: 'both'
            }}>
              "Automating the first and last 20 meters of logistics powered by Vegam's 20-year legacy in manufacturing and digital factory innovation."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 animate-fade-in" style={{
              animationDelay: '0.6s',
              animationFillMode: 'both'
            }}>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-base">Loads & unloads any trailer in minutes</span>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-base">600+ boxes per hour</span>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-base">Fits into your existing layout</span>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-base">ROI &lt; 24 Months</span>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-base">24/7 peak-season ready</span>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-base">ERP & WMS integration ready</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in" style={{
              animationDelay: '0.9s',
              animationFillMode: 'both'
            }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground px-12 py-6 text-xl font-bold hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl border-0">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-12 py-6 text-xl font-bold hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{
            animationDelay: '0.4s',
            animationFillMode: 'both'
          }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src={heroImage} 
                alt="Cutting-edge robotic arm loading packages into truck trailer in modern warehouse" 
                className="relative w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-border/20 backdrop-blur-sm group-hover:scale-[1.01]" 
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;