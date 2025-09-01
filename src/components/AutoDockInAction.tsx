import React, { useState } from 'react';
import { Play, Truck, Move3D, Package, Warehouse, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
const AutoDockInAction = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [playingSteps, setPlayingSteps] = useState<Set<number>>(new Set());
  const toggleStepPlay = (stepIndex: number) => {
    setPlayingSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepIndex)) {
        newSet.delete(stepIndex);
      } else {
        newSet.add(stepIndex);
      }
      return newSet;
    });
  };
  const steps = [{
    title: "Truck Arrival",
    headline: "Unloading Begins the Moment Trucks Arrive",
    description: "Head AMR drives inside while Tail AMR anchors at staging, conveyor links them, unloading begins instantly.",
    icon: Truck,
    duration: "0:15"
  }, {
    title: "AMR Positioning",
    headline: "Flexible Conveyors Keep Goods Moving",
    description: "Conveyor adjusts length, angle, and shape to maintain smooth flow without pile-ups.",
    icon: Move3D,
    duration: "0:12"
  }, {
    title: "Conveyor Unloading",
    headline: "Smart Palletizing for Mixed Loads",
    description: "Head AMR unloads while Tail AMR organizes goods onto pallets or floor, keeping staging consistent.",
    icon: Package,
    duration: "0:18"
  }, {
    title: "Storage Flow",
    headline: "Seamless Flow to Storage or Outbound",
    description: "The system extends into storage or reverses for outbound, enabling continuous bi-directional dock flow.",
    icon: Warehouse,
    duration: "0:10"
  }, {
    title: "AI Orchestration",
    headline: "Orchestrated by AI for Predictable Throughput",
    description: "Dock AI synchronizes all elements and updates WMS/ERP for visibility and SLA compliance.",
    icon: Brain,
    duration: "0:08"
  }];
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            AutoDock in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">From Dock-to-Stock in one seamless flow — see AutoDock in action.</p>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          <Carousel className="w-full max-w-7xl mx-auto" opts={{
          align: "start",
          loop: true
        }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isPlaying = playingSteps.has(index);
              return <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="group cursor-pointer" onClick={() => setActiveStepIndex(index)}>
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-border shadow-lg group-hover:shadow-xl transition-all duration-300">
                        {/* Video Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background/50 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                              <IconComponent className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="text-xs text-muted-foreground font-medium">{step.duration}</div>
                          </div>
                        </div>
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="icon" variant="outline" className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:bg-background shadow-xl" onClick={e => {
                        e.stopPropagation();
                        toggleStepPlay(index);
                      }}>
                            <Play className={`w-6 h-6 text-primary ${isPlaying ? 'animate-pulse' : ''} ml-1`} />
                          </Button>
                        </div>


                        {/* Playing Indicator */}
                        {isPlaying && <div className="absolute bottom-3 right-3 flex items-center gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-150"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-300"></div>
                          </div>}
                      </div>
                      
                      {/* Step Info */}
                      <div className="pt-4">
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>;
            })}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur-sm border-border hover:bg-background/90" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur-sm border-border hover:bg-background/90" />
          </Carousel>
        </div>

        {/* Active Step Details */}
        {activeStepIndex !== null && <div className="mt-12 max-w-4xl mx-auto">
            
          </div>}
      </div>
    </section>;
};
export default AutoDockInAction;