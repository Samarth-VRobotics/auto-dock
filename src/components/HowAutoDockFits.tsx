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
  const steps = [{
    icon: Truck,
    title: "Truck Docking & Trailer Entry",
    description: "Head AMR drives inside while Tail AMR anchors at staging with the conveyor linking them, unloading trailers immediately without manual entry or wasted ramp time.",
    position: "top-left"
  }, {
    icon: RotateCcw,
    title: "Unload to Staging",
    description: "The flexible conveyor adjusts its length, angle, and shape to match truck and dock, creating smooth flow to staging points without pile-ups at dock doors.",
    position: "top-right"
  }, {
    icon: Package,
    title: "Staging & Palletizing",
    description: "Head AMR's arm unloads inside while Tail AMR's arm places goods on pallets or the floor, clearing mixed loads consistently and keeping staging organized.",
    position: "center-right"
  }, {
    icon: RotateCcw,
    title: "Staging-to-Storage & Outbound Loading",
    description: "The same AMR + conveyor system extends flow from staging into storage or reverses for loading, enabling continuous bi-directional dock movement.",
    position: "bottom-right"
  }, {
    icon: Brain,
    title: "Dock Orchestration & Visibility",
    description: "Dock AI synchronizes AMRs, arms, and conveyors while updating WMS/ERP, ensuring predictable throughput, SLA compliance, and real-time visibility.",
    position: "center-left"
  }];
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
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How AutoDock Fits Into Your Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch the complete dock-to-storage workflow powered by intelligent AMR coordination
          </p>
        </div>

        <div 
          className="relative w-full max-w-6xl mx-auto h-[600px] bg-background/50 rounded-2xl border-2 border-border shadow-2xl"
          onClick={handleClickOutside}
        >
          {/* Central dock visualization */}
          <div className="absolute inset-8 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl border border-border/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <div className="w-32 h-20 bg-primary/20 rounded-lg mb-4 flex items-center justify-center">
                  <Truck className="w-12 h-12 text-primary" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">AutoDock System</p>
              </div>
            </div>
          </div>

          {/* Interactive step points */}
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isHighlighted = highlightedStep === index;
            const isActive = activeStep === index;
            
            return (
              <div key={index} className={`absolute ${getPositionClasses(step.position)}`}>
                <button
                  onClick={(e) => handleStepClick(index, e)}
                  className={`
                    relative w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 
                    transition-all duration-300 cursor-pointer
                    ${isHighlighted 
                      ? 'bg-primary/20 border-primary scale-110 shadow-lg shadow-primary/25' 
                      : 'bg-background border-border hover:border-primary/50 hover:scale-105'
                    }
                    ${isActive ? 'ring-4 ring-primary/30' : ''}
                  `}
                >
                  <IconComponent className={`
                    w-6 h-6 lg:w-8 lg:h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    ${isHighlighted ? 'text-primary' : 'text-muted-foreground'}
                  `} />
                  
                  {/* Step number */}
                  <div className={`
                    absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold
                    flex items-center justify-center
                    ${isHighlighted 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {index + 1}
                  </div>
                </button>

                {/* Tooltip */}
                {isActive && (
                  <div className={`
                    absolute ${getTooltipPosition(step.position)} z-50
                    w-80 p-6 bg-background border border-border rounded-xl shadow-2xl
                    animate-in fade-in-0 zoom-in-95 duration-200
                  `}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow pointing to step */}
                    <div className={`
                      absolute w-3 h-3 bg-background border-l border-t border-border rotate-45
                      ${step.position.includes('top') ? '-bottom-1.5' : ''}
                      ${step.position.includes('bottom') ? '-top-1.5' : ''}
                      ${step.position.includes('left') ? '-right-1.5' : ''}
                      ${step.position.includes('right') ? '-left-1.5' : ''}
                      ${step.position === 'center-right' ? 'top-1/2 -translate-y-1/2 -left-1.5' : ''}
                      ${step.position === 'center-left' ? 'top-1/2 -translate-y-1/2 -right-1.5' : ''}
                    `} />
                  </div>
                )}
              </div>
            );
          })}

          {/* Flow indicators */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Click any step to learn more about the process</p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            Auto-highlighting active
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowAutoDockFits;