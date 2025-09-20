import React from 'react';
import { Clock, Shield, Building, CloudSnow, Zap, Globe } from 'lucide-react';
const WhyQuadrupeds = () => {
  const benefits = [{
    id: 'faster-qa',
    header: 'Faster QA Cycles',
    text: 'Shorten batch-release timelines and eliminate delays from manual sample transfers.',
    icon: Clock,
    video: 'https://cdn.vegamrobotics.com/uploads/samplerun_faster_cycles.mp4'
  }, {
    id: 'safe-secure',
    header: 'Safe & Secure Sample Delivery',
    text: 'QA and lab samples arrive intact in secure, digitally locked compartments.',
    icon: Shield,
    video: 'https://cdn.vegamrobotics.com/uploads/samplerun_secure_delivery.mp4'
  }, {
    id: 'seamless-movement',
    header: 'Seamless Movement Across Floors & Buildings',
    text: 'Robots navigate elevators, staircases, doors, and gateways effortlessly.',
    icon: Building,
    video: 'https://cdn.vegamrobotics.com/uploads/samplerun_lift.mp4'
  }, {
    id: 'reliable-operation',
    header: 'Reliable Indoor & Outdoor Operation',
    text: 'Weatherproof design and obstacle detection keep operations running campus-wide.',
    icon: CloudSnow,
    video: 'https://cdn.vegamrobotics.com/uploads/samplerun_weatherproof.mp4'
  }, {
    id: 'always-on-fleet',
    header: 'Always-On Fleet, Ready When You Are',
    text: 'Multiple robots operate 24/7, with Fleet Manager overseeing opportunity charging and coordination.',
    icon: Zap,
    video: 'https://cdn.vegamrobotics.com/uploads/samplerun_fleet.mp4'
  }, {
    id: 'full-visibility',
    header: 'Full Visibility & Integration',
    text: 'Every request, movement, and confirmation is logged in ERP, MES, LIMS, and SAP.',
    icon: Globe,
    video: 'https://cdn.vegamrobotics.com/uploads/samplerun_integration.mp4'
  }];
  const renderVisual = (video: string, icon: any) => {
    const IconComponent = icon;
    return (
      <div className="bg-muted/20 rounded-2xl overflow-hidden h-64 relative group">
        <video 
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to icon if video fails to load
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-muted/20 rounded-2xl p-8 h-64 hidden items-center justify-center">
          <IconComponent className="w-16 h-16 text-primary" />
        </div>
      </div>
    );
  };
  return <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent leading-tight">
            Why choose SampleRun
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">More than automation, SampleRun redefines sample transport intelligently, safely, and with complete traceability across your entire facility.</p>
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
                  {renderVisual(benefit.video, benefit.icon)}
                </div>
              </div>;
        })}
        </div>

        {/* Separator */}
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full my-20"></div>
      </div>
    </section>;
};
export default WhyQuadrupeds;