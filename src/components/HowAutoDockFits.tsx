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

          {/* Central Video with Surrounding Steps in Circular Pattern */}
          <div className="relative max-w-7xl mx-auto">
            {/* Central Video - Larger and Landscape */}
            <div className="flex items-center justify-center mb-16">
              <div 
                className="relative animate-fade-in bg-gradient-to-br from-slate-100 to-slate-200/50 rounded-3xl border border-slate-200/50 shadow-2xl hover:shadow-3xl transition-shadow duration-500 w-full max-w-2xl h-72 lg:h-80"
                style={{animationDelay: '0.2s', animationFillMode: 'both'}}
              >
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

            {/* Steps arranged in circular pattern around video */}
            <div className="relative">
              {/* Step 1 - Top Left */}
              <div className="absolute -top-32 left-0 lg:-top-40 lg:-left-16">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-xs hover:scale-110 hover:z-10 relative"
                  style={{animationDelay: '0.1s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                      <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      <Truck className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
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

              {/* Step 2 - Top Right */}
              <div className="absolute -top-32 right-0 lg:-top-40 lg:-right-16">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-xs hover:scale-110 hover:z-10 relative"
                  style={{animationDelay: '0.2s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                      <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      <RotateCcw className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
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

              {/* Step 3 - Left */}
              <div className="absolute top-8 -left-16 lg:-left-24">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-xs hover:scale-110 hover:z-10 relative"
                  style={{animationDelay: '0.3s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                      <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <Package className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
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

              {/* Step 4 - Right */}
              <div className="absolute top-8 -right-16 lg:-right-24">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-xs hover:scale-110 hover:z-10 relative"
                  style={{animationDelay: '0.4s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                      <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                      <RotateCcw className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
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

              {/* Step 5 - Bottom Center */}
              <div className="absolute top-64 left-1/2 transform -translate-x-1/2 lg:top-72">
                <div
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in max-w-xs hover:scale-110 hover:z-10 relative"
                  style={{animationDelay: '0.5s', animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow relative">
                      <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                      <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                        Dock Orchestration & Visibility
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm font-medium">
                        Dock AI synchronizes AMRs, arms, and conveyors while updating WMS/ERP, ensuring predictable throughput, SLA compliance, and real-time visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacing for the positioned elements */}
              <div className="h-96"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowAutoDockFits;