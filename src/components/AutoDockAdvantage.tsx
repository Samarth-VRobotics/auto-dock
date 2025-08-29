import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Plug, 
  Shield,
  Globe,
  Truck,
  Network
} from 'lucide-react';

const AutoDockAdvantage = () => {
  const benefits = [
    {
      id: 'always-ready',
      header: 'Always Ready, Always On',
      text: 'Traditional docks wait. AutoDock doesn\'t. It detects incoming trucks, configures itself, and begins unloading instantly — keeping flow continuous even when volumes spike.',
      icon: Zap,
      visual: 'truck-docking'
    },
    {
      id: 'roi-multiple',
      header: 'ROI on Multiple Fronts',
      text: 'Every extra minute at the dock costs money. AutoDock cuts trailer dwell times, avoids costly dock modifications, and delivers measurable returns in 12–24 months.',
      icon: TrendingUp,
      visual: 'roi-graph'
    },
    {
      id: 'scales-without-slowing',
      header: 'Scales Without Slowing Down',
      text: 'Handles surges in truck volumes without disruption. With a central orchestration platform and modular AMRs, you can scale across docks while maximizing asset utilization.',
      icon: BarChart3,
      visual: 'dashboard'
    },
    {
      id: 'ai-understands',
      header: 'AI That Understands Logistics',
      text: 'Powered by decades of industry data, AutoDock\'s AI doesn\'t just execute tasks — it understands logistics workflows, dynamically adapting to optimize every movement and cycle.',
      icon: Brain,
      visual: 'ai-brain'
    },
    {
      id: 'enterprise-integration',
      header: 'Enterprise Integration, Simplified',
      text: 'Backed by pre-integrated native SAP/SFS software and open APIs, AutoDock connects seamlessly into ERP/WMS ecosystems — giving real-time dashboards, control, and analytics without IT complexity.',
      icon: Plug,
      visual: 'integrations'
    },
    {
      id: 'built-in-safety',
      header: 'Built-In Safety, By Design',
      text: 'Speed means nothing without safety. AutoDock is engineered with zone monitoring, human detection, and global-standard compliance — making automation powerful, safe, and reliable.',
      icon: Shield,
      visual: 'safety'
    }
  ];

  const renderVisual = (visual: string, icon: any) => {
    const IconComponent = icon;
    
    switch (visual) {
      case 'truck-docking':
        return (
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-64 flex items-center justify-center">
            <div className="flex items-center gap-6">
              <div className="w-16 h-12 bg-slate-300 rounded border-2 border-slate-400 relative">
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-slate-400 rounded-r"></div>
                <Truck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-slate-600" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse mb-2"></div>
                <div className="w-12 h-8 bg-primary/20 rounded border-2 border-primary/40"></div>
              </div>
            </div>
          </div>
        );
      
      case 'dashboard':
        return (
          <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 h-64">
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="space-y-3">
                <div className="h-8 bg-accent/30 rounded flex items-center justify-center">
                  <Network className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-accent/20 rounded w-full"></div>
                  <div className="h-3 bg-accent/20 rounded w-3/4"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-8 bg-primary/30 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary/20 rounded w-full"></div>
                  <div className="h-3 bg-primary/20 rounded w-2/3"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-8 bg-secondary/30 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-secondary/20 rounded w-full"></div>
                  <div className="h-3 bg-secondary/20 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'ai-brain':
        return (
          <div className="relative bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 h-64 flex items-center justify-center">
            <div className="relative">
              <Brain className="w-24 h-24 text-secondary" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary/30 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-1 bg-secondary/40 rounded"></div>
            </div>
          </div>
        );
      
      case 'integrations':
        return (
          <div className="relative bg-gradient-to-br from-muted/20 to-muted/10 rounded-2xl p-8 h-64 flex items-center justify-center">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-12 h-8 bg-slate-600 rounded mb-2 flex items-center justify-center text-white text-xs font-bold">SAP</div>
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">WMS</div>
              </div>
              <div className="flex flex-col items-center">
                <Plug className="w-8 h-8 text-primary mb-2" />
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="w-16 h-12 bg-primary/20 rounded border-2 border-primary/40 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">AutoDock</span>
              </div>
            </div>
          </div>
        );
      
      case 'safety':
        return (
          <div className="relative bg-gradient-to-br from-orange-50 to-orange-25 rounded-2xl p-8 h-64 flex items-center justify-center">
            <div className="relative">
              <Shield className="w-20 h-20 text-orange-600" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        );
      
      case 'industries':
        return (
          <div className="relative bg-gradient-to-br from-purple-50 to-purple-25 rounded-2xl p-8 h-64">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-3">
                <div className="h-6 bg-purple-200 rounded flex items-center justify-center text-xs font-semibold text-purple-800">Retail</div>
                <div className="h-6 bg-blue-200 rounded flex items-center justify-center text-xs font-semibold text-blue-800">E-commerce</div>
                <div className="h-6 bg-green-200 rounded flex items-center justify-center text-xs font-semibold text-green-800">3PL</div>
              </div>
              <div className="space-y-3">
                <div className="h-6 bg-orange-200 rounded flex items-center justify-center text-xs font-semibold text-orange-800">Manufacturing</div>
                <div className="h-6 bg-red-200 rounded flex items-center justify-center text-xs font-semibold text-red-800">Food & Beverage</div>
                <div className="h-6 bg-indigo-200 rounded flex items-center justify-center text-xs font-semibold text-indigo-800">Automotive</div>
              </div>
            </div>
            <Globe className="absolute bottom-4 right-4 w-8 h-8 text-purple-600 opacity-50" />
          </div>
        );
      
      case 'roi-graph':
        return (
          <div className="relative bg-gradient-to-br from-green-50 to-green-25 rounded-2xl p-8 h-64">
            <div className="flex items-end justify-center h-full gap-2">
              <div className="flex flex-col items-center">
                <div className="h-16 w-8 bg-slate-300 rounded-t mb-2"></div>
                <span className="text-xs text-slate-600">Before</span>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600 mb-8" />
              <div className="flex flex-col items-center">
                <div className="h-32 w-8 bg-green-500 rounded-t mb-2 animate-pulse"></div>
                <span className="text-xs text-green-700 font-semibold">After</span>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="bg-muted/20 rounded-2xl p-8 h-64 flex items-center justify-center">
            <IconComponent className="w-16 h-16 text-muted-foreground" />
          </div>
        );
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Strategic Advantage</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent leading-tight">
            Why choose AutoDock
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            More than automation — AutoDock is a strategic platform that transforms dock operations into a resilient, scalable, and future-ready advantage.
          </p>
        </div>

        {/* Benefits Rows */}
        <div className="max-w-7xl mx-auto space-y-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={benefit.id}
                className={`grid lg:grid-cols-10 gap-12 items-center animate-fade-in`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Text Content */}
                <div className={`space-y-6 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="h-px bg-border flex-1"></div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground leading-tight">
                    {benefit.header}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {benefit.text}
                  </p>
                </div>

                {/* Visual Content */}
                <div className={`lg:col-span-3 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {renderVisual(benefit.visual, benefit.icon)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full my-20"></div>
      </div>
    </section>
  );
};

export default AutoDockAdvantage;