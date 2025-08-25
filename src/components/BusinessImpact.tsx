import { Clock, Package, DollarSign, Zap } from "lucide-react";

const BusinessImpact = () => {
  const metrics = [
    {
      icon: Clock,
      value: "5-10 min",
      label: "Trailer Loading Time",
      description: "Dramatically reduce dock turnaround"
    },
    {
      icon: Package,
      value: "600+",
      label: "Boxes per Hour",
      description: "Consistent high-speed throughput"
    },
    {
      icon: DollarSign,
      value: "< 24 months",
      label: "ROI Timeline",
      description: "Fast payback on investment"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Operations",
      description: "Never stop, never slow down"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="text-white font-semibold text-sm">Real Business Impact</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Results That Matter
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transform your dock operations with measurable outcomes and rapid ROI
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {metric.label}
                </h3>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center mt-16">
            <p className="text-xl text-white/90 font-semibold">
              From smart factories to smart docks – experience the Vegam advantage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;