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
      { url: "/lovable-uploads/318afd9b-1608-4c39-9b68-af9535c69047.png", alt: "Robot demonstration with customer engagement at Vegam expo" },
      { url: "/lovable-uploads/52c835ce-39ec-41bb-a91c-ce18cc6b08be.png", alt: "Interactive presentation with customers and team wall display" },
      { url: "/lovable-uploads/d808f01b-6871-4874-82e6-0c036ace0348.png", alt: "Customer networking session with team presentations" },
      { url: "/lovable-uploads/c65c0c7e-e09d-4819-ae8c-8ac2b721d683.png", alt: "Product showcase with industry professionals and demonstrations" }
    ],
    imageUrl: "/lovable-uploads/318afd9b-1608-4c39-9b68-af9535c69047.png",
    imageAlt: "Vegam Expo showcasing robotics demonstrations"
  },
  {
    id: 2,
    title: "NVIDIA GTC – San Jose, California",
    description: "This year, we had the privilege of presenting at NVIDIA GTC, where we set up a booth in San Jose. Sharing our work on a global stage allowed us to connect with innovators and highlight how our solutions push the boundaries of robotics.",
    images: [
      { url: "/lovable-uploads/49c9f88f-fd22-45f9-a115-f78e0e6ea848.png", alt: "Team at NVIDIA GTC 2025 with #GTC25 sign at convention center" },
      { url: "/lovable-uploads/2991708b-0967-45b6-941f-9198703ebe8e.png", alt: "Team networking at NVIDIA GTC conference reception hall" },
      { url: "/lovable-uploads/00b20230-98af-4b65-9605-650061216508.png", alt: "Team collaboration and networking at Vegam booth with industry partners" },
      { url: "/lovable-uploads/f191ab51-7c99-400f-8dca-10df86689ff4.png", alt: "Engaging with attendees and industry experts at NVIDIA startup section" }
    ],
    imageUrl: "/lovable-uploads/49c9f88f-fd22-45f9-a115-f78e0e6ea848.png",
    imageAlt: "NVIDIA GTC conference presentation"
  },
  {
    id: 3,
    title: "Industry Visits & Engagements",
    description: "Hard hats, shop floors, and the hum of industry from chemical labs to steel and aluminum plants, we've been there. Each visit is a reminder that robotics isn't just about technology; it's about people, processes, and solving challenges where they matter most.",
    images: [
      { url: "/lovable-uploads/7b36ed01-b0ce-4ab8-9964-584fb2c7ba36.png", alt: "Team visit to industrial facility with safety helmets" },
      { url: "/lovable-uploads/d8d1c90e-5203-4491-a968-7073761f1348.png", alt: "Team at ROSCon robotics conference with CREATE and India Con banners" },
      { url: "/lovable-uploads/6695258f-f234-49ae-add5-c781183aa065.png", alt: "Vegam team showcasing robotics solutions at industry trade show" }
    ],
    imageUrl: "/lovable-uploads/7b36ed01-b0ce-4ab8-9964-584fb2c7ba36.png",
    imageAlt: "Industrial facility visit"
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
                        (event.id === 1 || event.id === 2 || event.id === 3) ? (
                          // Image collage for events with multiple images
                          <div className={`grid gap-1 h-full ${
                            event.id === 3 ? 'grid-cols-2 grid-rows-2' : 'grid-cols-2 grid-rows-2'
                          }`}>
                            {event.images.map((image, imgIndex) => (
                              <div 
                                key={imgIndex}
                                className={`relative overflow-hidden ${
                                  event.id === 3 ? (
                                    imgIndex === 0 ? 'col-span-2 row-span-1' :
                                    imgIndex === 1 ? 'col-span-1 row-span-1' :
                                    'col-span-1 row-span-1'
                                  ) : (
                                    imgIndex === 0 ? 'col-span-1 row-span-1' :
                                    imgIndex === 1 ? 'col-span-1 row-span-1' :
                                    imgIndex === 2 ? 'col-span-1 row-span-1' :
                                    'col-span-1 row-span-1'
                                  )
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
        <CarouselPrevious className="left-4 w-16 h-16 bg-white/20 hover:bg-white/30 border-white/30" />
        <CarouselNext className="right-4 w-16 h-16 bg-white/20 hover:bg-white/30 border-white/30" />
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