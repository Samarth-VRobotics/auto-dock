import { Timer, TrendingUp, Users, DollarSign, Shield, Settings } from "lucide-react";

const PerformanceMetrics = () => {
  const metrics = [
    {
      icon: Timer,
      title: "Speed",
      primary: "Full trailer in 5–10 min",
      secondary: "~70% faster than manual loading"
    },
    {
      icon: TrendingUp,
      title: "Throughput",
      primary: "600+ boxes / hour",
      secondary: "15k–20k packages per day"
    },
    {
      icon: Users,
      title: "Labor Savings",
      primary: "40–60% less dock labor",
      secondary: "1 system = 3–4 workers"
    },
    {
      icon: DollarSign,
      title: "ROI",
      primary: "Payback in <24 months",
      secondary: "Immediate ROI with RaaS"
    },
    {
      icon: Shield,
      title: "Safety",
      primary: "Zero manual trailer lifting",
      secondary: "Eliminates dock injury risks"
    },
    {
      icon: Settings,
      title: "Flexibility",
      primary: "Works with any standard trailer",
      secondary: "Deploys in under 1 hour"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Performance That Redefines the Dock
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Faster, safer, and smarter than manual operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-background rounded-lg p-8 shadow-sm border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {metric.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">
                    {metric.primary}
                  </p>
                  <p className="text-muted-foreground">
                    {metric.secondary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;