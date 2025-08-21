import { Clock, TrendingUp, Shield, BarChart3, Zap, User, CloudSun, DollarSign } from "lucide-react";

const ManualVsRobotic = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Operations",
      manual: "Limited to working hours",
      robotic: "Continuous operation"
    },
    {
      icon: TrendingUp,
      title: "Consistent Speed",
      manual: "Variable performance",
      robotic: "Predictable throughput"
    },
    {
      icon: Shield,
      title: "Safety Compliance",
      manual: "Human error risk",
      robotic: "Zero injury incidents"
    },
    {
      icon: BarChart3,
      title: "Scalable Capacity",
      manual: "Hiring challenges",
      robotic: "Instant scaling"
    },
    {
      icon: Zap,
      title: "Data Analytics",
      manual: "Limited insights",
      robotic: "Real-time metrics"
    },
    {
      icon: User,
      title: "Ergonomic Benefits",
      manual: "Physical strain",
      robotic: "Eliminates lifting"
    },
    {
      icon: CloudSun,
      title: "Weather Independence",
      manual: "Weather dependent",
      robotic: "All-weather operation"
    },
    {
      icon: DollarSign,
      title: "Predictable Costs",
      manual: "Variable labor costs",
      robotic: "Fixed operational costs"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Manual vs. Robotic Loading
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare traditional manual loading processes with our advanced robotic solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
                  {feature.title}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Manual:</span>
                    <span className="text-destructive text-right flex-1 ml-2">{feature.manual}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Robotic:</span>
                    <span className="text-primary font-medium text-right flex-1 ml-2">{feature.robotic}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-foreground">
            Experience the future of dock operations with consistent, safe, and scalable robotic loading
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManualVsRobotic;