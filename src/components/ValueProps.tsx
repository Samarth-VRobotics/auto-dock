const ValueProps = () => {
  const features = [
    {
      emoji: "🔄",
      title: "Dynamic Shape Formation",
      description: "Conveyor adapts length & angle to any truck or dock layout."
    },
    {
      emoji: "🤖", 
      title: "Dual AMR Synchronization",
      description: "Two AMRs coordinate for endpoint alignment and precision."
    },
    {
      emoji: "🦾",
      title: "Cobot Arm Handling", 
      description: "Robotic arms with swappable grippers handle boxes, bags, or irregular goods."
    },
    {
      emoji: "↔",
      title: "Bi-Directional Flow",
      description: "Smooth inbound unloading and outbound loading in one system."
    },
    {
      emoji: "⚡",
      title: "Throughput Optimization",
      description: "Minimize truck idle time and accelerate dock operations."
    },
    {
      emoji: "🔌",
      title: "Smart Factory Integration", 
      description: "Native link with Vegam's Smart Factory for missions & analytics."
    },
    {
      emoji: "📦",
      title: "Multi-Drop Point Handling",
      description: "Route goods directly to multiple staging zones or destinations."
    },
    {
      emoji: "🔗",
      title: "Integrated System",
      description: "AMRs, conveyors, and cobots work as a single orchestrated flow."
    },
    {
      emoji: "🧠",
      title: "AI-Driven Efficiency",
      description: "AI adapts in real-time to optimize throughput and resilience."
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
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-foreground">
            From dock to warehouse, automation that adapts, synchronizes, and scales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;