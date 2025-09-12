import React from 'react';
import { Shield, Building2, Clock, Zap, Eye, Globe } from 'lucide-react';

const SampleRunSolution = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Safe & Secure Sample Delivery',
      description: 'QA and lab samples arrive intact in secure, digitally locked compartments.'
    },
    {
      icon: Building2,
      title: 'Seamless Movement Across Floors & Buildings',
      description: 'Robots navigate elevators, staircases, doors, and gateways effortlessly.'
    },
    {
      icon: Clock,
      title: 'Reliable Indoor & Outdoor Operation',
      description: 'Weatherproof design with obstacle detection keeps operations running campus-wide.'
    },
    {
      icon: Zap,
      title: 'Always-On Fleet, Ready When You Are',
      description: 'Multiple quadrupeds managed by Vegam SFS deliver 24/7, with intelligent charging and coordination.'
    },
    {
      icon: Eye,
      title: 'Full Visibility & Integration',
      description: 'Every request, movement, and confirmation is logged in MOM, MES, and SAP.'
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            SampleRun by Vegam
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With quadruped robots integrated into Vegam SFS, SampleRun delivers:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
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
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-poppins font-bold text-foreground mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default SampleRunSolution;