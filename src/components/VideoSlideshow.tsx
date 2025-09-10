import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface VideoItem {
  src: string;
  alt: string;
  caption: string;
}

interface VideoSlideshowProps {
  className?: string;
}

const VideoSlideshow = ({ className = "" }: VideoSlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos: VideoItem[] = [
    {
      src: "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Photo%20album%20-1.mp4",
      alt: "Team collaboration moments - Part 1",
      caption: "Innovation in Action"
    },
    {
      src: "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Photo%20album%20-2.mp4",
      alt: "Team collaboration moments - Part 2", 
      caption: "Building Tomorrow"
    },
    {
      src: "/team-video.mp4",
      alt: "Team video from Microsoft Teams",
      caption: "Team Collaboration"
    },
    {
      src: "https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/Photo%20album%20-4.mp4",
      alt: "Team collaboration moments - Part 4",
      caption: "Future Reality"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % videos.length);
      }, 8000); // 8 seconds per slide
    }
    return () => clearInterval(interval);
  }, [videos.length, isPlaying]);

  // Handle video play/pause based on current slide
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play().catch(() => {
            // Silently handle play errors
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const setVideoRef = useCallback((index: number) => (ref: HTMLVideoElement | null) => {
    videoRefs.current[index] = ref;
  }, []);

  return (
    <div className={`relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl group ${className}`}>
      {/* Video Container */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-black">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <video 
              ref={setVideoRef(index)}
              className="w-full h-full object-cover"
              muted
              playsInline
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 
                   bg-white/20 backdrop-blur-sm hover:bg-white/40 
                   rounded-full p-3 transition-all duration-300 
                   opacity-0 group-hover:opacity-100"
        aria-label="Previous video"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 
                   bg-white/20 backdrop-blur-sm hover:bg-white/40 
                   rounded-full p-3 transition-all duration-300 
                   opacity-0 group-hover:opacity-100"
        aria-label="Next video"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 z-30 
                   bg-black/30 backdrop-blur-sm hover:bg-black/50 
                   rounded-full p-3 transition-all duration-300 
                   opacity-0 group-hover:opacity-100"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Bottom Overlay with Caption and Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
        {/* Caption */}
        <div className="text-white mb-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{videos[currentSlide].caption}</h3>
          <p className="text-sm sm:text-base text-white/90">{videos[currentSlide].alt}</p>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex space-x-3 items-center">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-1 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70 w-4'
              }`}
              aria-label={`Go to video ${index + 1}`}
            >
              {index === currentSlide && isPlaying && (
                <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Loading overlay for videos */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center z-5">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default VideoSlideshow;