import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Truck, Move3D, Package, Warehouse, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
const AutoDockInAction = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Handle carousel slide changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newCurrent = api.selectedScrollSnap();
      setCurrent(newCurrent);
      
      // Pause all videos except the current one
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === newCurrent) {
            video.currentTime = 0;
            video.play().catch(() => {}); // Handle autoplay restrictions
          } else {
            video.pause();
          }
        }
      });
    };

    api.on("select", onSelect);
    onSelect(); // Set initial state

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-play first video on mount
  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.volume = 0.1;
      firstVideo.play().catch(() => {}); // Handle autoplay restrictions
    }
  }, []);

  const setVideoRef = useCallback((index: number) => (ref: HTMLVideoElement | null) => {
    videoRefs.current[index] = ref;
    if (ref) {
      ref.volume = 0.1; // Set low volume when ref is assigned
    }
  }, []);
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
          <Carousel 
            setApi={setApi}
            className="w-full max-w-6xl mx-auto" 
            opts={{
              align: "center",
              loop: true,
              containScroll: "trimSnaps"
            }}
          >
            <CarouselContent className="ml-0">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isCurrentSlide = current === index;
                return (
                  <CarouselItem key={index} className="basis-4/5 md:basis-3/4 lg:basis-4/5 pl-4">
                    <div className="group cursor-pointer h-full">
                      {/* Video Container */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-border shadow-xl group-hover:shadow-2xl transition-all duration-300 mb-6">
                        {/* Video */}
                        <video 
                          ref={setVideoRef(index)}
                          className="w-full h-full object-cover"
                          src={step.videoUrl}
                          controls
                          controlsList="nodownload"
                          preload="metadata"
                          poster=""
                          muted
                          loop
                        />
                        
                        {/* Duration overlay */}
                        <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full text-sm text-white font-medium backdrop-blur-sm">
                          {step.duration}
                        </div>
                        
                        {/* Step Number */}
                        <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                          Step {index + 1}
                        </div>

                        {/* Playing Indicator */}
                        {isCurrentSlide && (
                          <div className="absolute bottom-3 left-3 flex items-center gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-150"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-300"></div>
                          </div>
                        )}
                      </div>
                      
                      {/* Step Info */}
                      <div className="text-center px-4">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <CarouselPrevious className="flex -left-8 md:-left-12 w-12 h-12 bg-background/90 backdrop-blur-sm border-border hover:bg-background shadow-lg" />
            <CarouselNext className="flex -right-8 md:-right-12 w-12 h-12 bg-background/90 backdrop-blur-sm border-border hover:bg-background shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default AutoDockInAction;