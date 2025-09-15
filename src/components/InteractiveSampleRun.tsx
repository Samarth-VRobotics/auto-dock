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

        {/* Desktop Circular Timeline Layout */}
        <div className="hidden lg:flex w-full gap-0 h-[700px] bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden">
          {/* Circular Timeline Container - Left Side */}
          <div className="w-[52%] flex items-center justify-center relative">
            <div className="relative w-[400px] h-[400px] xl:w-[450px] xl:h-[450px]">
              {/* Circular Progress Ring */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="circularProgress" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                  </linearGradient>
                </defs>
                
                {/* Background Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="4"
                  strokeOpacity="0.2"
                />
                
                {/* Progress Arc */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="url(#circularProgress)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 0.45 * 200}`}
                  strokeDashoffset={`${2 * Math.PI * 0.45 * 200 * (1 - (activeStep + 1) / steps.length)}`}
                  className="transition-all duration-1200 ease-in-out"
                  style={{
                    filter: 'drop-shadow(0 0 8px hsl(var(--destructive) / 0.4))'
                  }}
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
                
                return (
                  <div 
                    key={index} 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                    style={{ 
                      left: `${(x / 400) * 100}%`, 
                      top: `${(y / 400) * 100}%` 
                    }}
                  >
                    {/* Step Circle */}
                    <button
                      onClick={() => handleStepClick(index)}
                      className={`relative w-16 h-16 xl:w-18 xl:h-18 rounded-full transition-all duration-700 transform z-20 ${
                        isActive 
                          ? 'bg-gradient-to-r from-destructive to-primary scale-125 shadow-2xl shadow-destructive/50' 
                          : isCompleted
                          ? 'bg-gradient-to-r from-destructive/90 to-primary/90 scale-110 shadow-lg shadow-destructive/25'
                          : 'bg-muted/60 scale-95 hover:scale-105 hover:bg-muted/80'
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
                            : 'text-muted-foreground/50'
                        }`} />
                      </div>
                    </button>

                    {/* Step Label */}
                    <div className={`absolute ${
                      // Position labels outside the circle based on angle
                      index === 0 ? '-top-12' : // Top
                      index === 1 ? '-top-8 -right-12' : // Top-right
                      index === 2 ? 'top-1/2 -right-16 -translate-y-1/2' : // Right
                      index === 3 ? '-bottom-8 -right-12' : // Bottom-right
                      index === 4 ? '-bottom-12' : // Bottom
                      '-bottom-8 -left-12' // Bottom-left (index 5)
                    } left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-105' : isCompleted ? 'opacity-80' : 'opacity-40'
                    }`}>
                      <span className={`text-xs px-2 py-1 xl:px-3 xl:py-1 rounded-full inline-block font-medium whitespace-nowrap ${
                        isActive 
                          ? 'bg-gradient-to-r from-destructive to-primary text-primary-foreground shadow-lg' 
                          : isCompleted
                          ? 'bg-gradient-to-r from-destructive/70 to-primary/70 text-primary-foreground'
                          : 'bg-muted/60 text-muted-foreground'
                      }`}>
                        Step {step.step}
                      </span>
                      <p className={`text-xs mt-1 font-medium max-w-20 xl:max-w-24 leading-tight ${
                        isActive ? 'text-foreground' : isCompleted ? 'text-muted-foreground' : 'text-muted-foreground/50'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Center Circle with Current Step Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-20 h-20 xl:w-24 xl:h-24 rounded-full bg-gradient-to-r from-background to-card border-2 transition-all duration-500 ${
                  isAnimating ? 'border-destructive/50' : 'border-border'
                } flex items-center justify-center backdrop-blur-md`}>
                  <span className="text-2xl xl:text-3xl font-poppins font-bold text-foreground">
                    {activeStep + 1}
                  </span>
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
              {/* Circular Progress Ring */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="tabletCircularProgress" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                  </linearGradient>
                </defs>
                
                {/* Background Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="3"
                  strokeOpacity="0.2"
                />
                
                {/* Progress Arc */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="url(#tabletCircularProgress)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 0.45 * 160}`}
                  strokeDashoffset={`${2 * Math.PI * 0.45 * 160 * (1 - (activeStep + 1) / steps.length)}`}
                  className="transition-all duration-1200 ease-in-out"
                  style={{
                    filter: 'drop-shadow(0 0 6px hsl(var(--destructive) / 0.3))'
                  }}
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
                
                return (
                  <div 
                    key={index} 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                    style={{ 
                      left: `${(x / 320) * 100}%`, 
                      top: `${(y / 320) * 100}%` 
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
                    <div className={`absolute ${
                      // Position labels outside the circle based on angle
                      index === 0 ? '-top-8' : 
                      index === 1 ? '-top-6 -right-10' : 
                      index === 2 ? 'top-1/2 -right-12 -translate-y-1/2' : 
                      index === 3 ? '-bottom-6 -right-10' : 
                      index === 4 ? '-bottom-8' : 
                      '-bottom-6 -left-10'
                    } left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-105' : isCompleted ? 'opacity-80' : 'opacity-40'
                    }`}>
                      <span className={`text-xs px-2 py-1 rounded-full inline-block font-medium whitespace-nowrap ${
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

              {/* Center Circle with Current Step Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-background to-card border-2 transition-all duration-500 ${
                  isAnimating ? 'border-destructive/50' : 'border-border'
                } flex items-center justify-center backdrop-blur-md`}>
                  <span className="text-xl font-poppins font-bold text-foreground">
                    {activeStep + 1}
                  </span>
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
              {/* Circular Progress Ring */}
              <svg className="absolute inset-0 w-full h-full transform -rotate-90" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mobileCircularProgress" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                  </linearGradient>
                </defs>
                
                {/* Background Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  strokeOpacity="0.2"
                />
                
                {/* Progress Arc */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="url(#mobileCircularProgress)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 0.45 * 140}`}
                  strokeDashoffset={`${2 * Math.PI * 0.45 * 140 * (1 - (activeStep + 1) / steps.length)}`}
                  className="transition-all duration-1200 ease-in-out"
                  style={{
                    filter: 'drop-shadow(0 0 4px hsl(var(--destructive) / 0.2))'
                  }}
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
                
                return (
                  <div 
                    key={index} 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                    style={{ 
                      left: `${(x / 280) * 100}%`, 
                      top: `${(y / 280) * 100}%` 
                    }}
                  >
                    {/* Step Circle */}
                    <button
                      onClick={() => handleStepClick(index)}
                      className={`relative w-10 h-10 rounded-full transition-all duration-700 transform z-20 ${
                        isActive 
                          ? 'bg-gradient-to-r from-destructive to-primary scale-110 shadow-lg shadow-destructive/30' 
                          : isCompleted
                          ? 'bg-gradient-to-r from-destructive/90 to-primary/90 scale-105'
                          : 'bg-muted/60 scale-90 hover:scale-100'
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
                            : 'text-muted-foreground/50'
                        }`} />
                      </div>
                    </button>
                  </div>
                );
              })}

              {/* Center Circle with Current Step Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-background to-card border-2 transition-all duration-500 ${
                  isAnimating ? 'border-destructive/50' : 'border-border'
                } flex items-center justify-center backdrop-blur-md`}>
                  <span className="text-lg font-poppins font-bold text-foreground">
                    {activeStep + 1}
                  </span>
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