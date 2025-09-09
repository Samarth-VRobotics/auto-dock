import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideshowImage {
  src: string;
  alt: string;
  caption?: string;
}

interface AspectRatioSlideshowProps {
  images: SlideshowImage[];
  autoAdvanceInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
  caption?: string;
}

const AspectRatioSlideshow = ({ 
  images, 
  autoAdvanceInterval = 3000, 
  showControls = true,
  showIndicators = true,
  className = "",
  caption = ""
}: AspectRatioSlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    if (autoAdvanceInterval > 0) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % images.length);
      }, autoAdvanceInterval);

      return () => clearInterval(interval);
    }
  }, [images.length, autoAdvanceInterval]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-out ${className}`}>
      {/* Image Container - Uses object-cover to fill space without gaps */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Individual image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 group-hover:to-transparent transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
                       bg-white/20 backdrop-blur-sm hover:bg-white/30 
                       rounded-full p-2 transition-all duration-300 
                       opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 
                       bg-white/20 backdrop-blur-sm hover:bg-white/30 
                       rounded-full p-2 transition-all duration-300 
                       opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}

      {/* Bottom Overlay with Caption and Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
        {caption && (
          <div className="text-white transform group-hover:translate-y-[-4px] transition-transform duration-300 mb-2">
            <p className="text-base font-medium">{caption}</p>
          </div>
        )}
        
        {/* Slide Indicators */}
        {showIndicators && images.length > 1 && (
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AspectRatioSlideshow;