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
      title: "Unloading Begins the Moment Trucks Arrive",
      description: "Head AMR drives inside while Tail AMR anchors at staging, conveyor links them, unloading begins instantly."
    },
    {
      title: "Flexible Conveyors Keep Goods Moving", 
      description: "Conveyor adjusts length, angle, and shape to maintain smooth flow without pile-ups."
    },
    {
      title: "Smart Palletizing for Mixed Loads",
      description: "Head AMR unloads while Tail AMR organizes goods onto pallets or floor, keeping staging consistent."
    },
    {
      title: "Seamless Flow to Storage or Outbound",
      description: "The system extends into storage or reverses for outbound, enabling continuous bi-directional dock flow."
    },
    {
      title: "Orchestrated by AI for Predictable Throughput",
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

        {/* Step Breakdown - Accordion Style */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {steps.map((step, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="scroll-reveal border border-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <AccordionTrigger className="flex items-center gap-4 px-6 py-4 hover:no-underline group">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-xl font-poppins font-bold text-foreground text-left flex-1 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AutoDockInAction;