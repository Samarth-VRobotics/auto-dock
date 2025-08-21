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
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Performance That Delivers Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our autonomous dock system transforms logistics operations with measurable improvements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-4">
                  <Icon className={`h-8 w-8 ${metric.iconColor} mr-3`} />
                  <h3 className="text-lg font-semibold text-foreground">{metric.title}</h3>
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">{metric.primary}</p>
                <p className="text-muted-foreground">{metric.secondary}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PerformanceMetrics;