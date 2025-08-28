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

          {/* L-Shaped Layout Grid */}
          <div className="relative grid grid-cols-12 grid-rows-6 gap-4 max-w-6xl mx-auto h-[600px] lg:h-[700px]">
            
            {/* Step 1 - Top Left L-Shape */}
            <div className="col-span-4 row-span-2 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10">
              <div className="h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/30 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 transition-all duration-300 animate-fade-in"
                   style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
                <div className="flex items-start space-x-4 h-full">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <Truck className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                      Truck Docking & Trailer Entry
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm font-medium">
                      Head AMR drives inside while Tail AMR anchors at staging with the conveyor linking them, unloading trailers immediately without manual entry or wasted ramp time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Top Right L-Shape */}
            <div className="col-span-4 col-start-9 row-span-2 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10">
              <div className="h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/30 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 transition-all duration-300 animate-fade-in"
                   style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                <div className="flex items-start space-x-4 h-full">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <RotateCcw className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                      Unload to Staging
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm font-medium">
                      The flexible conveyor adjusts its length, angle, and shape to match truck and dock, creating smooth flow to staging points without pile-ups at dock doors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Video Section */}
            <div className="col-span-6 col-start-4 row-span-4 row-start-2 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200/50 rounded-3xl border border-slate-200/50 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-fade-in"
                   style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                <div className="flex items-center justify-center p-8 h-full">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-glow animate-pulse">
                      <Brain className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-poppins font-bold text-foreground">
                        AutoDock in Action
                      </h4>
                      <p className="text-slate-600 text-sm max-w-md">
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

            {/* Step 3 - Bottom Left L-Shape */}
            <div className="col-span-4 row-span-2 row-start-5 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10">
              <div className="h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/30 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 transition-all duration-300 animate-fade-in"
                   style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <div className="flex items-start space-x-4 h-full">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <Package className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                      Staging & Palletizing
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm font-medium">
                      Head AMR's arm unloads inside while Tail AMR's arm places goods on pallets or the floor, clearing mixed loads consistently and keeping staging organized.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Bottom Right L-Shape */}
            <div className="col-span-4 col-start-9 row-span-2 row-start-5 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10">
              <div className="h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/30 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 transition-all duration-300 animate-fade-in"
                   style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
                <div className="flex items-start space-x-4 h-full">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <RotateCcw className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                      Staging-to-Storage & Outbound Loading
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm font-medium">
                      The same AMR + conveyor system extends flow from staging into storage or reverses for loading, enabling continuous bi-directional dock movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 - Full Width Bottom Section */}
          <div className="mt-8 group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:border-primary/30 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 transition-all duration-300 animate-fade-in max-w-6xl mx-auto"
                 style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                  <span className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <Brain className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                    Dock Orchestration & Visibility
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg font-medium max-w-4xl">
                    Dock AI synchronizes AMRs, arms, and conveyors while updating WMS/ERP, ensuring predictable throughput, SLA compliance, and real-time visibility across all dock operations for complete operational control.
                  </p>
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