import { 
  MasonryGallery, 
  MixedGridGallery, 
  CarouselGallery, 
  AspectRatioGrid, 
  HeroGridGallery,
  JustifiedGallery 
} from "@/components/GalleryVariants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GalleryVariantsDemo = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 space-y-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery Layout Variants</h1>
          <p className="text-foreground/60 text-lg">Choose the best layout for your leadership images</p>
        </div>

        {/* Variant 1: Masonry Layout */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">1. Masonry Layout</CardTitle>
            <p className="text-foreground/60">Pinterest-style layout that preserves natural image proportions. Images display at their natural aspect ratios with varied heights.</p>
          </CardHeader>
          <CardContent>
            <MasonryGallery />
          </CardContent>
        </Card>

        {/* Variant 2: Mixed Grid */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2. Mixed Grid Layout</CardTitle>
            <p className="text-foreground/60">Editorial magazine style with one hero image and supporting smaller images. Great for highlighting key moments.</p>
          </CardHeader>
          <CardContent>
            <MixedGridGallery />
          </CardContent>
        </Card>

        {/* Variant 3: Horizontal Carousel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">3. Horizontal Scroll Carousel</CardTitle>
            <p className="text-foreground/60">Mobile-friendly horizontal scroll. All images maintain consistent sizing with smooth scrolling experience.</p>
          </CardHeader>
          <CardContent>
            <CarouselGallery />
          </CardContent>
        </Card>

        {/* Variant 4: Aspect Ratio Aware Grid */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">4. Aspect Ratio Aware Grid</CardTitle>
            <p className="text-foreground/60">Intelligent grid that varies image sizes based on content while maintaining visual balance and readability.</p>
          </CardHeader>
          <CardContent>
            <AspectRatioGrid />
          </CardContent>
        </Card>

        {/* Variant 5: Hero + Grid Combination */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">5. Hero + Grid Combination</CardTitle>
            <p className="text-foreground/60">Cinematic approach with one large hero image followed by a clean grid of thumbnails. Perfect for storytelling.</p>
          </CardHeader>
          <CardContent>
            <HeroGridGallery />
          </CardContent>
        </Card>

        {/* Variant 6: Justified Layout */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">6. Justified Layout</CardTitle>
            <p className="text-foreground/60">Google Photos style justified rows. Images maintain consistent heights while varying widths for optimal space usage.</p>
          </CardHeader>
          <CardContent>
            <JustifiedGallery />
          </CardContent>
        </Card>

        <div className="text-center pt-8">
          <p className="text-foreground/70 text-lg">
            Each variant handles different aspect ratios differently. Choose based on your content mix and design preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryVariantsDemo;