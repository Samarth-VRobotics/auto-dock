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

  // Auto-progress through steps with refined timing
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveStep((prev) => (prev + 1) % steps.length);
      
      setTimeout(() => setIsAnimating(false), 500);
    }, 2500); // Increased to 2.5 seconds for better viewing

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

        {/* Desktop Diagonal Timeline Layout */}
        <div className="hidden lg:flex w-full gap-0 h-[700px] bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden">
          {/* Diagonal Timeline Container */}
          <div className="absolute inset-0 px-8 py-16">
            {/* Diagonal progress line SVG */}
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="diagonalProgress" x1="15%" y1="85%" x2="45%" y2="25%">
                  <stop offset="0%" stopColor="hsl(var(--border))" stopOpacity="0.4" />
                  <stop offset={`${(activeStep / (steps.length - 1)) * 100}%`} stopColor="hsl(var(--destructive))" stopOpacity="1" />
                  <stop offset={`${(activeStep / (steps.length - 1)) * 100 + 1}%`} stopColor="hsl(var(--border))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <line
                x1="15%"
                y1="85%"
                x2="45%"
                y2="25%"
                stroke="url(#diagonalProgress)"
                strokeWidth="4"
                className="transition-all duration-1200 ease-in-out"
              />
            </svg>

            {/* Step dots positioned along diagonal line */}
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              
              // Calculate diagonal positions with better spacing (15%, 85%) to (45%, 25%)
              const progress = index / (steps.length - 1);
              const leftPosition = 15 + (progress * 30); // 15% to 45%
              const topPosition = 85 - (progress * 60); // 85% to 25%
              
              return (
                <div 
                  key={index} 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                  style={{ 
                    left: `${leftPosition}%`, 
                    top: `${topPosition}%` 
                  }}
                >
                  {/* Step Circle */}
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`relative w-14 h-14 xl:w-16 xl:h-16 rounded-full transition-all duration-700 transform z-20 ${
                      isActive 
                        ? 'bg-gradient-to-r from-destructive to-primary scale-125 shadow-2xl shadow-destructive/50' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-destructive/90 to-primary/90 scale-105 shadow-lg shadow-destructive/25'
                        : 'bg-muted/60 scale-90 hover:scale-100 hover:bg-muted/80'
                    }`}
                    disabled={isAnimating}
                  >
                    {/* Enhanced glow effect for active step */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-lg opacity-70 scale-150 animate-pulse"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-xl opacity-40 scale-200 animate-ping"></div>
                      </>
                    )}
                    
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <IconComponent className={`w-6 h-6 xl:w-7 xl:h-7 transition-all duration-500 ${
                        isActive 
                          ? 'text-primary-foreground drop-shadow-lg' 
                          : isCompleted 
                          ? 'text-primary-foreground' 
                          : 'text-muted-foreground/50'
                      }`} />
                    </div>
                  </button>

                  {/* Step Label */}
                  <div className={`absolute -bottom-10 xl:-bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-105' : isCompleted ? 'opacity-80' : 'opacity-40'
                  }`}>
                    <span className={`text-xs px-2 py-1 xl:px-3 xl:py-1 rounded-full inline-block font-medium ${
                      isActive 
                        ? 'bg-gradient-to-r from-destructive to-primary text-primary-foreground shadow-lg' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-destructive/70 to-primary/70 text-primary-foreground'
                        : 'bg-muted/60 text-muted-foreground'
                    }`}>
                      Step {step.step}
                    </span>
                    <p className={`text-xs mt-1 font-medium max-w-16 xl:max-w-20 leading-tight ${
                      isActive ? 'text-foreground' : isCompleted ? 'text-muted-foreground' : 'text-muted-foreground/50'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Fixed Content Box */}
          <div className="ml-auto w-[48%] flex items-center pr-6 xl:pr-8 pl-4 relative">
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

        {/* Tablet Diagonal Timeline - Smaller Diagonal */}
        <div className="hidden md:flex lg:hidden w-full gap-0 h-[600px] bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden">
          {/* Tablet Diagonal Timeline Container */}
          <div className="absolute inset-0 px-4 py-12">
            {/* Diagonal progress line SVG */}
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="tabletDiagonalProgress" x1="20%" y1="80%" x2="50%" y2="30%">
                  <stop offset="0%" stopColor="hsl(var(--border))" stopOpacity="0.4" />
                  <stop offset={`${(activeStep / (steps.length - 1)) * 100}%`} stopColor="hsl(var(--destructive))" stopOpacity="1" />
                  <stop offset={`${(activeStep / (steps.length - 1)) * 100 + 1}%`} stopColor="hsl(var(--border))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <line
                x1="20%"
                y1="80%"
                x2="50%"
                y2="30%"
                stroke="url(#tabletDiagonalProgress)"
                strokeWidth="3"
                className="transition-all duration-1200 ease-in-out"
              />
            </svg>

            {/* Step dots positioned along diagonal line */}
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              
              // Calculate diagonal positions for tablet (20%, 80%) to (50%, 30%)
              const progress = index / (steps.length - 1);
              const leftPosition = 20 + (progress * 30); // 20% to 50%
              const topPosition = 80 - (progress * 50); // 80% to 30%
              
              return (
                <div 
                  key={index} 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                  style={{ 
                    left: `${leftPosition}%`, 
                    top: `${topPosition}%` 
                  }}
                >
                  {/* Step Circle */}
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`relative w-12 h-12 rounded-full transition-all duration-700 transform z-20 ${
                      isActive 
                        ? 'bg-gradient-to-r from-destructive to-primary scale-115 shadow-xl shadow-destructive/40' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-destructive/90 to-primary/90 scale-105 shadow-lg shadow-destructive/20'
                        : 'bg-muted/60 scale-90 hover:scale-100 hover:bg-muted/80'
                    }`}
                    disabled={isAnimating}
                  >
                    {/* Enhanced glow effect for active step */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-lg opacity-60 scale-150 animate-pulse"></div>
                    )}
                    
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <IconComponent className={`w-5 h-5 transition-all duration-500 ${
                        isActive 
                          ? 'text-primary-foreground drop-shadow-lg' 
                          : isCompleted 
                          ? 'text-primary-foreground' 
                          : 'text-muted-foreground/50'
                      }`} />
                    </div>
                  </button>

                  {/* Step Label */}
                  <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-105' : isCompleted ? 'opacity-80' : 'opacity-40'
                  }`}>
                    <span className={`text-xs px-2 py-1 rounded-full inline-block font-medium ${
                      isActive 
                        ? 'bg-gradient-to-r from-destructive to-primary text-primary-foreground shadow-md' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-destructive/70 to-primary/70 text-primary-foreground'
                        : 'bg-muted/60 text-muted-foreground'
                    }`}>
                      {step.step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Fixed Content Box */}
          <div className="ml-auto w-[50%] flex items-center pr-4 pl-2 relative">
            <Card className="w-full p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md border-2 border-border/50 transition-all duration-500 hover:shadow-xl shadow-lg h-fit max-w-none relative z-10 overflow-hidden">
              {/* Dynamic background image inside card */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-[0.04] transition-all duration-500"
                style={{ backgroundImage: `url(${steps[activeStep].backgroundImage})` }}
              ></div>
              <div className="text-left relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-destructive/20 to-primary/20 rounded-xl flex items-center justify-center mb-6 border border-border/30">
                  {React.createElement(steps[activeStep].icon, { 
                    className: "w-8 h-8 text-destructive" 
                  })}
                </div>
                
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4 leading-tight">
                  Step {steps[activeStep].step}: {steps[activeStep].title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {steps[activeStep].description}
                </p>
                
                <div className="bg-muted/40 rounded-lg p-4 border border-border/40 backdrop-blur-sm">
                  <p className="text-sm text-foreground leading-relaxed">
                    {steps[activeStep].detail}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-4 px-4">
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