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
        return "-top-8 -left-8 lg:-top-12 lg:-left-12";
      case "top-right":
        return "-top-8 -right-8 lg:-top-12 lg:-right-12";
      case "center-right":
        return "top-1/2 -translate-y-1/2 -right-8 lg:-right-12";
      case "bottom-right":
        return "-bottom-8 -right-8 lg:-bottom-12 lg:-right-12";
      case "center-left":
        return "top-1/2 -translate-y-1/2 -left-8 lg:-left-12";
      default:
        return "";
    }
  };

  const getTooltipPosition = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-full left-0 mt-6";
      case "top-right":
        return "top-full right-0 mt-6";
      case "center-right":
        return "right-full top-1/2 -translate-y-1/2 mr-6";
      case "bottom-right":
        return "bottom-full right-0 mb-6";
      case "center-left":
        return "left-full top-1/2 -translate-y-1/2 ml-6";
      default:
        return "";
    }
  };

  return (
    <section className="section-padding bg-gradient-surface relative overflow-hidden" id="how-autodock-fits">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="section-header animate-fade-in">
              <div className="badge badge-primary mb-6">
                <span>Integration</span>
              </div>
              <h2 className="heading-xl text-foreground mb-8">
                How AutoDock Fits Into
                <span className="gradient-text block">Your Dock</span>
              </h2>
              <p className="body-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
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
            <div className="flex items-center justify-center mb-20 relative" style={{ zIndex: 2 }}>
              <div className="relative animate-fade-in bg-gradient-to-br from-background via-background/95 to-accent/5 rounded-3xl border border-border/30 shadow-2xl hover:shadow-3xl transition-all duration-700 w-full max-w-5xl h-80 lg:h-[28rem] backdrop-blur-sm">
                <div className="flex items-center justify-center p-10 h-full">
                  <div className="text-center space-y-6">
                    <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-full mx-auto flex items-center justify-center shadow-xl relative overflow-hidden">
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 animate-pulse"></div>
                      <Brain className="w-14 h-14 lg:w-16 lg:h-16 text-white relative z-10" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                      <h4 className="heading-lg text-foreground">
                        Interactive Process Flow
                      </h4>
                      <p className="text-muted-foreground body-lg max-w-2xl mx-auto">
                        Explore each step of AutoDock's seamless integration with your dock operations
                      </p>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="flex justify-center items-center space-x-4 pt-6">
                      {steps.map((_, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full transition-all duration-500 ${
                            highlightedStep === index
                              ? 'bg-primary scale-125 shadow-lg shadow-primary/40'
                              : 'bg-primary/20 hover:bg-primary/40'
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
                      <div className={`bg-background/95 backdrop-blur-sm rounded-2xl p-5 lg:p-6 border shadow-lg hover:shadow-xl transition-all duration-300 w-52 lg:w-64 ${
                        isHighlighted 
                          ? 'border-primary/50 shadow-primary/25 ring-1 ring-primary/20' 
                          : 'border-border/40 hover:border-primary/40 hover:shadow-primary/10'
                      }`}>
                        <div className="flex items-center space-x-4">
                          {/* Icon with red number badge */}
                          <div className="relative flex-shrink-0">
                            <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              isHighlighted ? 'shadow-lg shadow-primary/40 scale-110' : 'shadow-md'
                            }`}>
                              <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={1.5} />
                            </div>
                            {/* Red number badge */}
                            <div className="absolute -top-2 -right-2 w-7 h-7 lg:w-8 lg:h-8 bg-destructive text-white rounded-full flex items-center justify-center text-sm lg:text-base font-bold shadow-lg">
                              {index + 1}
                            </div>
                          </div>
                          
                          {/* Title only */}
                          <div className="min-w-0 flex-1">
                            <h3 className={`body-base font-bold transition-colors ${
                              isHighlighted 
                                ? 'text-primary' 
                                : 'text-foreground group-hover:text-primary'
                            }`}>
                              {step.title}
                            </h3>
                          </div>
                          
                          {/* Arrow indicator */}
                          <ArrowRight className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${
                            isActive ? 'rotate-90 text-primary' : 'group-hover:text-primary group-hover:translate-x-1'
                          }`} />
                        </div>
                      </div>

                      {/* Tooltip/Pop-up for description */}
                      <div className={`absolute ${getTooltipPosition(step.position)} transition-all duration-300 z-20 ${
                        isActive 
                          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
                      }`}>
                        <div className="bg-background/98 border border-border/60 rounded-2xl shadow-2xl p-6 max-w-sm backdrop-blur-sm ring-1 ring-primary/10">
                          <div className="space-y-4">
                            {/* Header */}
                            <div className="flex items-center space-x-3 pb-3 border-b border-border/30">
                              <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-primary" strokeWidth={1.5} />
                              </div>
                              <div>
                                <span className="body-base font-bold text-foreground">
                                  Step {index + 1}
                                </span>
                                <h4 className="body-sm font-semibold text-primary">
                                  {step.title}
                                </h4>
                              </div>
                            </div>
                            
                            {/* Description */}
                            <div>
                              <p className="text-muted-foreground body-sm">
                                {step.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Arrow pointer */}
                          <div className={`absolute w-4 h-4 bg-background border-l border-t border-border/60 transform rotate-45 ${
                            step.position.includes('top') ? '-bottom-2 left-6' :
                            step.position.includes('bottom') ? '-top-2 left-6' :
                            step.position.includes('left') ? 'top-1/2 -translate-y-1/2 -right-2' :
                            'top-1/2 -translate-y-1/2 -left-2'
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