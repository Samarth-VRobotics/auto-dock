import React, { useState, useEffect, useRef } from "react";
import { Truck, RotateCcw, Package, Brain, ArrowRight } from "lucide-react";

const HowAutoDockFits = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [highlightedStep, setHighlightedStep] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Auto-highlight animation
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedStep(prev => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Truck,
      title: "Truck Docking & Trailer Entry",
      description: "Head AMR drives inside while Tail AMR anchors at staging with the conveyor linking them, unloading trailers immediately without manual entry or wasted ramp time.",
      position: "top-left"
    },
    {
      icon: RotateCcw,
      title: "Unload to Staging",
      description: "The flexible conveyor adjusts its length, angle, and shape to match truck and dock, creating smooth flow to staging points without pile-ups at dock doors.",
      position: "top-right"
    },
    {
      icon: Package,
      title: "Staging & Palletizing",
      description: "Head AMR's arm unloads inside while Tail AMR's arm places goods on pallets or the floor, clearing mixed loads consistently and keeping staging organized.",
      position: "center-right"
    },
    {
      icon: RotateCcw,
      title: "Staging-to-Storage & Outbound Loading",
      description: "The same AMR + conveyor system extends flow from staging into storage or reverses for loading, enabling continuous bi-directional dock movement.",
      position: "bottom-right"
    },
    {
      icon: Brain,
      title: "Dock Orchestration & Visibility",
      description: "Dock AI synchronizes AMRs, arms, and conveyors while updating WMS/ERP, ensuring predictable throughput, SLA compliance, and real-time visibility.",
      position: "center-left"
    }
  ];

  const handleStepClick = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (activeStep === index) {
      setActiveStep(null);
    } else {
      setActiveStep(index);
      // Auto-close after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setActiveStep(null);
      }, 5000);
    }
  };

  const handleClickOutside = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveStep(null);
  };

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "-top-6 -left-6 lg:-top-8 lg:-left-8";
      case "top-right":
        return "-top-6 -right-6 lg:-top-8 lg:-right-8";
      case "center-right":
        return "top-1/2 -translate-y-1/2 -right-6 lg:-right-8";
      case "bottom-right":
        return "-bottom-6 -right-6 lg:-bottom-8 lg:-right-8";
      case "center-left":
        return "top-1/2 -translate-y-1/2 -left-6 lg:-left-8";
      default:
        return "";
    }
  };

  const getTooltipPosition = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-full left-0 mt-4";
      case "top-right":
        return "top-full right-0 mt-4";
      case "center-right":
        return "right-full top-1/2 -translate-y-1/2 mr-4";
      case "bottom-right":
        return "bottom-full right-0 mb-4";
      case "center-left":
        return "left-full top-1/2 -translate-y-1/2 ml-4";
      default:
        return "";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden" id="how-autodock-fits">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">Integration</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-8 leading-tight">
              How AutoDock Fits Into
              <span className="gradient-text block">Your Dock</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Busy docks create bottlenecks: trucks, ramps, forklifts, and staging all competing for space. AutoDock eliminates this friction without redesigning your dock — just removing what slows you down.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Interactive Step Flow */}
          <div className="relative max-w-7xl mx-auto" onClick={handleClickOutside}>
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Top arc */}
              <path
                d="M 200 120 Q 512 80 824 120"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="opacity-40"
              />
              {/* Right side */}
              <path
                d="M 824 120 Q 864 200 824 280"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                className="opacity-40"
              />
              {/* Bottom arc */}
              <path
                d="M 824 280 Q 512 320 200 280"
                stroke="url(#gradient3)"
                strokeWidth="2"
                fill="none"
                className="opacity-40"
              />
              {/* Left side */}
              <path
                d="M 200 280 Q 160 200 200 120"
                stroke="url(#gradient4)"
                strokeWidth="2"
                fill="none"
                className="opacity-40"
              />
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.4}} />
                  <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.4}} />
                  <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                </linearGradient>
                <linearGradient id="gradient3" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.4}} />
                  <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                </linearGradient>
                <linearGradient id="gradient4" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.4}} />
                  <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Animation Area */}
            <div className="flex items-center justify-center mb-16 relative" style={{ zIndex: 2 }}>
              <div className="relative animate-fade-in bg-gradient-to-br from-background via-background/95 to-accent/10 rounded-3xl border border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-700 w-full max-w-4xl h-72 lg:h-96 backdrop-blur-sm">
                <div className="flex items-center justify-center p-8 h-full">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-full mx-auto flex items-center justify-center shadow-lg relative overflow-hidden">
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 animate-pulse"></div>
                      <Brain className="w-12 h-12 text-white relative z-10" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-foreground">
                        AutoDock Process Flow
                      </h4>
                      <p className="text-muted-foreground text-base max-w-md mx-auto">
                        Seamless dock operations from arrival to orchestration
                      </p>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="flex justify-center items-center space-x-3 pt-4">
                      {steps.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            highlightedStep === index
                              ? 'bg-primary scale-125 shadow-lg'
                              : 'bg-primary/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Cards */}
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isHighlighted = highlightedStep === index;
                const isActive = activeStep === index;
                
                return (
                  <div
                    key={index}
                    className={`absolute ${getPositionClasses(step.position)} z-10`}
                    style={{ 
                      animationDelay: `${0.3 + index * 0.1}s`, 
                      animationFillMode: 'both' 
                    }}
                  >
                    {/* Step Card */}
                    <div
                      className={`group cursor-pointer relative animate-fade-in transition-all duration-300 ${
                        isHighlighted ? 'scale-110' : 'hover:scale-105'
                      }`}
                      onClick={(e) => handleStepClick(index, e)}
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => {
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current);
                        }
                        timeoutRef.current = setTimeout(() => setActiveStep(null), 200);
                      }}
                    >
                      {/* Main card - compact with only header */}
                      <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-4 lg:p-5 border shadow-lg hover:shadow-xl transition-all duration-300 w-48 lg:w-56 ${
                        isHighlighted 
                          ? 'border-primary/40 shadow-primary/20' 
                          : 'border-border/30 hover:border-primary/30'
                      }`}>
                        <div className="flex items-center space-x-3">
                          {/* Icon with red number badge */}
                          <div className="relative flex-shrink-0">
                            <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              isHighlighted ? 'shadow-lg shadow-primary/30 scale-110' : 'shadow-md'
                            }`}>
                              <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" strokeWidth={1.5} />
                            </div>
                            {/* Red number badge */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-7 lg:h-7 bg-destructive text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold shadow-md">
                              {index + 1}
                            </div>
                          </div>
                          
                          {/* Title only */}
                          <div className="min-w-0 flex-1">
                            <h3 className={`text-sm lg:text-base font-bold transition-colors leading-tight ${
                              isHighlighted 
                                ? 'text-primary' 
                                : 'text-foreground group-hover:text-primary'
                            }`}>
                              {step.title}
                            </h3>
                          </div>
                          
                          {/* Arrow indicator */}
                          <ArrowRight className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${
                            isActive ? 'rotate-90 text-primary' : 'group-hover:text-primary group-hover:translate-x-0.5'
                          }`} />
                        </div>
                      </div>

                      {/* Tooltip/Pop-up for description */}
                      <div className={`absolute ${getTooltipPosition(step.position)} transition-all duration-300 z-20 ${
                        isActive 
                          ? 'opacity-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}>
                        <div className="bg-white border border-border/50 rounded-xl shadow-xl p-4 max-w-xs backdrop-blur-sm">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-primary" strokeWidth={1.5} />
                              </div>
                              <span className="font-semibold text-sm text-foreground">
                                Step {index + 1}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          {/* Arrow pointer */}
                          <div className={`absolute w-3 h-3 bg-white border-l border-t border-border/50 transform rotate-45 ${
                            step.position.includes('top') ? '-bottom-1.5 left-4' :
                            step.position.includes('bottom') ? '-top-1.5 left-4' :
                            step.position.includes('left') ? 'top-1/2 -translate-y-1/2 -right-1.5' :
                            'top-1/2 -translate-y-1/2 -left-1.5'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Spacing for positioned elements */}
            <div className="h-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowAutoDockFits;