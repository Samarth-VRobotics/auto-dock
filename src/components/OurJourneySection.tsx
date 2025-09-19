import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Code, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import EventsCarousel from "@/components/EventsCarousel";
import AspectRatioSlideshow from "@/components/AspectRatioSlideshow";
import universityLabScene from "@/assets/university-lab-scene.jpg";
import modernRoboticsFacility from "@/assets/modern-robotics-facility.jpg";
import studentPortrait1 from "@/assets/student-portrait-1.jpg";
import studentPortrait2 from "@/assets/student-portrait-2.jpg";
import studentPortrait3 from "@/assets/student-portrait-3.jpg";
import studentPortrait4 from "@/assets/student-portrait-4.jpg";
const OurJourneySection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [studentSlide, setStudentSlide] = useState(0);
  const [industrySlide, setIndustrySlide] = useState(0);

  // Slideshow images for mentorship section
  const slideshowImages = [{
    src: "/lovable-uploads/9f2fbca6-7ae6-4c78-a913-93a2d6c5cf7d.png",
    alt: "Team photo with Prof. Arun Giriyapur and colleagues at BASF facility"
  }];

  // Student portraits slideshow
  const studentPortraits = [{
    src: "/lovable-uploads/b7373469-1778-4c54-af4f-2f6695ad3d78.png",
    alt: "Ribbon cutting ceremony with leadership team"
  }, {
    src: "/lovable-uploads/49fef62f-3ef6-4c23-8ef3-f0e8bdfa7fe7.png",
    alt: "Team group photo at company facility"
  }];

  // Industry transition slideshow
  const industryImages = [{
    src: "/lovable-uploads/1ccc1e73-ce2e-4ee2-87bd-36e04a13d87a.png",
    alt: "Vegam robot assisting worker in industrial warehouse setting"
  }, {
    src: "/lovable-uploads/4cac744e-506c-4379-9351-b2a26753b864.png",
    alt: "Team members presenting MAYA 1.0 humanoid robot at university exhibition",
    cropTop: true // Show only top half of this image
  }, {
    src: "/lovable-uploads/d1138e05-882d-4ae5-bdf5-affd1d1597cb.png",
    alt: "Students collaborating in robotics laboratory with MAYA robot and equipment"
  }];
  const projects = [{
    title: "Humanoid Robots",
    category: "Advanced Robotics",
    description: "Balancing dynamics, actuation, and stability control",
    details: "Our journey began with humanoid robots, where we learned the fundamentals of bipedal locomotion, dynamic balance, and real-time control systems. This project taught us the importance of precision in mechanical design and the complexity of human-like movement.",
    technologies: ["ROS", "Python", "Control Theory", "Kinematics"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Placeholder
    achievements: ["Stable walking gait", "Dynamic balance control", "Real-time sensor integration"]
  }, {
    title: "Autonomous Mobile Robots",
    category: "Navigation & AI",
    description: "Navigation, stair-climbing, obstacle negotiation",
    details: "We developed AMRs capable of autonomous navigation in complex environments. From SLAM algorithms to stair-climbing mechanisms, these robots pushed us to think beyond traditional wheeled systems.",
    technologies: ["SLAM", "Computer Vision", "Path Planning", "Sensors"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Placeholder
    achievements: ["Autonomous navigation", "Stair climbing capability", "Obstacle avoidance"]
  }, {
    title: "Parallel Robots",
    category: "Precision Engineering",
    description: "High-precision mechanics, control theory in practice",
    details: "Working with parallel mechanisms taught us about precision engineering and the mathematical beauty of Stewart platforms. These projects refined our understanding of forward and inverse kinematics.",
    technologies: ["MATLAB", "Precision Mechanics", "Control Systems", "CAD"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Placeholder
    achievements: ["Sub-millimeter precision", "6-DOF control", "Real-time feedback"]
  }, {
    title: "Industrial Inspection Systems",
    category: "Computer Vision",
    description: "Computer vision, AI, reliability at scale",
    details: "Our latest venture into industrial automation combines computer vision with AI to create robust inspection systems. This project bridges the gap between academic research and industry applications.",
    technologies: ["OpenCV", "Machine Learning", "Industrial Cameras", "Quality Control"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Placeholder
    achievements: ["99.9% detection accuracy", "Real-time processing", "Industry deployment"]
  }];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideshowImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  // Auto-advance student slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentSlide(prev => (prev + 1) % studentPortraits.length);
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval);
  }, [studentPortraits.length]);

  // Auto-advance industry slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndustrySlide(prev => (prev + 1) % industryImages.length);
    }, 3500); // Change image every 3.5 seconds

    return () => clearInterval(interval);
  }, [industryImages.length]);
  return <section className="py-16 bg-background relative overflow-hidden min-h-screen">
      
      <div className="w-full px-2 sm:px-4 lg:px-6 relative">
        <div className="w-full mx-auto">
          {/* Section Header - More integrated style */}
          <div className="text-center mb-8">
            
            
          </div>

          {/* Our Journey in Robotics - Section Header */}
          <div className="text-center mb-20">
            
            
          </div>

          {/* Row 1: First Image + Paragraph (Mobile: Image top, Text bottom) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24 items-center w-full max-w-[95vw] mx-auto">
            {/* Mobile: Image first, Desktop: Text first */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[500px] w-full group
                          hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-out order-1 lg:order-2">
              <img src="/src/assets/kle-tech-university-new.jpg" alt="KLE Technological University campus with main building and beautiful architecture" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                            group-hover:from-black/60 group-hover:to-transparent transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white transform 
                            group-hover:translate-y-[-4px] transition-transform duration-300">
                <p className="text-base font-medium">Our Roots at KLETU</p>
              </div>
              <div className="absolute bottom-4 right-4 text-white/70 text-xs">
                <p><span className="text-sm">©</span> Property of KLETU</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-xl border border-primary/10 
                          hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 
                          transition-all duration-500 ease-out group w-full order-2 lg:order-1">
              <p className="text-foreground/80 leading-loose text-xl lg:text-2xl group-hover:text-foreground transition-colors duration-300">
                At Vegam Robotics, our story is deeply rooted in KLE Technological University (KLETU), the institution that shaped not just our skills, but our vision. We take immense pride in calling it our alma mater, a place that offered us not only knowledge but also a thriving ecosystem of mentorship, opportunities, and innovation.
              </p>
            </div>
          </div>

          {/* Row 2: Second Image + Paragraph (Mobile: Image top, Text bottom) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24 items-center w-full max-w-[95vw] mx-auto">
            <AspectRatioSlideshow
              images={studentPortraits}
              autoAdvanceInterval={2500}
              className="h-80 lg:h-[500px] w-full order-1"
              caption="Leadership & Vision"
            />
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-xl border border-primary/10 
                          hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 
                          transition-all duration-500 ease-out group w-full order-2">
              <p className="text-foreground/80 leading-loose text-xl lg:text-2xl group-hover:text-foreground transition-colors duration-300">
                Under the leadership of Dr. Ashok Shetter, the university fostered a culture that celebrates research-driven excellence and bold ideas. Today, the Department of Automation and Robotics, led by Dr. Vinayak Kulkarni, continues to carry the vision forward, preparing the next generation of robotics engineers.
              </p>
            </div>
          </div>

          {/* Row 3: Third Image + Paragraph (Mobile: Image top, Text bottom) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24 items-center w-full max-w-[95vw] mx-auto">
            <AspectRatioSlideshow
              images={slideshowImages}
              autoAdvanceInterval={3000}
              className="h-80 lg:h-[500px] w-full order-1 lg:order-2"
              caption="Mentorship & Growth"
            />
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-xl border border-primary/10 
                          hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 
                          transition-all duration-500 ease-out group w-full order-2 lg:order-1">
              <p className="text-foreground/80 leading-loose text-xl lg:text-2xl group-hover:text-foreground transition-colors duration-300">
                Among our greatest guiding lights, Prof. Arun Giriyapur, former HOD, has been far more than a teacher. A lifelong mentor, he encouraged our wildest ideas, anchored us with wisdom, and inspired us to keep pushing the boundaries of robotics. The faith he placed in us during our early years still drives our journey.
              </p>
            </div>
          </div>

          {/* From University to Industry - Section Header */}
          <div className="text-center mb-16">
            <h4 className="text-5xl font-bold text-primary mb-6 hover:text-primary/80 transition-colors duration-300">From University to Industry</h4>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          {/* From University to Industry */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24 items-center w-full max-w-[95vw] mx-auto">            
            {/* Industry Visual */}
            <AspectRatioSlideshow
              images={industryImages}
              autoAdvanceInterval={3500}
              className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full mt-8"
              caption=""
              showIndicators={true}
            />
            
            {/* Text Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-xl border border-primary/10
                          hover:shadow-2xl hover:scale-[1.02] hover:bg-white/90 
                          transition-all duration-500 ease-out group w-full">
              <div className="space-y-8 text-foreground/80 leading-loose text-xl lg:text-2xl group-hover:text-foreground transition-colors duration-300">
                <p>It all started in the university labs, where late nights were spent building humanoids, mobile robots, automated systems, and vision-based inspection platforms. Each project was more than a technical challenge. It was proof that engineering could solve real problems.</p>
                
                <p>This bridge from academia to industry was shaped by mentors like Prof. Arun Giriyapur, who pushed us to think beyond textbooks, and by the vision of our CEO Subramanyam Kasibhat, whose belief in robotics as a driver of manufacturing transformation inspired us to take our ideas into the real world.</p>
                
                <p>From humble passion projects to industry-ready solutions, our journey has been shaped by the values we carried from KLE Technological University. Rigor, practicality, and impact remain the compass for everything we design, build, and innovate at Vegam Robotics.</p>
                
                
              </div>
            </div>
          </div>

          {/* Events & Experiences Section */}
          <div className="text-center mb-20 w-full max-w-[95vw] mx-auto">
            <h4 className="text-6xl font-bold text-primary mb-8 hover:text-primary/80 transition-colors duration-300">Events & Experiences</h4>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-12"></div>
            
          </div>

          {/* Events Carousel */}
          <div className="relative w-full max-w-[98vw] mx-auto">
            <EventsCarousel />
          </div>
          
        </div>
      </div>
    </section>;
};
export default OurJourneySection;