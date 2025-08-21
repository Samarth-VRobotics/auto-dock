import { Settings, GitBranch, Wrench, RefreshCw, Zap, Factory } from "lucide-react";

const ValueProps = () => {
  const features = [
    {
      icon: Settings,
      title: "Adaptive Dock Integration",
      description: "Dynamic conveyor length & angle fit any truck size or dock layout."
    },
    {
      icon: GitBranch,
      title: "Coordinated AMR System", 
      description: "Dual AMRs synchronize for precise positioning, endpoint control, and flow balance."
    },
    {
      icon: Wrench,
      title: "Versatile Robotic Handling",
      description: "Cobot arms with swappable grippers manage boxes, bags, and irregular goods."
    },
    {
      icon: RefreshCw,
      title: "Seamless Bi-Directional Flow",
      description: "Supports both unloading inbound goods and loading outbound shipments."
    },
    {
      icon: Zap,
      title: "AI-Driven Optimization",
      description: "Real-time throughput control reduces idle time and adapts to demand shifts."
    },
    {
      icon: Factory,
      title: "Smart Factory Integration",
      description: "Native Vegam Smart Factory link for missions, multi-drop routing, and analytics."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Why Choose Our Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-background rounded-lg p-8 shadow-sm border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-foreground">
            One integrated system that adapts, synchronizes, and scales dock operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;