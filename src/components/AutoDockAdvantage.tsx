import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Plug, 
  Shield, 
  Globe 
} from 'lucide-react';

const AutoDockAdvantage = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Always Ready, Always On",
      description: "Eliminates labor bottlenecks. AutoDock detects incoming trucks, configures itself, and begins unloading instantly — ensuring continuous throughput even at peak volumes."
    },
    {
      icon: TrendingUp,
      title: "ROI on Multiple Fronts",
      description: "Reduce labor dependency, cut trailer dwell times, and avoid costly dock modifications. AutoDock drives efficiency gains across the board, accelerating time-to-value."
    },
    {
      icon: BarChart3,
      title: "Scales Without Slowing Down",
      description: "Handles surges in truck volumes without disruption. With a central orchestration platform and modular AMRs, you can scale across docks while maximizing asset utilization."
    },
    {
      icon: Brain,
      title: "AI That Understands Logistics",
      description: "Powered by decades of industry data, AutoDock's AI doesn't just execute tasks — it understands logistics workflows, dynamically adapting to optimize every movement and cycle."
    },
    {
      icon: Plug,
      title: "Enterprise Integration, Simplified",
      description: "Backed by pre-integrated native SAP/SFS software and open APIs, AutoDock connects seamlessly into ERP/WMS ecosystems — giving real-time dashboards, control, and analytics without IT complexity."
    },
    {
      icon: Shield,
      title: "Built-In Safety, By Design",
      description: "Zone monitoring, human detection, and instant e-stops are built in. Designed to align with global standards, AutoDock ensures dock operations are not just automated, but inherently safe."
    },
    {
      icon: Globe,
      title: "Future-Proof Across Industries",
      description: "From retail and e-commerce to 3PLs and manufacturing, AutoDock is built for industries where dock efficiency defines supply chain success."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-accent/5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Strategic Advantage</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent leading-tight">
            Why AutoDock Is in a<br />League of Its Own
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            More than automation — AutoDock is a strategic platform that transforms dock operations into a resilient, scalable, and future-ready advantage.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-primary/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-primary font-semibold uppercase tracking-wide text-sm">The Bottom Line</span>
            </div>
            <p className="text-xl lg:text-2xl text-foreground font-semibold leading-relaxed">
              AutoDock is not another piece of equipment. It is an intelligent dock autonomy platform that delivers resilience, ROI, and competitive edge — redefining how the first and last 20 meters of logistics are managed.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="h-14 px-10 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Discover How AutoDock Works
            <Zap className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AutoDockAdvantage;