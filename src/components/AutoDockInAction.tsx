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
    title: "Truck Arrival & Docking",
    description: "The truck aligns and docks precisely at the loading bay to initiate the automated unloading sequence.",
    icon: Truck,
    videoUrl: "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Step%201%20Truck%20Arrival%20&%20Docking.mp4",
    duration: "0:15"
  }, {
    title: "AMR Alignment & Dock Preparation",
    description: "The Automated Mobile Robot (AMR)/AUTODock Head navigates and positions itself for seamless integration with the dock and unloading system.",
    icon: Move3D,
    videoUrl: "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Step%202%20AMR%20Alignment%20&%20Dock%20Preparation.mp4",
    duration: "0:12"
  }, {
    title: "Automated Truck Unloading",
    description: "Advanced robotic systems unload cargo onto a powered flexible conveyor, eliminating manual handling and enhancing operational efficiency and safety.",
    icon: Package,
    videoUrl: "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Step%203%20Automated%20Truck%20Unloading.mp4",
    duration: "0:18"
  }, {
    title: "End-of-Line Handling & Automatic Stacking",
    description: "Items are transferred at the end of the line and automatically stacked for efficient storage and further processing.",
    icon: Warehouse,
    videoUrl: "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Step%204%20End-of-Line%20Handling%20&%20Automatic%20Stacking.mp4",
    duration: "0:10"
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
              return <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                    <div className="group cursor-pointer" onClick={() => setActiveStepIndex(index)}>
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-border shadow-lg group-hover:shadow-xl transition-all duration-300">
                        {/* Video */}
                        <video 
                          className="w-full h-full object-cover"
                          src={step.videoUrl}
                          muted
                          loop
                          preload="metadata"
                          {...(isPlaying && { autoPlay: true })}
                        />
                        
                        {/* Duration overlay */}
                        <div className="absolute bottom-3 left-3 bg-black/50 px-2 py-1 rounded text-xs text-white font-medium">
                          {step.duration}
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