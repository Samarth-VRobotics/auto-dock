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
          <div className="w-full max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line - Clean */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border z-0"></div>
              
              {/* Timeline Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-2">
                {steps.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot - Clean */}
                    <div className="hidden lg:block absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10"></div>
                    
                    {/* Step Card - Minimal */}
                    <div className="relative bg-background/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      {/* Headline */}
                      <h3 className="text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {step.headline}
                      </h3>
                      
                      {/* Hover Tooltip - Above card */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                        <div className="bg-background border border-border rounded-lg shadow-xl p-3 max-w-xs text-center whitespace-nowrap">
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-background"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-3">
                        <div className="w-px h-6 bg-border"></div>
                      </div>
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