import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dock-autonomy.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Beyond Automation: 
              <span className="text-primary block">True Dock Autonomy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Our autonomous mobile manipulator revolutionizes warehouse operations by intelligently unloading floor-loaded trucks and seamlessly connecting to flexible conveyor systems for maximum efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              >
                Request a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">Reduce labor costs by up to 40%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">99.9% accuracy in handling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">24/7 autonomous operations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">ROI within 12-18 months</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Autonomous robotic arm unloading truck with flexible conveyor system"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;