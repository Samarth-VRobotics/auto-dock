import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

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
      description: "Head AMR drives inside while Tail AMR anchors at staging, conveyor links them, unloading begins instantly."
    },
    {
      headline: "Flexible Conveyors Keep Goods Moving",
      description: "Conveyor adjusts length, angle, and shape to maintain smooth flow without pile-ups."
    },
    {
      headline: "Smart Palletizing for Mixed Loads",
      description: "Head AMR unloads while Tail AMR organizes goods onto pallets or floor, keeping staging consistent."
    },
    {
      headline: "Seamless Flow to Storage or Outbound",
      description: "The system extends into storage or reverses for outbound, enabling continuous bi-directional dock flow."
    },
    {
      headline: "Orchestrated by AI for Predictable Throughput",
      description: "Dock AI synchronizes all elements and updates WMS/ERP for visibility and SLA compliance."
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

        {/* Timeline - Clean and Professional */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className="relative">
              {/* Timeline Connection Line - Subtle */}
              <div className="hidden lg:block absolute top-16 left-8 right-8 h-px bg-border/40 z-0"></div>
              
              {/* Timeline Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot - Clean Connection Point */}
                    <div className="hidden lg:block absolute top-14 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary/60 rounded-full border-2 border-background z-10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"></div>
                    
                    {/* Step Card - Enhanced */}
                    <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:bg-card/90 transition-all duration-300 cursor-pointer min-h-[100px] flex items-center justify-center text-center group-hover:-translate-y-1">
                      {/* Headline - Centered and Bold */}
                      <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                        {step.headline}
                      </h3>
                      
                      {/* Enhanced Hover Tooltip - Floating Above */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 group-hover:translate-y-1">
                        <div className="bg-background/95 backdrop-blur-sm border border-border/30 rounded-xl shadow-2xl p-5 max-w-sm min-w-[280px]">
                          <p className="text-sm text-muted-foreground leading-relaxed text-center">
                            {step.description}
                          </p>
                          {/* Enhanced Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                            <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-border/30"></div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-px w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-background/95"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Connection Indicator */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-4">
                        <div className="w-px h-8 bg-border/40"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Step Numbers - Subtle indicators at bottom */}
              <div className="hidden lg:flex justify-center mt-8 space-x-6">
                {steps.map((_, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-xs font-medium text-muted-foreground/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {index < steps.length - 1 && (
                      <div className="ml-6 w-16 h-px bg-border/20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoDockInAction;