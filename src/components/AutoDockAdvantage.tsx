import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Plug, 
  Shield, 
  Settings
} from 'lucide-react';

const AutoDockAdvantage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'always-ready',
      label: 'Always Ready, Always On',
      icon: Zap,
      title: 'Eliminates labor bottlenecks',
      description: 'AutoDock detects incoming trucks, configures itself, and begins unloading instantly — ensuring continuous throughput even at peak volumes.'
    },
    {
      id: 'roi-multiple',
      label: 'ROI on Multiple Fronts', 
      icon: TrendingUp,
      title: 'Reduce costs, accelerate time-to-value',
      description: 'Reduce labor dependency, cut trailer dwell times, and avoid costly dock modifications. AutoDock drives efficiency gains across the board, accelerating time-to-value.'
    },
    {
      id: 'scales-without-slowing',
      label: 'Scales Without Slowing Down',
      icon: BarChart3, 
      title: 'Handles surges without disruption',
      description: 'Handles surges in truck volumes without disruption. With a central orchestration platform and modular AMRs, you can scale across docks while maximizing asset utilization.'
    },
    {
      id: 'ai-understands',
      label: 'AI That Understands Logistics',
      icon: Brain,
      title: 'Dynamically adapts to optimize every cycle',
      description: 'Powered by decades of industry data, AutoDock\'s AI doesn\'t just execute tasks — it understands logistics workflows, dynamically adapting to optimize every movement and cycle.'
    },
    {
      id: 'enterprise-integration',
      label: 'Enterprise Integration, Simplified',
      icon: Plug,
      title: 'Seamlessly connects to ERP/WMS ecosystems',
      description: 'Backed by pre-integrated native SAP/SFS software and open APIs, AutoDock connects seamlessly into ERP/WMS ecosystems — giving real-time dashboards, control, and analytics without IT complexity.'
    },
    {
      id: 'built-in-safety',
      label: 'Built-In Safety, By Design',
      icon: Shield,
      title: 'Automated and inherently safe',
      description: 'Zone monitoring, human detection, and instant e-stops are built in. Designed to align with global standards, AutoDock ensures dock operations are not just automated, but inherently safe.'
    },
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

        {/* Interactive Tabbed Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Horizontal Scrollable Chips */}
          <div className="lg:hidden mb-8">
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card/50 text-muted-foreground hover:bg-card border border-border/50'
                  }`}
                >
                  {feature.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Side Tabs + Content Panel */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: Tab Navigation (Desktop) */}
            <div className="hidden lg:block lg:col-span-2 space-y-2">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(index)}
                    className={`group w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-primary text-primary-foreground shadow-xl'
                        : 'bg-card/30 hover:bg-card/50 border border-border/50 hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        activeTab === index 
                          ? 'bg-white/20' 
                          : 'bg-primary/10 group-hover:bg-primary/15'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          activeTab === index ? 'text-white' : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${
                          activeTab === index ? 'text-white' : 'text-foreground group-hover:text-primary'
                        }`}>
                          {feature.label}
                        </h3>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Content Panel */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={feature.id}
                      className={`transition-all duration-500 ease-in-out ${
                        activeTab === index
                          ? 'opacity-100 translate-x-0 relative'
                          : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
                      }`}
                    >
                      <div className="bg-gradient-to-br from-card/50 to-accent/10 p-10 rounded-3xl border border-border/50 backdrop-blur-sm">
                        {/* Feature Icon */}
                        <div className="flex justify-center mb-8">
                          <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <IconComponent className="w-12 h-12 text-primary" />
                          </div>
                        </div>

                        {/* Feature Content */}
                        <div className="text-center">
                          <h3 className="text-3xl font-bold text-foreground mb-4">
                            {feature.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                            {feature.description}
                          </p>
                          
                          {/* Individual CTA */}
                          <Button 
                            variant="outline" 
                            className="h-12 px-8 text-base font-semibold border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            See AutoDock in Action
                            <Zap className="ml-2 w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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