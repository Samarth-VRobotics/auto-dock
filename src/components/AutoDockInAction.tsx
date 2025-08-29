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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Hook Line */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            AutoDock in Action
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From truck to storage in one seamless flow — see AutoDock in action.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="relative mb-20 rounded-2xl overflow-hidden bg-muted/20 backdrop-blur-sm border border-border shadow-2xl animate-fade-in">
          <div className="relative aspect-video w-full">
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Play className="w-10 h-10 text-primary ml-1" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">AutoDock Demo Video</h3>
                <p className="text-muted-foreground">Full workflow demonstration</p>
              </div>
            </div>

            {/* Video Controls */}
            <button
              onClick={togglePlay}
              className="absolute bottom-6 left-6 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/90 transition-all duration-300 border border-border"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-foreground" />
              ) : (
                <Play className="w-5 h-5 text-foreground ml-0.5" />
              )}
            </button>

          </div>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30"></div>
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden lg:block absolute top-14 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Step Card */}
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 hover:bg-card/70 transition-all duration-300 cursor-pointer min-h-[120px] flex items-center">
                    {/* Mobile Timeline Dot */}
                    <div className="lg:hidden absolute -left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-3 border-background shadow-sm"></div>
                    
                    {/* Step Number */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    
                    {/* Headline */}
                    <h3 className="text-lg font-poppins font-bold text-foreground leading-tight pt-8 group-hover:text-primary transition-colors">
                      {step.headline}
                    </h3>
                    
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                      <div className="bg-background border border-border rounded-lg shadow-xl p-4 max-w-xs text-center">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-border"></div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px border-4 border-transparent border-t-background"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden ml-2 mt-4 mb-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoDockInAction;