import React from 'react';
import { Building, Shield, Zap, Clock, Globe, Rocket } from 'lucide-react';

const WhyQuadrupeds = () => {
  const advantages = [
    {
      icon: Building,
      emoji: '',
      title: 'Unmatched Access',
      description: 'Stairs, corridors, multi-floor facilities, and cross-building routes.'
    },
    {
      icon: Shield,
      emoji: '',
      title: 'Safe & Traceable',
      description: 'Secure compartments + digital audit logs.'
    },
    {
      icon: Zap,
      emoji: '',
      title: 'Always Available',
      description: 'Fleet management and opportunity charging keep robots ready 24/7.'
    },
    {
      icon: Clock,
      emoji: '⏱',
      title: 'Efficiency Gains',
      description: 'Faster QA cycles and reduced batch-release delays.'
    },
    {
      icon: Globe,
      emoji: '',
      title: 'Full Visibility',
      description: 'End-to-end orchestration with ERP, MES, LIMS, and WMS.'
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: 'Proven Platforms',
      description: 'Built on trusted quadruped hardware, fully integrated by Vegam.'
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Why Quadrupeds with Vegam?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The perfect combination of mobility, security, and integration
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={index} 
                className="group bg-card/70 backdrop-blur-sm rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:shadow-xl hover:bg-card/90 transition-all duration-300 animate-fade-in" 
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  {/* Emoji */}
                  <div className="text-4xl mb-4">
                    {advantage.emoji}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-poppins font-bold text-foreground mb-4 leading-tight">
                    {advantage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyQuadrupeds;