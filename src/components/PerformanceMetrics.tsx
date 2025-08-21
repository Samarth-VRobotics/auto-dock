import { Zap, Package, Users, DollarSign, Shield, Truck } from "lucide-react";
const PerformanceMetrics = () => {
  const metrics = [{
    icon: Zap,
    title: "Speed",
    primary: "Full trailer in 5–10 min",
    secondary: "~70% faster than manual loading",
    iconColor: "text-blue-500"
  }, {
    icon: Package,
    title: "Throughput",
    primary: "600+ boxes / hour",
    secondary: "15k–20k packages per day",
    iconColor: "text-blue-500"
  }, {
    icon: Users,
    title: "Labor Savings",
    primary: "40–60% less dock labor",
    secondary: "1 system = 3–4 workers",
    iconColor: "text-blue-500"
  }, {
    icon: DollarSign,
    title: "ROI",
    primary: "Payback in <24 months",
    secondary: "Immediate ROI with RaaS",
    iconColor: "text-blue-500"
  }, {
    icon: Shield,
    title: "Safety",
    primary: "Zero manual trailer lifting",
    secondary: "Eliminates dock injury risks",
    iconColor: "text-blue-500"
  }, {
    icon: Truck,
    title: "Flexibility",
    primary: "Works with any standard trailer",
    secondary: "Deploys in under 1 hour",
    iconColor: "text-blue-500"
  }];
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Performance That Redefines the Dock
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Faster, safer, and smarter than manual operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {metric.title}
                  </h3>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">
                    {metric.primary}
                  </p>
                  <p className="text-muted-foreground">
                    {metric.secondary}
                  </p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default PerformanceMetrics;