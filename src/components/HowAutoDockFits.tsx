import { Truck, RotateCcw, Package, Brain } from "lucide-react";

const HowAutoDockFits = () => {
  const steps = [
    {
      icon: Truck,
      title: "Truck Docking & Trailer Entry",
      description: "Head AMR drives inside while Tail AMR anchors at staging with the conveyor linking them, unloading trailers immediately without manual entry or wasted ramp time."
    },
    {
      icon: RotateCcw,
      title: "Unload to Staging",
      description: "The flexible conveyor adjusts its length, angle, and shape to match truck and dock, creating smooth flow to staging points without pile-ups at dock doors."
    },
    {
      icon: Package,
      title: "Staging & Palletizing",
      description: "Head AMR's arm unloads inside while Tail AMR's arm places goods on pallets or the floor, clearing mixed loads consistently and keeping staging organized."
    },
    {
      icon: RotateCcw,
      title: "Staging-to-Storage & Outbound Loading",
      description: "The same AMR + conveyor system extends flow from staging into storage or reverses for loading, enabling continuous bi-directional dock movement."
    },
    {
      icon: Brain,
      title: "Dock Orchestration & Visibility",
      description: "Dock AI synchronizes AMRs, arms, and conveyors while updating WMS/ERP, ensuring predictable throughput, SLA compliance, and real-time visibility."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden" id="how-autodock-fits">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">Integration</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-8 leading-tight">
              How AutoDock Fits Into
              <span className="gradient-text block">Your Dock</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Busy docks create bottlenecks: trucks, ramps, forklifts, and staging all competing for space. AutoDock eliminates this friction without redesigning your dock — just removing what slows you down.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Central Video with Surrounding Steps */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="relative animate-fade-in bg-gradient-to-br from-slate-100 to-slate-200/50 rounded-3xl border border-slate-200/50 shadow-2xl hover:shadow-3xl transition-shadow duration-500 w-80 h-80 lg:w-96 lg:h-96"
                style={{animationDelay: '0.2s', animationFillMode: 'both'}}
              >
                <div className="aspect-square flex items-center justify-center p-8 h-full">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-glow animate-pulse">
                      <Brain className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-poppins font-bold text-foreground">
                        AutoDock in Action
                      </h4>
                      <p className="text-slate-600 text-xs max-w-xs">
                        Interactive visualization showing seamless dock integration
                      </p>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps positioned around the center */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[600px] lg:min-h-[800px]">
              {/* Top Left - Step 1 */}
              <div className="lg:col-start-1 lg:row-start-1 flex items-start">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-sm"
                  style={{animationDelay: '0.1s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <Truck className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                        {steps[0].title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm font-medium">
                        {steps[0].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Right - Step 2 */}
              <div className="lg:col-start-3 lg:row-start-1 flex items-start justify-end">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-sm"
                  style={{animationDelay: '0.2s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <RotateCcw className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                        {steps[1].title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm font-medium">
                        {steps[1].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Left - Step 3 */}
              <div className="lg:col-start-1 lg:row-start-2 flex items-center">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-sm"
                  style={{animationDelay: '0.3s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <Package className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                        {steps[2].title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm font-medium">
                        {steps[2].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Right - Step 4 */}
              <div className="lg:col-start-3 lg:row-start-2 flex items-center justify-end">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-sm"
                  style={{animationDelay: '0.4s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <RotateCcw className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                        {steps[3].title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm font-medium">
                        {steps[3].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Center - Step 5 */}
              <div className="lg:col-start-2 lg:row-start-3 flex items-end justify-center">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-sm"
                  style={{animationDelay: '0.5s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                        {steps[4].title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm font-medium">
                        {steps[4].description}
                      </p>
                    </div>
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