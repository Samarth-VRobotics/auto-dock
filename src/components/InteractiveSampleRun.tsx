import React, { useState, useEffect } from 'react';
import { FileText, MapPin, Package, Navigation, Lock, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const InteractiveSampleRun = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      icon: FileText,
      title: 'Sample Request',
      description: 'Triggered in MOM / MES system for quality control sampling.',
      detail: 'Manufacturing Operations Management system initiates automated sample collection request with specific location and priority parameters.',
      step: '1'
    },
    {
      icon: MapPin,
      title: 'Robot Dispatch',
      description: 'SFS assigns the nearest available quadruped robot.',
      detail: 'Smart Fleet System analyzes robot locations, battery levels, and current tasks to optimize dispatch efficiency and minimize response time.',
      step: '2'
    },
    {
      icon: Package,
      title: 'Sample Collection',
      description: 'Robot secures the sample in a locked compartment.',
      detail: 'Automated gripper system carefully collects sample maintaining chain of custody with biometric verification and secure containment protocols.',
      step: '3'
    },
    {
      icon: Navigation,
      title: 'Navigation',
      description: 'Autonomous movement through complex industrial environments.',
      detail: 'Advanced LIDAR and computer vision enable seamless navigation across multiple floors, through elevators, doors, and dynamic obstacles.',
      step: '4'
    },
    {
      icon: Lock,
      title: 'Secure Delivery',
      description: 'Locked handover to QA lab or production team.',
      detail: 'Biometric authentication and digital handshake ensure secure transfer with complete audit trail and tamper-proof delivery confirmation.',
      step: '5'
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'Logged into MOM / MES dashboards in real time.',
      detail: 'Complete workflow data including timing, location tracking, and delivery confirmation automatically syncs with enterprise systems.',
      step: '6'
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

        {/* Desktop V-Shape Layout */}
        <div className="hidden md:flex w-full h-[700px] relative bg-gradient-to-br from-background via-background/95 to-background">
          {/* V-Shape Step Animation Container */}
          <div className="w-full relative px-16">
            {/* V-shaped connecting path */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="vPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.3" />
                  <stop offset={`${((activeStep + 1) / steps.length) * 100}%`} stopColor="hsl(var(--destructive))" stopOpacity="0.9" />
                  <stop offset={`${((activeStep + 1) / steps.length) * 100}%`} stopColor="hsl(var(--border))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
                </linearGradient>
                <path id="vPath" d="M 150 120 L 250 250 L 350 400 L 450 550 L 550 400 L 650 250 L 750 120"/>
              </defs>
              
              {/* V-shaped path */}
              <path
                d="M 150 120 L 250 250 L 350 400 L 450 550 L 550 400 L 650 250 L 750 120"
                stroke="url(#vPathGradient)"
                strokeWidth="6"
                fill="none"
                className="transition-all duration-1000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Animated moving dot along the path */}
              <circle r="6" fill="hsl(var(--destructive))" className="opacity-80">
                <animateMotion dur="9s" repeatCount="indefinite">
                  <mpath href="#vPath"/>
                </animateMotion>
              </circle>
            </svg>

            {/* Step Points positioned in V shape */}
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              
              // V-shape positions: top-left down to bottom-center, then up to top-right
              const positions = [
                { left: '15%', top: '15%' },   // Step 1 - top left
                { left: '25%', top: '35%' },   // Step 2 - middle left down
                { left: '35%', top: '60%' },   // Step 3 - bottom center
                { left: '45%', top: '80%' },   // Step 4 - bottom center
                { left: '55%', top: '60%' },   // Step 5 - middle right up
                { left: '65%', top: '35%' },   // Step 6 - top right up
              ];
              
              return (
                <div 
                  key={index} 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={positions[index]}
                >
                  {/* Step Circle */}
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`relative w-20 h-20 rounded-full mb-4 transition-all duration-500 transform ${
                      isActive 
                        ? 'bg-gradient-to-r from-destructive to-primary scale-125 shadow-2xl shadow-destructive/40' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-destructive/80 to-primary/80 scale-110'
                        : 'bg-muted hover:bg-muted/80 hover:scale-105'
                    } ${isAnimating && isActive ? 'animate-pulse' : ''}`}
                    disabled={isAnimating}
                  >
                    {/* Glow effect for active step */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-xl opacity-70 scale-150"></div>
                    )}
                    
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <IconComponent className={`w-9 h-9 ${isActive || isCompleted ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>

                    {/* Highlight indicator for active step */}
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-r from-destructive to-primary rounded-full animate-ping"></div>
                    )}
                  </button>

                  {/* Step Title */}
                  <div className="text-center w-[130px]">
                    <h3 className={`font-poppins font-bold mb-2 text-sm transition-all duration-300 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
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

            {/* Center Description Box - positioned in the middle of V shape */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] z-20">
              <Card className="p-8 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-lg border-2 border-border/60 transition-all duration-500 hover:shadow-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-destructive/20 to-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-border/40">
                    {React.createElement(steps[activeStep].icon, { 
                      className: "w-10 h-10 text-destructive" 
                    })}
                  </div>
                  
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-4 leading-tight">
                    Step {steps[activeStep].step}: {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground mb-5 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-xl p-5 border border-border/50 backdrop-blur-sm">
                    <p className="text-sm text-foreground leading-relaxed">
                      {steps[activeStep].detail}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
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