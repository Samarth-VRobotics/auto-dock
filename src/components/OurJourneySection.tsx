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
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground/90">
              Our Journey Into <span className="text-primary">Robotics</span>
            </h3>
            <p className="text-sm text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              From curious students to innovation pioneers — every project shaped our vision
            </p>
          </div>

          {/* Our Journey in Robotics Introduction */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Text Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/10">
              <h3 className="text-3xl font-bold mb-6 text-primary">Our Journey in Robotics</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  At Vegam Robotics, our story is rooted in KLE Technological University (KLETU) — our alma mater that shaped us with knowledge, mentorship, and vision.
                </p>
                <p>KLETU has long been a space where innovation thrives. Under the leadership of Dr. Ashok Shetter, the university has built a culture that inspires innovation and celebrates research-driven excellence. Today, the Department of Automation and Robotics, led by Dr. Vinayak Kulkarni, continues to carry that vision forward, shaping the next generation of engineers.</p>
                <p>
                  Prof. Arun Giriyapur, former HOD, has been our lifelong mentor — guiding us with wisdom and inspiring us to push robotics boundaries.
                </p>
              </div>
            </div>
            
            {/* University Lab Portrait Gallery */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              {/* Portrait Frame 1 */}
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg border-3 border-white/20 bg-white/10 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img src={studentPortrait1} alt="Student working on robotics project" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-medium">Late Night Innovation</p>
                </div>
              </div>

              {/* Portrait Frame 2 */}
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg border-3 border-white/20 bg-white/10 backdrop-blur-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img src={studentPortrait2} alt="Team collaboration in university lab" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-medium">Team Spirit</p>
                </div>
              </div>

              {/* Portrait Frame 3 */}
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg border-3 border-white/20 bg-white/10 backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img src={studentPortrait3} alt="Student coding robotics software" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-medium">Code & Create</p>
                </div>
              </div>

              {/* Portrait Frame 4 */}
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg border-3 border-white/20 bg-white/10 backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img src={studentPortrait4} alt="Student testing robot prototype" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-medium">Testing Dreams</p>
                </div>
              </div>
            </div>
          </div>

          {/* From Academia to Industry */}
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

          {/* Project Showcase */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-12">Projects That Shaped Us</h3>
            
            {/* Project Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {projects.map((project, index) => <Button key={index} variant={activeProject === index ? "default" : "outline"} onClick={() => setActiveProject(index)} className="transition-all duration-300">
                  {project.title}
                </Button>)}
            </div>

            {/* Active Project Display */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-primary/10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video/Media Section */}
                <div className="bg-slate-900 relative">
                  <div className="aspect-video flex items-center justify-center">
                    <iframe src={projects[activeProject].videoUrl} title={projects[activeProject].title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {projects[activeProject].category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    {projects[activeProject].title}
                  </h4>
                  <p className="text-lg font-medium text-foreground/70 mb-6">
                    {projects[activeProject].description}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-8">
                    {projects[activeProject].details}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h5 className="font-semibold mb-3 text-foreground">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].technologies.map((tech, index) => <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>)}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {projects[activeProject].achievements.map((achievement, index) => <li key={index} className="flex items-center text-foreground/80">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {achievement}
                        </li>)}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Visualization */}
          
        </div>
      </div>
    </section>;
};
export default OurJourneySection;