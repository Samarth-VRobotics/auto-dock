import { Package, Users, TrendingUp, Building, Zap } from "lucide-react";
const Challenge = () => {
  const challenges = [{
    icon: Users,
    title: "Peak-Season Downtime",
    description: "Overloaded docks, delayed turnaround"
  }, {
    icon: TrendingUp,
    title: "Throughput Uncertainty",
    description: "Unpredictable flow rates"
  }, {
    icon: Package,
    title: "Unstructured Loads",
    description: "Floor-loaded cartons without pallets"
  }, {
    icon: Building,
    title: "Rigid Layout / Infrastructure",
    description: "Fixed systems that reduce flexibility"
  }, {
    icon: Zap,
    title: "ERP/WMS Integration Gaps",
    description: "Slow, complex integration creates blind spots and delays"
  }];
  return <section className="py-24 bg-gradient-surface relative overflow-hidden" aria-label="Dock Operations Bottlenecks">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Header Section */}
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-primary font-semibold text-sm">The Challenges</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-8 leading-tight">
                The Hidden Bottlenecks in 
                <span className="gradient-text block">Dock Operations</span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                The dock is where logistics efficiency is pushed to its limits.
              </p>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                Inside the warehouse, workflows are structured, measurable, and increasingly automated. At the dock, however, seasonal peaks, floor-loaded cartons, fluctuating throughput, and rigid layouts create hidden bottlenecks that traditional systems can't solve.
              </p>
            </div>

            {/* Challenge Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 animate-fade-in" style={{
            animationDelay: '0.3s',
            animationFillMode: 'both'
          }}>
              {challenges.map((challenge, index) => <div key={challenge.title} className="text-center group hover-lift bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 hover:border-primary/30 transition-all duration-300" style={{
              animationDelay: `${0.1 * index}s`,
              animationFillMode: 'both'
            }}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <challenge.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-poppins font-semibold text-foreground mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Challenge;