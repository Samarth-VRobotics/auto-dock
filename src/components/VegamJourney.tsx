import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import vegamJourneyBg from "@/assets/vegam-journey-bg.jpg";

// Add custom keyframes for the flowing animation
const customStyles = `
  @keyframes flowDown {
    0% {
      top: 0;
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      top: 100%;
      opacity: 0;
    }
  }
`;

const milestones = [
  {
    year: "2000",
    description: "Foundation with digital factory vision"
  },
  {
    year: "2007",
    description: "First plant fully digitalized"
  },
  {
    year: "2013",
    description: "18 plants connected in network"
  },
  {
    year: "2016",
    description: "Scaled to 70 plants globally"
  },
  {
    year: "2019",
    description: "Milestone of 100+ plants achieved"
  },
  {
    year: "2023",
    description: "Foundation for Autonomous factories"
  },
  {
    year: "2025",
    description: "Milestone of 300+ plants achieved"
  },
  {
    year: "2026",
    description: "Projected First Fully Autonomous Plant"
  },
  {
    year: "2030",
    description: "1000 Autonomous Plants"
  }
];

const VegamJourney = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(milestones.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <>
      <style>{customStyles}</style>
      <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={vegamJourneyBg} 
          alt="Smart factory background" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">Vegam Journey</h2>
          <p className="text-base text-muted-foreground">Milestones that shaped us.</p>
        </div>

        {/* Desktop & Mobile Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line with Animation */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-1 bg-red-600/30 rounded-full"></div>
          
          {/* Animated Flow Line */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-1 overflow-hidden rounded-full">
            <div className="w-full h-full bg-gradient-to-b from-red-600 via-red-500 to-transparent opacity-60 animate-pulse"></div>
          </div>
          
          {/* Flowing Dots Animation */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-1">
            <div className="relative w-full h-full">
              <div className="absolute w-2 h-2 bg-red-500 rounded-full -left-0.5 animate-bounce" 
                   style={{
                     animation: 'flowDown 4s ease-in-out infinite, pulse 1s ease-in-out infinite alternate'
                   }}></div>
              <div className="absolute w-1.5 h-1.5 bg-red-400 rounded-full -left-0.25 animate-bounce" 
                   style={{
                     animation: 'flowDown 4s ease-in-out infinite 0.5s, pulse 1s ease-in-out infinite alternate 0.5s'
                   }}></div>
              <div className="absolute w-1 h-1 bg-red-300 rounded-full left-0 animate-bounce" 
                   style={{
                     animation: 'flowDown 4s ease-in-out infinite 1s, pulse 1s ease-in-out infinite alternate 1s'
                   }}></div>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-10">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                ref={el => itemRefs.current[index] = el}
                className={`relative flex items-center transition-all duration-700 transform ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Mobile Layout */}
                <div className="lg:hidden flex items-center w-full">
                  {/* Circular Marker */}
                  <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full border-2 border-background shadow-md flex items-center justify-center relative z-10">
                    <div className="w-1.5 h-1.5 bg-background rounded-full"></div>
                    <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-40"></div>
                  </div>
                  
                   {/* Content */}
                   <div className="ml-6 flex-1">
                     <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                       <CardContent className="p-4">
                         <h3 className="text-lg font-semibold text-foreground mb-1">{milestone.year}</h3>
                         <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                       </CardContent>
                     </Card>
                   </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center w-full">
                  {index % 2 === 0 ? (
                    <>
                       {/* Left Side Content */}
                       <div className="w-1/2 pr-8 text-right">
                         <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                           <CardContent className="p-4">
                             <h3 className="text-lg font-semibold text-foreground mb-1">{milestone.year}</h3>
                             <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                           </CardContent>
                         </Card>
                       </div>
                       
                       {/* Center Marker */}
                       <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full border-2 border-background shadow-md flex items-center justify-center relative z-10">
                         <div className="w-2 h-2 bg-background rounded-full"></div>
                         <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-40"></div>
                       </div>
                       
                       {/* Right Side Spacer */}
                       <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                       {/* Left Side Spacer */}
                       <div className="w-1/2 pr-8"></div>
                       
                       {/* Center Marker */}
                       <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full border-2 border-background shadow-md flex items-center justify-center relative z-10">
                         <div className="w-2 h-2 bg-background rounded-full"></div>
                         <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-40"></div>
                       </div>
                       
                       {/* Right Side Content */}
                       <div className="w-1/2 pl-8">
                         <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                           <CardContent className="p-4">
                             <h3 className="text-lg font-semibold text-foreground mb-1">{milestone.year}</h3>
                             <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                           </CardContent>
                         </Card>
                       </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default VegamJourney;