import { Package, Users, Truck, TrendingUp, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import mobileManipulatorImage from "@/assets/mobile-manipulator-dock.jpg";

const Challenge = () => {
  return (
    <section 
      className="py-20 bg-background" 
      aria-label="Dock Operations Bottlenecks"
    >
      <div className="container mx-auto px-6">
        {/* Desktop: 2-column layout, Mobile: single column */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual - Left on desktop, full-width on mobile */}
          <div className="order-2 lg:order-1">
            <img 
              src={mobileManipulatorImage}
              alt="Mobile robot arm unloading cartons onto flexible conveyor at dock"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Content - Right on desktop */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                The Hidden Bottlenecks in Dock Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Where truck-to-warehouse flow is most tested.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Inside the warehouse, flows are structured. At the dock, floor-loaded cartons, manual effort, and variable volumes create delays beyond what forklifts or fixed conveyors handle.
              </p>
            </div>

            {/* Icon Grid - 5 items, responsive */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center space-y-2">
                <Package className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Unstructured Loads</p>
                <p className="text-xs text-muted-foreground">no pallets</p>
              </div>
              
              <div className="text-center space-y-2">
                <Users className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Labor Dependency</p>
                <p className="text-xs text-muted-foreground">manual intensity</p>
              </div>
              
              <div className="text-center space-y-2">
                <Truck className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Dock Variability</p>
                <p className="text-xs text-muted-foreground">trucks & peaks</p>
              </div>
              
              <div className="text-center space-y-2">
                <TrendingUp className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Throughput Uncertainty</p>
                <p className="text-xs text-muted-foreground">uneven flow</p>
              </div>
              
              <div className="text-center space-y-2">
                <Building className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Space Constraints</p>
                <p className="text-xs text-muted-foreground">fixed equipment</p>
              </div>
            </div>

            {/* Closing Line */}
            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-foreground mb-6">
                Autonomy turns dock bottlenecks into predictable, scalable flow.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="font-semibold">
                  See It In Action
                </Button>
                <Button variant="outline" size="lg" className="font-semibold">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;