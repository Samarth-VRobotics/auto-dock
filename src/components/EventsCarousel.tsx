import React, { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const eventsData = [
  {
    id: 1,
    title: "Vegam Customer's Engagement Event",
    description: "We hosted an in-house expo, setting up our automation and robotics R&D demonstrations for leading clients and industry professionals. It was a space for open conversations, networking, and sharing the possibilities of robotics.",
    images: [
      { url: "/lovable-uploads/e7b947de-0159-404a-a66b-45f5874df568.png", alt: "Robot demonstration with customer engagement" },
      { url: "/lovable-uploads/00ffd763-89d4-4678-90d5-f35cca980b83.png", alt: "Interactive presentation with customers" },
      { url: "/lovable-uploads/794b5998-0409-47d1-b376-dda8eb84b884.png", alt: "Product showcase with industry professionals" },
      { url: "/lovable-uploads/ff000336-c83d-4376-a7c9-8480301b793b.png", alt: "Ceremonial event with team and customers" },
      { url: "/lovable-uploads/351602e8-b3e2-4c08-82b9-da40410d555f.png", alt: "Customer networking and engagement session" }
    ],
    imageUrl: "/lovable-uploads/e7b947de-0159-404a-a66b-45f5874df568.png",
    imageAlt: "Vegam Expo showcasing robotics demonstrations"
  },
  {
    id: 2,
    title: "NVIDIA GTC – San Jose, California",
    description: "This year, we had the privilege of presenting at NVIDIA GTC, where we set up a booth in San Jose. Sharing our work on a global stage allowed us to connect with innovators and highlight how our solutions push the boundaries of robotics.",
    images: [
      { url: "/lovable-uploads/7ac5175e-c253-4a13-ba01-29e303052493.png", alt: "NVIDIA GTC booth presentation with attendees" },
      { url: "/lovable-uploads/ecf241d1-7b89-40d3-b8ff-1993263c8f79.png", alt: "Team engagement at NVIDIA GTC conference" },
      { url: "/lovable-uploads/2f4eb91c-0584-44e0-85f3-fa040b217476.png", alt: "Networking at NVIDIA GTC startup section" },
      { url: "/lovable-uploads/5fd9a1e2-f41c-4f50-8fd4-0e5707c4282a.png", alt: "Industry discussions at NVIDIA GTC booth" }
    ],
    imageUrl: "/lovable-uploads/7ac5175e-c253-4a13-ba01-29e303052493.png",
    imageAlt: "NVIDIA GTC conference presentation"
  },
  {
    id: 3,
    title: "Industry Visits & Engagements",
    description: "As a team, we make it a point to step into real-world shop floors and plants. These visits — often with helmets on and sleeves rolled up — deepen our understanding of industrial needs and ground our solutions in practical reality.",
    images: [
      { url: "/lovable-uploads/7b36ed01-b0ce-4ab8-9964-584fb2c7ba36.png", alt: "Team visit to industrial facility with safety helmets" },
      { url: "/lovable-uploads/7e619b3d-0110-4751-9e58-75c59c40d7e4.png", alt: "Team meeting with industry professionals at BASF facility" }
    ],
    imageUrl: "/lovable-uploads/7b36ed01-b0ce-4ab8-9964-584fb2c7ba36.png",
    imageAlt: "Industrial facility visit"
  },
  {
    id: 4,
    title: "KLE Technological University Expo",
    description: "We also returned to our roots, setting up demonstrations at KLETU. Presenting our solutions on campus was more than just showcasing technology — it was about inspiring students, giving back, and keeping the cycle of learning alive.",
    imageUrl: "/lovable-uploads/f6a9af8e-0b56-400b-ae59-09e92f7b93a6.png",
    imageAlt: "Vegam team at KLE Technological University Expo showcasing robotics solutions"
  }
];

const EventsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [imageSlides, setImageSlides] = useState<{ [key: number]: number }>({});

  const scrollToSlide = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);

  // Auto-rotation effect
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      const nextIndex = (current + 1) % eventsData.length;
      scrollToSlide(nextIndex);
    }, 12000); // Increased to 12 seconds rotation

    return () => clearInterval(interval);
  }, [api, current, scrollToSlide]);

  // Auto-advance image slideshow for events with multiple images
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    eventsData.forEach((event, eventIndex) => {
      if (event.images && event.images.length > 1) {
        const interval = setInterval(() => {
          setImageSlides(prev => ({
            ...prev,
            [eventIndex]: ((prev[eventIndex] || 0) + 1) % event.images!.length
          }));
        }, 4000); // Change image every 4 seconds
        intervals.push(interval);
      }
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  // Update current index when slide changes
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {eventsData.map((event, index) => (
            <CarouselItem key={event.id}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0 items-center min-h-[500px]">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-[500px] overflow-hidden group">
                      {event.images && event.images.length > 1 ? (
                        event.id === 2 ? (
                          // Image collage for NVIDIA GTC only
                          <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                            {event.images.map((image, imgIndex) => (
                              <div 
                                key={imgIndex}
                                className={`relative overflow-hidden ${
                                  imgIndex === 0 ? 'col-span-1 row-span-1' :
                                  imgIndex === 1 ? 'col-span-1 row-span-1' :
                                  imgIndex === 2 ? 'col-span-1 row-span-1' :
                                  'col-span-1 row-span-1'
                                }`}
                              >
                                <img 
                                  src={image.url} 
                                  alt={image.alt}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          // Image slideshow for other events with multiple images
                          <div className="relative h-full">
                            {event.images.map((image, imgIndex) => (
                              <img 
                                key={imgIndex}
                                src={image.url} 
                                alt={image.alt}
                                className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out ${
                                  imgIndex === (imageSlides[index] || 0) 
                                    ? 'opacity-100 z-10' 
                                    : 'opacity-0 z-0'
                                }`}
                              />
                            ))}
                            {/* Image indicators */}
                            <div className="absolute bottom-4 right-4 flex space-x-1 z-20">
                              {event.images.map((_, imgIndex) => (
                                <div 
                                  key={imgIndex}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    imgIndex === (imageSlides[index] || 0) ? 'bg-white' : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )
                      ) : (
                        // Single image
                        <img 
                          src={event.imageUrl} 
                          alt={event.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                                    group-hover:from-black/60 group-hover:to-transparent transition-all duration-300"></div>
                      <div className="absolute bottom-6 left-6 text-white transform 
                                    group-hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                            {event.title}
                          </h3>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-6"></div>
                        </div>
                        
                        <p className="text-foreground/80 leading-relaxed text-lg">
                          {event.description}
                        </p>
                        
                        <div className="flex items-center text-sm text-primary font-medium pt-4">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                          Event {index + 1} of {eventsData.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows */}
        <CarouselPrevious className="left-4 bg-white/90 hover:bg-white shadow-lg border-primary/20" />
        <CarouselNext className="right-4 bg-white/90 hover:bg-white shadow-lg border-primary/20" />
      </Carousel>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {eventsData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary scale-125"
                : "bg-primary/30 hover:bg-primary/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel;