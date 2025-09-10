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
    description: "Foundation with digital factory vision",
    isFuture: false
  },
  {
    year: "2007",
    description: "First plant fully digitalized",
    isFuture: false
  },
  {
    year: "2013",
    description: "18 plants connected in network",
    isFuture: false
  },
  {
    year: "2016",
    description: "Scaled to 70 plants globally",
    isFuture: false
  },
  {
    year: "2019",
    description: "Milestone of 100+ plants achieved",
    isFuture: false
  },
  {
    year: "2023",
    description: "Foundation for Autonomous factories",
    isFuture: false
  },
  {
    year: "2025",
    description: "Milestone of 300+ plants achieved",
    isFuture: false
  },
  {
    year: "2026",
    description: "Projected First Fully Autonomous Plant",
    isFuture: true
  },
  {
    year: "2030",
    description: "1000 Autonomous Plants",
    isFuture: true
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
      <section className="py-6 sm:py-8 lg:py-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={vegamJourneyBg} 
          alt="Smart factory background" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">Vegam Journey</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Milestones that shaped us.</p>
        </div>

        {/* Desktop & Mobile Timeline */}
        <div className="relative max-w-2xl lg:max-w-3xl mx-auto">
          {/* Center Line with Animation - Responsive */}
          <div className="absolute left-1/2 -translate-x-0.5 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 sm:w-1 bg-red-600/30 rounded-full"></div>
          
          {/* Animated Flow Line - Responsive */}
          <div className="absolute left-1/2 -translate-x-0.5 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 sm:w-1 overflow-hidden rounded-full">
            <div className="w-full h-full bg-gradient-to-b from-red-600 via-red-500 to-transparent opacity-60 animate-pulse"></div>
          </div>
          
          {/* Flowing Dots Animation - Responsive */}
          <div className="absolute left-1/2 -translate-x-0.5 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 sm:w-1">
            <div className="relative w-full h-full">
              <div className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full left-1/2 -translate-x-1/2 animate-bounce" 
                   style={{
                     animation: 'flowDown 4s ease-in-out infinite, pulse 1s ease-in-out infinite alternate'
                   }}></div>
              <div className="absolute w-1 sm:w-1.5 h-1 sm:h-1.5 bg-red-400 rounded-full left-1/2 -translate-x-1/2 animate-bounce" 
                   style={{
                     animation: 'flowDown 4s ease-in-out infinite 0.5s, pulse 1s ease-in-out infinite alternate 0.5s'
                   }}></div>
              <div className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-red-300 rounded-full left-1/2 -translate-x-1/2 animate-bounce" 
                   style={{
                     animation: 'flowDown 4s ease-in-out infinite 1s, pulse 1s ease-in-out infinite alternate 1s'
                   }}></div>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5">
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
                {/* Mobile & Tablet Layout */}
                <div className="lg:hidden flex items-center w-full">
                  {/* Circular Marker - Responsive sizes with future styling */}
                  <div className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-background shadow-md flex items-center justify-center relative z-10 ${
                    milestone.isFuture 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                      : 'bg-red-600'
                  }`}>
                    <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-background rounded-full"></div>
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-40 ${
                      milestone.isFuture ? 'bg-blue-500' : 'bg-red-600'
                    }`}></div>
                  </div>
                  
                  {/* Content - Responsive spacing and sizing with future styling */}
                  <div className="ml-3 sm:ml-4 flex-1">
                    <Card className={`border shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group active:scale-95 ${
                      milestone.isFuture 
                        ? 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:from-blue-100/90 hover:to-purple-100/90 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40' 
                        : 'bg-card border-border hover:bg-card/80'
                    }`}>
                      <CardContent className="p-2 sm:p-2.5 relative overflow-hidden">
                        {milestone.isFuture && (
                          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-bl-full"></div>
                        )}
                        <h3 className={`text-sm sm:text-sm font-semibold mb-0.5 transition-colors ${
                          milestone.isFuture 
                            ? 'text-blue-700 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200' 
                            : 'text-foreground group-hover:text-red-600'
                        }`}>{milestone.year}</h3>
                        <p className={`text-xs leading-relaxed transition-colors ${
                          milestone.isFuture 
                            ? 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300' 
                            : 'text-muted-foreground group-hover:text-foreground'
                        }`}>{milestone.description}</p>
                        {milestone.isFuture && (
                          <div className="flex items-center mt-1 text-xs text-blue-500 dark:text-blue-400">
                            <span className="w-1 h-1 bg-blue-500 rounded-full mr-1 animate-pulse"></span>
                            Future Goal
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center w-full">
                  {index % 2 === 0 ? (
                    <>
                      {/* Left Side Content */}
                      <div className="w-1/2 pr-4 xl:pr-6 text-right">
                        <Card className={`border shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group ${
                          milestone.isFuture 
                            ? 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:from-blue-100/90 hover:to-purple-100/90 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40' 
                            : 'bg-card border-border hover:bg-card/80'
                        }`}>
                          <CardContent className="p-3 xl:p-4 relative overflow-hidden">
                            {milestone.isFuture && (
                              <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-bl-full"></div>
                            )}
                            <h3 className={`text-base xl:text-lg font-semibold mb-0.5 transition-colors ${
                              milestone.isFuture 
                                ? 'text-blue-700 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200' 
                                : 'text-foreground group-hover:text-red-600'
                            }`}>{milestone.year}</h3>
                            <p className={`text-xs xl:text-sm leading-relaxed transition-colors ${
                              milestone.isFuture 
                                ? 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300' 
                                : 'text-muted-foreground group-hover:text-foreground'
                            }`}>{milestone.description}</p>
                            {milestone.isFuture && (
                              <div className="flex items-center justify-end mt-2 text-xs text-blue-500 dark:text-blue-400">
                                Future Goal
                                <span className="w-1 h-1 bg-blue-500 rounded-full ml-1 animate-pulse"></span>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Center Marker */}
                      <div className={`flex-shrink-0 w-6 h-6 xl:w-8 xl:h-8 rounded-full border-2 border-background shadow-md flex items-center justify-center relative z-10 ${
                        milestone.isFuture 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                          : 'bg-red-600'
                      }`}>
                        <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 bg-background rounded-full"></div>
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-40 ${
                          milestone.isFuture ? 'bg-blue-500' : 'bg-red-600'
                        }`}></div>
                      </div>
                      
                      {/* Right Side Spacer */}
                      <div className="w-1/2 pl-4 xl:pl-6"></div>
                    </>
                  ) : (
                    <>
                      {/* Left Side Spacer */}
                      <div className="w-1/2 pr-4 xl:pr-6"></div>
                      
                      {/* Center Marker */}
                      <div className={`flex-shrink-0 w-6 h-6 xl:w-8 xl:h-8 rounded-full border-2 border-background shadow-md flex items-center justify-center relative z-10 ${
                        milestone.isFuture 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                          : 'bg-red-600'
                      }`}>
                        <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 bg-background rounded-full"></div>
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-40 ${
                          milestone.isFuture ? 'bg-blue-500' : 'bg-red-600'
                        }`}></div>
                      </div>
                      
                      {/* Right Side Content */}
                      <div className="w-1/2 pl-4 xl:pl-6">
                        <Card className={`border shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group ${
                          milestone.isFuture 
                            ? 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:from-blue-100/90 hover:to-purple-100/90 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40' 
                            : 'bg-card border-border hover:bg-card/80'
                        }`}>
                          <CardContent className="p-3 xl:p-4 relative overflow-hidden">
                            {milestone.isFuture && (
                              <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-bl-full"></div>
                            )}
                            <h3 className={`text-base xl:text-lg font-semibold mb-0.5 transition-colors ${
                              milestone.isFuture 
                                ? 'text-blue-700 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200' 
                                : 'text-foreground group-hover:text-red-600'
                            }`}>{milestone.year}</h3>
                            <p className={`text-xs xl:text-sm leading-relaxed transition-colors ${
                              milestone.isFuture 
                                ? 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300' 
                                : 'text-muted-foreground group-hover:text-foreground'
                            }`}>{milestone.description}</p>
                            {milestone.isFuture && (
                              <div className="flex items-center mt-2 text-xs text-blue-500 dark:text-blue-400">
                                <span className="w-1 h-1 bg-blue-500 rounded-full mr-1 animate-pulse"></span>
                                Future Goal
                              </div>
                            )}
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