import { Bot, ArrowRight, Zap, Brain } from "lucide-react";
import mobileManipulatorImage from "@/assets/mobile-manipulator-dock.jpg";

const Solution = () => {
  const systems = [
    {
      icon: Bot,
      title: "Head & Tail AMRs",
      description: "Mobile robots that move inside the truck and at staging. Each carries a robotic arm to handle goods directly.",
      color: "primary"
    },
    {
      icon: ArrowRight,
      title: "Robotic Arms with Swappable Grippers", 
      description: "Adapt to different load types — cartons, bags, or irregular goods — with quick-change modular grippers.",
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Flexible Powered Conveyor",
      description: "Connects the two AMRs. Adjusts its length, angle, and shape as they move in sync. Powered rollers and smart brakes keep it stable, even in curves.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Dock AI Software",
      description: "Orchestrates AMRs, conveyors, and arms in real time. Connects with WMS/ERP for mission planning, queue logic, throughput tracking, and analytics.",
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="solutions">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">Technology</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-8 leading-tight">
              The Technology Behind
              <span className="gradient-text block">AutoDock</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Four core components work together to turn bottlenecks into predictable flow.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
            
            {/* System Flow Visual */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-center justify-center space-x-4 text-sm font-medium text-slate-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Flow Management</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span>AMR Navigation</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Manipulator</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span>Conveyor</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Vegam SFS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Systems List */}
            <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
              {systems.map((system, index) => (
                <div 
                  key={system.title}
                  className="group hover-lift bg-white p-6 rounded-2xl border border-slate-200/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  style={{animationDelay: `${0.1 * index}s`, animationFillMode: 'both'}}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-14 h-14 bg-gradient-${system.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <system.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {system.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {system.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <img 
                  src={mobileManipulatorImage} 
                  alt="AutoDock mobile manipulator in action at dock" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <h4 className="text-white font-poppins font-bold text-lg mb-2">
                      Individually Powerful
                    </h4>
                    <p className="text-white/90 text-sm">
                      Together unstoppable — one integrated system for true dock autonomy
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50 animate-bounce-subtle">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">600+</div>
                  <div className="text-xs text-slate-500">boxes/hour</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/50 animate-bounce-subtle" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">5-10</div>
                  <div className="text-xs text-slate-500">min loading</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;