import React from 'react';
import { ArrowRight, FileText, MapPin, Package, Navigation, Lock, CheckCircle } from 'lucide-react';
const HowItWorks = () => {
  const steps = [{
    icon: FileText,
    title: 'Sample Request',
    description: 'Triggered in ERP / LIMS.',
    step: '1'
  }, {
    icon: MapPin,
    title: 'Robot Dispatch',
    description: 'SFS assigns the nearest available quadruped.',
    step: '2'
  }, {
    icon: Package,
    title: 'Sample Collection',
    description: 'Robot secures the sample in a locked compartment.',
    step: '3'
  }, {
    icon: Navigation,
    title: 'Navigation',
    description: 'Indoors/outdoors, across floors, elevators, and doors.',
    step: '4'
  }, {
    icon: Lock,
    title: 'Secure Delivery',
    description: 'Locked handover to QA, lab, or production.',
    step: '5'
  }, {
    icon: CheckCircle,
    title: 'Confirmation',
    description: 'Logged into ERP / LIMS dashboards in real time.',
    step: '6'
  }];
  return <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">SampleRun in Action</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Simple, automated workflow for seamless sample logistics
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLastItem = index === steps.length - 1;
            return <div key={index} className="relative">
                  <div className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:shadow-xl hover:bg-card/70 transition-all duration-300 animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}>
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Step Number */}
                      <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground font-bold text-lg rounded-full mb-6 mx-auto">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-4 text-center leading-tight">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow for larger screens */}
                  {!isLastItem && <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-primary/60" />
                    </div>}
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;