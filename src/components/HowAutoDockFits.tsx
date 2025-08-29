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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            How AutoDock Fits
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            See how AutoDock transforms your dock operations
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowAutoDockFits;