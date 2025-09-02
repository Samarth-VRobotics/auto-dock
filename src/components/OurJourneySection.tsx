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

          {/* Our Journey in Robotics - Modern Card Structure */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-background via-muted/30 to-background border border-primary/10 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Header Section with Icon */}
                <div className="p-8 pb-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Always Learning, Always Building</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        At Vegam Robotics, our story is deeply rooted in KLE Technological University (KLETU), the institution that shaped not just our skills, but our vision. Under the mentorship of Prof. Arun Giriyapur and leadership of Dr. Ashok Shetter, we evolved from curious students to industry innovators.
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground font-medium">Innovation</span>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics Section */}
                <div className="px-8 pb-6">
                  <div className="bg-muted/50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Journey Milestones</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Before/After Comparison */}
                      <div className="text-center">
                        <div className="mb-3">
                          <div className="text-xs text-muted-foreground mb-1">University Projects</div>
                          <div className="h-16 bg-muted rounded-lg flex items-end justify-center p-2">
                            <div className="w-8 bg-gradient-to-t from-primary/60 to-primary h-12 rounded-sm flex items-end justify-center">
                              <span className="text-xs text-white font-medium mb-1">15+</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-foreground">Research Projects</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="mb-3">
                          <div className="text-xs text-primary font-medium mb-1">Industry Impact</div>
                          <div className="h-16 bg-muted rounded-lg flex items-end justify-center p-2">
                            <div className="w-8 bg-gradient-to-t from-secondary/60 to-secondary h-14 rounded-sm flex items-end justify-center">
                              <span className="text-xs text-white font-medium mb-1">300+</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-foreground">Plants Powered</div>
                      </div>

                      <div className="text-center">
                        <div className="mb-3">
                          <div className="text-xs text-muted-foreground mb-1">Innovation ROI</div>
                          <div className="h-16 bg-muted rounded-lg flex items-end justify-center p-2">
                            <div className="w-8 bg-gradient-to-t from-accent/60 to-accent h-10 rounded-sm flex items-end justify-center">
                              <span className="text-xs text-white font-medium mb-1">24x</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-foreground">Efficiency Gain</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scaling Section */}
                <div className="px-8 pb-8">
                  <div className="border-t border-border/50 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
                        <Play className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Scaling Innovation Without Limits</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          From late-night university projects to powering 300+ industrial plants. Our mentors pushed us beyond textbooks, while industry leaders like CEO Subramanyam Kasibhat encouraged us to transform academic passion into scalable solutions.
                        </p>
                        
                        {/* Technology Stack Indicators */}
                        <div className="flex items-center gap-8">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-xs text-muted-foreground ml-2">Multi-Platform</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-1 bg-primary/30 rounded-full"></div>
                            <span className="text-xs text-muted-foreground">Scalable Architecture</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full border-2 border-primary/30 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-xs text-muted-foreground">Real-time Processing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
          

          {/* Timeline Visualization */}
          
        </div>
      </div>
    </section>;
};
export default OurJourneySection;