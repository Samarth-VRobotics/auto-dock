import { Truck, RotateCcw, Package, Brain } from "lucide-react";

const HowAutoDockFits = () => {
  const steps = [
    {
      icon: Truck,
      title: "Truck Docking & Trailer Entry",
      description: "Head AMR drives inside, Tail AMR anchors at staging, conveyor links them.",
      benefit: "Trailers unload immediately — no manual entry, no wasted ramp time."
    },
    {
      icon: RotateCcw,
      title: "Unload to Staging",
      description: "Conveyor flexes length, angle, and shape to match truck & dock.",
      benefit: "Smooth flow to staging points — no pile-ups at dock doors."
    },
    {
      icon: Package,
      title: "Staging & Palletizing",
      description: "Head AMR's arm unloads inside, Tail AMR's arm places on pallets/floor.",
      benefit: "Mixed loads cleared consistently, staging stays organized."
    },
    {
      icon: RotateCcw,
      title: "Staging-to-Storage & Outbound Loading",
      description: "Same AMR + conveyor system extends flow into storage or reverses for loading.",
      benefit: "Continuous, bi-directional dock movement — inbound or outbound."
    },
    {
      icon: Brain,
      title: "Dock Orchestration & Visibility",
      description: "Dock AI syncs AMRs, arms, conveyor, and updates WMS/ERP.",
      benefit: "Predictable throughput, SLA compliance, real-time visibility."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden" id="how-autodock-fits">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-12 animate-fade-in">
              {/* Header */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-primary font-semibold text-sm">Integration</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-8 leading-tight">
                  How AutoDock Fits Into
                  <span className="gradient-text block">Your Dock</span>
                </h2>
                <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
                  Busy docks create bottlenecks: trucks, ramps, forklifts, and staging all competing for space. AutoDock eliminates this friction without redesigning your dock — just removing what slows you down.
                </p>
                <div className="w-24 h-1 bg-gradient-primary mx-0 rounded-full mb-8"></div>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{animationDelay: `${0.1 * index}s`, animationFillMode: 'both'}}
                  >
                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <step.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-700 leading-relaxed font-medium">
                          {step.description}
                        </p>
                        <div className="flex items-start space-x-3 pt-2 border-t border-slate-100">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-primary font-semibold text-sm leading-relaxed">
                            {step.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animation/Video Space */}
            <div 
              className="relative animate-fade-in bg-gradient-to-br from-slate-100 to-slate-200/50 rounded-3xl border border-slate-200/50 shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              style={{animationDelay: '0.4s', animationFillMode: 'both'}}
            >
              {/* Placeholder for animation/video */}
              <div className="aspect-[4/3] flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-glow animate-pulse">
                    <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-poppins font-bold text-foreground">
                      AutoDock in Action
                    </h4>
                    <p className="text-slate-600 text-sm max-w-sm">
                      Interactive visualization showing how AutoDock integrates seamlessly into your existing dock operations
                    </p>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowAutoDockFits;