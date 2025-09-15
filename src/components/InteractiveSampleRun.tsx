import React, { useState, useEffect } from 'react';
import { FileText, MapPin, Package, Navigation, Lock, CheckCircle, Settings } from 'lucide-react';
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

        {/* Desktop Circular Timeline Layout */}
        <div className="hidden lg:flex w-full gap-0 h-[700px] bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden">
          {/* Circular Timeline Container - Left Side */}
          <div className="w-[52%] flex items-center justify-center relative">
            <div className="relative w-[400px] h-[400px] xl:w-[450px] xl:h-[450px]">
              {/* Static Background Circle */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Background Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="4"
                  strokeOpacity="0.4"
                />
              </svg>

              {/* Step Dots Positioned Around Circle */}
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                
                // Calculate position around circle (starting from top, going clockwise)
                const angle = (index * 60 - 90) * (Math.PI / 180); // -90 to start from top
                const radius = 180; // Distance from center
                const x = 200 + radius * Math.cos(angle); // Center + radius * cos
                const y = 200 + radius * Math.sin(angle); // Center + radius * sin
                
                // Calculate label position (further out from circle)
                const labelRadius = 250;
                const labelX = 200 + labelRadius * Math.cos(angle);
                const labelY = 200 + labelRadius * Math.sin(angle);
                
                return (
                  <div key={index}>
                    {/* Step Circle */}
                    <div 
                      className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                      style={{ 
                        left: `${(x / 400) * 100}%`, 
                        top: `${(y / 400) * 100}%` 
                      }}
                    >
                      <button
                        onClick={() => handleStepClick(index)}
                        className={`relative w-16 h-16 xl:w-18 xl:h-18 rounded-full transition-all duration-700 transform z-20 border-2 ${
                          isActive 
                            ? 'bg-gradient-to-r from-destructive to-primary scale-125 shadow-2xl shadow-destructive/50 border-transparent' 
                            : isCompleted
                            ? 'bg-gradient-to-r from-destructive/90 to-primary/90 scale-110 shadow-lg shadow-destructive/25 border-transparent'
                            : 'bg-card/80 scale-95 hover:scale-105 hover:bg-card border-border hover:border-primary/50'
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
                          <IconComponent className={`w-7 h-7 xl:w-8 xl:h-8 transition-all duration-500 ${
                            isActive 
                              ? 'text-primary-foreground drop-shadow-lg' 
                              : isCompleted 
                              ? 'text-primary-foreground' 
                              : 'text-muted-foreground hover:text-foreground'
                          }`} />
                        </div>
                      </button>
                    </div>

                    {/* Step Label - Positioned outside circle to avoid overlap */}
                    <div 
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 pointer-events-none"
                      style={{ 
                        left: `${(labelX / 400) * 100}%`, 
                        top: `${(labelY / 400) * 100}%` 
                      }}
                    >
                      <div className={`transition-all duration-500 ${
                        isActive ? 'opacity-100 scale-105' : isCompleted ? 'opacity-80' : 'opacity-60'
                      }`}>
                        <span className={`text-xs px-2 py-1 xl:px-3 xl:py-1 rounded-full inline-block font-medium whitespace-nowrap ${
                          isActive 
                            ? 'bg-gradient-to-r from-destructive to-primary text-primary-foreground shadow-lg' 
                            : isCompleted
                            ? 'bg-gradient-to-r from-destructive/70 to-primary/70 text-primary-foreground'
                            : 'bg-muted/80 text-muted-foreground backdrop-blur-sm'
                        }`}>
                          Step {step.step}
                        </span>
                        <p className={`text-xs mt-1 font-medium max-w-20 xl:max-w-24 mx-auto leading-tight ${
                          isActive ? 'text-foreground' : isCompleted ? 'text-muted-foreground' : 'text-muted-foreground/70'
                        }`}>
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Center Logo/Branding Area - No Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-gradient-to-r from-card to-background border-2 border-border/50 flex items-center justify-center backdrop-blur-md shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 mx-auto mb-2 bg-gradient-to-r from-destructive/20 to-primary/20 rounded-xl flex items-center justify-center">
                      <Settings className="w-6 h-6 xl:w-7 xl:h-7 text-primary" />
                    </div>
                    <p className="text-sm xl:text-base font-medium text-muted-foreground/80">Automated</p>
                    <p className="text-xs xl:text-sm font-medium text-muted-foreground/60">Workflow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Fixed Content Box */}
          <div className="w-[48%] flex items-center pr-6 xl:pr-8 pl-4 relative">
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

        {/* Tablet Circular Timeline - Smaller Circle */}
        <div className="hidden md:flex lg:hidden w-full gap-0 h-[600px] bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden">
          {/* Circular Timeline Container - Left Side */}
          <div className="w-[50%] flex items-center justify-center relative">
            <div className="relative w-[320px] h-[320px]">
              {/* Static Background Circle */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="4"
                  strokeOpacity="0.4"
                />
              </svg>

              {/* Step Dots Positioned Around Circle */}
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                
                // Calculate position around circle (starting from top, going clockwise)
                const angle = (index * 60 - 90) * (Math.PI / 180);
                const radius = 144; // Distance from center (45% of 320px)
                const x = 160 + radius * Math.cos(angle);
                const y = 160 + radius * Math.sin(angle);
                
                // Calculate label position (further out from circle)
                const labelRadius = 205;
                const labelX = 160 + labelRadius * Math.cos(angle);
                const labelY = 160 + labelRadius * Math.sin(angle);
                
                return (
                  <div key={index}>
                    {/* Step Circle */}
                    <div 
                      className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                      style={{ 
                        left: `${(x / 320) * 100}%`, 
                        top: `${(y / 320) * 100}%` 
                      }}
                    >
                      <button
                        onClick={() => handleStepClick(index)}
                        className={`relative w-12 h-12 rounded-full transition-all duration-700 transform z-20 border-2 ${
                          isActive 
                            ? 'bg-gradient-to-r from-destructive to-primary scale-115 shadow-xl shadow-destructive/40 border-transparent' 
                            : isCompleted
                            ? 'bg-gradient-to-r from-destructive/90 to-primary/90 scale-105 shadow-lg shadow-destructive/20 border-transparent'
                            : 'bg-card/80 scale-90 hover:scale-100 hover:bg-card border-border hover:border-primary/50'
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
                              : 'text-muted-foreground hover:text-foreground'
                          }`} />
                        </div>
                      </button>
                    </div>

                    {/* Step Label - Positioned outside circle to avoid overlap */}
                    <div 
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 pointer-events-none"
                      style={{ 
                        left: `${(labelX / 320) * 100}%`, 
                        top: `${(labelY / 320) * 100}%` 
                      }}
                    >
                      <div className={`transition-all duration-500 ${
                        isActive ? 'opacity-100 scale-105' : isCompleted ? 'opacity-80' : 'opacity-60'
                      }`}>
                        <span className={`text-xs px-2 py-1 rounded-full inline-block font-medium whitespace-nowrap ${
                          isActive 
                            ? 'bg-gradient-to-r from-destructive to-primary text-primary-foreground shadow-lg' 
                            : isCompleted
                            ? 'bg-gradient-to-r from-destructive/70 to-primary/70 text-primary-foreground'
                            : 'bg-muted/80 text-muted-foreground backdrop-blur-sm'
                        }`}>
                          Step {step.step}
                        </span>
                        <p className={`text-xs mt-1 font-medium max-w-16 mx-auto leading-tight ${
                          isActive ? 'text-foreground' : isCompleted ? 'text-muted-foreground' : 'text-muted-foreground/70'
                        }`}>
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Center Logo/Branding Area - No Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-card to-background border-2 border-border/50 flex items-center justify-center backdrop-blur-md shadow-lg">
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-1 bg-gradient-to-r from-destructive/20 to-primary/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-xs font-medium text-muted-foreground/70">Flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Fixed Content Box */}
          <div className="w-[50%] flex items-center pr-4 pl-2 relative">
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

        {/* Mobile Circular Timeline - Circle Top, Content Below */}
        <div className="md:hidden space-y-8 px-4">
          {/* Mobile Circular Timeline */}
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px]">
              {/* Static Background Circle */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="3"
                  strokeOpacity="0.4"
                />
              </svg>

               {/* Step Dots Positioned Around Circle */}
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                
                // Calculate position around circle
                const angle = (index * 60 - 90) * (Math.PI / 180);
                const radius = 126; // Distance from center (45% of 280px)
                const x = 140 + radius * Math.cos(angle);
                const y = 140 + radius * Math.sin(angle);
                
                // Calculate label position for mobile (beside circle points)
                const labelRadius = 180;
                const labelX = 140 + labelRadius * Math.cos(angle);
                const labelY = 140 + labelRadius * Math.sin(angle);
                
                return (
                  <div key={index}>
                    {/* Step Circle */}
                    <div 
                      className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                      style={{ 
                        left: `${(x / 280) * 100}%`, 
                        top: `${(y / 280) * 100}%` 
                      }}
                    >
                      <button
                        onClick={() => handleStepClick(index)}
                        className={`relative w-10 h-10 rounded-full transition-all duration-700 transform z-20 border-2 ${
                          isActive 
                            ? 'bg-gradient-to-r from-destructive to-primary scale-110 shadow-lg shadow-destructive/30 border-transparent' 
                            : isCompleted
                            ? 'bg-gradient-to-r from-destructive/90 to-primary/90 scale-105 border-transparent'
                            : 'bg-card/80 scale-90 hover:scale-100 border-border hover:border-primary/50'
                        }`}
                        disabled={isAnimating}
                      >
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-destructive to-primary blur-md opacity-60 scale-150 animate-pulse"></div>
                        )}
                        
                        <div className="relative z-10 flex items-center justify-center w-full h-full">
                          <IconComponent className={`w-4 h-4 transition-all duration-500 ${
                            isActive 
                              ? 'text-primary-foreground drop-shadow-lg' 
                              : isCompleted 
                              ? 'text-primary-foreground' 
                              : 'text-muted-foreground hover:text-foreground'
                          }`} />
                        </div>
                      </button>
                    </div>

                  </div>
                );
              })}

              {/* Center Content - Show active step text for mobile */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-card to-background border-2 border-border/50 backdrop-blur-md shadow-lg transition-all duration-500">
                  <div className="text-center p-2 flex flex-col items-center justify-center h-full">
                    <div className="w-8 h-8 mx-auto mb-1 bg-gradient-to-r from-destructive/20 to-primary/20 rounded-lg flex items-center justify-center">
                      {React.createElement(steps[activeStep].icon, { 
                        className: "w-4 h-4 text-primary" 
                      })}
                    </div>
                    <p className="text-xs font-medium text-foreground leading-tight">{steps[activeStep].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Content Box Below Circle */}
          <Card className="w-full p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md border-2 border-border/50 transition-all duration-500 hover:shadow-xl shadow-lg relative z-10 overflow-hidden">
            {/* Dynamic background image inside card */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.04] transition-all duration-500"
              style={{ backgroundImage: `url(${steps[activeStep].backgroundImage})` }}
            ></div>
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-destructive/20 to-primary/20 rounded-xl flex items-center justify-center mb-6 border border-border/30 mx-auto">
                {React.createElement(steps[activeStep].icon, { 
                  className: "w-8 h-8 text-destructive" 
                })}
              </div>
              
              <h3 className="text-xl font-poppins font-bold text-foreground mb-4 leading-tight">
                Step {steps[activeStep].step}: {steps[activeStep].title}
              </h3>
              
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {steps[activeStep].description}
              </p>
              
              <div className="bg-muted/40 rounded-lg p-4 border border-border/40 backdrop-blur-sm text-left">
                <p className="text-sm text-foreground leading-relaxed">
                  {steps[activeStep].detail}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSampleRun;