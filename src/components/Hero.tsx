import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dock-autonomy.jpg";
const Hero = () => {
  return <section className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Beyond Automation: 
              <span className="text-primary block">True Dock Autonomy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">Seamlessly automate the first and last 20 meters of logistics with a single integrated system</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">Contact sales</Button>
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Loads trailer in 5–10 min</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">600+ boxes/hour</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">40–60% less dock labor</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Payback &lt; 24 months</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Zero manual lifting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Fits any trailer/Deploys in under 1 hour</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src={heroImage} alt="Autonomous robotic arm unloading truck with flexible conveyor system" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;