import React from 'react';
import { Warehouse, Search, TrendingUp } from 'lucide-react';

const ASRSChallenge = () => {
  const challenges = [
    {
      id: 'space-constraints',
      icon: Warehouse,
      header: 'Space Constraints',
      tagline: 'Limited warehouse space with growing inventory needs',
      points: [
        'High Real Estate Costs: Prime warehouse locations increasingly expensive',
        'Poor Space Utilization: Traditional racking only uses 60% of available space',
        'Vertical Limitations: Manual operations can\'t efficiently use full height',
        'Expansion Costs: Building new facilities requires significant investment'
      ]
    },
    {
      id: 'inventory-management',
      icon: Search,
      header: 'Inventory Management',
      tagline: 'Poor visibility and control over stored inventory',
      points: [
        'Inventory Inaccuracy: Manual tracking leads to 20-30% inventory errors',
        'Long Search Times: Workers spend 50% of time searching for items',
        'Stock-outs: Poor visibility causes unexpected inventory shortages',
        'Obsolete Inventory: Difficulty tracking and managing slow-moving stock'
      ]
    },
    {
      id: 'throughput-limitations',
      icon: TrendingUp,
      header: 'Throughput Limitations',
      tagline: 'Manual storage and retrieval can\'t meet growing demands',
      points: [
        'Peak Season Bottlenecks: Manual systems overwhelmed during high demand',
        'Retrieval Speed: Traditional picking takes 5-10x longer than automated',
        'Order Accuracy: Manual processes result in 1-3% picking errors',
        'Scalability Issues: Adding more workers doesn\'t proportionally increase speed'
      ]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">
            The High-Density Storage Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Where Growing Inventory Meets Limited Space
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

export default ASRSChallenge;