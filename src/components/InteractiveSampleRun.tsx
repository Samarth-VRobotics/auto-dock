import React, { useState, useEffect } from 'react';
import { FileText, MapPin, Package, Navigation, Lock, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import workflowBackground from '@/assets/workflow-background.jpg';

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

        {/* Desktop Full-Width Layout */}
        <div className="hidden md:flex w-full gap-0 h-[700px] bg-gradient-to-r from-background via-background/95 to-background">
          {/* Left Side - Step Animation (55% width) */}
          <div className="w-[55%] relative pl-16 pr-8">
            {/* Straight diagonal connecting path */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.8" />
                  <stop offset={`${(activeStep / (steps.length - 1)) * 100}%`} stopColor="hsl(var(--destructive))" stopOpacity="0.8" />
                  <stop offset={`${(activeStep / (steps.length - 1)) * 100 + 2}%`} stopColor="hsl(var(--border))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Straight diagonal line */}
              <path
                d="M 120 580 L 520 120"
                stroke="url(#pathGradient)"
                strokeWidth="8"
                fill="none"
                className="transition-all duration-1000 drop-shadow-sm"
              />
            </svg>

            {/* Step Points positioned like stairs - equal sizes */}
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              
              // Diagonal line positions - evenly spaced along the diagonal
              const positions = [
                { left: '18%', top: '82%' },   // Step 1
                { left: '26%', top: '70%' },   // Step 2
                { left: '34%', top: '58%' },   // Step 3
                { left: '42%', top: '46%' },   // Step 4
                { left: '50%', top: '34%' },   // Step 5
                { left: '58%', top: '22%' },   // Step 6
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
                    className={`relative w-20 h-20 rounded-full mb-4 transition-all duration-500 transform ${
                      isActive 
                        ? 'bg-gradient-to-r from-destructive to-primary scale-110 shadow-xl shadow-destructive/30' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-destructive/80 to-primary/80'
                        : 'bg-muted hover:bg-muted/80 hover:scale-105'
                    } ${isAnimating && isActive ? 'animate-pulse' : ''}`}
                    disabled={isAnimating}
                  >
                    {/* Glow effect for active step */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-lg opacity-60 scale-125"></div>
                    )}
                    
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <IconComponent className={`w-8 h-8 ${isActive || isCompleted ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>

                    {/* Highlight indicator for active step */}
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-destructive to-primary rounded-full animate-ping"></div>
                    )}
                  </button>

                  {/* Step Title - Consistent sizing */}
                  <div className="text-center w-[120px]">
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
          </div>

          {/* Right Side - Active Step Details (45% width) */}
          <div className="w-[45%] flex items-center pr-16 pl-8 bg-gradient-to-l from-card/20 via-card/10 to-transparent relative">
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.03] rounded-lg"
              style={{ backgroundImage: `url(${workflowBackground})` }}
            ></div>
            <Card className="w-full p-12 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md border-2 border-border/50 transition-all duration-500 hover:shadow-2xl shadow-lg h-fit max-w-none relative z-10">
              <div className="text-left">
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