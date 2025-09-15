import React, { useState, useEffect } from 'react';
import { FileText, MapPin, Package, Navigation, Lock, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import sampleRequestBg from '@/assets/sample-request-bg.jpg';
import robotDispatchBg from '@/assets/robot-dispatch-bg.jpg';
import sampleCollectionBg from '@/assets/sample-collection-bg.jpg';
import navigationBg from '@/assets/navigation-bg.jpg';
import secureDeliveryBg from '@/assets/secure-delivery-bg.jpg';
import confirmationBg from '@/assets/confirmation-bg.jpg';

const InteractiveSampleRun = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      icon: FileText,
      title: 'Sample Request',
      description: 'Triggered in MOM / MES system for quality control sampling.',
      detail: 'Manufacturing Operations Management system initiates automated sample collection request with specific location and priority parameters.',
      step: '1',
      backgroundImage: sampleRequestBg
    },
    {
      icon: MapPin,
      title: 'Robot Dispatch',
      description: 'SFS assigns the nearest available quadruped robot.',
      detail: 'Smart Fleet System analyzes robot locations, battery levels, and current tasks to optimize dispatch efficiency and minimize response time.',
      step: '2',
      backgroundImage: robotDispatchBg
    },
    {
      icon: Package,
      title: 'Sample Collection',
      description: 'Robot secures the sample in a locked compartment.',
      detail: 'Automated gripper system carefully collects sample maintaining chain of custody with biometric verification and secure containment protocols.',
      step: '3',
      backgroundImage: sampleCollectionBg
    },
    {
      icon: Navigation,
      title: 'Navigation',
      description: 'Autonomous movement through complex industrial environments.',
      detail: 'Advanced LIDAR and computer vision enable seamless navigation across multiple floors, through elevators, doors, and dynamic obstacles.',
      step: '4',
      backgroundImage: navigationBg
    },
    {
      icon: Lock,
      title: 'Secure Delivery',
      description: 'Locked handover to QA lab or production team.',
      detail: 'Biometric authentication and digital handshake ensure secure transfer with complete audit trail and tamper-proof delivery confirmation.',
      step: '5',
      backgroundImage: secureDeliveryBg
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'Logged into MOM / MES dashboards in real time.',
      detail: 'Complete workflow data including timing, location tracking, and delivery confirmation automatically syncs with enterprise systems.',
      step: '6',
      backgroundImage: confirmationBg
    }
  ];

  // Auto-progress through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveStep((prev) => (prev + 1) % steps.length);
      
      setTimeout(() => setIsAnimating(false), 400);
    }, 1500);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handleStepClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveStep(index);
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-destructive to-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary to-destructive rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full px-0 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in px-6">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">
            SampleRun in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the seamless automation of sample transport through our interactive workflow demonstration
          </p>
        </div>

        {/* Desktop Full-Width Layout */}
        <div className="hidden md:flex w-full gap-0 h-[700px] bg-gradient-to-r from-background via-background/95 to-background relative">
          {/* Centered Timeline Container */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full flex flex-col justify-center">
            {/* Main vertical progress line */}
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="verticalProgress" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
                  <stop offset={`${(activeStep / (steps.length - 1)) * 100}%`} stopColor="hsl(var(--destructive))" stopOpacity="0.9" />
                  <stop offset={`${(activeStep / (steps.length - 1)) * 100 + 1}%`} stopColor="hsl(var(--border))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <line
                x1="50%"
                y1="15%"
                x2="50%"
                y2="85%"
                stroke="url(#verticalProgress)"
                strokeWidth="4"
                className="transition-all duration-1000"
              />
            </svg>

            {/* Step dots positioned along vertical line */}
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              
              // Vertical positions evenly distributed
              const topPosition = 15 + (index * 14); // 15% to 85% evenly distributed
              
              return (
                <div key={index} className="absolute left-1/2 transform -translate-x-1/2" style={{ top: `${topPosition}%` }}>
                  {/* Horizontal connection line to content (only for active step) */}
                  {isActive && (
                    <svg className="absolute top-1/2 left-10 w-[300px] h-1" xmlns="http://www.w3.org/2000/svg">
                      <line
                        x1="0"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        stroke="hsl(var(--destructive))"
                        strokeWidth="3"
                        strokeDasharray="8,4"
                        className="animate-pulse"
                      />
                    </svg>
                  )}
                  
                  {/* Step Circle */}
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`relative w-16 h-16 rounded-full transition-all duration-500 transform z-20 ${
                      isActive 
                        ? 'bg-gradient-to-r from-destructive to-primary scale-125 shadow-xl shadow-destructive/40 animate-pulse' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-destructive/80 to-primary/80 scale-110'
                        : 'bg-muted hover:bg-muted/80 hover:scale-105'
                    }`}
                    disabled={isAnimating}
                  >
                    {/* Enhanced glow effect for active step */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-lg opacity-70 scale-150 animate-pulse"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-xl opacity-40 scale-200"></div>
                      </>
                    )}
                    
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <IconComponent className={`w-6 h-6 ${isActive || isCompleted ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>
                  </button>

                  {/* Step Title on the left */}
                  <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-right w-32">
                    <h3 className={`font-poppins font-bold text-sm transition-all duration-300 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                      isActive || isCompleted 
                        ? 'bg-gradient-to-r from-destructive to-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      Step {step.step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Active Step Details */}
          <div className="ml-auto w-[45%] flex items-center pr-16 pl-8 relative">
            <Card className="w-full p-12 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md border-2 border-border/50 transition-all duration-500 hover:shadow-2xl shadow-lg h-fit max-w-none relative z-10 overflow-hidden">
              {/* Dynamic background image inside card */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-[0.04] transition-all duration-500"
                style={{ backgroundImage: `url(${steps[activeStep].backgroundImage})` }}
              ></div>
              <div className="text-left relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-destructive/20 to-primary/20 rounded-xl flex items-center justify-center mb-8 border border-border/30">
                  {React.createElement(steps[activeStep].icon, { 
                    className: "w-10 h-10 text-destructive" 
                  })}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6 leading-tight">
                  Step {steps[activeStep].step}: {steps[activeStep].title}
                </h3>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {steps[activeStep].description}
                </p>
                
                <div className="bg-muted/40 rounded-lg p-6 border border-border/40 backdrop-blur-sm">
                  <p className="text-base text-foreground leading-relaxed">
                    {steps[activeStep].detail}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile Vertical Timeline - No description box */}
        <div className="md:hidden space-y-6 px-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            
            return (
              <div key={index} className="flex items-start gap-4">
                <button
                  onClick={() => handleStepClick(index)}
                  className={`relative w-12 h-12 rounded-full flex-shrink-0 transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-destructive to-primary scale-110 shadow-lg shadow-destructive/25' 
                      : isCompleted
                      ? 'bg-gradient-to-r from-destructive/80 to-primary/80'
                      : 'bg-muted hover:bg-muted/80'
                  } ${isAnimating && isActive ? 'animate-pulse' : ''}`}
                  disabled={isAnimating}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <IconComponent className={`w-6 h-6 ${isActive || isCompleted ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                </button>
                
                <div className="flex-1">
                  <h3 className={`font-poppins font-bold mb-1 transition-all duration-300 ${
                    isActive ? 'text-foreground text-lg' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm transition-all duration-300 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground/80'
                  }`}>
                    {step.description}
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

export default InteractiveSampleRun;