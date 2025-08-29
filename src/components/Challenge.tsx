import React from 'react';
import { Zap, DollarSign, TrendingDown } from 'lucide-react';

const Challenge = () => {
  const challenges = [
    {
      id: 'operational-bottlenecks',
      icon: Zap,
      header: 'Operational Bottlenecks',
      tagline: 'Rigid systems can\'t keep up with real dock conditions',
      points: [
        'Seasonal surges → overloaded docks, missed turnarounds',
        'Unstructured loads → floor-loaded cartons, irregular goods',
        'Rigid layouts & ERP/WMS gaps → blind spots, fixed infrastructure'
      ]
    },
    {
      id: 'direct-financial-costs',
      icon: DollarSign,
      header: 'Direct Financial Costs',
      tagline: 'Every wasted hour shows up on your balance sheet',
      points: [
        'Truck detention → $50–100/hr = $80K+/year lost',
        'Hidden extras → expedited freight, storage fees, emergency shipments'
      ]
    },
    {
      id: 'revenue-growth-loss',
      icon: TrendingDown,
      header: 'Revenue & Growth Loss',
      tagline: 'Delays don\'t just waste time — they cost sales',
      points: [
        'Lost throughput → up to 70% slower turnarounds',
        'Revenue loss → up to 20% of sales lost',
        'OTIF penalties → millions in SLA fines',
        'Customer churn → 50%+ abandon after a late delivery'
      ]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/10 backdrop-blur-sm px-6 py-3 rounded-full border border-destructive/20 mb-6">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
            <span className="text-destructive font-semibold text-sm tracking-wide uppercase">Business Impact</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">
            The Hidden Cost of Dock Operations
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Traditional dock operations create cascading problems that impact your entire supply chain and bottom line.
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
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Header */}
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                    {challenge.header}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-base italic text-muted-foreground mb-6 leading-relaxed">
                    {challenge.tagline}
                  </p>
                  
                  {/* Bullet Points */}
                  <div className="space-y-3">
                    {challenge.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
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

export default Challenge;