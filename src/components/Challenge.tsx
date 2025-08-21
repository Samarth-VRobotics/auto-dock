import { Package, Users, Truck, TrendingUp, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Challenge = () => {
  return (
    <section 
      className="py-20 bg-background" 
      aria-label="Dock Operations Bottlenecks"
    >
      <div className="container mx-auto px-6">
        {/* Single column layout */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                The Hidden Bottlenecks in Dock Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The dock is where logistics efficiency is pushed to its limits.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Inside the warehouse, processes are structured and predictable. At the dock, things change — floor-loaded cartons, labor-heavy tasks, and fluctuating throughput create hidden bottlenecks that traditional conveyors and forklifts can't solve.
              </p>
            </div>

            {/* Icon Grid - 5 items, responsive */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center space-y-2">
                <Package className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Unstructured Loads</p>
                <p className="text-xs text-muted-foreground">Floor-loaded cartons without pallets</p>
              </div>
              
              <div className="text-center space-y-2">
                <Users className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Labor Dependency</p>
                <p className="text-xs text-muted-foreground">High manual effort, low consistency</p>
              </div>
              
              <div className="text-center space-y-2">
                <Truck className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Dock Variability</p>
                <p className="text-xs text-muted-foreground">Different truck types & seasonal peaks</p>
              </div>
              
              <div className="text-center space-y-2">
                <TrendingUp className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Throughput Uncertainty</p>
                <p className="text-xs text-muted-foreground">Inconsistent flow into operations</p>
              </div>
              
              <div className="text-center space-y-2">
                <Building className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-sm font-medium text-foreground">Space Constraints</p>
                <p className="text-xs text-muted-foreground">Fixed systems that reduce flexibility</p>
              </div>
            </div>

            {/* Closing Line */}
            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-foreground mb-6">
                Our autonomous mobile manipulator with conveyor integration turns this bottleneck into a predictable, scalable flow.
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