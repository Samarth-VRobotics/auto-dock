import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Code, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import EventsCarousel from "@/components/EventsCarousel";
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
    src: modernRoboticsFacility,
    alt: "Modern robotics facility with advanced automation"
  }, {
    src: universityLabScene,
    alt: "University laboratory scene with robotics equipment"
  }, {
    src: studentPortrait1,
    alt: "Student working on robotics project"
  }, {
    src: studentPortrait2,
    alt: "Mentorship session in progress"
  }];

  // Student portraits slideshow
  const studentPortraits = [{
    src: "/lovable-uploads/b7373469-1778-4c54-af4f-2f6695ad3d78.png",
    alt: "Ribbon cutting ceremony with leadership team"
  }, {
    src: "/lovable-uploads/49fef62f-3ef6-4c23-8ef3-f0e8bdfa7fe7.png",
    alt: "Team group photo at company facility"
  }, {
    src: "/lovable-uploads/136b6fa0-b665-4a14-8d04-6534a80379b0.png",
    alt: "Students and faculty demonstrating robotics project with leadership"
  }];

  // Industry transition slideshow
  const industryImages = [{
    src: "/lovable-uploads/1ce695c8-00a1-4a19-8a83-6a5447c4e299.png",
    alt: "Vegam robot in industrial setting with worker"
  }, {
    src: "/lovable-uploads/2f5b3683-c1f1-4ab8-93da-c3246e6b6f98.png",
    alt: "Team showcasing MAYA 1.0 robot at university exhibition"
  }, {
    src: "/lovable-uploads/cdfeba0e-e1a6-4714-a55d-180e813b74c6.png",
    alt: "Team working in robotics lab with MAYA robot"
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

          {/* Vegam Journey Timeline Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24 items-start w-full max-w-[95vw] mx-auto">
            {/* Timeline Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-primary/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-12">
                Proven History in Manufacturing<br />Transformation
              </h3>
              
              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {/* 2000 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      1
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-bold text-primary mb-1">2000</div>
                      <div className="text-gray-700 font-medium">Foundation with<br />digital factory vision</div>
                    </div>
                  </div>
                  
                  {/* 2007 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      2
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-bold text-primary mb-1">2007</div>
                      <div className="text-gray-700 font-medium">First plant fully<br />digitalized</div>
                    </div>
                  </div>
                  
                  {/* 2013 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      3
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-bold text-primary mb-1">2013</div>
                      <div className="text-gray-700 font-medium"><span className="font-bold">18</span> plants connected<br />in network</div>
                    </div>
                  </div>
                  
                  {/* 2016 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      4
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-bold text-primary mb-1">2016</div>
                      <div className="text-gray-700 font-medium">Scaled to <span className="font-bold">70</span> plants<br />globally</div>
                    </div>
                  </div>
                  
                  {/* 2019 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      5
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-bold text-primary mb-1">2019</div>
                      <div className="text-gray-700 font-medium">Milestone of <span className="font-bold">100+</span><br />plants achieved</div>
                    </div>
                  </div>
                  
                  {/* 2025 */}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      6
                    </div>
                    <div className="pt-2">
                      <div className="text-2xl font-bold text-red-500 mb-1">2025</div>
                      <div className="text-gray-700 font-medium">Projected <span className="font-bold">300+</span><br />plants milestone</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Strong Foundation Section */}
              <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Strong Foundation for Innovation</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><span className="font-bold">230+</span> dedicated R&D professionals in India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>ISO 27001 certified for information security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>ISO 9001 certified for quality management</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Manufacturing Facility Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[600px] lg:h-[700px] w-full group
                          hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out">
              {/* Industry Images Slideshow */}
              {industryImages.map((image, index) => (
                <img 
                  key={index} 
                  src={image.src} 
                  alt={image.alt} 
                  className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out ${
                    index === industrySlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`} 
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                            group-hover:from-black/60 group-hover:to-transparent transition-all duration-300"></div>
              <div className="absolute bottom-6 right-6 z-30">
                <div className="flex space-x-2">
                  {industryImages.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === industrySlide ? 'bg-white' : 'bg-white/50'
                      }`} 
                    />
                  ))}
                </div>
              </div>
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
            <div className="relative rounded-3xl overflow-hidden shadow-xl w-full group
                          hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-out h-full mt-8">
              {/* Industry Images Slideshow */}
              {industryImages.map((image, index) => <img key={index} src={image.src} alt={image.alt} className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out ${index === industrySlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />)}
              {/* Slide indicators only */}
              <div className="absolute bottom-6 right-6 z-30">
                <div className="flex space-x-2">
                  {industryImages.map((_, index) => <div key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === industrySlide ? 'bg-white' : 'bg-white/50'}`} />)}
                </div>
              </div>
            </div>
            
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