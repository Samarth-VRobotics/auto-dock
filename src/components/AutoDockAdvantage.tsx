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
      text: 'Fixed systems buckle under pressure. With a central orchestration platform and modular system design, AutoDock scale across docks while maximizing asset utilization.',
      icon: BarChart3,
      visual: 'dashboard'
    },
    {
      id: 'ai-understands',
      header: 'AI That Understands Logistics',
      text: 'Traditional systems only follow commands. Powered by decades of industry data, AutoDock\'s AI adapts to dynamic workflows and keeps every movement optimized',
      icon: Brain,
      visual: 'ai-brain'
    },
    {
      id: 'enterprise-integration',
      header: 'Enterprise Integration, Simplified',
      text: 'Integrations often slow systems down. AutoDock, backed by native SAP/SFS connectors and open APIs, connects seamlessly into ERP/WMS ecosystems, giving you real-time dashboards and control without IT complexity.',
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
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-64 overflow-hidden">
            <div className="flex items-center justify-between h-full">
              {/* Incoming truck with detection sensor */}
              <div className="relative flex items-center gap-4">
                <div className="relative">
                  <Truck className="w-12 h-12 text-muted-foreground transition-all duration-1000 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
                </div>
                
                {/* Detection waves */}
                <div className="flex gap-1">
                  <div className="w-1 h-8 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1 h-6 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-4 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>

              {/* Auto-configuring dock */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                </div>
                <div className="text-xs text-primary font-medium">Auto-Config</div>
              </div>

              {/* Flow indicator */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Zap className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        );
      
      case 'dashboard':
        return (
          <div className="relative bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 h-64 overflow-hidden">
            {/* Multiple trucks flowing */}
            <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <Truck 
                    className="w-6 h-6 text-primary/70 transition-all duration-1000 animate-bounce" 
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                  <div className="w-1 h-8 bg-primary/30 rounded-full mt-2 relative overflow-hidden">
                    <div 
                      className="absolute bottom-0 w-full bg-primary rounded-full transition-all duration-2000 ease-out"
                      style={{ 
                        height: '100%',
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Multiple dock stations */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-between px-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-12 h-8 bg-gradient-to-t from-primary/30 to-primary/10 rounded-lg border border-primary/20 relative">
                  <div 
                    className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  ></div>
                  <div className="absolute -top-1 right-0 w-3 h-3 bg-accent rounded-full opacity-60"></div>
                </div>
              ))}
            </div>

            {/* Central orchestration indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
              <Network className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '4s' }} />
            </div>
          </div>
        );
      
      case 'ai-brain':
        return (
          <div className="relative bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
            <div className="relative">
              {/* Central brain/network hub */}
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-secondary/20 rounded-full flex items-center justify-center relative">
                <Brain className="w-8 h-8 text-secondary" />
                
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border border-secondary/20" style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite', animationDelay: '1s' }}></div>
              </div>

              {/* Dynamic connection nodes */}
              {[
                { top: '-20px', left: '50px', delay: '0s' },
                { top: '50px', left: '60px', delay: '0.5s' },
                { top: '50px', left: '-20px', delay: '1s' },
                { top: '-10px', left: '-25px', delay: '1.5s' }
              ].map((node, i) => (
                <div 
                  key={i}
                  className="absolute w-3 h-3 bg-secondary/60 rounded-full"
                  style={{ top: node.top, left: node.left }}
                >
                  <div 
                    className="w-full h-full bg-secondary rounded-full animate-pulse"
                    style={{ animationDelay: node.delay }}
                  ></div>
                  <div className="absolute top-1/2 left-1/2 w-12 h-px bg-gradient-to-r from-secondary/40 to-transparent -translate-y-1/2"></div>
                </div>
              ))}

              {/* Optimization indicators */}
              <div className="absolute -top-6 -right-6 flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        );
      
      case 'integrations':
        return (
          <div className="relative bg-gradient-to-br from-muted/20 to-muted/10 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-xs">
              {/* External systems */}
              <div className="absolute -left-8 top-0 space-y-3">
                <div className="w-12 h-6 bg-gradient-to-r from-slate-600 to-slate-500 rounded text-white text-xs font-bold flex items-center justify-center shadow-sm">
                  SAP
                </div>
                <div className="w-12 h-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded text-white text-xs font-bold flex items-center justify-center shadow-sm">
                  ERP
                </div>
                <div className="w-12 h-6 bg-gradient-to-r from-green-600 to-green-500 rounded text-white text-xs font-bold flex items-center justify-center shadow-sm">
                  WMS
                </div>
              </div>

              {/* Connection lines with animation */}
              <div className="absolute left-4 top-3 w-12 h-px bg-gradient-to-r from-primary/60 to-transparent">
                <div className="w-2 h-px bg-primary animate-pulse" style={{ animationDelay: '0s' }}></div>
              </div>
              <div className="absolute left-4 top-9 w-12 h-px bg-gradient-to-r from-accent/60 to-transparent">
                <div className="w-2 h-px bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div className="absolute left-4 top-15 w-12 h-px bg-gradient-to-r from-secondary/60 to-transparent">
                <div className="w-2 h-px bg-secondary animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Central AutoDock hub */}
              <div className="w-20 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/30 flex items-center justify-center relative">
                <span className="text-xs font-bold text-primary">AutoDock</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-transparent animate-pulse"></div>
                <Plug className="absolute -top-2 -right-2 w-4 h-4 text-primary" />
              </div>

              {/* Data flow indicators */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                <div className="w-8 h-1 bg-gradient-to-r from-primary to-transparent rounded-full animate-pulse"></div>
                <div className="w-6 h-1 bg-gradient-to-r from-accent to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-4 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        );
      
      case 'safety':
        return (
          <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-25 rounded-2xl p-8 h-64 flex items-center justify-center overflow-hidden">
            <div className="relative">
              {/* Central shield */}
              <div className="w-20 h-24 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full flex items-center justify-center relative">
                <Shield className="w-12 h-12 text-emerald-600" />
                
                {/* Safety scanning waves */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border border-emerald-300/30" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite', animationDelay: '1s' }}></div>
                <div className="absolute inset-0 rounded-full border border-emerald-200/20" style={{ animation: 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite', animationDelay: '2s' }}></div>
              </div>

              {/* Safety status indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* Protected zone indicators */}
              {[
                { top: '-25px', left: '30px' },
                { top: '30px', left: '45px' },
                { top: '30px', left: '-15px' },
                { top: '-10px', left: '-20px' }
              ].map((pos, i) => (
                <div 
                  key={i}
                  className="absolute w-4 h-4 bg-emerald-300/40 rounded-full flex items-center justify-center"
                  style={{ top: pos.top, left: pos.left }}
                >
                  <div 
                    className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                </div>
              ))}

              {/* Compliance indicator */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xs text-emerald-700 font-medium bg-emerald-100 px-2 py-1 rounded-full">
                ISO Compliant
              </div>
            </div>
          </div>
        );
      
      case 'roi-graph':
        return (
          <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-25 rounded-2xl p-8 h-64 overflow-hidden">
            <div className="flex items-end justify-center h-full gap-8">
              {/* Before state */}
              <div className="flex flex-col items-center relative">
                <div className="relative mb-4">
                  <div className="h-24 w-12 bg-gradient-to-t from-red-400 to-red-300 rounded-t-lg shadow-sm"></div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-red-600">HIGH</div>
                </div>
                <div className="text-xs text-muted-foreground font-medium">Before</div>
                <div className="text-xs text-red-600 mt-1">Costs & Time</div>
              </div>

              {/* Transformation arrow */}
              <div className="mb-8 flex flex-col items-center">
                <TrendingUp className="w-8 h-8 text-emerald-600 animate-pulse" />
                <div className="text-xs text-emerald-600 font-medium mt-1">AutoDock</div>
              </div>

              {/* After state */}
              <div className="flex flex-col items-center relative">
                <div className="relative mb-4">
                  <div className="h-12 w-12 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-lg animate-pulse"></div>
                  </div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-600">LOW</div>
                </div>
                <div className="text-xs text-muted-foreground font-medium">After</div>
                <div className="text-xs text-emerald-600 mt-1">Efficiency ↑</div>
              </div>
            </div>

            {/* ROI percentage indicator */}
            <div className="absolute top-4 right-4 bg-emerald-100 px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-emerald-700">12-24mo ROI</span>
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