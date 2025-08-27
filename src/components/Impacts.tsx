import { Clock, TrendingDown, DollarSign, Search, UserX, Calculator } from "lucide-react";

const Impacts = () => {
  const impacts = [
    {
      icon: Clock,
      title: "Truck Detention Costs",
      description: "$50–100/hr → $80K+/year lost per small fleet"
    },
    {
      icon: TrendingDown,
      title: "Lost Throughput Capacity",
      description: "Up to 70% slower turnarounds and reduced daily trailer flow"
    },
    {
      icon: DollarSign,
      title: "Revenue Loss from Delays",
      description: "Up to 20% of sales lost from cascading late shipments"
    },
    {
      icon: Search,
      title: "OTIF Penalties & Blind Spots",
      description: "Up to $11M/year in fines from missed SLAs and poor visibility"
    },
    {
      icon: UserX,
      title: "Customer Churn Risk",
      description: "50%+ of customers abandon after a single late delivery"
    },
    {
      icon: Calculator,
      title: "Hidden Extra Costs",
      description: "Emergency shipments, storage fees, and loss of partner trust"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-label="Hidden Costs of Dock Bottlenecks">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Header Section */}
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
                <span className="text-destructive font-semibold text-sm">The Impacts</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-8 leading-tight">
                The Hidden Costs of
                <span className="text-destructive block">Dock Bottlenecks</span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Every hidden bottleneck at the dock comes with a visible price tag — in wasted hours, lost revenue, and broken customer promises.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-destructive to-destructive/60 mx-auto rounded-full mb-8"></div>
            </div>

            {/* Impacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{
              animationDelay: '0.3s',
              animationFillMode: 'both'
            }}>
              {impacts.map((impact, index) => (
                <div
                  key={impact.title}
                  className="text-left group hover-lift bg-slate-50/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 hover:border-destructive/30 transition-all duration-300"
                  style={{
                    animationDelay: `${0.1 * index}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-destructive to-destructive/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <impact.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">
                        {impact.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center animate-fade-in" style={{
              animationDelay: '0.6s',
              animationFillMode: 'both'
            }}>
              <div className="max-w-4xl mx-auto bg-slate-50/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 shadow-lg">
                <p className="text-xl font-poppins font-semibold text-foreground mb-4">
                  Turn dock bottlenecks into clear, predictable flow with vAutoDock.
                </p>
                <p className="text-slate-600">
                  Backed by Vegam's decades of expertise in digital factory innovation, vAutoDock adapts to variability, integrates seamlessly, and delivers measurable efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impacts;