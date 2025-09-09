import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    src: "/lovable-uploads/be5327f8-cabf-4af1-8479-1c505ef76db1.png",
    alt: "Team visit to BASF Shanghai Coatings Co., Ltd.",
    title: "BASF Shanghai Visit",
    description: "Industrial collaboration"
  },
  {
    src: "/lovable-uploads/a17db9f5-0af1-464d-b5fc-093a1f4cd328.png",
    alt: "Team at industrial facility with safety gear",
    title: "Plant Operations",
    description: "Safety first approach"
  },
  {
    src: "/lovable-uploads/127f84ed-6feb-4a52-8312-09490f83dda7.png",
    alt: "Team meeting in modern office with colorful wall art",
    title: "Strategy Session",
    description: "Creative collaboration"
  },
  {
    src: "/lovable-uploads/5a563870-000a-4169-ba13-0bbccd419c59.png",
    alt: "Team observing warehouse operations and automated systems",
    title: "Automation Study",
    description: "Warehouse innovation"
  },
  {
    src: "/lovable-uploads/f8bf2e89-5b97-41d1-a7f7-c96c9eae7c6c.png",
    alt: "Team collaborative session in conference room",
    title: "Team Collaboration",
    description: "Knowledge sharing"
  },
  {
    src: "/lovable-uploads/9734a9ad-6047-47eb-922d-60db9a4177ce.png",
    alt: "Team at BASF India Limited facility",
    title: "BASF India Visit",
    description: "Global partnerships"
  }
];

// Variant 1: Masonry Layout - Different heights based on content
export const MasonryGallery = () => (
  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto">
    {galleryImages.map((image, index) => (
      <div key={index} className="break-inside-avoid mb-6">
        <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h4 className="text-lg font-bold mb-1">{image.title}</h4>
            <p className="text-sm text-white/80">{image.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Variant 2: Mixed Grid with Varied Sizes
export const MixedGridGallery = () => (
  <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
    {/* Large hero image */}
    <div className="col-span-12 md:col-span-8 lg:col-span-6">
      <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
        <AspectRatio ratio={16 / 10}>
          <img 
            src={galleryImages[0].src} 
            alt={galleryImages[0].alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h4 className="text-xl font-bold mb-2">{galleryImages[0].title}</h4>
          <p className="text-base text-white/80">{galleryImages[0].description}</p>
        </div>
      </div>
    </div>
    
    {/* Two medium squares */}
    <div className="col-span-6 md:col-span-4 lg:col-span-3">
      <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
        <AspectRatio ratio={1}>
          <img 
            src={galleryImages[1].src} 
            alt={galleryImages[1].alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h4 className="text-sm font-bold mb-1">{galleryImages[1].title}</h4>
          <p className="text-xs text-white/80">{galleryImages[1].description}</p>
        </div>
      </div>
    </div>
    
    <div className="col-span-6 md:col-span-4 lg:col-span-3">
      <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
        <AspectRatio ratio={1}>
          <img 
            src={galleryImages[2].src} 
            alt={galleryImages[2].alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h4 className="text-sm font-bold mb-1">{galleryImages[2].title}</h4>
          <p className="text-xs text-white/80">{galleryImages[2].description}</p>
        </div>
      </div>
    </div>

    {/* Three smaller landscape images */}
    {galleryImages.slice(3).map((image, index) => (
      <div key={index + 3} className="col-span-12 md:col-span-4">
        <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
          <AspectRatio ratio={4 / 3}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h4 className="text-lg font-bold mb-1">{image.title}</h4>
            <p className="text-sm text-white/80">{image.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Variant 3: Horizontal Scroll Carousel
export const CarouselGallery = () => (
  <div className="max-w-7xl mx-auto">
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-6" style={{ width: 'max-content' }}>
        {galleryImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 md:w-96">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg font-bold mb-2">{image.title}</h4>
                <p className="text-sm text-white/80">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="text-center mt-4">
      <p className="text-foreground/60 text-sm">← Scroll horizontally to see more →</p>
    </div>
  </div>
);

// Variant 4: Aspect Ratio Aware Grid
export const AspectRatioGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {galleryImages.map((image, index) => {
      // Vary aspect ratios for visual interest
      const aspectRatios = [16/10, 4/3, 3/4, 1, 16/9, 5/4];
      const ratio = aspectRatios[index % aspectRatios.length];
      
      return (
        <div key={index} className={index % 3 === 0 ? "md:col-span-2" : "md:col-span-1"}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
            <AspectRatio ratio={ratio}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h4 className="text-lg font-bold mb-1">{image.title}</h4>
              <p className="text-sm text-white/80">{image.description}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

// Variant 5: Hero + Grid Combination
export const HeroGridGallery = () => (
  <div className="max-w-7xl mx-auto space-y-8">
    {/* Hero Image */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
      <AspectRatio ratio={21 / 9}>
        <img 
          src={galleryImages[0].src} 
          alt={galleryImages[0].alt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </AspectRatio>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-8 left-8 text-white">
        <h4 className="text-2xl md:text-3xl font-bold mb-3">{galleryImages[0].title}</h4>
        <p className="text-lg text-white/90">{galleryImages[0].description}</p>
      </div>
    </div>
    
    {/* Grid of remaining images */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {galleryImages.slice(1).map((image, index) => (
        <div key={index + 1} className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
          <AspectRatio ratio={1}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h4 className="text-xs font-bold">{image.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Variant 6: Justified Layout (Like Flickr/Google Photos)
export const JustifiedGallery = () => (
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-wrap gap-2">
      {galleryImages.map((image, index) => {
        // Simulate different aspect ratios for justified layout
        const widths = [320, 280, 360, 300, 340, 290];
        const width = widths[index % widths.length];
        const height = 240; // Fixed height for justified look
        
        return (
          <div key={index} className="flex-grow" style={{ flexBasis: width }}>
            <div className="relative rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 h-60">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-sm font-bold mb-1">{image.title}</h4>
                <p className="text-xs text-white/80">{image.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);