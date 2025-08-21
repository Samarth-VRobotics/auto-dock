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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className={`w-8 h-8 ${metric.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {metric.title}
                </h3>
                <p className="text-xl font-bold text-primary mb-1">
                  {metric.primary}
                </p>
                <p className="text-sm text-muted-foreground">
                  {metric.secondary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PerformanceMetrics;