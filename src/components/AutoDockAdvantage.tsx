import React from 'react';
import { Zap, TrendingUp, BarChart3, Brain, Plug, Shield, Globe, Truck, Network } from 'lucide-react';
const AutoDockAdvantage = () => {
  const benefits = [{
    id: 'always-ready',
    header: 'Always Ready, Always On',
    text: 'Traditional docks wait. AutoDock doesn\'t. It detects incoming trucks, configures itself, and begins unloading instantly — keeping flow continuous even when volumes spike.',
    icon: Zap,
    visual: 'truck-docking'
  }, {
    id: 'roi-multiple',
    header: 'ROI on Multiple Fronts',
    text: 'Every extra minute at the dock costs money. AutoDock cuts trailer dwell times, avoids costly dock modifications, and delivers measurable returns in 12–24 months.',
    icon: TrendingUp,
    visual: 'roi-graph'
  }, {
    id: 'scales-without-slowing',
    header: 'Scales Without Slowing Down',
    text: 'Fixed systems buckle under pressure. With a central orchestration platform and modular system design, AutoDock scale across docks while maximizing asset utilization.',
    icon: BarChart3,
    visual: 'dashboard'
  }, {
    id: 'ai-understands',
    header: 'AI That Understands Logistics',
    text: 'Traditional systems only follow commands. Powered by decades of industry data, AutoDock\'s AI adapts to dynamic workflows and keeps every movement optimized',
    icon: Brain,
    visual: 'ai-brain'
  }, {
    id: 'enterprise-integration',
    header: 'Enterprise Integration, Simplified',
    text: 'Integrations often slow systems down. AutoDock, backed by native SAP/SFS connectors and open APIs, connects seamlessly into ERP/WMS ecosystems, giving you real-time dashboards and control without IT complexity.',
    icon: Plug,
    visual: 'integrations'
  }, {
    id: 'built-in-safety',
    header: 'Built-In Safety, By Design',
    text: 'Speed means nothing without safety. AutoDock is engineered with zone monitoring, human detection, and global-standard compliance — making automation powerful, safe, and reliable.',
    icon: Shield,
    visual: 'safety'
  }];
  const renderVisual = (visual: string, icon: any) => {
    const IconComponent = icon;
    switch (visual) {
      case 'truck-docking':
        return <div className="relative h-80 overflow-hidden flex items-center justify-center">
            <img src="https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Always%20Ready,%20Always%20On.gif" alt="Always Ready, Always On - AutoDock in action" className="w-full h-full object-cover" />
          </div>;
      case 'dashboard':
        return <div className="relative h-80 overflow-hidden flex items-center justify-center">
            <img src="https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Scales%20Without%20Slowing%20Down.gif" alt="Scales Without Slowing Down - AutoDock scaling visualization" className="w-full h-full object-cover" />
          </div>;
      case 'ai-brain':
        return <div className="relative h-80 overflow-hidden flex items-center justify-center">
            <img src="https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/AI%20That%20Understands%20Logistics.gif" alt="AI That Understands Logistics - AutoDock AI visualization" className="w-full h-full object-cover" />
          </div>;
      case 'integrations':
        return <div className="relative h-80 overflow-hidden flex items-center justify-center">
            <img src="https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Enterprise%20Integration,%20Simplified.gif" alt="Enterprise Integration, Simplified - AutoDock integration visualization" className="w-full h-full object-cover" />
          </div>;
      case 'safety':
        return <div className="relative h-80 overflow-hidden flex items-center justify-center">
            <img src="https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Built-In%20Safety.gif" alt="Built-In Safety, By Design - AutoDock safety visualization" className="w-full h-full object-cover" />
          </div>;
      case 'roi-graph':
        return <div className="relative h-80 overflow-hidden flex items-center justify-center">
            <img src="https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/ROI%20on%20Multiple%20Fronts.gif" alt="ROI on Multiple Fronts - AutoDock ROI visualization" className="w-full h-full object-cover" />
          </div>;
      default:
        return <div className="bg-muted/20 rounded-2xl p-8 h-64 flex items-center justify-center">
            <IconComponent className="w-16 h-16 text-muted-foreground" />
          </div>;
    }
  };
  return <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          
          
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent leading-tight">
            Why choose AutoDock
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">More than automation, AutoDock redefines dock operations intelligently, safely, and at peak efficiency, even under the toughest logistics demands.</p>
        </div>

        {/* Benefits Rows */}
        <div className="max-w-7xl mx-auto space-y-20">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          const isEven = index % 2 === 0;
          return <div key={benefit.id} className={`grid lg:grid-cols-10 gap-12 items-center animate-fade-in`} style={{
            animationDelay: `${index * 0.2}s`,
            animationFillMode: 'both'
          }}>
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
              </div>;
        })}
        </div>

        {/* Separator */}
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full my-20"></div>
      </div>
    </section>;
};
export default AutoDockAdvantage;