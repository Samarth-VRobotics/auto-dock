import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Code, Eye } from "lucide-react";
import { useState } from "react";
import universityLabScene from "@/assets/university-lab-scene.jpg";
import modernRoboticsFacility from "@/assets/modern-robotics-facility.jpg";
import studentPortrait1 from "@/assets/student-portrait-1.jpg";
import studentPortrait2 from "@/assets/student-portrait-2.jpg";
import studentPortrait3 from "@/assets/student-portrait-3.jpg";
import studentPortrait4 from "@/assets/student-portrait-4.jpg";
const OurJourneySection = () => {
  const [activeProject, setActiveProject] = useState(0);
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
  return <section className="py-8 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - More integrated style */}
          <div className="text-center mb-8">
            
            
          </div>

          {/* Our Journey in Robotics - Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Our Journey in Robotics</h3>
          </div>

          {/* Row 1: First Paragraph + Image (Text Left, Image Right) */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/10">
              <p className="text-foreground/80 leading-relaxed">
                At Vegam Robotics, our story is deeply rooted in KLE Technological University (KLETU), the institution that shaped not just our skills, but our vision. We take immense pride in calling it our alma mater, a place that offered us not only knowledge but also a thriving ecosystem of mentorship, opportunities, and innovation.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
              <img src={universityLabScene} alt="University lab scene with students working on robotics" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Our Roots at KLETU</p>
              </div>
            </div>
          </div>

          {/* Row 2: Second Image + Paragraph (Image Left, Text Right) */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
              <img src={studentPortrait1} alt="Student working on robotics project" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Leadership & Vision</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/10">
              <p className="text-foreground/80 leading-relaxed">
                Under the leadership of Dr. Ashok Shetter, the university fostered a culture that celebrates research-driven excellence and bold ideas. Today, the Department of Automation and Robotics, led by Dr. Vinayak Kulkarni, continues to carry the vision forward, preparing the next generation of robotics engineers.
              </p>
            </div>
          </div>

          {/* Row 3: Third Paragraph + Image (Text Left, Image Right) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/10">
              <p className="text-foreground/80 leading-relaxed">
                Among our greatest guiding lights, Prof. Arun Giriyapur, former HOD, has been far more than a teacher. A lifelong mentor, he encouraged our wildest ideas, anchored us with wisdom, and inspired us to keep pushing the boundaries of robotics. The faith he placed in us during our early years still drives our journey.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
              <img src={modernRoboticsFacility} alt="Modern robotics facility with advanced automation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Mentorship & Growth</p>
              </div>
            </div>
          </div>

          {/* From University to Industry */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">            
            {/* Industry Visual */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img src={modernRoboticsFacility} alt="Modern robotics facility with advanced automation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Industry Impact</h4>
                <p className="text-sm">300+ plants powered by our solutions</p>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/10">
              <h4 className="text-3xl font-bold mb-6 text-primary">From University to Industry</h4>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Our journey began in university labs with late-night projects — humanoids, mobile robots, automated systems. Each build showed us how engineering solves real problems.
                </p>
                <p>
                  Mentors like Prof. Giriyapur pushed us beyond textbooks, while CEO Subramanyam Kasibhat's vision for robotics in manufacturing encouraged us to enter industry.
                </p>
                <p>
                  University passion projects evolved into scalable solutions. KLETU's values — rigor, practicality, impact — continue guiding how we design and innovate.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default OurJourneySection;