import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, ChevronDown } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      headline: "Unloading Begins Instantly",
      subtext: "Head AMR enters, Tail AMR anchors, conveyor links for immediate flow.",
      description: "Head AMR drives inside while Tail AMR anchors at staging, conveyor links them, unloading begins instantly."
    },
    {
      headline: "Adaptive Conveyors",
      subtext: "Adjust length, angle, shape to prevent pile-ups.",
      description: "Conveyor adjusts length, angle, and shape to maintain smooth flow without pile-ups."
    },
    {
      headline: "Smart Palletizing",
      subtext: "AMRs unload and organize mixed loads consistently.",
      description: "Head AMR unloads while Tail AMR organizes goods onto pallets or floor, keeping staging consistent."
    },
    {
      headline: "Seamless Flow",
      subtext: "Bi-directional movement between staging, storage, and outbound.",
      description: "The system extends into storage or reverses for outbound, enabling continuous bi-directional dock flow."
    },
    {
      headline: "AI Orchestration",
      subtext: "Synchronizes all systems, updates WMS/ERP in real time.",
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

        {/* Visual Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent"></div>
            
            <Accordion type="single" collapsible className="space-y-6">
              {steps.map((step, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-none"
                >
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-3 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm z-10"></div>
                    
                    <AccordionTrigger className="flex items-start gap-8 pl-16 pr-6 py-4 hover:no-underline group bg-card/30 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
                      <div className="flex-1 text-left">
                        {/* Headline */}
                        <h3 className="text-xl font-poppins font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {step.headline}
                        </h3>
                        {/* Subtext */}
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {step.subtext}
                        </p>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="pl-16 pr-6 pb-4">
                      <div className="pt-2">
                        <p className="text-base text-muted-foreground leading-relaxed bg-muted/30 rounded-lg p-4 border-l-4 border-primary/30">
                          {step.description}
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoDockInAction;