import React from 'react';
import { Navigation, Clock, Users } from 'lucide-react';
const ASRSChallenge = () => {
  const challenges = [{
    id: 'limited-access',
    icon: Navigation,
    header: 'Limited Access',
    tagline: 'Current solutions can\'t handle complex facility layouts',
    points: ['Conveyors can\'t handle stairs, elevators, or cross-building routes.', 'AMRs struggle with narrow corridors, uneven paths, or multi-floor navigation.', 'Human couriers are slow and prone to repetitive strain or errors.']
  }, {
    id: 'operational-burden',
    icon: Clock,
    header: 'Operational Burden',
    tagline: 'Manual processes slow down critical operations',
    points: ['Frequent trips between production, QA, and storage are slow and manual.', 'Delays occur during elevator or outdoor trips.', 'Skilled staff get pulled into courier-like duties instead of higher-value work.']
  }, {
    id: 'scaling-pressure',
    icon: Users,
    header: 'Scaling Pressure',
    tagline: 'Growing demands overwhelm existing systems',
    points: ['Multiple sample requests arrive simultaneously across facilities.', 'Queues build up in labs when samples are delayed.', 'Round-the-clock demand isn\'t feasible with human-only delivery.']
  }];
  return <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">
            The Challenge: Sample Flow Bottlenecks
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In chemical plants, pharma labs, and factories, samples and QA specimens must move quickly, safely, and traceably. Today's options leave critical gaps:
          </p>
          
        </div>

        {/* Three Card Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
          const IconComponent = challenge.icon;
          return <div key={challenge.id} className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:shadow-xl hover:bg-card/70 transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`,
            animationFillMode: 'both'
          }}>
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
                  return <div key={pointIndex} className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div className="text-left">
                            <span className="font-bold text-foreground text-base leading-relaxed">
                              {boldPart}
                            </span>
                            {description && <span className="font-normal text-muted-foreground text-base leading-relaxed">
                                : {description}
                              </span>}
                          </div>
                        </div>;
                })}
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ASRSChallenge;