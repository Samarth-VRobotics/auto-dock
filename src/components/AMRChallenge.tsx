import React from 'react';
import { Truck, Users, BarChart3 } from 'lucide-react';

const AMRChallenge = () => {
  const challenges = [
    {
      id: 'manual-material-handling',
      icon: Truck,
      header: 'Manual Material Handling',
      tagline: 'Human workers overwhelmed by repetitive transport tasks',
      points: [
        'Worker Fatigue: Repetitive picking and transport leading to errors',
        'Safety Risks: Manual handling injuries and workplace accidents',
        'Inefficient Routes: Human workers taking suboptimal paths',
        'Limited Capacity: Physical constraints limit throughput'
      ]
    },
    {
      id: 'labor-costs-shortage',
      icon: Users,
      header: 'Labor Costs & Shortage',
      tagline: 'Rising labor costs and difficulty finding reliable workers',
      points: [
        'High Turnover: 75% annual turnover in warehouse positions',
        'Labor Shortage: Difficulty finding and retaining skilled workers',
        'Training Costs: Continuous training for new hires',
        'Overtime Costs: Peak season labor expenses skyrocket'
      ]
    },
    {
      id: 'operational-inefficiencies',
      icon: BarChart3,
      header: 'Operational Inefficiencies',
      tagline: 'Poor visibility and coordination waste time and resources',
      points: [
        'Inventory Inaccuracy: 65% of warehouses struggle with real-time visibility',
        'Bottlenecks: Congestion at picking stations and staging areas',
        'Poor Coordination: Lack of dynamic task assignment and optimization',
        'Scalability Issues: Fixed processes can\'t adapt to demand fluctuations'
      ]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">
            The Warehouse Material Handling Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Where Manual Processes Meet Modern Demands
          </p>
        </div>

        {/* Three Card Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <div 
                key={challenge.id} 
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:shadow-xl hover:bg-card/70 transition-all duration-300 animate-fade-in" 
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Header */}
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-3 text-center leading-tight">
                    {challenge.header}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-base italic text-muted-foreground mb-8 leading-relaxed text-center font-medium">
                    {challenge.tagline}
                  </p>
                  
                  {/* Bullet Points */}
                  <div className="space-y-5">
                    {challenge.points.map((point, pointIndex) => {
                      const [boldPart, ...restParts] = point.split(':');
                      const description = restParts.join(':').trim();
                      return (
                        <div key={pointIndex} className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div className="text-left">
                            <span className="font-bold text-foreground text-base leading-relaxed">
                              {boldPart}
                            </span>
                            {description && (
                              <span className="font-normal text-muted-foreground text-base leading-relaxed">
                                : {description}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AMRChallenge;