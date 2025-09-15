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

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">
            SampleRun in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the seamless automation of sample transport through our interactive workflow demonstration
          </p>
        </div>

        {/* Desktop Side-by-Side Layout */}
        <div className="hidden md:flex max-w-7xl mx-auto gap-8 h-[600px]">
          {/* Left Side - Step Animation */}
          <div className="flex-1 relative">
            {/* Stair-like connecting path */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.3" />
                  <stop offset={`${((activeStep + 1) / steps.length) * 100}%`} stopColor="hsl(var(--destructive))" stopOpacity="0.8" />
                  <stop offset={`${((activeStep + 1) / steps.length) * 100}%`} stopColor="hsl(var(--border))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Stair-shaped path */}
              <path
                d="M 80 520 L 140 520 L 140 420 L 200 420 L 200 320 L 260 320 L 260 220 L 320 220 L 320 120 L 380 120 L 380 80"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                className="transition-all duration-1000"
              />
            </svg>

            {/* Step Points positioned like stairs - equal sizes */}
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              
              // Equal spacing stair positions
              const positions = [
                { left: '15%', top: '85%' },   // Step 1
                { left: '25%', top: '68%' },   // Step 2
                { left: '35%', top: '51%' },   // Step 3
                { left: '45%', top: '34%' },   // Step 4
                { left: '55%', top: '17%' },   // Step 5
                { left: '65%', top: '8%' },    // Step 6
              ];
              
              return (
                <div 
                  key={index} 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={positions[index]}
                >
                  {/* Step Circle - Equal sizes */}
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`relative w-16 h-16 rounded-full mb-3 transition-all duration-500 transform ${
                      isActive 
                        ? 'bg-gradient-to-r from-destructive to-primary scale-110 shadow-lg shadow-destructive/25' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-destructive/80 to-primary/80'
                        : 'bg-muted hover:bg-muted/80 hover:scale-105'
                    } ${isAnimating && isActive ? 'animate-pulse' : ''}`}
                    disabled={isAnimating}
                  >
                    {/* Glow effect for active step */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-md opacity-50 scale-125"></div>
                    )}
                    
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <IconComponent className={`w-7 h-7 ${isActive || isCompleted ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>

                    {/* Highlight indicator for active step */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-destructive to-primary rounded-full animate-ping"></div>
                    )}
                  </button>

                  {/* Step Title - Consistent sizing */}
                  <div className="text-center w-[100px]">
                    <h3 className={`font-poppins font-bold mb-1 text-xs transition-all duration-300 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
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
          <div className="flex-1 flex items-center">
            <Card className="w-full p-6 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-2 transition-all duration-500 hover:shadow-xl h-fit">
              <div className="text-left">
                <div className="w-16 h-16 bg-gradient-to-r from-destructive/10 to-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {React.createElement(steps[activeStep].icon, { 
                    className: "w-8 h-8 text-destructive" 
                  })}
                </div>
                
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-3">
                  Step {steps[activeStep].step}: {steps[activeStep].title}
                </h3>
                
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  {steps[activeStep].description}
                </p>
                
                <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                  <p className="text-sm text-foreground leading-relaxed">
                    {steps[activeStep].detail}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile Vertical Timeline - No description box */}
        <div className="md:hidden space-y-6">
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