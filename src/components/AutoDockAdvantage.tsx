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
      id: 'hands-free',
      label: 'Hands-Free Setup',
      icon: Settings,
      title: 'Detects trucks, starts unloading',
      description: 'AutoDock automatically identifies incoming trucks and begins the unloading process without human intervention, ensuring seamless operations around the clock.'
    },
    {
      id: 'scales',
      label: 'Scales Effortlessly', 
      icon: BarChart3,
      title: 'One platform, multiple docks',
      description: 'Deploy across multiple loading docks with centralized orchestration, allowing you to handle volume surges without operational bottlenecks.'
    },
    {
      id: 'ai-driven',
      label: 'AI-Driven Efficiency',
      icon: Brain, 
      title: 'Learns, adapts, optimizes',
      description: 'Advanced AI continuously analyzes operations and automatically adjusts workflows to maximize throughput and minimize delays.'
    },
    {
      id: 'integration',
      label: 'Seamless Integration',
      icon: Plug,
      title: 'Works with SAP/SFS + APIs',
      description: 'Pre-built connectors for major ERP and WMS systems ensure rapid deployment without disrupting existing workflows or IT infrastructure.'
    },
    {
      id: 'roi',
      label: 'Fast ROI',
      icon: TrendingUp,
      title: 'Cuts dwell times & costs',
      description: 'Achieve payback in under 24 months through reduced labor dependency, faster truck turnarounds, and optimized dock utilization.'
    },
    {
      id: 'safety',
      label: 'Safety Built In',
      icon: Shield,
      title: 'Meets standards with monitoring',
      description: 'Comprehensive safety systems including zone monitoring, collision detection, and emergency stops ensure compliance with global safety standards.'
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