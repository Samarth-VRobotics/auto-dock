import { Package, Users, Truck, TrendingUp, Building } from "lucide-react";
const Challenge = () => {
  const challenges = [{
    icon: Package,
    title: "Unstructured Loads",
    description: "Floor-loaded cartons without pallets"
  }, {
    icon: Users,
    title: "Peak Season Downtime",
    description: "Overloaded docks, delayed turnaround"
  }, {
    icon: Truck,
    title: "Dock Variability",
    description: "Different truck types & seasonal peaks"
  }, {
    icon: TrendingUp,
    title: "Throughput Uncertainty",
    description: "Unpredictable flow rates"
  }, {
    icon: Building,
    title: "Dynamic Layouts",
    description: "Fixed systems that reduce flexibility"
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
                <span className="text-primary font-semibold text-sm">The Challenge</span>
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
                Inside the warehouse, processes are structured and predictable. At the dock, things change — floor-loaded cartons, labor-heavy tasks, and fluctuating throughput create hidden bottlenecks that traditional conveyors and forklifts can't solve.
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

            {/* Bottom CTA */}
            <div className="text-center animate-fade-in" style={{
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
              <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 shadow-lg">
                <p className="text-xl font-poppins font-semibold text-foreground mb-4">Let's turn the dock chaos into clarity with The AutoDock.</p>
                <p className="text-slate-600">“Backed by Vegam’s decades of expertise in digital factory solutions, AutoDock streamlines dock operations, adapts to variability, and delivers measurable efficiency.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Challenge;