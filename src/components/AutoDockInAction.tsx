import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Truck, Move3D, Package, Warehouse, Brain, ChevronDown } from 'lucide-react';

const AutoDockInAction = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const steps = [
    {
      headline: "Unloading Begins the Moment Trucks Arrive",
      description: "Head AMR drives inside while Tail AMR anchors at staging, conveyor links them, unloading begins instantly.",
      icon: Truck
    },
    {
      headline: "Flexible Conveyors Keep Goods Moving",
      description: "Conveyor adjusts length, angle, and shape to maintain smooth flow without pile-ups.",
      icon: Move3D
    },
    {
      headline: "Smart Palletizing for Mixed Loads",
      description: "Head AMR unloads while Tail AMR organizes goods onto pallets or floor, keeping staging consistent.",
      icon: Package
    },
    {
      headline: "Seamless Flow to Storage or Outbound",
      description: "The system extends into storage or reverses for outbound, enabling continuous bi-directional dock flow.",
      icon: Warehouse
    },
    {
      headline: "Orchestrated by AI for Predictable Throughput",
      description: "Dock AI synchronizes all elements and updates WMS/ERP for visibility and SLA compliance.",
      icon: Brain
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 bg-background min-h-screen flex flex-col">
      <div className="container mx-auto px-6 flex-1 flex flex-col">
        {/* Header - Compact */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            AutoDock in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From truck to storage in one seamless flow — see AutoDock in action.
          </p>
        </div>

        {/* Video Showcase - Compact */}
        <div className="relative mb-8 rounded-xl overflow-hidden bg-muted/20 backdrop-blur-sm border border-border shadow-xl flex-shrink-0">
          <div className="relative aspect-video w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">AutoDock Demo</h3>
                <p className="text-sm text-muted-foreground">Full workflow demonstration</p>
              </div>
            </div>

            <button
              onClick={togglePlay}
              className="absolute bottom-4 left-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/90 transition-all duration-300 border border-border"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-foreground" />
              ) : (
                <Play className="w-4 h-4 text-foreground ml-0.5" />
              )}
            </button>
          </div>
        </div>

        {/* Vertical Timeline - Full Width */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-px bg-border/20"></div>
              
              {/* Timeline Steps */}
              <div className="space-y-16">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative flex items-start group hover:scale-105 transition-transform duration-300 cursor-pointer">
                      {/* Step Icon Circle */}
                      <div className="flex-shrink-0 w-16 h-16 bg-[#f8b5b5] rounded-full flex items-center justify-center z-10 relative group-hover:scale-125 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-foreground" />
                      </div>
                      
                      {/* Step Content - Description appears on hover */}
                      <div className="ml-8 flex-1 flex items-center justify-between group-hover:bg-card/50 group-hover:p-4 group-hover:rounded-lg group-hover:border group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                            {step.headline}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-base group-hover:text-foreground/80 transition-all duration-300">
                            {step.description}
                          </p>
                        </div>
                        
                        {/* Dropdown Arrow Indicator */}
                        <div className="flex-shrink-0 ml-4">
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoDockInAction;